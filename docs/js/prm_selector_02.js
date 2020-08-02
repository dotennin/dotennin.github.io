
var PrmSelector = function (datapath, elm) {
  this.initialize.apply(this, arguments);
}

PrmSelector.prototype = {
  _target_elm:null,

  initialize:function(datapath, idname) {
    this._target_elm = document.getElementById(idname);
    var scope = this;
    this.set(window,"load",function(){
      scope.jsonLoad(datapath)
    },false);
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
  jsonCallback:function(jsonData) {
    var val;
    var ary = jsonData.data;
    if (typeof s=="object" && s.prop50) {
      val = s.prop50;
    } else {
      val = "grp";
    }

    var rate = 0;
    for (var i = 0; i < jsonData.data.length; i++) {
      rate += Number(ary[i].rate);
    }

    var num = 0;
    var x = 0;
    var y = 0;
    var n = Math.floor(Math.random() * rate) + 1;

    for(var i = 0; i < jsonData.data.length; i++) {
      x = y;
      y += Number(ary[i].rate);
      if (x<n && n<=y) num = i;
    }

    var eff = ary[num].eff;
    if (eff != '') eff = '_' + eff;
    var tag = '<a href="' + ary[num].url + '" onclick="s.un=\'rakutenglobalprod\';s.dynamicAccountSelection=false;s.linkTrackVars=\'eVar45,eVar48,prop50\';s.prop50=\'' + ary[num].stLink + '\';s.eVar45=s.eVar48=\'wi_' + val + '_hdr' + eff + '\';s.tl(this,\'o\',\'gclick\')">' + ary[num].text + '</a>';
    this._target_elm.innerHTML = tag;
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
};

var datapath = "//jp.rakuten-static.com/1/js/grp/hdr/prm_list_02.jsonp";
if (document.getElementById("grpNote") != null) {
  var grpRelation = new PrmSelector(datapath, 'grpNote');
}
