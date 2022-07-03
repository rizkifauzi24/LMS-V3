///*Login Admin*/
//$("#login").submit(function (e) {
//    e.preventDefault();
//    let login = new Object();

//    login.Email = $("#Email").val();
//    login.Password = $("#Password").val();
//    console.log(login);
//    $.ajax({
//        url: "../Login/Auth",
//        type: "POST",
//        data: login,
//    }).done((result) => {
//        console.log(result);
//        switch (result.status) {
//            case 200:
//                window.location.replace("/Admin")
//                Swal.fire({
//                    icon: 'Success',
//                    title: 'Success',
//                    text: 'Loggin',
//                })
//                break;
//            case 404:
//                Swal.fire({
//                    icon: 'error',
//                    title: 'Oops...',
//                    text: 'Email Inccorect',
//                })
//                break;
//            case 400:
//                Swal.fire({
//                    icon: 'error',
//                    title: 'Oops...',
//                    text: 'Password Inccorect',
//                })
//                break;
//            default:
//                console.log(result);
//                Swal.fire({
//                    icon: 'error',
//                    title: 'Oops...',
//                    text: 'Wrong Email or Password',
//                })
//        }

//    }).fail((error) => {

//        console.log(error);
//    })

//})

///*Register Admin*/
//$("#FormRegister").submit(function (e) {
//    e.preventDefault();
//    var obj = new Object(); //sesuaikan sendiri nama objectnya dan beserta isinya
//    //ini ngambil value dari tiap inputan di form nya
//    obj.firstName = $("#FirstName").val();
//    obj.lastName = $("#LastName").val();
//    obj.gender = $("#Gender").val();
//    obj.birthdate = $("#BirthDate").val();
//    obj.phone = $("#Phone").val();
//    obj.email = $("#Email").val();
//    obj.password = $("#Password").val();
//    console.log(obj);
//    //isi dari object kalian buat sesuai dengan bentuk object yang akan di post
//    $.ajax({
//        url: "../Register/Register",
//        type: "POST",
//        /*        contentType: "application/json",*/
//        data: obj, //jika terkena 415 unsupported media type (tambahkan headertype Json & JSON.Stringify(obj);)
//    }).done((result) => {
//        window.location.replace("/Login")
//        Swal.fire({
//            icon: 'success',
//            title: 'Success',
//        })
//    }).fail((error) => {
//        //alert pemberitahuan jika gagal
//        /*alert("Data Not Inserted");*/
//        console.log(error)
//    })
//})

