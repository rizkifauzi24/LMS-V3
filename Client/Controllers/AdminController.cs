using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Client.Controllers
{
    //[Authorize]
    public class AdminController : Controller
    {
        
        public IActionResult Index()
        {
            return View();
        }
      
        public IActionResult TopicData()
        {
            return View();
        }
        
        public IActionResult CourseData()
        {
            return View();
        }
        public IActionResult SectionData()
        {
            return View();
        }
        public IActionResult TransactionData()
        {
            return View();
        }
        public IActionResult UserData()
        {
            return View();
        }
    }
}
