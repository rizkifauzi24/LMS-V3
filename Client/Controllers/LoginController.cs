using API.Models;
using API.ViewModel;
using Client.Base;
using Client.Repositories.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Client.Controllers
{
    public class LoginController : BaseController<Account, LoginRepository, string>
    {
        private readonly LoginRepository repository;
        public LoginController(LoginRepository repository) : base(repository)
        {
            this.repository = repository;
        }
        [HttpPost]
        public async Task<JsonResult> Auth(LoginVM loginVM)
        {

            var result = await repository.Auth(loginVM);
            var token = result.Token;

            if (token == null)
            {
                return Json(result);
            }

            HttpContext.Session.SetString("JWToken", result.Token.ToString());
            return Json(result);
        }

      
        public IActionResult Index()
        {
            if (HttpContext.Session.GetString("JWToken") != null)
            {
                return Redirect("/Admin");
            }
            return View();
        }

        [HttpGet("Logout/")]
        public async Task<IActionResult> Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index", "Login");

        }
    }
}
