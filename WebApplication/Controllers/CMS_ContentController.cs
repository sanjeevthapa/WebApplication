using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication.Controllers
{
    public class CMS_ContentController : Controller
    {



        public ContentResult UpdateHtml()    // Actionmethod:: Index
        {
            var test = "test2";
            return new ContentResult()
            {
                Content = "",
                ContentType = "text/html"
            };
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
