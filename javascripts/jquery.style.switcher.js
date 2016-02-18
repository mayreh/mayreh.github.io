/**
@author Cameron Manavian
jQuery Style Switcher

The MIT License (MIT)

Copyright (c) 2014 Cameron Manavian

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
**/
!function(e){var t,n={hasPreview:!0,defaultThemeId:"jssDefault",fullPath:"css/",cookie:{expires:30,isManagingLoad:!0}},i="jss_selected",s={};s={getItem:function(e){return e?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:null},setItem:function(e,t,n,i,s,o){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var c="";if(n)switch(n.constructor){case Number:c=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:c="; expires="+n;break;case Date:c="; expires="+n.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+c+(s?"; domain="+s:"")+(i?"; path="+i:"")+(o?"; secure":""),!0},removeItem:function(e,t,n){return this.hasItem(e)?(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:"")+(t?"; path="+t:""),!0):!1},hasItem:function(e){return e?new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie):!1},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),t=e.length,n=0;t>n;n++)e[n]=decodeURIComponent(e[n]);return e}},t=function(e,t){return this.init(e,t)},t.prototype={$root:null,config:{},$themeCss:null,defaultTheme:null,init:function(e,t){this.$root=e,this.config=t?t:{},this.setDefaultTheme(),this.defaultTheme?(this.config.cookie&&this.checkCookie(),this.config.hasPreview&&this.addHoverEvents(),this.addClickEvents()):this.$root.addClass("jssError error level0")},setDefaultTheme:function(){this.$themeCss=e("link[id="+this.config.defaultThemeId+"]"),this.$themeCss.length&&(this.defaultTheme=this.$themeCss.attr("href"))},resetStyle:function(){this.updateStyle(this.defaultTheme)},updateStyle:function(e){this.$themeCss.attr("href",e)},getFullAssetPath:function(e){return this.config.fullPath+e+".css"},checkCookie:function(){var e;this.config.cookie&&this.config.cookie.isManagingLoad&&(e=s.getItem(i),e&&(newStyle=this.getFullAssetPath(e),this.updateStyle(newStyle),this.defaultTheme=newStyle))},addHoverEvents:function(){var t=this;this.$root.find("a").hover(function(){var n=e(this).data("theme"),i=t.getFullAssetPath(n);t.updateStyle(i)},function(){t.resetStyle()})},addClickEvents:function(){var t=this;this.$root.find("a").click(function(){var n=e(this).data("theme"),o=t.getFullAssetPath(n);t.updateStyle(o),t.defaultTheme=o,t.config.cookie&&s.setItem(i,n,t.config.cookie.expires,"/")})}},e.fn.styleSwitcher=function(i){return new t(this,e.extend(!0,n,i))}}(jQuery);