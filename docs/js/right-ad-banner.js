(function($){
$(function(){
	var _target = $('div.partsBnr');
	var _config = $('div[data-src]',_target);
	var _anchorTarget = $('div[data-anchor]', _target);
	var num = Math.floor(Math.random()*_config.size());
	var _setting = _config.eq(num);
	var _setting02 = _anchorTarget.eq(num);
	var _anchor = $('div.partsBnr div').attr('data-anchor');
	if (_setting.attr('data-href').match(/\?/)) {
		if (_setting02.attr('data-anchor') != undefined) {
			_target.html(['<a href="', _setting.attr('data-href'), '&l-id=item-r-0', num + 1, _setting02.attr('data-anchor'), '" data-ratId="item-r-0', num + 1, '" data-ratEvent="click" onClick="s.lidTrack(\'item-r-img-0', num + 1, '\')"><img src="', _setting.attr('data-src'), '" alt="" width="300" height="250"></a>'].join(''));
		} else {
			_target.html(['<a href="', _setting.attr('data-href'), '&l-id=item-r-0', num + 1, '" data-ratId="item-r-0', num + 1, '" data-ratEvent="click" onClick="s.lidTrack(\'item-r-img-0', num + 1, '\')"><img src="', _setting.attr('data-src'), '" alt="" width="300" height="250"></a>'].join(''));
		}
	} else {
		if (_setting02.attr('data-anchor') != undefined) {
			_target.html(['<a href="', _setting.attr('data-href'), '?l-id=item-r-0', num + 1, _setting02.attr('data-anchor'), '" data-ratId="item-r-0', num + 1, '" data-ratEvent="click" onClick="s.lidTrack(\'item-r-img-0', num + 1, '\')"><img src="', _setting.attr('data-src'), '" alt="" width="300" height="250"></a>'].join(''));
		} else {
			_target.html(['<a href="', _setting.attr('data-href'), '?l-id=item-r-0', num + 1, '" data-ratId="item-r-0', num + 1, '" data-ratEvent="click" onClick="s.lidTrack(\'item-r-img-0', num + 1, '\')"><img src="', _setting.attr('data-src'), '" alt="" width="300" height="250"></a>'].join(''));
		}
	}
});
})(jQuery);