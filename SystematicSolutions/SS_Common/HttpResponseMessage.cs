using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SS_Common
{
    public class HttpResponseMessage
    {
        public dynamic Data { get; set; }
        public string Message { get; set; }
        public int MsgType { get; set; }
        public bool IsSessionNull { get; set; }
    }
}
