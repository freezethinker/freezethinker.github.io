var currentCounter = 0;
var captionLength = 0;
var captionList = [
	'Hey there!',
	'I like to talk about tech',
	'I explore new eateries',
	'I love adventure'];

$(document).ready(function(){
	setInterval('cursorBlink()',500);
	startTyping();
});

function startTyping(){
	caption = captionList[currentCounter];
	currentCounter = (currentCounter+1) % captionList.length;
	type();
}

function type(){
	$('#captions-go-here').text('> ' + caption.substr(0,captionLength++));
	if(captionLength < caption.length + 1)
		setTimeout('type()',100);
	else
		setTimeout('erase()',1000);
}

function erase(){
	$('#captions-go-here').text('> ' + caption.substr(0,captionLength--));
	if(captionLength >= 0)
		setTimeout('erase()',50);
	else
		setTimeout('startTyping()',100);
}

function cursorBlink(){
	$('#cursor-goes-here').animate({
		opacity: 0
	}, 'fast', 'swing').animate({
		opacity: 1
	}, 'fast', 'swing');
}