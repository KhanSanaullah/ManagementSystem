using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace SystematicSolutions.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
            "~/Scripts/jquery.min.js",
            "~/Scripts/Poper/umd/popper.min.js",
             "~/Scripts/Bootstrap/js/bootstrap.min.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/App").Include(
              "~/Scripts/Js/app.min.js",
               "~/Scripts/Js/app.init.js",
                "~/Scripts/Js/app-style-switcher.js"
              ));

            bundles.Add(new ScriptBundle("~/bundles/Scrollbar").Include(
              "~/Scripts/Perfect-Scrollbar/perfect-scrollbar.jquery.min.js",
               "~/Scripts/sparkline/sparkline.js"
             ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
            "~/Content/css/style.min.css"
            ));
        }
    }
}