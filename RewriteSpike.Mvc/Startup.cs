using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(RewriteSpike.Mvc.Startup))]
namespace RewriteSpike.Mvc
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
