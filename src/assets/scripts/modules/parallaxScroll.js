var parallax = (function () {
	var bg = document.querySelector ('.hero__bg');
	var user = document.querySelector ('.hero__container');
	var sectionText = document.querySelector ('.svg-title');

	 return{
	 	move: function (block, windowScroll, strafeAmount) {
	 		var strafe = windowScroll / -strafeAmount + '%';
	 		var style = block.style;
	 		var transformString = 'translate3d(0,' + strafe +', 0)';

	 		style.transform = transformString;
	 		style.webkittransform = transformString;

	 	},

	 	init: function (wScroll) {
	 		this.move(bg, wScroll, 50);
	 		this.move(sectionText, wScroll, 20);
	 		this.move(user, wScroll, 3);
	 	}
	}
}());

window.onscroll = function () {
	var wScroll = window.pageYOffset;

	parallax.init(wScroll);
}