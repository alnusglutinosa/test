Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @alnusglutinosa Sign out
0
0 0 alnusglutinosa/side-navigation
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights  Settings
side-navigation/src/js/app.js
43fe362  22 days ago
@olyaklim olyaklim class
@alnusglutinosa @olyaklim
     
151 lines (85 sloc)  2.88 KB
import sayHello from './lib/sayHello.js';
import './lib/jquery.mousewheel.js';
import Navigation from './lib/fullSideNav.js';


sayHello();

$(document).ready(function() {

  var full_page = new Navigation('My Navigation', true);
  full_page.show();

});
















// $(document).ready(function() {

// var
//   screen = 0,
//   container = $('.maincontent'),
//   pages = $('.page'),
//   inscroll = false;



// checkSection();

// // $('.page:first-child').addClass('active');

// using on
// $('body').on('mousewheel', function(event) {
//   mousescroll(event.deltaY);
//   checkSection();
// });


// $('.link').on('click', function(e) {
//   e.preventDefault();

//   var idsect = $(this).attr('href');
//   var direction = idsect.replace(/#/, '');
//   var reqSection = $('section[data-section="'+ direction +'"]');
//   var reqSectionPos = reqSection.offset().top;

//   var reqLink = $('.link[href="#'+ idsect +'"]');
//   $('.link').removeClass('active');
//   $(this).addClass('active');

//   // активный боковой нав
//   var topLink = $('.fp-nav__link[href="#'+ direction +'"]');
//   $('.fp-nav__link').removeClass('active');
//   topLink.addClass('active');


//   var link_index = $(this).parent().index();

//   var screen = link_index;
//   var position = (-screen * 100) + '%';
//   container.css('top', position);
//   window.location.hash = direction;

// });

// $('.fp-nav__link').on('click', function(e) {
//   e.preventDefault();

//   var idsect = $(this).attr('href');
//   var direction = idsect.replace(/#/, '');
//   var reqSection = $('section[data-section="'+ direction +'"]');
//   var reqSectionPos = reqSection.offset().top;

//   var reqLink = $('.fp-nav__link[href="#'+ idsect +'"]');
//   $('.fp-nav__link').removeClass('active');
//   $(this).addClass('active');

//   // активный топ нав
//   var topLink = $('.link[href="#'+ direction +'"]');
//   $('.link').removeClass('active');
//   topLink.addClass('active');

//   var link_index = $(this).parent().index();

//   var screen = link_index;
//   var position = (-screen * 100) + '%';
//   container.css('top', position);
//   window.location.hash = direction;

// });



// function mousescroll(eventdeltaY) {

//   console.log(eventdeltaY);

//   var activePage = $('.page.active'); //pages.filter('active');

//   if(!inscroll) {
//     inscroll = true;

//     // console.log(event.deltaX, event.deltaY, event.deltaFactor);

//     if (eventdeltaY > 0) {

//       if (activePage.prev().length) {
//         screen--;
//       }

//     } else {

//       if (activePage.next().length) {
//         screen++;
//       }
//     }
//   }


//   var
//     position = (-screen * 100) + '%';

//   pages.eq(screen).addClass('active').siblings().removeClass('active');
//   container.css('top', position);


//   setTimeout(function() {
//     checkSection();
//     inscroll = false;

//   }, 1100);



// }


// });
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
Press h to open a hovercard with more details.