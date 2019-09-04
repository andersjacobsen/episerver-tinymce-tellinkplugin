using EPiServer.Cms.TinyMce.Core;
using EPiServer.Framework;
using EPiServer.Framework.Initialization;
using EPiServer.ServiceLocation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TinyMCETelLinkPlugin.Business.Initialization
{
	[ModuleDependency(typeof(TinyMceInitialization))]
	public class ExtendedTinyMceInitialization : IConfigurableModule
	{
		public void Initialize(InitializationEngine context)
		{
		}

		public void Uninitialize(InitializationEngine context)
		{
		}

		public void ConfigureContainer(ServiceConfigurationContext context)
		{
			context.Services.Configure<TinyMceConfiguration>(config =>
			{
				// Add content CSS to the default settings.
				config.Default()
					.AddPlugin("code")
					.AddExternalPlugin("tellink", "/ClientResources/Scripts/tinymce/plugins/tellink/myplugin.js")
					.Toolbar(DefaultValues.Toolbar + " | code tellink");
			});
		}
	}
}