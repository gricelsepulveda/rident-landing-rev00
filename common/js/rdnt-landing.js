$(document).ready(function(){

  //SCROLL BEHAVIOR FOR MODALS 
  function lockScroll(){
    $html = $('html'); 
    $body = $('body'); 
    var initWidth = $body.outerWidth();
    var initHeight = $body.outerHeight();

    var scrollPosition = [
        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
    ];
    $html.data('scroll-position', scrollPosition);
    $html.data('previous-overflow', $html.css('overflow'));
    $html.css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);   

    var marginR = $body.outerWidth()-initWidth;
    var marginB = $body.outerHeight()-initHeight; 
    $body.css({'margin-right': marginR,'margin-bottom': marginB});
  } 

  function unlockScroll(){
    $html = $('html');
    $body = $('body');
    $html.css('overflow', $html.data('previous-overflow'));
    var scrollPosition = $html.data('scroll-position');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);    

    $body.css({'margin-right': 0, 'margin-bottom': 0});
  }

  $('.rdnt-venues .unslider-nav ol li[data-slide="0"]').click(function(){
    // console.log("entre 1");
    sliderVenue.unslider('animate:0');
  });
  $('.rdnt-venues .unslider-nav ol li[data-slide="1"]').click(function(){
    sliderVenue.unslider('animate:1');
    // console.log("entre 2");
  });
  $('.rdnt-venues .unslider-nav ol li[data-slide="2"]').click(function(){
    sliderVenue.unslider('animate:2');
    // console.log("entre 3");
  });

  //RESERVATION OPEN
  $(".rdnt-reservation-new").click(function() {
    $('.rdnt-modal-bg').fadeIn("slow");
    $('.rdnt-wrapper-modal-venue').removeClass("display-none");
    $('.rdnt-wrapper-modal-venue').addClass("display-flex");
    lockScroll();
  });

  //RESERVATION CLOSE
  $(".rdnt-wrapper-modal-venue .flex-column > a").click(function() {
    $('.rdnt-modal-bg').fadeOut("slow");
    $('.rdnt-wrapper-modal-venue').removeClass("display-flex");
    $('.rdnt-wrapper-modal-venue').addClass("display-none");
    unlockScroll();
  });

  //RESERVATION TAKEN OPEN
  /* $(".rdnt-text").click(function() {
    $('.rdnt-modal-bg').fadeIn("slow");
    $('.rdnt-wrapper-modal-venue-taken').removeClass("display-none");
    $('.rdnt-wrapper-modal-venue-taken').addClass("display-flex");
    lockScroll();
  });

  //RESERVATION TAKEN CLOSE
  $(".rdnt-wrapper-modal-venue-taken .flex-column > a").click(function() {
    $('.rdnt-modal-bg').fadeOut("slow");
    $('.rdnt-wrapper-modal-venue-taken').removeClass("display-flex");
    $('.rdnt-wrapper-modal-venue-taken').addClass("display-none");
    unlockScroll();
  });
  
  */

  // CLOSE CURRENT MODAL 
  $("span.rdnt-close-modal").click(function() {
    $('.rdnt-modal-bg').fadeOut("fast");
    var thisModal = $(this).parent().parent();
    $(thisModal).removeClass("display-flex");
    $(thisModal).addClass("display-none");
    unlockScroll();
  });

  //OPEN MODAL SPECIALITIES 
  $(".rdn-especialities-button").click(function() {
    var currentClick = $(this)[0].classList[1].match(/\d+$/);
    var openModal = ".modal-especialities-"+currentClick
    // console.log(currentClick);
    // console.log(openModal);
    $('.rdnt-modal-bg').fadeIn("slow");
    $(openModal).removeClass("display-none");
    $(openModal).addClass("display-flex");
    lockScroll();
  });

  // CHANGE ACTIVE IMAGE BANNER
  $(".rdnt-venues-box-img").click( function(){
    var currentClickImg = $(this)[0].classList[1].match(/\d+$/);
    var currentBanner = $(this).closest("li")[0].classList[1].match(/\d+$/);
    var selectedBanner = ".venues-banner-"+currentBanner
    var selectedImg = ".banner-img-"+currentClickImg
    var changeActiveBanner = selectedBanner + " " + selectedImg
    var removeActiveBanner = selectedBanner + " .rdnt-venue-banner-img"
    var removeActiveThumb = selectedBanner + " .rdnt-venues-box-img"
    $(removeActiveThumb).removeClass("active");
    $(this).addClass("active");
    $(removeActiveBanner).removeClass("active");
    $(changeActiveBanner).addClass("active");
  });

  //TRIGGER MOBILE MENU
   $(".rdnt-mobile-trigger").click(function(){
    if($(".rdnt-menu").hasClass("display"))
        {
          $(".rdnt-menu").removeClass("display");
        }
    else{
          $(".rdnt-menu").addClass("display");
        }
  });
  //ACTIVATE LINKS WHEN IS CLICKED
  $("li.rdnt-menu-li").click(function(){
    $("li.rdnt-menu-li").removeClass("active");
    $(".rdnt-menu").addClass("display");
    $(this).addClass("active");
  });


});