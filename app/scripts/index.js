(function($){
  /**
   * Fetch posts data from Instagram via it's API and set them to the specific DOM in page.
   */
  function setIGItems(fetcher, tag_name, elm_class_name, limit) {
    fetcher.fetch({
      user: 1980581384, // fetch sora_to_iro's photos. You can get this ID by username using http://jelled.com/instagram/lookup-user-id
      // user: 2536296892, // fetch jointanet's photos. You can get this ID by username using http://jelled.com/instagram/lookup-user-id
      tag: tag_name,
      limit: limit,
      callback: function(response, params) {
        var ig_items = response.data;
        var $lightbox_elms = $('.' + elm_class_name);

        for(var i = 0; i < $lightbox_elms.length; i++) {
          var $lb_elm = $lightbox_elms.eq(i);
          if (i in ig_items) {
            //Istagram item for this lightbox element was fetched from IG API.
            //Set the item to the element.
            var low_res_url = ig_items[i].images.low_resolution.url;
            var std_res_url = ig_items[i].images.standard_resolution.url;
            var thn_res_url = ig_items[i].images.thumbnail.url;
            // var shot_date = new Date(Number(ig_items[i].created_time + '000'));
            // var shot_date_str = (shot_date.getMonth() + 1) + '月' + shot_date.getDate() + '日';
            var caption = ig_items[i].caption.text;
            caption = caption.replace(/(#.+\s|#.+$)/g, ''); //eliminate tags from caption.
            var lightbox_config = {
              "items": [{
                "url": std_res_url,
                "width": 640,
                "height": 640,
                //"caption": "[" + shot_date_str + "] " + caption,
                "caption": caption,
                "type": "image"
              }]
            };
            //Add group name (= elm_class_name) to config to show grouped lightbox.
            if (limit > 1) {
              lightbox_config.group = elm_class_name;
            }

            /////
            //Start modifying lightbox element and it's descendant with data fetched from IG.
            ////
            $lb_elm.attr('href', '#'); //Replace href attr value to "#"
            $lb_elm.addClass('w-lightbox');//Put 'w-lightbox' class back to the element.
            $lb_elm.find('[class*="-img"]').attr('src', low_res_url); //set images.
            // $lb_elm.find('[class*="-date"]').text(shot_date_str); //set date.
            var trim_length = (elm_class_name == 'ig-news') ? 45 : 160;
            trimmed_caption = caption.substring(0, trim_length) + '...';
            $lb_elm.find('[class*="-caption"]').text(trimmed_caption); // set caption.
            $lb_elm.find('.w-json').html(JSON.stringify(lightbox_config)); //Replace lightbox JSON configurations.

            /////
            // Initialize lightbox again with newly set configurations.
            //  TODO: Need to remove 1st ready() call for lightbox initialization outside of this function?
            /////
            Webflow.require('lightbox').ready();
          } else {
            //Istagram item for this lightbox element was not fetched from IG API.
            //Hide the element.
            $lb_elm.hide();
          }
        }
      }
    });
  }

  ////////////////
  //
  // Start from here.
  //
  ////////////////
  $('#intro').delay(2000).fadeOut(1000, function(){ //Start fading the intro
  // $('#intro').delay(0).fadeOut(0, function(){ //Skip intro for testing.
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
    var fetcher = new Instafetch('1980581384.1677ed0.0dc8e578181242c28659d86bae62cceb'); //IG access_token of sora_to_iro.
    setIGItems(fetcher, 'イベント', 'ig-event', 4);
    setIGItems(fetcher, 'おしらせ', 'ig-news', 1);
    setIGItems(fetcher, 'ごはん', 'ig-lunch', 1);
  });
  
  //map description model (Sweetalert)
  $('.map-desc a').click(function(){
      swal('JR京都線 摂津富田駅から徒歩15分\n阪急京都線 富田駅から徒歩20分\n\nバスでお越しの場合は、JR摂津富田駅 北側にあるバスロータリー4番のりばより「宮田公民館前」下車と表示されているバスに乗車していただくと5分ほどでバス停「宮田公民館前」に到着します。そこより徒歩2分ほどの場所にソラトイロはあります。\n\nまた、JR摂津富田駅近くにある、レンタサイクル「グリーンフラッグ」さんで自転車を借りてお越しいただくのもオススメです。');
  });
  $('.w-lightbox').click(function(){
    alert('mkmkmkmkmk');  
  });
})(window.jQuery);
