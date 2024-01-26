
(function($){
	$(function(){


        $('.phone-nav').click(function () {
            $("body").toggleClass("navShown");
        });

        $('.mega-menu').click(function () {
            $("body").toggleClass("btnShown");
        });

        $(".sub_menu").parent("li").addClass("has-sub-nav");
        $(".has-sub-nav").each(function () {
            var $$this = $(this);
            
            if ($(window).width() > 1024) {
                $$this.find('> a').mouseenter(function () {
                    $$this.find('.sub_menu').fadeIn();
                })
                $$this.mouseleave(function () {
                    $('.sub_menu').fadeOut();
                })
            }
            if ($(window).width() < 1025) {
                $$this.find('> a').click(function (e) {
                    e.preventDefault();
                    $$this.find('.sub_menu').slideToggle();
                })
               
            }
            
            
        })


     
    

// Accordion

$(".accordion-item").each(function () {
    var $this = $(this);
    $this.find(" > h5").on("click touch", function () {
        $(".accordion-item").removeClass("active")
        $(".accordion-item .accordion-content").slideUp();
        if ($this.find(".accordion-content:visible").length) {
            $(".accordion-item").removeClass("active")
            $(".accordion-item.accordion-content").slideUp();
        } else {
            $this.addClass("active")
            $(".accordion-item .accordion-content").slideUp();
            $this.find(" > .accordion-content").slideDown();
        }
    })
  })

//   Tab accordion

$(".tab-accordion-item").each(function () {
    var $this = $(this);
    $this.find(" > h5").on("click touch", function () {
        $(".tab-accordion-item").removeClass("active")
        $(".tab-accordion-item .tab-accordion-content").slideUp();
        if ($this.find(".tab-accordion-content:visible").length) {
            $(".tab-accordion-item").removeClass("active")
            $(".tab-accordion-item.tab-accordion-content").slideUp();
        } else {
            $this.addClass("active")
            $(".tab-accordion-item .tab-accordion-content").slideUp();
            $this.find(" > .tab-accordion-content").slideDown();
        }
    })
  })


$('.tabs-trigger').hide();
$('.tabs-trigger:first-child').show();

// Dropdown change event
$('#select-box').change(function () {
    var selectedTab = $(this).val();

    // Hide all tabs
    $('.tabs-trigger').hide();

    // Show the selected tab
    $('#' + selectedTab).show();

    // Change the left image based on the selected tab
    var imageSrc = $('#' + selectedTab).data("image");
    $("#tab-img").attr("src", imageSrc);
});



// Show the first tab by default
$('.stage-items').hide();
$('.stage-items:first').show();
$('.button-nav li:first').addClass('tab-active');

// Change tab class and display content
$('.button-nav a').on('click', function(event){
  event.preventDefault();
  $('.button-nav li').removeClass('tab-active');
  $(this).parent().addClass('tab-active');
  $('.stage-items').hide();
  $($(this).attr('href')).show();
});



$('.vitamin-detailis').hide();
$('.vitamin-detailis:first').show();
$('.tab-list-nav li:first').addClass('active-item');

// Change tab class and display content
$('.tab-list-nav a').on('click', function(event){
  event.preventDefault();
  $('.tab-list-nav li').removeClass('active-item');
  $(this).parent().addClass('active-item');
  $('.vitamin-detailis').hide();
  $($(this).attr('href')).show();
});

$('.minerals').hide();
$('.minerals:first').show();
$('.tab-list-navone li:first').addClass('active-item');

// Change tab class and display content
$('.tab-list-navone a').on('click', function(event){
  event.preventDefault();
  $('.tab-list-navone li').removeClass('active-item');
  $(this).parent().addClass('active-item');
  $('.minerals').hide();
  $($(this).attr('href')).show();
});


$('.nutrients').hide();
$('.nutrients:first').show();
$('.tab-list-navtwo li:first').addClass('active-item');

// Change tab class and display content
$('.tab-list-navtwo a').on('click', function(event){
  event.preventDefault();
  $('.tab-list-navtwo li').removeClass('active-item');
  $(this).parent().addClass('active-item');
  $('.nutrients').hide();
  $($(this).attr('href')).show();
});





// Review Slider (Assuming this is your 'review-slider' slider)
var $reviewSlider = $('.review-slider');

if ($reviewSlider.length) {
    var currentSlide2;
    var slidesCount2;
    var sliderCounter2 = document.createElement('div');
    sliderCounter2.classList.add('slide-count-wrap');

    var updateSliderCounter2 = function (slick, currentIndex) {
        currentSlide2 = slick.slickCurrentSlide() + 1;
        slidesCount2 = slick.slideCount;
        $(sliderCounter2).html('<span class="current">' + currentSlide2 + '</span>' + '<em>' + ' / ' + '</em>' + '<span class="total">' + slidesCount2 + '</span>');
    };

    $reviewSlider.on('init', function (event, slick) {
        $reviewSlider.append(sliderCounter2);
        updateSliderCounter2(slick);
    });

    $reviewSlider.on('afterChange', function (event, slick, currentSlide) {
        updateSliderCounter2(slick, currentSlide);
    });

    $reviewSlider.slick({
        dots: false,
        arrows: true,
        autoplay: false,
        speed: 300,
        infinite: true,
        navigation: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024, // Tablet breakpoint
                settings: {
                    slidesToShow: 2, // Slides to show on tablet
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767, // Mobile breakpoint
                settings: {
                    slidesToShow: 1, // Slides to show on mobile
                    slidesToScroll: 1,
                }
            }
        ]
    });
}

            
  // Superfood slider

  if($('.superfoods-slider').length){
    $('.superfoods-slider').slick({
        dots: false,
        arrows:true,
        autoplay:false,
        autoplaySpeed:5000,
        infinite: true,
        navigation:false,
        speed: 300,
        slidesToShow:3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1025, // Tablet breakpoint
                settings: {
                    slidesToShow: 2, // Slides to show on tablet
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767, // Mobile breakpoint
                settings: {
                    slidesToShow: 2, // Slides to show on mobile
                    slidesToScroll: 1,
                }
            }
        ]
    });
}


if ($('select').length) {
    $('select').selectric({
        disableOnMobile: false,
        nativeOnMobile: false
    });
}

//  marquee
if ($('.insta-slider-wrap').length) {
    $('.insta-slider-wrap').slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        swipe: false,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
        pauseOnHover: false,
    });
}


