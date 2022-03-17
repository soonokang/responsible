var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      
      function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
          videoId: 'jT4kuYdumJQ', //영상이 재생할 유투브 id
          playerVars:{
            autoplay : true,
            loop : true,
            playlist : 'jT4kuYdumJQ',
          },
          events: {
            'onReady': function(event){
                event.target.mute(); //음소거 설정
            }
          }
        });
      }