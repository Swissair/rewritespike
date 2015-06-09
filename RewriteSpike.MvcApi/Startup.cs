using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(RewriteSpike.MvcApi.Startup))]
namespace RewriteSpike.MvcApi
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
        }
    }
}
