using SS_Interface;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS_DAL
{
    public abstract class DAL_Class
    {
        public virtual DataTable GetClassData()
        {
			try
			{
				return SqlHelper.ExecuteDataset(DAL_Config.ConnectionString, CommandType.StoredProcedure, "sp_ED_GetClasses").Tables[0];
			}
			catch (Exception)
			{

				throw;
			}
        }
    }
}
