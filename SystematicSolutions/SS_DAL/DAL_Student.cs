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
        public virtual DataTable Save(IStudent Student, ISession Session)
        {
            try
            {

                DataTable Data = new DataTable();
                using (SqlConnection Connection = new SqlConnection(DAL_Config.ConnectionString))
                {
                    if (Connection.State == ConnectionState.Closed)
                        Connection.Open();

                    using (SqlTransaction transaction = Connection.BeginTransaction())
                    {
                        SqlParameter[] param = { new SqlParameter("@StudentId",Student.StudentId)
                                             ,new SqlParameter("@FirstName",Student.FirstName)
                                             ,new SqlParameter("@LastName",Student.LastName)
                                             ,new SqlParameter("@Gender",Student.Gender)
                                             ,new SqlParameter("@Address",Student.Address)
                                             ,new SqlParameter("@Religion",Student.Religion)
                                             ,new SqlParameter("@DateOfBirth",Student.DateOfBirth)
                                             ,new SqlParameter("@Nationality",Student.Nationality)
                                             ,new SqlParameter("@AdmissionDate",Student.AddmissionDate)
                                             ,new SqlParameter("@Image",Student.Image)
                                             ,new SqlParameter("@PhoneNo",Student.Phone)
                                             ,new SqlParameter("@Status",Student.Status)
                                             ,new SqlParameter("@CreatedBy",Session.UserId)
                                             ,new SqlParameter("@CreatedDate",Student.CreatedDate)
                                             ,new SqlParameter("@UpdatedBy",Session.UserId)
                                             ,new SqlParameter("@UpdatedDate",Student.UpdatedDate)
                                             ,new SqlParameter("@UserName",Student.UserName)
                                             ,new SqlParameter("@Password",Student.Password)
                                             ,new SqlParameter("@UserId",Student.StudentId)
                                             ,new SqlParameter("@Role",Student.Role)
                                             ,new SqlParameter("@CredentialsId",Student.CredentialsId)
                        };

                        try
                        {
                            Data = SqlHelper.ExecuteDataset(transaction, "sp_ED_SaveStudent", param).Tables[0];
                            transaction.Commit();

                            Student.StudentId = Convert.ToInt32(Data.Rows[0]["custid"]);
                        }
                        catch (Exception)
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
            catch (Exception)
            {

                throw;
            }
        }
    }
}
