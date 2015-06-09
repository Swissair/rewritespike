using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Net;
using System.Net.Http;


namespace RewriteSpike.MvcApi.Controllers
{
    public class AccountController : ApiControllerBase
    {
        [HttpPost]
        public HttpResponseMessage Save(StudentVm studentRequest)
        {
            return this.Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}