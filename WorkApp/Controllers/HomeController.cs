using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WorkApp.Models;

namespace WorkApp.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult SaveRequest(string subject, string description, string user)
        {
            var request = new RequestModel() { Description = description, Subject = subject, User = user };
            RequestModel.Requests.Add(request);
            return Json(true);
        }

        [HttpPost]
        public ActionResult GetRequests()
        {
            return Json(RequestModel.Requests);
        }
    }
}