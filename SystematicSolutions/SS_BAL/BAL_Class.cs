using SS_DAL;
using SS_Interface;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS_BAL
{
    public class BAL_Class : DAL_Class, IClass
    {
        public int ClassId { get; set; }
        public string ClassName { get; set; }
        public new List<BAL_Class> GetClassData()
        {
            List<BAL_Class> LstClass = new List<BAL_Class>();
            DataTable Data = base.GetClassData();

            foreach (DataRow row in Data.Rows)
            {
                BAL_Class Class = new BAL_Class();

                Class.ClassId = Convert.ToInt32(row["ClassId"]);
                Class.ClassName = Convert.ToString(row["ClassName"]);

                LstClass.Add(Class);
            }
            return LstClass;
        }
    }
}
