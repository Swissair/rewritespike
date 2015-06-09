using System;
using System.Web.Mvc;

namespace RewriteSpike.MvcApi.Controllers
{
    public class JasmineController : Controller
    {
        public ViewResult Run()
        {
            return View("SpecRunner");
        }
    }
}
