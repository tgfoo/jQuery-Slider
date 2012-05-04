function Slider(container, nav) {
	this.container = container;
	this.nav = nav.show();

	this.imgs = this.container.find('img');
	this.imgWidth = this.imgs[0].width;
	this.imgsLen = this.imgs.length;
	this.imgsList = this.nav.children('div').children('ul');

	this.current = 0;
}

Slider.prototype.init = function() {
	var count = 0;

	this.imgs.each($.proxy(function() {
		$('<li data-pos="' + count + '"><span>&bull;</span></li>').appendTo(this);
		count++;
	}, this.imgsList) );

	this.imgsList.css('width', this.imgsLen * 26);
};

Slider.prototype.transition = function( coords ) {
	this.container.animate({
		'margin-left': coords || -( this.current * this.imgWidth )
	});
};

Slider.prototype.setCurrent = function( dir ) {
	var pos = this.current;
	pos += ( ~~(dir === 'next' ) || -1 );

	this.current = ( pos < 0 ) ? this.imgsLen - 1 : pos % this.imgsLen;

	return pos;
};

Slider.prototype.setPosition = function ( pos ) {
	return this.current = pos;
};
