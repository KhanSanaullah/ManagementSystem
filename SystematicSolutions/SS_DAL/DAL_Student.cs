using SS_Interface;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS_DAL
{
    public abstract class DAL_Student
    {
        public DataTable Save(IStudent Student, ISession Session)
        {
            DataTable Data = new DataTable();
            using (SqlConnection con = new SqlConnection(Config.ConnectionString))
            {
                if (con.State == ConnectionState.Closed)
                    con.Open();
                using (SqlTransaction trans = con.BeginTransaction())
                {
                    SqlParameter[] param = { new SqlParameter("@custid",Student.StudentId)
                                                ,new SqlParameter("@firstName",Student.FirstName)
                                                ,new SqlParameter("@lastName",Student.LastName)
                        };

                    try
                    {
                        Data = SqlHelper.ExecuteDataset(trans, "RB_uac_Student_Register", param).Tables[0];
                        trans.Commit();
                    }
                    catch (Exception ex)
                    {
                        trans.Rollback();
                        throw;
                    }
                    Student.StudentId = Convert.ToInt32(Data.Rows[0]["custid"]);
                }
                if (con.State == ConnectionState.Open)
                    con.Close();
            }
            return Data;
        }

    }
}
