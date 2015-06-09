using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace RewriteSpike.MvcApi.Controllers
{
    public class StudentVm
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
