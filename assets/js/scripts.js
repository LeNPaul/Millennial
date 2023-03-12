var Site = {

  init: function() {
    Site.initModal();
    Site.initAnchorScroll();
    Site.initPlayer();
    Site.initMobileNav();
    Site.initStickyNav();
  },

  initStickyNav: function() {
    window.onscroll = function() {myFunction()};
    
    var navbar = document.getElementById("is-sticky");
    var sticky = navbar.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
    myFunction();
  },

  initModal: function() {
    $('[data-modal]').click(function(e){
      e.preventDefault();
      $('.modal' + $(this).data('modal')).addClass('is-active');
    });
    $('.modal-close, .modal-background').click(function(e){
      e.preventDefault();
      $(this).parents('.modal').removeClass('is-active');
    });
  },

  initAnchorScroll: function() {
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $(".navbar-menu.is-active").removeClass("is-active");
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
            });
          }
        }
      });
  },

  initPlayer: function() {
    $(".player-button").click(function(e){
      e.preventDefault();
      var embedlink = $(this).data('embed-link');
      var embedcode = '<iframe sandbox="allow-same-origin allow-scripts allow-top-navigation allow-popups" scrolling=no width="100%" height="185" frameborder="0" src="'+embedlink+'"></iframe>';
      $("#player-container").html(embedcode);
    });
  },

  initMobileNav: function() {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  }

};

$(document).ready(function(){
  Site.init();
});