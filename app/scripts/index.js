(function($){

    // Layout photo gallery items usin Packery.
    var $container = $('.gallery');
    $container.packery({
      itemSelector: '.gallery > img',
      gutter: '.gutter-sizer' ,
      columnWidth: '.grid-sizer',
      percentPosition: true
    });


    //Photo Modal
    $('#myModal').on('show.bs.modal', function (e) {
      console.log(e.relatedTarget);
      $('img', this).attr('src', $(e.relatedTarget).attr('src'));
    })
})(window.jQuery);
