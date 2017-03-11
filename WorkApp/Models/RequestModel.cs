using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WorkApp.Models
{
    public class RequestModel
    {
        public static List<RequestModel> Requests = new List<RequestModel> ();

        public string Description { get; set; }
        public string Subject { get; set; }
        public string User { get; set; }
    }
}