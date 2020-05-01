using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SystematicSolutions.Areas.Administration.Controllers
{
    public class StudentController : Controller
    {
        // GET: Administration/Student
        public ActionResult Manage()
        {
            return View();
        }
    }
}