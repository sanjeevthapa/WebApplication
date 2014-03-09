using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()    // Actionmethod:: Index
        {
            ViewBag.Message = "Modify this template to jump-start your ASP.NET MVC application.";

            ViewBag.ViewID = "x" + Guid.NewGuid().ToString("N");
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
