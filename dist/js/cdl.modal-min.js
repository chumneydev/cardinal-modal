!function(t,e,i,s){"use strict";var n="cdl",o={width:500,cookieAmount:0,overlay:!1,cookieName:"",cookieValue:""};function a(e,i){this.element=e,this.settings=t.extend({},o,i),this._defaults=o,this._name=n,this.init()}t.extend(a.prototype,{init:function(){this.create()},create:function(){this.width(),this.cookies(),1==this.settings.autoOpen&&this.open(),1==this.settings.overlay&&this.overlay()},open:function(){t(this.element).addClass("cdl-open"),t(this.element).addClass("cdl-shadow")},overlay:function(){var e=t("<div>").attr("class","cdl-overlay");t(this.element).after(e),t(".cdl-overlay").addClass("cdl-open"),t(this.element).removeClass("cdl-shadow")},width:function(){t(this.element).css("width",this.settings.width+"px")},cookies:function(){this.settings.cookieName&&this.createCookie(this.settings.cookieName,this.settings.cookieValue,this.settings.cookieAmount)},createCookie:function(t,e,s){if(s){var n=new Date;n.setTime(n.getTime()+24*s*60*60*1e3);var o="; expires="+n.toUTCString()}else o="";i.cookie=t+"="+e+o+"; path=/"},yourOtherFunction:function(){t(this.element).text(text)}}),t.fn[n]=function(e){return this.each(function(){t.data(this,"plugin_"+n)||t.data(this,"plugin_"+n,new a(this,e))})}}(jQuery,window,document);