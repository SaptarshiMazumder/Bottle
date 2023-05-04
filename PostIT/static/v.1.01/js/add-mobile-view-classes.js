 if (window.innerWidth < 768 || window.screen.width < 768) {
      // User is on a phone
      $('.main-body').addClass('mobile-main-body');
    } else {
      // User is on a desktop
      $('.main-body').addClass('desktop-main-body');
    }