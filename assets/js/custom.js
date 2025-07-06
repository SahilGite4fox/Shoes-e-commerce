$(document).ready(function () {

  $(function () {
    $(".heart").on("click", function () {
      $(this).toggleClass("is-active");
    });
  });

  $('.wishIcon').on('click', function () {
    $(this).toggleClass('active');
  });


  $('.text-stroke').text($('.text-fill').text());


  // Lazy Loading
  $("img, iframe").attr("loading", "lazy");

  // Slick Sliders
  $('.hmBannerSec').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
  });

  $('.hmProductSlider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Sticky Header

  $(window).on("scroll", function () {
    $("header").toggleClass("stickyHead", $(this).scrollTop() > 0);
  });

});



window.addEventListener('load', (event) => {
  let clock;

  // Grab the current date
  let currentDate = new Date();

  // Target future date/24 hour time/Timezone
  let targetDate = moment.tz("2025-08-30 23:59", "Asia/Kolkata");

  // Calculate the difference in seconds between the future and current date
  let diff = targetDate / 1000 - currentDate.getTime() / 1000;

  if (diff <= 0) {
    // If remaining countdown is 0
    clock = (".clock").FlipClock(0, {
      clockFace: "DailyCounter",
      countdown: true,
      autostart: false
    });
    console.log("Date has already passed!")

  } else {
    // Run countdown timer
    clock = $(".clock").FlipClock(diff, {
      clockFace: "DailyCounter",
      countdown: true,
      callbacks: {
        stop: function () {
          console.log("Timer has ended!")
        }
      }
    });

    // Check when timer reaches 0, then stop at 0
    setTimeout(function () {
      checktime();
    }, 1000);

    function checktime() {
      t = clock.getTime();
      if (t <= 0) {
        clock.setTime(0);
      }
      setTimeout(function () {
        checktime();
      }, 1000);
    }
  }
});

