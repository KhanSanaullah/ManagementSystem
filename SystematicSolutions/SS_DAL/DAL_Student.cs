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
            using (SqlConnection Connection = new SqlConnection(DAL_Config.ConnectionString))
            {
                if (Connection.State == ConnectionState.Closed)
                    Connection.Open();

                using (SqlTransaction transaction = Connection.BeginTransaction())
                {
                    SqlParameter[] param = { new SqlParameter("@custid",Student.StudentId)
                                                ,new SqlParameter("@firstName",Student.FirstName)
                                                ,new SqlParameter("@lastName",Student.LastName)
                        };

                    try
                    {
                        Data = SqlHelper.ExecuteDataset(transaction, "RB_uac_Student_Register", param).Tables[0];
                        transaction.Commit();

                        Student.StudentId = Convert.ToInt32(Data.Rows[0]["custid"]);
                    }
                    catch (Exception ex)
                    {
                        transaction.Rollback();
                        throw;
                    }
                }

                if (Connection.State == ConnectionState.Open)
                    Connection.Close();
            }
            return Data;
        }

    }
}