///*Course Admin*/
//$(document).ready(function () {
//    $('#DataTable_User').DataTable({
//        language: {
//            paginate: {
//                next: '<i class="fas fa-angle-right">',
//                previous: '<i class="fas fa-angle-left">'
//            }
//        },
//        dom: 'lBfrtip',
//        buttons: [
//            //'copy', 'csv', 'excel', 'pdf', 'print'
//            /*'copy', 'csv', 'excel', 'pdf', 'print'*/
//            {
//                extend: 'pdf', title: 'Data Master User',
//                className: 'btn btn-sm btn-danger glyphicon glyphicon-file',
//                text: '<i class="far fa-file-pdf"></i>',
//                titleAttr: 'PDF',
//                exportOptions: {
//                    columns: [0, 1, 2, 3, 4, 5]
//                }
//            },
//            {
//                extend: 'excel', title: 'Data Master User',
//                className: 'btn btn-sm btn-success  glyphicon glyphicon-list-alt',
//                text: '<i class="fas fa-file-excel"></i>',
//                titleAttr: 'Excel',
//                exportOptions: {
//                    columns: [0, 1, 2, 3, 4, 5]
//                }
//            },
//            {
//                extend: 'csv', title: 'Data Master User',
//                className: 'btn btn-sm btn-success  glyphicon glyphicon-save-file',
//                text: '<i class="fas fa-file-csv"></i>',
//                titleAttr: 'CSV',
//                exportOptions: {
//                    columns: [0, 1, 2, 3, 4, 5]
//                }
//            },
//            {
//                extend: 'copy', title: 'Data Master User',
//                className: 'btn btn-sm btn-warning  glyphicon glyphicon-duplicate',
//                text: '<i class="far fa-copy"></i>',
//                titleAttr: 'COPY',
//                exportOptions: {
//                    columns: [0, 1, 2, 3, 4, 5]
//                }
//            },
//            {
//                extend: 'print', title: 'Data Master User',
//                className: 'btn btn-sm btn-dark  glyphicon glyphicon-print',
//                text: '<i class="fas fa-print"></i>',
//                titleAttr: 'PRINT',
//                exportOptions: {
//                    columns: [0, 1, 2, 3, 4, 5]
//                }
//            }
//        ],
//        initComplete: function () {
//            var btns = $('.dt-button');
//            //btns.addClass('btn btn-primary btn-sm');
//            btns.removeClass('dt-button');
//        },
//        "ajax": {
//            "url": "https://localhost:44306/API/User/GetAll",
//            "dataType": "json",
//            //"dataSrc" : ""
//            "dataSrc": function (json) {
//                return json.filter(function (item) {
//                    return item.isDelete == 0;
//                });
//            },
//        },
//        "columns": [
//            {
//                "data": null, "sortable": false,
//                render: function (data, type, row, meta) {
//                    return meta.row + meta.settings._iDisplayStart + 1;
//                }
//            },
//            {
//                "data": "firstName",
//                "render": function (data, type, row) {
//                    return data + ' ' + row['lastName'];
//                }
//            },
//            {
//                "data": "gender"
//            },
//            {
//                "data": "birthdate",
//                "render": function (data) {
//                    var date = new Date(data);
//                    var month = date.getMonth() + 1;
//                    return date.getDate() + "/" + (month.length > 1 ? month : "0" + month) + "/" + date.getFullYear();
//                    //    //return date;
//                }
//            },
//            {
//                "data": "phone",
//                render: function (data) {
//                    var telp = data;
//                    var result = telp.substring(1);
//                    return `<span>+62${result}</span>`;
//                }
//            },
//            {
//                "data": "email"
//            },
//            {
//                "data": "userId",
//                render: function (data, type, row, meta) {
//                    return `<button type="button" class="btn btn-success btn-sm" onclick="getDataCustomer('${data}')" data-toggle="modal" data-target="#updateData">
//                              <i class="fas fa-edit"></i>
//                            </button>
//                            <button type="button" class="btn btn-danger btn-sm" onclick="deleteDataCustomer('${data}')" data-toggle="modal">
//                              <i class="fas fa-trash-alt"></i>
//                            </button>`
//                }
//            }
//        ]

//    });

//})

////Insert Customer
//$("#FormAddCustomer").submit(function (e) {
//    e.preventDefault();
//    var obj = new Object(); //sesuaikan sendiri nama objectnya dan beserta isinya
//    //ini ngambil value dari tiap inputan di form nya
//    obj.firstName = $("#FirstName").val();
//    obj.lastName = $("#LastName").val();
//    obj.gender = $("#Gender").val();
//    obj.birthdate = $("#BirthDate").val();
//    obj.phone = $("#Phone").val();
//    obj.email = $("#Email").val();
//    obj.password = $("#Password").val();
//    console.log(obj);
//    //isi dari object kalian buat sesuai dengan bentuk object yang akan di post
//    $.ajax({
//        url: "../Register/Register",
//        type: "POST",
//        /*        contentType: "application/json",*/
//        data: obj, //jika terkena 415 unsupported media type (tambahkan headertype Json & JSON.Stringify(obj);)
//    }).done((result) => {
//        switch (result.status) {
//            case 200:
//                $('#addData').modal('hide');
//                $('#DataTable_User').DataTable().ajax.reload();
//                Swal.fire({
//                    icon: 'success',
//                    title: 'Success',
//                })
//                document.getElementById("FormAddCustomer").reset();
//                $("#FormAddCustomer").attr("class", "needs-validation");
//                break;
//            case 400:
//                Swal.fire({
//                    icon: 'error',
//                    title: 'Oops...',
//                    text: 'E-mail already used',
//                })

//                console.log(result);
//                break;
//            case 404:
//                Swal.fire({
//                    icon: 'error',
//                    title: 'Oops...',
//                    text: 'Phone already used',
//                })

//                console.log(result);
//                break;
//        }
//    }).fail((error) => {
//        //alert pemberitahuan jika gagal
//        /*alert("Data Not Inserted");*/
//        console.log(error)
//    })
//})


////Update Customer
//function getDataCustomer(id) {
//    $.ajax({
//        url: "https://localhost:44306/API/User/" + id

