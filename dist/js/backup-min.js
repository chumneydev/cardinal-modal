!function(e,t,i,s){"use strict";e(this);var n="Cardinal",o={title:"",subTitle:"",headerColor:"",titleColor:"#000000",closeButton:!0,includeCloseButton:!0,width:500,closable:!0,autoOpen:!1,overlay:!0,overlayClose:!0,overlayDuration:null,overlayDelay:1,modalID:"",ajaxURL:"",cookieAmount:0,cookieName:"",cookieValue:"",exitIntent:!1};function l(t,i){this.element=t,this.settings=e.extend({},o,i),this._defaults=o,this._name=n,1!=this.settings.autoOpen&&e(t).addClass("ca-hidden"),this.init()}e.extend(l.prototype,{init:function(){if(this.open(),this.overlay){var t=this.overlay;e(t).on("click",function(){this.close.bind(this)})}this.overlay&&this.overlay.addEventListener("click",this.close.bind(this)),this.settings.cookieName&&(this.createCookie(this.settings.cookieName,this.settings.cookieValue,this.settings.cookieAmount),console.log("Cookie: "),console.log(this.readCookie(this.settings.cookieName)))},open:function(){this.create(),this.ajaxContent(),this.closeButton()},createCookie:function(e,t,s){if(s){var n=new Date;n.setTime(n.getTime()+24*s*60*60*1e3);var o="; expires="+n.toUTCString()}else o="";i.cookie=e+"="+t+o+"; path=/"},readCookie:function(e){for(var t=e+"=",s=i.cookie.split(";"),n=0;n<s.length;n++){for(var o=s[n];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null},deleteCookie:function(e){createCookie(e,"",-1)},close:function(){e(this.element).removeClass("is-opened"),e(this.overlay).removeClass("is-opened"),e(this.overlay).remove()},closeButton:function(){0!=this.settings.includeCloseButton&&(this.closeButton=i.createElement("button"),e(this.closeButton).attr("class","ca-close-button"),e(this.element).prepend(this.closeButton))},ajaxContent:function(){""!==this.settings.ajaxURL&&e.get(this.settings.ajaxURL,function(t){e(".ca-content").html(t)})},yourOtherFunction:function(t){e(this.element).text(t)},create:function(){if(e(this.element).addClass("cardinal-modal"),null!=this.settings.width&&e(this.element).css("max-width",this.settings.width+"px"),0!=this.settings.overlay?(this.overlay=i.createElement("div"),e(this.overlay).attr("id","cardinal-overlay"),e("body").append(this.overlay)):e(this.element).addClass("no-overlay"),(this.settings.closable=!1)&&(this.overlay.off("click"),console.log("woo")),""!=this.settings.title||""!=this.settings.subTitle){if(this.header=i.createElement("div"),e(this.header).attr("class","ca-header"),e(this.element).prepend(this.header),null!==this.settings.headerColor&&e(this.header).css("background",this.settings.headerColor),null!==this.settings.title){var t=i.createElement("h1");this.header.appendChild(t);var s=i.createTextNode(this.settings.title);t.appendChild(s)}if(null!==this.settings.subTitle){var n=i.createElement("h2");this.header.appendChild(n);var o=i.createTextNode(this.settings.subTitle);n.appendChild(o)}null!==this.settings.titleColor&&(e(t).css("color",this.settings.titleColor),e(n).css("color",this.settings.titleColor))}!0===this.settings.autoOpen&&(e(this.overlay).addClass("is-opened").fadeIn(3e4).delay(3e4),e(this.element).addClass("is-opened").fadeIn(3e4).delay(3e4)),!0===this.settings.exitIntent&&i.addEventListener("mouseout",t=>{null===t.toElement&&null===t.relatedTarget&&(e(this.overlay).addClass("is-opened").fadeIn(3e4).delay(3e4),e(this.element).addClass("is-opened").fadeIn(3e4).delay(3e4))})}}),e.fn[n]=function(t){return this.each(function(){e.data(this,"plugin_"+n)||e.data(this,"plugin_"+n,new l(this,t))})}}(jQuery,window,document);