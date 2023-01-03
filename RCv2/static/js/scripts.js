$(document).ready(function(){
    // Add smooth scroll to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

    // Add shadow effect to navbar when scrolling
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $('nav').addClass('shadow');
      } else {
        $('nav').removeClass('shadow');
      }
    });

    // Add shadow effect to cards when hovering
    $('.card').hover(
      function() {
        $(this).addClass('shadow-lg');
      },
      function() {
        $(this).removeClass('shadow-lg');
      }
    );
  });

  $(document).ready(function(){
    // Smooth scroll functionality
    $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr('tabindex','-1');
              $target.focus();
            };
          });
        }
      }
    });
    
    // Image slideshow functionality
    var slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("slideshow-image");
      var dots = document.getElementsByClassName("slideshow-dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }
    
    // Image enlargement functionality
    $('.slideshow-image').click(function(){
      $(this).toggleClass('enlarged');
    });
    
    // Dropdown functionality
    $('.dropdown-header').click(function(){
      $(this).next('.dropdown-content').slideToggle();
    });
    
    // Form validation and submission
    $(document).ready(function() {
      // Form validation
      $('#contact-form').validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          email: {
            required: true,
            email: true
          },
          subject: {
            required: true,
            minlength: 5,
            maxlength: 250
          },
          modelNumber: {
            maxlength: 150
          },
          message: {
            maxlength: 1000
          }
        },
        messages: {
          name: {
            required: "Please enter your name",
            minlength: "Your name must consist of at least 2 characters"
          },
          email: {
            required: "Please enter your email address",
            email: "Please enter a valid email address"
          },
          subject: {
            required: "Please enter a subject",
            minlength: "Your subject must consist of at least 5 characters",
            maxlength: "Your subject cannot exceed 250 characters"
          },
          modelNumber: {
            maxlength: "Your model number cannot exceed 150 characters"
          },
          message: {
            maxlength: "Your message cannot exceed 1000 characters"
          }
        },
        submitHandler: function(form) {
          // Form submission
          var formData = $(form).serialize();
          $.ajax({
            type: "POST",
            url: "send-email.php",
            data: formData,
            success: function() {
              alert("Your message has been sent! We will get back to you as soon as possible.");
              $('#contact-form')[0].reset();
            }
          });
        }
      });
    });
  });