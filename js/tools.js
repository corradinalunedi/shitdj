function findElementIndex(node){
	var index = 0;
    while ( (node = node.previousSibling) ) {
        if (node.nodeType != 3 || !/^\s*$/.test(node.data)) {
            index++;
        }
    }
    return index;
}

function returnNextVideo(){
	if (queue.length > 0) {
		var video = queue[0];
		var node = document.getElementById("queue-list").firstElementChild; //find first element of queue in html to remove thumb
		removeFromQueue(node);
		return video;
	}
}