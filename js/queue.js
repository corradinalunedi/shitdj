var MAX_QUEUE_SIZE = 10;
var queue = new Array();

function addToQueueList() {
	var i = queue.length-1;
	var item = queue[i];
	
	var ql = document.getElementById("queue-list");
	
	var li = document.createElement("LI");
	li.className = "one-col";
		
	//ADD THUMBNAIL
	var img = document.createElement("img");
	img.src = item.thumbnail;
	li.appendChild(img);
	(function () {
		li.addEventListener("contextmenu", function(){removeFromQueue(this);}, false);
	})(i);	
	ql.appendChild(li);
}

function removeFromQueue(node) {
	var i = findElementIndex(node);
	if (i >= 0) queue.splice(i, 1); //REMOVE i from array
	node.parentNode.removeChild(node);
}