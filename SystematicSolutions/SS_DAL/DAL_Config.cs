using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS_DAL
{
    class DAL_Config
    {
        private static string connectionstring = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString(); // This is the so-called "backing field"

        public static string ConnectionString // This is your property
        {
            get { return connectionstring; }
            set { connectionstring = value; }
        }

    }
}
