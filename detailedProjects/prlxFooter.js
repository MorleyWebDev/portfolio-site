//Parallax Footer JS
$(document).ready(function() {
  siteFooter();
	$(window).resize(function() {
		siteFooter();
	});

	function siteFooter() {
		var siteContent = $('#main');
		var siteContentHeight = siteContent.height();
		var siteContentWidth = siteContent.width();

		var siteFooter = $('#footer');
		var siteFooterHeight = siteFooter.height();
		var siteFooterWidth = siteFooter.width();

		// console.log('Content Height = ' + siteContentHeight + 'px');
		// console.log('Content Width = ' + siteContentWidth + 'px');
		// console.log('Footer Height = ' + siteFooterHeight + 'px');
		// console.log('Footer Width = ' + siteFooterWidth + 'px');

		siteContent.css({
			"margin-bottom" : siteFooterHeight
		});
	};
}); // /parallax footer


/*nav bar functuionality*/
$("#nav").find("a").click(function(e) {
   e.preventDefault();
   var section = $(this).attr("href");
   $("html, body").animate({
       scrollTop: $(section).offset().top
   });
});



