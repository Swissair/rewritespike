using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace RewriteSpike.MvcApi.Controllers
{
    public class ApiControllerBase : ApiController
    {
    }

    public class RegistrationController : ApiControllerBase
    {
        private bool showErrorMessage = false;

        [HttpGet]
        public HttpResponseMessage Get()
        {
            if (showErrorMessage)
            {
                var responseMessage = new HttpResponseMessage(HttpStatusCode.BadRequest);
                return this.Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "This request is bad!");
            }

            return this.Request.CreateResponse("Hello from Web Api");
        }
    }
}