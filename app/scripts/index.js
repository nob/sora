(function($){

    var $container = $('.gallery');
    // init
    $container.packery({
      itemSelector: '.gallery > img',
      gutter: '.gutter-sizer' ,
      columnWidth: '.grid-sizer',
      percentPosition: true
    });


    //Modal
    $('#myModal').on('show.bs.modal', function (e) {
      console.log(e.relatedTarget);
      $('img', this).attr('src', $(e.relatedTarget).attr('src'));
    })
})(window.jQuery);
