(function($){

    // Layout photo gallery items using Packery.
    var pakery_options = {
      itemSelector: '.pitem',
      gutter: '.gutter-sizer' ,
      columnWidth: '.grid-sizer',
      percentPosition: true
    };
    $('#cafe_gallery').packery(pakery_options);

    //Tab navigation
    $('.nav-pills a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    });

    //init selected gallary again after other tab contents is shown.
    $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
      // e.target // newly activated tab
      // e.relatedTarget // previous active tab

      //init selected gallary again.
      var gal_id = $(this).attr('href');
      $(gal_id).packery(pakery_options);
    });

    //Photo Modal
    $('#myModal').on('show.bs.modal', function (e) {
      $('.photo > img', this).attr('src', $(e.relatedTarget).attr('src'));
    });

})(window.jQuery);
