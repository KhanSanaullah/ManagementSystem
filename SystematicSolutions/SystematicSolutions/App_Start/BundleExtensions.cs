﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace SystematicSolutions.App_Start
{
    public static class BundleExtensions
    {
        public static Bundle WithLastModifiedToken(this Bundle sb)
        {
            sb.Transforms.Add(new LastModifiedBundleTransform());
            return sb;
        }

        public class LastModifiedBundleTransform : IBundleTransform
        {
            public void Process(BundleContext context, BundleResponse response)
            {
                foreach (var File in response.Files)
                {
                    string version = "4578"; //DAL.Config.appVersion;
                    File.IncludedVirtualPath = string.Concat(File.IncludedVirtualPath, "?v=", version);
                }
            }
        }
    }
}