using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SS_Interface;

namespace SystematicSolutions.Models
{
    public class mdl_Session : ISession
    {
        public int UserId { get; set; }
        public string FullName { get; set; }
        public string Role { get; set; }
        public string Email { get; set; }
        public string ProfileImage { get; set; }
        public string UserName { get; set; }
        public bool IsAppOwner { get; set; }
        public string Ip { get; set; }
        public string Mac { get; set; }

        public bool IsSessionNull
        {
            get
            {
                if (HttpContext.Current.Session["__MySession__"] != null)
                    return true;
                else
                    return false;
            }
        }
        public mdl_Session CheckSession
        {
            get
            {
                if (HttpContext.Current.Session["__MySession__"] != null)
                {
                    return (mdl_Session)HttpContext.Current.Session["__MySession__"];
                }
                else
                {
                    return null;
                }
            }
            set
            {
                HttpContext.Current.Session["__MySession__"] = value;
            }
        }

        public void SessionDispose()
        {
            HttpContext.Current.Session.RemoveAll();
        }
    }
}
