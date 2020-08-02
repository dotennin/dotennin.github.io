var grpFooterRelation;

(function(){

var PrmSelector = function (datapath, elm) {
	this.initialize.apply(this, arguments);
}

PrmSelector.prototype = {

	initialize:function(datapath) {
		var scope=this;
		this.set(window,"load",function(){scope.jsonLoad(datapath);},false);
	},
	jsonLoad:function(datapath) {
		if (window.location.protocol == "https:") {
			datapath = datapath.replace("http:","https:");
		}
		var rateMintes = 5;
		var now = new Date();

		var year    = now.getFullYear(),
				month   = ("0" + (now.getMonth()+1)).slice(-2),
				date    = ("0" + now.getDate()).slice(-2),
				hours   = ("0" + now.getHours()).slice(-2);

		var	minutes = now.getMinutes();
		if ((minutes % rateMintes ) != 0) {
			minutes = minutes - (minutes % rateMintes);
		}
		minutes = ("0" + minutes).slice(-2);

		var datePath = year + month + date + hours + minutes;

		datapath += "?rn=" + datePath;

		var scriptElm = document.createElement("script");
		scriptElm.setAttribute("charset", "EUC-JP");
		scriptElm.setAttribute("type", "text/javascript");
		scriptElm.setAttribute("src", datapath);
		document.getElementsByTagName("head")[0].appendChild(scriptElm);
	},
	set:function(elm,evt,func,cap){
		if(elm.addEventListener){
			elm.addEventListener(evt,func,cap);
		} else if(elm.attachEvent){
			elm.attachEvent('on'+evt,func);
		} else{
			return false;
		}
	}
}

var datapath = "//jp.rakuten-static.com/1/js/grp/ftr/jsonp/footer_prm_list.jsonp";
var grpRelation = new PrmSelector(datapath);

grpFooterRelation = function(jsonData){
	var val;
	var ary = jsonData.data;
	var num = Math.floor(Math.random() * jsonData.data.length);
	var tag = '<a href="' + ary[num].url + '">' + ary[num].text + '</a>';
	document.getElementById("grpRakutenRecommend").innerHTML = tag;
}

})();