//    }).done((res) => {
//        //let item = res.find(item => item.userId === data);
//        console.log(res);

//        $("#userId2").attr("value", res.userId);
//        $("#FirstName2").attr("value", res.firstName);
//        $("#LastName2").attr("value", res.lastName);
//        //$("#BirthDate2").attr("value", res.birthdate);
//        document.getElementById("BirthDate2").value = moment(res.birthdate).format("yyyy-MM-DD");
//        if (res.gender === 0) {
//            //$("#male").attr("selected", "selected");
//            $("#Gender2").val(0);
//        }
//        if (res.gender === 1) {
//            //$("#female").attr("selected", "selected");
//            $("#Gender2").val(1);
//        }
//        $("#Phone2").attr("value", res.phone);
//        $("#Email2").attr("value", res.email);
//    })
//}

//$('#updateData').on('hidden.bs.modal', function () {
//    $(this).find('form').trigger('reset');
//})

//$('#FormUpdateCustomer').submit(function (e) {
//    e.preventDefault();

//    let obj = new Object(); //sesuaikan sendiri nama objectnya dan beserta isinya
//    //ini ngambil value dari tiap inputan di form nya
//    obj.UserId = parseInt($("#userId2").val());
//    obj.firstName = $("#FirstName2").val();
//    obj.lastName = $("#LastName2").val();
//    obj.Gender = parseInt($("#Gender2").val());
//    obj.Birthdate = $("#BirthDate2").val();
//    obj.Phone = $("#Phone2").val();
//    obj.Email = $("#Email2").val();
    
    
//    console.log(obj);
//    //isi dari object kalian buat sesuai dengan bentuk object yang akan di post
//    $.ajax({
//        url: "https://localhost:44306/API/User",
//        type: "PUT",
//        contentType: 'application/json',
//        data: JSON.stringify(obj), //jika terkena 415 unsupported media type (tambahkan headertype Json & JSON.Stringify();)
//    }).done((result) => {
//        //buat alert pemberitahuan jika success

//        $('#updateData').modal('hide');
//        console.log(result);
//        $('#DataTable_User').DataTable().ajax.reload();
//        Swal.fire({
//            icon: 'success',
//            title: 'Data has been updated',
//        })
//        //$('#FormUpdateCustomer').attr("class", "needs-validation");
//    }).fail((error) => {
//        //alert pemberitahuan jika gagal
//        alert('Data not updated');
//        console.log(error)
//    })
//})

//function deleteDataCustomer(id) {
//    Swal.fire({
//        title: 'Are you sure?',
//        text: "You won't be able to revert this!",
//        icon: 'warning',
//        showCancelButton: true,
//        confirmButtonColor: '#3085d6',
//        cancelButtonColor: '#d33',
//        confirmButtonText: 'Yes, delete it!'
//    }).then((result) => {
//        if (result.isConfirmed) {
//            Swal.fire(
//                'Deleted!',
//                'Your file has been deleted.',
//                'success'
//            )
//            if (result) {
//                $.ajax({
//                    url: "https://localhost:44306/API/User/" + id

//                }).done((res) => {
//                    //let item = res.find(item => item.userId === data);
//                    console.log(res);

//                    let obj = new Object(); //sesuaikan sendiri nama objectnya dan beserta isinya
//                    //ini ngambil value dari tiap inputan di form nya
//                    obj.UserId = res.userId;
//                    obj.isDelete = true;
//                    console.log(obj);
//                    //isi dari object kalian buat sesuai dengan bentuk object yang akan di post
//                    $.ajax({
//                        url: "https://localhost:44306/API/User",
//                        type: "PUT",
//                        contentType: 'application/json',
//                        data: JSON.stringify(obj), //jika terkena 415 unsupported media type (tambahkan headertype Json & JSON.Stringify();)
//                    }).done((result) => {
//                        //buat alert pemberitahuan jika success

//                        $('#updateData').modal('hide');
//                        console.log(result);
//                        $('#DataTable_User').DataTable().ajax.reload();
//                        //Swal.fire({
//                        //    icon: 'success',
//                        //    title: 'Data has been updated',
//                        //})
//                    }).fail((error) => {
//                        //alert pemberitahuan jika gagal
//                        alert('Data not updated');
//                        console.log(error)
//                    })
//                })
//            }
//        }
//    })
//}




