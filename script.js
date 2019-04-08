//typed js effects
setTimeout(()=>{
  var typedHero = new Typed('.typeChange', {
    strings: ['responsive, modern websites.', 'database driven websites.', 'angular web / mobile apps.', 'UX / UI Solutions.'],
    typeSpeed: 30,
    backSpeed: 20,
    loop: true,
    backDelay: 2100,
    startDelay: 200
  })
}, 1300)


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

		siteContent.css({
			"margin-bottom" : siteFooterHeight
		});
	};
}); // end of parallax footer


/*nav bar functionality*/
$("#nav").find("a").click(function(e) {
   e.preventDefault();
   var section = $(this).attr("href");
   $("html, body").animate({
       scrollTop: $(section).offset().top
   });
});

$(".showcaseLearnMoreBtn").click(function(e) {
   e.preventDefault();
   var section = $(this).attr("href");
   $("html, body").animate({
       scrollTop: $(section).offset().top
   });
});

//shake animation on skills container
$('.basicSkillsBox').mouseover(function(e){
  $(this).find('img').addClass('hvr-buzz-out');
});
$('.basicSkillsBox').mouseleave(function(e){
  $(this).find('img').removeClass('hvr-buzz-out');
});
//shake animation on about me container
$('.aboutMeBox').mouseover(function(e){
  $('.JMIMG').addClass('hvr-buzz-out');
});

$('.aboutMeBox').mouseleave(function(e){
  $('.JMIMG').removeClass('hvr-buzz-out');
});


//NAV BAR css edits
$(document).ready(function() { 
	$(window).scroll(function() {
  	if($(document).scrollTop() > 20)  {
    	$('.header').addClass('headerScroll2');
      $('.myheader').addClass('orangeUnderline2'); 

    }
    else {
    $('.header').removeClass('headerScroll2');
    $('.myheader').removeClass('orangeUnderline2');

    }
  });
});

  $(document).ready(function() {
  	$(window).scroll(function() {
    	if(
        $(document).scrollTop() > 20 &&
        ($(window).width() < 540) &&
        ($(window).width() > 335) &&
        ($(window).height() > 800)
      ){
        $('.header').addClass('headerScroll');
        $('.myheader').addClass('orangeUnderline');
        $('.mobileLogo').addClass('flyUplogo');
        setTimeout(logoDisplayNone, 1860);
      }
      else {
      $('.header').removeClass('headerScroll');
      $('.myheader').removeClass('orangeUnderline');
      }
    });

  function logoDisplayNone(){
    $('.mobileLogo').addClass('displayNone');
    $('.mobileLogo').removeClass('flyUplogo');
    $('.heyqt').addClass('top50');
  }
});

$(document).ready(function() {
    if(
      ($(window).width() < 540) &&
      ($(window).height() < 800)
    ){
      $('.mobileLogo').addClass('displayNone');
      $('.heyqt').addClass('top50');
    }
});

/*scroll reveal js*/
window.sr = ScrollReveal({
  reset: false,
  mobile: false,
  viewOffset: {top: 70},
  duration: 1000,
  origin: "left",
  distance: "45px"
});

sr.reveal('.logo', {
  duration: 2000,
  delay: 1100,
  origin: "left",
  distance: "130px",
  rotate:{z:180},
  opacity: 1
});

sr.reveal('.firstBox',  {
  duration: 500,
  delay: 0,
  origin: "left",
  distance: "0px",
});

sr.reveal('.portfolioBox',  {
  duration: 500,
  delay: 0,
  origin: "left",
  distance: "0px",
});

sr.reveal('.showcaseArrows', {
  duration: 1000,
  delay: 2100,
  origin: "bottom",
  distance: "100px",
  opacity: 1
});

sr.reveal('.showcaseFooter', {
  duration: 1000,
  delay: 2100,
  origin: "bottom",
  distance: "100px",
  opacity: 1
});


sr.reveal('.qt1', {
  duration: 2000,
  delay: 0,
  origin: "left",
  distance: "130px",
});

sr.reveal('.qt2', {
  duration: 2000,
  delay: 800,
  origin: "left",
  distance: "0px",
});

sr.reveal('.galleryImg');
sr.reveal('.slw');
sr.reveal('.form');
