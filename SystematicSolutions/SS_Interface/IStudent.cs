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
        string FirstName { get; set; }
        string LastName { get; set; }
        string Gender { get; set; }
        string Address { get; set; }
        string Religion { get; set; }
        DateTime DateOfBirth { get; set; }
        DateTime AddmissionDate { get; set; }
        string Nationality { get; set; }
        string Phone { get; set; }
    }
}