//Blog slider




// Initialize blog-featured slider
if ($('.blog-featured').length && $('.blog-featured-image').length) {
    var blogFeaturedSlider = $('.blog-featured').slick({
        dots: true,
        arrows: false,
        autoplay: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        asNavFor: '.blog-featured-image', // Link both sliders
    });

    // Initialize blog-featured-image slider
    $('.blog-featured-image').slick({
        dots: false,
        arrows: false,
        autoplay: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        asNavFor: '.blog-featured', // Link both sliders
    });
}






    if ($('.athletes-slider-wrap').length) {
        $('.athletes-slider-wrap').slick({
            dots: true,
            arrows: false,
            autoplay: false,
            infinite: false,
            navigation: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1025, // Tablet breakpoint
                    settings: {
                        dots: true,
                        slidesToShow: 1, // Slides to show on tablet
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 767, // Mobile breakpoint
                    settings: {
                        dots: false,
                        arrows: true,
                        slidesToShow: 1, // Slides to show on mobile
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }


    if($('#superfoods-slider').length){
        $('#superfoods-slider').slick({
            dots: false,
            arrows:true,
            autoplay:false,
            autoplaySpeed:5000,
            infinite: true,
            navigation:false,
            speed: 300,
            slidesToShow:5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1025, // Tablet breakpoint
                    settings: {
                        slidesToShow: 2, // Slides to show on tablet
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 767, // Mobile breakpoint
                    settings: {
                        slidesToShow: 2, // Slides to show on mobile
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
    


// Product tab


// Initial setup for the first primary image
$('.thumbnail:first').addClass('selected');
updateSecondaryElements($('.thumbnail:first'));

$('.thumbnail').on('click', function() {
    var clicked = $(this);
    var newSelection = clicked.data('big');
    var $img = $('<img>', { src: newSelection }); // Create a new image element

    clicked.siblings().removeClass('selected');
    clicked.addClass('selected');

    $('.primary').empty().append($img.hide().fadeIn('slow'));

    // Update secondary elements based on the clicked thumbnail
    updateSecondaryElements(clicked);
});

function updateSecondaryElements(clickedThumbnail) {
    var isFirstImage = clickedThumbnail.is(':first-child');

    if (isFirstImage) {
        // Display ".protin-item" and "#bag-btn" for the first thumbnail
        $('.protin-item, #bag-btn').show();
    } else {
        // Hide ".protin-item" and "#bag-btn" for other thumbnails
        $('.protin-item, #bag-btn').hide();
    }
}



// product select

$('.select-item select').on('change', function() {
    var selectedValue = $(this).val();
    var flavoursItem = $(this).closest('.flavours-item');

    // Remove existing selected class from the current item
    flavoursItem.removeClass('selected');

    // Add selected class to the current item if the selected value is not 0
    if (selectedValue !== '0') {
        flavoursItem.addClass('selected');
    }
});


$('.purchase-item  input[type="radio"]').on('change', function() {
    // Remove existing checked class from all items
    $('.purchase-item').removeClass('checked');

    // Add checked class to the parent .purchase-item if its radio is checked
    if ($(this).prop('checked')) {
        $(this).closest('.purchase-item').addClass('checked');
        var sleing_id = $(this).data('selling-id');
        if(this.value == "autodeliver"){
           $('input[name="selling_plan"]').val(sleing_id);
        }


        if(this.value == "onetime"){
            $('input[name="selling_plan"]').val('');
        }
    console.log(this.value);

   
    }
});


//modal

$('.modal-tab-item').hide();
$('.modal-tab-item:first').show();
$('#nav1 li:first').addClass('active-btn');

// Change tab class and display content
$('#nav1 a').on('click', function(event){
  event.preventDefault();
  $('#nav1 li').removeClass('active-btn');
  $(this).parent().addClass('active-btn');
  $('.modal-tab-item').hide();
  $($(this).attr('href')).show();
});


$('.modal-tab-items').hide();
$('.modal-tab-items:first').show();
$('#nav2 li:first').addClass('active-btn');

// Change tab class and display content
$('#nav2 a').on('click', function(event){
  event.preventDefault();
  $('#nav2 li').removeClass('active-btn');
  $(this).parent().addClass('active-btn');
  $('.modal-tab-items').hide();
  $($(this).attr('href')).show();
});



// $('.nutrition').on('click', function() {
//     $('body').addClass('modalShow')
// })
// $('.close-modal, #nutritional').on('click', function() {
//     $('body').removeClass('modalShow')
// })
// $('.nutritional-inner-modal').on('click', function(e) {
//     e.stopPropagation()
// })



$('.nutrition').on('click', function() {
    $('body').addClass('modalShow');
});

// Close the modal when '.close-modal' or '#nutritional' is clicked
$('.close-modal, #nutritional').on('click', function() {
    $('body').removeClass('modalShow');
});

// Prevent closing the modal when clicking inside '.nutritional-inner-modal'
$('.nutritional-inner-modal').on('click', function(e) {
    e.stopPropagation();
});


$('.ingredient').on('click', function() {
    $('body').addClass('modalshow')
})
$('.close-modal, .nutritional-info-modal').on('click', function() {
    $('body').removeClass('modalshow')
})
$('.nutritional-inner-modal').on('click', function(e) {
    e.stopPropagation()
})


// end modal



//Faq



// Highlight active section in sidebar on scroll
$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    $('.accordions').each(function(i) {
        var sectionTop = $(this).offset().top;
        var sectionBottom = sectionTop + $(this).outerHeight();

        if (scrollDistance >= sectionTop && scrollDistance <= sectionBottom) {
            $('.sub-list .list.active').removeClass('active');
            $('.sub-list .list').eq(i).addClass('active');
        }
    });
});


$('.list').on('click', function() {
    $('.list').removeClass('actived');
    $(this).addClass('actived');
    $('body').addClass('highlight');
});


/// For mobile dropdown


$('.dropdown-content a').click(function () {
    var targetHref = $(this).attr('href');
    
    // Redirect to the selected page
    window.location.href = targetHref;
});

	})// End ready function.
   
    
           
// First Slider counter slider
var $sliderFor = $('.slider-for');

if ($sliderFor.length) {
    var currentSlide1;
    var slidesCount1;
    var sliderCounter1 = document.createElement('div');
    sliderCounter1.classList.add('slide-count-wrap');

    var updateSliderCounter1 = function (slick, currentIndex) {
        currentSlide1 = slick.slickCurrentSlide() + 1;
        slidesCount1 = slick.slideCount;
        $(sliderCounter1).html('<span class="current">' + currentSlide1 + '</span>' + '<em>' + ' / ' + '</em>' + '<span class="total">' + slidesCount1 + '</span>');
    };

    $sliderFor.on('init', function (event, slick) {
        $sliderFor.append(sliderCounter1);
        updateSliderCounter1(slick);
    });

    $sliderFor.on('afterChange', function (event, slick, currentSlide) {
        updateSliderCounter1(slick, currentSlide);
    });

    $sliderFor.slick({
        dots: false,
        arrows: true,
        autoplay: false,
        speed: 300,
        infinite: true,
        navigation: true,
        slidesToShow: 2, 
        slidesToScroll: 1,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1025, // Tablet breakpoint
                settings: {
                    slidesToShow: 2, // Slides to show on tablet
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767, // Mobile breakpoint
                settings: {
                    slidesToShow: 1, // Slides to show on mobile
                    slidesToScroll: 1,
                }
            }
        ]
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var logoSection = document.querySelector('.logo-section');
    var mainFooterSection = document.querySelector('.main-footer-section');
    var lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            if (scrollTop > mainFooterSection.offsetTop - window.innerHeight) {
                logoSection.classList.add('fixed');
            }
        } else {
            // Scrolling up
            if (scrollTop <= mainFooterSection.offsetTop - window.innerHeight) {
                logoSection.classList.remove('fixed');
            }
        }

        lastScrollTop = scrollTop;
    });
});




})(jQuery)

