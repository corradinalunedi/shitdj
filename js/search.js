var RESULTS_PER_PAGE = 5;
var currentResults = new Array();

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}
// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyDDuBs3oAlUHrwhIicyP5yxw75V6xs5Oyg');
}
 
// Called when the search button is clicked in the html code
function search() {
    var query = document.getElementById('query').value;
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q:query,
		videoEmbeddable: 'true',
		type: 'video',
		maxResults: RESULTS_PER_PAGE
    });
    // Send the request to the API server, call the onSearchResponse function when the data is returned
    request.execute(onSearchResponse);
}
var rsp; //TEMPORARY DEBUG VARIABLE.
// Triggered by this line: request.execute(onSearchResponse);
function onSearchResponse(response) {
	rsp = response;
	var i;
	for (i = 0; i < RESULTS_PER_PAGE; i++) {
		var item = response.items[i];
		currentResults[i] = {id:item.id.videoId, title:item.snippet.title, thumbnail:item.snippet.thumbnails.default.url,};
	}
	for (i = 0; i < RESULTS_PER_PAGE; i++) {
		//ADD THUMBNAIL
		var img = document.createElement("img");
		img.src = currentResults[i].thumbnail;
		var search_thumb = document.getElementById("search-thumb-"+i);
		search_thumb.replaceChild(img, search_thumb.childNodes[0]); 
		//ADD TITLE
		var txt = document.createTextNode(currentResults[i].title);
		var search_title = document.getElementById("search-title-"+i);
		search_title.replaceChild(txt, search_title.childNodes[0]);
		//ADD ADD BUTTON
		var btn = document.createElement("button");
		btn.className = "add-button";
		//make button click function specific to what 'i' is. ie. pass i to addToQueue
		(function (i) {
		btn.addEventListener("click", function(){addToQueue(i);}, false);
		})(i);
		btn.innerHTML = "+";
		search_thumb.appendChild(btn);
	}
}

function addToQueue(searchIndex)
{
	if (queue.length < MAX_QUEUE_SIZE) {
		queue.push(currentResults[searchIndex]);
		addToQueueList();
	}else{
		//QUEUE FULL
	}
}