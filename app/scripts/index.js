// (function($){
//
//   function initGallery() {
//     // Layout photo gallery items using Packery.
//     var packery_options = {
//       itemSelector: '.pitem',
//       gutter: '.gutter-sizer',
//       percentPosition: true
//     };
//     var $cafe_gallery = $('#cafe_gallery').imagesLoaded( function() {
//       // initialize Packery after all images have loaded
//       $cafe_gallery.packery(packery_options);
//     });
//     var $zakka_gallery = $('#zakka_gallery').imagesLoaded( function() {
//       // initialize Packery after all images have loaded
//       $zakka_gallery.packery(packery_options);
//     });
//     //init selected gallary again after other tab contents is shown.
//     $('a[role="tab"]').on('shown.bs.tab', function (e) {
//       // e.target // newly activated tab
//       // e.relatedTarget // previous active tab
//       //init selected gallary again.
//       var gal_id = $(this).attr('href');
//       $(gal_id).packery(packery_options);
//     });
//   }
//
//
//   //Tab navigation
//   $('.nav-pills a').click(function (e) {
//     e.preventDefault()
//     $(this).tab('show')
//   });
//
//   //Set designated photo when a modal activation.
//   $('#myModal').on('show.bs.modal', function (e) {
//     $('.modal-body > img.photo', this).attr('src', $(e.relatedTarget).attr('src'));
//   });
//
//   //Start fading Intro, now!
//   (function () {
//     $('#intro').delay(3000).fadeOut(1500, function(){
//       $('.site-wrapper').show();
//       initGallery();
//       $('body').addClass('shown');
//     });
//   })();
//
// })(window.jQuery);
