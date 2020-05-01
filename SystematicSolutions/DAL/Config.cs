using System;
using System.Configuration;

namespace DAL
{
    public class Config
    {
        private static string DbConnection = ConfigurationManager.ConnectionStrings["ConnectionString"].ToString(); // This is the so-called "backing field"

        public static string ConnectionString 
        {
            get { return DbConnection; }
            set { DbConnection = value; }
        }
        public static string appVersion
        {
            get
            {
                return ConfigurationManager.AppSettings["version"].ToString();
            }
        }
    }
}
