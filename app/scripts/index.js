(function($){
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
  //Start fading Intro, now!
  (function () {
    $('#intro').delay(2000).fadeOut(1000, function(){
      $('.w-section').show();
      /**
       * ----------------------------------------------------------------------
       * Webflow: Interactions: Init
       */
      Webflow.require('ix').init([
        {"slug":"show-interior","name":"show interior","value":{"style":{"opacity":0},"triggers":[{"type":"load","preload":true,"stepsA":[{"opacity":1,"transition":"transform 250ms ease 0ms, opacity 250ms ease 0ms","scaleX":1.1,"scaleY":1.1,"scaleZ":1},{"transition":"transform 250ms ease 0ms","scaleX":1,"scaleY":1,"scaleZ":1},{"wait":0}],"stepsB":[]}]}},
        {"slug":"show-house","name":"show house","value":{"style":{"opacity":0},"triggers":[{"type":"load","preload":true,"stepsA":[{"wait":500},{"opacity":1,"transition":"transform 250ms ease 0ms, opacity 250ms ease 0ms","scaleX":1.1,"scaleY":1.1,"scaleZ":1},{"transition":"transform 250ms ease 0ms","scaleX":1,"scaleY":1,"scaleZ":1}],"stepsB":[]}]}},
        {"slug":"show-soda","name":"show soda","value":{"style":{"opacity":0},"triggers":[{"type":"load","preload":true,"stepsA":[{"wait":1000},{"opacity":1,"transition":"transform 250ms ease-in 0ms, opacity 250ms ease-in 0ms","scaleX":1.1,"scaleY":1.1,"scaleZ":1},{"transition":"transform 250ms ease-in 0ms","scaleX":1,"scaleY":1,"scaleZ":1}],"stepsB":[]}]}},
        {"slug":"show-notice","name":"show notice","value":{"style":{"opacity":0,"x":"-500px","y":"0px","z":"0px"},"triggers":[{"type":"scroll","offsetBot":"170px","stepsA":[{"opacity":1,"transition":"transform 500ms ease 0ms, opacity 500ms ease 0ms","x":"0px","y":"0px","z":"0px"}],"stepsB":[]}]}},
        {"slug":"show-tea","name":"show tea","value":{"style":{"opacity":0},"triggers":[{"type":"scroll","offsetBot":"200px","stepsA":[{"opacity":1,"transition":"transform 500ms ease 0ms, opacity 500ms ease 0ms","scaleX":1.1,"scaleY":1.1,"scaleZ":1},{"transition":"transform 500ms ease 0ms","scaleX":1,"scaleY":1,"scaleZ":1}],"stepsB":[]}]}},
        {"slug":"show-open","name":"show open","value":{"style":{"opacity":0},"triggers":[{"type":"scroll","offsetBot":"300px","stepsA":[{"opacity":1,"transition":"transform 500ms ease 0ms, opacity 500ms ease 0ms","scaleX":1.1,"scaleY":1.1,"scaleZ":1},{"transition":"transform 500ms ease 0ms","scaleX":1,"scaleY":1,"scaleZ":1}],"stepsB":[]}]}},
        {"slug":"show-msg","name":"show msg","value":{"style":{"opacity":0},"triggers":[{"type":"scroll","offsetBot":"20%","stepsA":[{"opacity":1,"transition":"transform 500ms ease 0ms, opacity 500ms ease 0ms","scaleX":1.1,"scaleY":1.1,"scaleZ":1},{"transition":"transform 500ms ease 0ms","scaleX":1,"scaleY":1,"scaleZ":1}],"stepsB":[]}]}},
        {"slug":"show-house-2","name":"show house 2","value":{"style":{"opacity":0},"triggers":[{"type":"scroll","offsetBot":"40%","stepsA":[{"opacity":1,"transition":"transform 250ms ease 0ms, opacity 250ms ease 0ms","scaleX":1.1,"scaleY":1.1,"scaleZ":1},{"transition":"transform 250ms ease 0ms","scaleX":1,"scaleY":1,"scaleZ":1}],"stepsB":[]}]}},
        {"slug":"show-soda-2","name":"show soda 2","value":{"style":{"opacity":0},"triggers":[{"type":"load","preload":true,"stepsA":[{"wait":500},{"opacity":1,"transition":"transform 250ms ease-in 0ms, opacity 250ms ease-in 0ms","scaleX":1.1,"scaleY":1.1,"scaleZ":1},{"transition":"transform 250ms ease-in 0ms","scaleX":1,"scaleY":1,"scaleZ":1}],"stepsB":[]}]}}
      ]);
    });
  })();

})(window.jQuery);
