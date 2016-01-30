(function($){
  /**
   * Fetch posts data from Instagram via it's API and set them to the specific DOM in page.
   */
  function getIGitems(fetcher, limit, tag_name, elm_class_name) {

    var setIGitems = function(response, params) {
      console.log('==== API fetched. Results below. ======');
      console.log(response);
      console.log('=======================================');

      var $lightbox_elms = $('.w-lightbox.' + elm_class_name);
      var ig_items = response.data;

      for(var i = 0; i < ig_items.length; i++) {
        var $lb_elm = $lightbox_elms.eq(i);

        var low_res_url = ig_items[i].images.low_resolution.url;
        var std_res_url = ig_items[i].images.standard_resolution.url;
        var thn_res_url = ig_items[i].images.thumbnail.url;
        var shot_date = new Date(Number(ig_items[i].created_time + '000'));
        var shot_date_str = (shot_date.getMonth() + 1) + '月' + shot_date.getDate() + '日';
        var caption = ig_items[i].caption.text;
        caption = caption.replace(/(#.+\s|#.+$)/g, ''); //eliminate tags from caption.

        var lightbox_config = {
          "items": [{
            "url": std_res_url,
            "width": 640,
            "height": 640,
            "caption": "[" + shot_date_str + "] " + caption,
            "type": "image"
          }]
        };
        //Add group name (= elm_class_name) to config to show grouped lightbox.
        if (limit > 1) {
          lightbox_config.group = elm_class_name;
        }

        $lb_elm.find('[class*="-img"]').attr('src', low_res_url); //set images.
        $lb_elm.find('[class*="-date"]').text(shot_date_str); //set date.

        var trim_length = (elm_class_name == 'ig-news') ? 45 : 160;
        trimmed_caption = caption.substring(0, trim_length) + '...';
        $lb_elm.find('[class*="-caption"]').text(trimmed_caption); // set caption.

        //Replace lightbox JSON configurations.
        $lb_elm.find('.w-json').html(JSON.stringify(lightbox_config));

        // TODO: stop 1st lightbox Initialization.
        // TODO: call ready() just one time outside of this function.
        // Initialize lightbox again with newly set configurations.
        Webflow.require('lightbox').ready();
      }
    }

    fetcher.fetch({
      // user: 1980581384, // This is the ID for sora_to_iro, you can get the ID from username using http://jelled.com/instagram/lookup-user-id
      user: 2536296892, // This is the ID for jointanet, you can get the ID from username using http://jelled.com/instagram/lookup-user-id
      tag: tag_name,
      limit: limit,
      callback: setIGitems, // You can customize your own functionality by building from the logResults method
      params: ''
    });
  }

  //Start fading Intro.
  $('#intro').delay(2000).fadeOut(1000, function(){
  // $('#intro').delay(0).fadeOut(0, function(){
    //Show main sections.
    $('.w-section').show();
    /**
     * Webflow: Interactions initialization.
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

    // Get an instance of a fetcher for Instagram API.
    var fetcher = new Instafetch('81e3d3f35c8a4438964001decaa5a31f');
    getIGitems(fetcher, 4, 'イベント', 'ig-event');
    getIGitems(fetcher, 1, 'ニュース', 'ig-news');
    getIGitems(fetcher, 1, 'ごはん', 'ig-lunch');
  });




})(window.jQuery);
