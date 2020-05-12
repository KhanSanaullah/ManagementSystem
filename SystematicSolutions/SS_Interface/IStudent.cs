using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS_Interface
{
    public interface IStudent
    {
        int StudentId { get; set; }
        string Gender { get; set; }
        int CredentialsId { get; set; }
        string FirstName { get; set; }
        string LastName { get; set; }
        string UserName { get; set; }
        string Password { get; set; }
        string Role { get; set; }
        string Address { get; set; }
        string Image { get; set; }
        string Status { get; set; }
        string Religion { get; set; }
        DateTime DateOfBirth { get; set; }
        DateTime AddmissionDate { get; set; }
        DateTime CreatedDate { get; set; }
        DateTime UpdatedDate { get; set; }
        string Nationality { get; set; }
        string Phone { get; set; }
    }
}
