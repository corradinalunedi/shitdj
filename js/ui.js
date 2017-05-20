
//SORTABLE QUEUE//
var el = document.getElementById('queue-list');
var sortable = Sortable.create(el, {
    onEnd: function (/**Event*/evt) {
        var oldIndex = evt.oldIndex;  // element's old index within parent
        var newIndex = evt.newIndex;  // element's new index within parent
		queue.splice(newIndex, 0, queue.splice(oldIndex, 1)[0]); //change position of element in queue array.
		console.log(queue);
    }});

	
//SLIDER//
var slider = document.getElementById('slider');

noUiSlider.create(slider, {
	start: [ 0 ],
	range: {
		'min': [ 0 ],
		'max': [ 100 ]
	}
});

slider.noUiSlider.on('slide', function(){
	onSlide();
});

function onSlide()
{
		setVolumes(slider.noUiSlider.get());
}

