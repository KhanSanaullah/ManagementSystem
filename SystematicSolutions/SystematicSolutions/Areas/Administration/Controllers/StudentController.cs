using SS_BAL;
using SS_Interface;
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
            List <BAL_Class> ClassList = new BAL_Class().GetClassData();

            return View(ClassList);
        }
    }
}