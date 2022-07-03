using API.Models;
using Client.Base;
using Client.Repositories.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Client.Controllers
{
    public class UserController : BaseController<User, UserRepository, int>
    {
        private readonly UserRepository repository;
        public UserController(UserRepository repository) : base(repository)
        {
            this.repository = repository;
        }
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public async Task<JsonResult> GetRegister()
        {
            var result = await repository.GetAll();
            return Json(result);
        }
    }
}
