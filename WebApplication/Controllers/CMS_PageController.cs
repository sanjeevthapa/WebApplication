using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication.Controllers
{
    public class CMS_PageController : Controller
    {
        public ActionResult GetPage(int id)    // Actionmethod:: Index
        {
            var minHeight = 300;
            var assetid = 11;
            var contentid = 22;
            var blockid = 33;
            var userDefinedHtml = "<h1>Header</h1><p>test</p>";


            var content = "<div class='edit-asset'"
                            + " assettype='html'"
                            + " assetid='" + assetid + "'"
                            + " blockid='" + blockid + "'"
                            + " contentid='" + contentid + "'>"
                                + "<div contenteditable='true' class='edit-asset-container' style='height:100%;width:100%;min-height:" + minHeight + "'"
                                    + " assettype='html'"
                                    + " assetid='" + assetid + "'"
                                    + " blockid='" + blockid + "'"
                                    + " contentid='" + contentid + "'>"
                                    + (userDefinedHtml.Length > 0 ? userDefinedHtml : "&nbsp;")
                                + "</div>"
                         + "</div>";


            var templatedContent = @"
                        <html>
                        <head>
	                        <title>test page</title>
	                        <meta charset=""utf-8"">
                            <script src=""http://code.jquery.com/jquery-1.8.3.min.js""></script>
                          <style>
                            .mytable { width: 100%; height: 400px }
                            .mytable tr td:nth-child(1) { width: 20% }
                            .mytable tr td:nth-child(2) { width: 60% }
                            .mytable tr td:nth-child(3) { width: 20% }
                            .mytable tr:nth-child(1) { height: 50px}
                            .mytable tr:nth-child(2) { height: 300px}
                            .mytable tr:nth-child(3) { height: 50px}
                            .edit-asset:hover { outline: 1px dotted black; }
                        </style>"
                         + string.Format(@"<link rel=""stylesheet"" type=""text/css"" href=""{0}"">", System.Web.VirtualPathUtility.ToAbsolute("~/Content/CMSPage.css")) +
                        @"</head>
                        <body>
	                        <h1>
		                        my templatepage
	                        </h1>
                             <table class=""mytable"">
                               <tr><td></td><td></td><td></td></tr>
                               <tr><td></td><td>" + content + @"</td><td></td></tr>
                               <tr><td></td><td></td><td></td></tr>
                           </table>
                        </body>
                        </html>";


            return new ContentResult()
            {
                Content = templatedContent,
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
