////// This code loads the IFrame Player API code asynchronously.///////
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
///////////////////////////////////////////////////////////////////////
	  var test = 5;
      var leftPlayer;
	  var rightPlayer;
      function onYouTubeIframeAPIReady() {
        leftPlayer = new YT.Player('left_player', {
          videoId: 'lHjNmyzrVvM',
		  playerVars: { 'autoplay': 0, 'controls': 1, 'modestbranding': 1 },
          events: {
            'onReady': onLeftReady,
            'onStateChange': onLeftStateChange
          }
        });
        rightPlayer = new YT.Player('right_player', {
          videoId: 'cjVQ36NhbMk',
		  playerVars: { 'autoplay': 0, 'controls': 1 },
          events: {
            'onReady': onRightReady,
            'onStateChange': onRightStateChange
          }
        });
      }
	  
	  var leftReady = false;
	  var rightReady = false;
	  
      function onLeftReady(event) {
		  leftReady = true;
		  event.target.setVolume(100-slider.noUiSlider.get());
		  
      }
      function onLeftStateChange(event) {
	  }
	  
	  function onRightReady(event) {
		  rightReady=true;
		  event.target.setVolume(slider.noUiSlider.get());
      }
      function onRightStateChange(event) {
      }