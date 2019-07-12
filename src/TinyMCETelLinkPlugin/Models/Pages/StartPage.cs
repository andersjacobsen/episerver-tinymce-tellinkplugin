using System;
using System.ComponentModel.DataAnnotations;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;

namespace TinyMCETelLinkPlugin.Models.Pages
{
	[ContentType(DisplayName = "StartPage", GUID = "2b403859-3ec5-402b-b75c-3ea5958198a5", Description = "")]
	public class StartPage : PageData
	{

		[CultureSpecific]
		[Display(
			Name = "Main body",
			Description = "The main body will be shown in the main content area of the page, using the XHTML-editor you can insert for example text, images and tables.",
			GroupName = SystemTabNames.Content,
			Order = 1)]
		public virtual XhtmlString MainBody { get; set; }

	}
}