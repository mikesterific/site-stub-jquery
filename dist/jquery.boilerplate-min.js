!function($,t,e,n){"use strict";function i(t,e){this.element=t,this.settings=$.extend({},s,e),this._defaults=s,this._name=u,this.init()}var u="defaultPluginName",s={propertyName:"value"};$.extend(i.prototype,{init:function(){$(this.element).hide(),this.yourOtherFunction("jQuery Boilerplatess")},yourOtherFunction:function(t){$(this.element).text(t)}}),$.fn[u]=function(t){return this.each(function(){$.data(this,"plugin_"+u)||$.data(this,"plugin_"+u,new i(this,t))})}}(jQuery,window,document);