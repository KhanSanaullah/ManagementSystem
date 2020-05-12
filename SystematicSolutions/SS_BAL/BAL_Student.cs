using SS_Common;
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
    public class BAL_Student : DAL_Student, IStudent
    {
        public int StudentId { get; set; }
        public string Gender { get; set; }
        public int CredentialsId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public string Address { get; set; }
        public string Image { get; set; }
        public string Status { get; set; }
        public string Religion { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime AddmissionDate { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string Nationality { get; set; }
        public string Phone { get; set; }
        public new HttpResponseMessage Save(IStudent Student, ISession Session)
        {
            DataTable Data = base.Save(Student, Session);
            return null;
        }
    }
}
