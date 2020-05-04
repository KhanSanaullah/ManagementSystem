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
            ).WithLastModifiedToken());

            bundles.Add(new ScriptBundle("~/bundles/App").Include(
              "~/Scripts/Js/app.min.js",
               "~/Scripts/Js/app.init.js",
                "~/Scripts/Js/app-style-switcher.js",
                "~/Scripts/Js/custom.js"
              ).WithLastModifiedToken());

            bundles.Add(new ScriptBundle("~/bundles/Form").Include(
                "~/Scripts/Plugin/Select2/js/select2.full.min.js",
                "~/Scripts/Plugin/Select2/js/select2.min.js",
                "~/Scripts/Plugin/DateTimePicker/js/bootstrap-datepicker.min.js",
                "~/Scripts/Library/Lib_Form.js"
                ).WithLastModifiedToken());

            bundles.Add(new ScriptBundle("~/bundles/Scrollbar").Include(
              "~/Scripts/Perfect-Scrollbar/perfect-scrollbar.jquery.min.js",
                  "~/Scripts/sparkline/sparkline.js"
             ).WithLastModifiedToken());

            bundles.Add(new StyleBundle("~/Content/css").Include(
                     "~/Content/css/style.min.css"
                           ));

            bundles.Add(new StyleBundle("~/Content/FormCss").Include(
                        "~/Scripts/Plugin/Select2/css/select2.min.css",
                         "~/Scripts/Plugin/DateTimePicker/css/bootstrap-datepicker.min.css"
                        ));
        }
    }
}