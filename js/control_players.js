function setVolumes(sliderValue) 
{
	leftPlayer.setVolume(100-sliderValue);
	rightPlayer.setVolume(sliderValue);
}

function nextVideo(plr)
{
	var player;
	if (plr == 'left')
		player = leftPlayer;
	else if (plr == 'right')
		player = rightPlayer;

	var item = returnNextVideo();
	player.loadVideoById(item.id);
}