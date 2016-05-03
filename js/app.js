$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '550px');
			}
		);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	$(document).keydown(function(e) {
		if(e.keyCode === 90){
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show();
		}
	})
	$(document).keyup(function(e) {
		if(e.keyCode === 90){
			$('.ryu-cool').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-still').show();
		}
	})
/*Hulk Ryu Function*/
	$('.hulk-ryu').mouseenter(function() {
		$('.hulk-still').hide();
		$('.hulk-ready').show();
	})
	.mouseleave(function() {
		$('.hulk-ready').hide();
		$('.hulk-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.hulk-ready').hide();
		$('.hulk-still').hide();
		$('.hulk-throwing').show();
		$('.hulk-hadouken').finish().show().animate(
			{'left': '650px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '1100px');
			}
		);
	})
	.mouseup(function() {
		$('.hulk-throwing').hide();
		$('.hulk-still').hide();
		$('.hulk-ready').show();
	})
	$(document).keydown(function(e) {
		if(e.keyCode === 88){
			$('.hulk-still').hide();
			$('.hulk-ready').hide();
			$('.hulk-throwing').hide();
			$('.hulk-cool').show();
		}
	})
	$(document).keyup(function(e) {
		if(e.keyCode === 88){
			$('.hulk-cool').hide();
			$('.hulk-ready').hide();
			$('.hulk-throwing').hide();
			$('.hulk-still').show();
		}
	});	
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}