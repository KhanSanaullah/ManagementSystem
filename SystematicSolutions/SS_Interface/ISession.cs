using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace SS_Interface
{
    public interface ISession
    {
        int UserId { get; set; }
        string FullName { get; set; }
        string Role { get; set; }
        string Email { get; set; }
        string ProfileImage { get; set; }
        string UserName { get; set; }
        bool IsAppOwner { get; set; }
        string Ip { get; set; }
        string Mac { get; set; }
    }
}
