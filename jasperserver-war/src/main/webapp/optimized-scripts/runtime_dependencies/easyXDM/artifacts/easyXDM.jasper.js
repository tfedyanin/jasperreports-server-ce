!function(e){"use strict";define(["./log/log"],e)}(function(e){function n(e,n){var t=typeof e[n];return"function"==t||!("object"!=t||!e[n])||"unknown"==t}function t(e,n){return!("object"!=typeof e[n]||!e[n])}function o(e){return"[object Array]"===Object.prototype.toString.call(e)}function r(){var e="Shockwave Flash",n="application/x-shockwave-flash";if(!m(navigator.plugins)&&"object"==typeof navigator.plugins[e]){var t=navigator.plugins[e].description;t&&!m(navigator.mimeTypes)&&navigator.mimeTypes[n]&&navigator.mimeTypes[n].enabledPlugin&&(M=t.match(/\d+/g))}if(!M){var o;try{o=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),M=Array.prototype.slice.call(o.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/),1),o=null}catch(e){}}if(!M)return!1;var r=parseInt(M[0],10),a=parseInt(M[1],10);return O=r>9&&a>0,!0}function a(){if(!q){q=!0,L("firing dom_onReady");for(var e=0;e<U.length;e++)U[e]();U.length=0}}function i(e,n){if(q)return void e.call(n);U.push(function(){e.call(n)})}function c(){var e=parent;if(""!==X)for(var n=0,t=X.split(".");n<t.length;n++)e=e[t[n]];return e.easyXDM}function s(e){return L("Settings namespace to '"+e+"'"),window.easyXDM=j,X=e,X&&(I="easyXDM_"+X.replace(".","_")+"_"),B}function l(e){return e.match(N)[3]}function u(e){return e.match(N)[4]||""}function d(e){var n=e.toLowerCase().match(N),t=n[2],o=n[3],r=n[4]||"";return("http:"==t&&":80"==r||"https:"==t&&":443"==r)&&(r=""),t+"//"+o+r}function p(e){if(e=e.replace(H,"$1/"),!e.match(/^(http||https):\/\//)){var n="/"===e.substring(0,1)?"":location.pathname;"/"!==n.substring(n.length-1)&&(n=n.substring(0,n.lastIndexOf("/")+1)),e=location.protocol+"//"+location.host+n+e}for(;P.test(e);)e=e.replace(P,"");return L("resolved url '"+e+"'"),e}function f(e,n){var t="",o=e.indexOf("#");-1!==o&&(t=e.substring(o),e=e.substring(0,o));var r=[];for(var a in n)n.hasOwnProperty(a)&&r.push(a+"="+encodeURIComponent(n[a]));return e+(J?"#":-1==e.indexOf("?")?"?":"&")+r.join("&")+t}function m(e){return void 0===e}function g(e,n,t){var o;for(var r in n)n.hasOwnProperty(r)&&(r in e?(o=n[r],"object"==typeof o?g(e[r],o,t):t||(e[r]=n[r])):e[r]=n[r]);return e}function h(){var e=document.body.appendChild(document.createElement("form")),n=e.appendChild(document.createElement("input"));n.name=I+"TEST"+F,x=n!==e.elements[n.name],document.body.removeChild(e),L("HAS_NAME_PROPERTY_BUG: "+x)}function v(e){L("creating frame: "+e.props.src),m(x)&&h();var n;x?n=document.createElement('<iframe name="'+e.props.name+'"/>'):(n=document.createElement("IFRAME"),n.name=e.props.name),n.id=n.name=e.props.name,delete e.props.name,"string"==typeof e.container&&(e.container=document.getElementById(e.container)),e.container||(g(n.style,{position:"absolute",top:"-2000px",left:"0px"}),e.container=document.body);var t=e.props.src;if(e.props.src="javascript:false",g(n,e.props),n.border=n.frameBorder=0,n.allowTransparency=!0,e.container.appendChild(n),e.onLoad&&T(n,"load",e.onLoad),e.usePost){var o,r=e.container.appendChild(document.createElement("form"));if(r.target=n.name,r.action=t,r.method="POST","object"==typeof e.usePost)for(var a in e.usePost)e.usePost.hasOwnProperty(a)&&(x?o=document.createElement('<input name="'+a+'"/>'):(o=document.createElement("INPUT"),o.name=a),o.value=e.usePost[a],r.appendChild(o));r.submit(),r.parentNode.removeChild(r)}else n.src=t;return e.props.src=t,n}function w(e){return e.replace(/[-[\]\/{}()+.\^$|]/g,"\\$&").replace(/(\*)/g,".$1").replace(/\?/g,".")}function y(e,n){"string"==typeof e&&(e=[e]);for(var t,o=e.length;o--;){if(t="^"===e[o].substr(0,1)&&"$"===e[o].substr(e[o].length-1,1)?e[o]:"^"+w(e[o])+"$",t=new RegExp(t),t.test(n))return!0}return!1}function b(e){var t,o=e.protocol;if(e.isHost=e.isHost||m(z.xdm_p),J=e.hash||!1,L("preparing transport stack"),e.props||(e.props={}),e.isHost)e.remote=p(e.remote),e.channel=e.channel||"default"+F++,e.secret=Math.random().toString(16).substring(2),m(o)?(o=d(location.href)==d(e.remote)?"4":n(window,"postMessage")||n(document,"postMessage")?"1":e.swf&&n(window,"ActiveXObject")&&r()?"6":"Gecko"===navigator.product&&"frameElement"in window&&-1==navigator.userAgent.indexOf("WebKit")?"5":e.remoteHelper?"2":"0",L("selecting protocol: "+o)):L("using protocol: "+o);else if(L("using parameters from query"),e.channel=z.xdm_c.replace(/["'<>\\]/g,""),e.secret=z.xdm_s,e.remote=z.xdm_e.replace(/["'<>\\]/g,""),o=z.xdm_p,e.acl&&!y(e.acl,e.remote))throw new Error("Access denied for "+e.remote);switch(e.protocol=o,o){case"0":if(g(e,{interval:100,delay:2e3,useResize:!0,useParent:!1,usePolling:!1},!0),e.isHost){if(!e.local){L("looking for image to use as local");for(var a,i=location.protocol+"//"+location.host,c=document.body.getElementsByTagName("img"),s=c.length;s--;)if(a=c[s],a.src.substring(0,i.length)===i){e.local=a.src;break}e.local||(L("no image found, defaulting to using the window"),e.local=window)}var l={xdm_c:e.channel,xdm_p:0};e.local===window?(e.usePolling=!0,e.useParent=!0,e.local=location.protocol+"//"+location.host+location.pathname+location.search,l.xdm_e=e.local,l.xdm_pa=1):l.xdm_e=p(e.local),e.container&&(e.useResize=!1,l.xdm_po=1),e.remote=f(e.remote,l)}else g(e,{useParent:!m(z.xdm_pa),usePolling:!m(z.xdm_po),useResize:!e.useParent&&e.useResize});t=[new B.stack.HashTransport(e),new B.stack.ReliableBehavior({}),new B.stack.QueueBehavior({encode:!0,maxLength:4e3-e.remote.length}),new B.stack.VerifyBehavior({initiate:e.isHost})];break;case"1":t=[new B.stack.PostMessageTransport(e)];break;case"2":e.isHost&&(e.remoteHelper=p(e.remoteHelper)),t=[new B.stack.NameTransport(e),new B.stack.QueueBehavior,new B.stack.VerifyBehavior({initiate:e.isHost})];break;case"3":t=[new B.stack.NixTransport(e)];break;case"4":t=[new B.stack.SameOriginTransport(e)];break;case"5":t=[new B.stack.FrameElementTransport(e)];break;case"6":M||r(),t=[new B.stack.FlashTransport(e)]}return t.push(new B.stack.QueueBehavior({lazy:e.lazy,remove:!0})),t}function k(e){for(var n,t={incoming:function(e,n){this.up.incoming(e,n)},outgoing:function(e,n){this.down.outgoing(e,n)},callback:function(e){this.up.callback(e)},init:function(){this.down.init()},destroy:function(){this.down.destroy()}},o=0,r=e.length;o<r;o++)n=e[o],g(n,t,!0),0!==o&&(n.down=e[o-1]),o!==r-1&&(n.up=e[o+1]);return n}function _(e){e.up.down=e.down,e.down.up=e.up,e.up=e.down=null}if("undefined"==typeof document)return{};var x,M,O,T,R,S=window.setTimeout,D=e.register("EasyXDM"),E=this,F=Math.floor(1e4*Math.random()),C=Function.prototype,N=/^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,P=/[\-\w]+\/\.\.\//,H=/([^:])\/\//g,X="",B={},j=window.easyXDM,I="easyXDM_",J=!1,L=C;if(n(window,"addEventListener"))T=function(e,n,t){L("adding listener "+n),e.addEventListener(n,t,!1)},R=function(e,n,t){L("removing listener "+n),e.removeEventListener(n,t,!1)};else{if(!n(window,"attachEvent"))throw new Error("Browser not supported");T=function(e,n,t){L("adding listener "+n),e.attachEvent("on"+n,t)},R=function(e,n,t){L("removing listener "+n),e.detachEvent("on"+n,t)}}var A,q=!1,U=[];if("readyState"in document?(A=document.readyState,q="complete"==A||~navigator.userAgent.indexOf("AppleWebKit/")&&("loaded"==A||"interactive"==A)):q=!!document.body,!q){if(n(window,"addEventListener"))T(document,"DOMContentLoaded",a);else if(T(document,"readystatechange",function(){"complete"==document.readyState&&a()}),document.documentElement.doScroll&&window===top){var W=function(){if(!q){try{document.documentElement.doScroll("left")}catch(e){return void S(W,1)}a()}};W()}T(window,"load",a)}var z=function(e){e=e.substring(1).split("&");for(var n,t={},o=e.length;o--;)n=e[o].split("="),t[n[0]]=decodeURIComponent(n[1]);return t}(/xdm_e=/.test(location.search)?location.search:location.hash),$=function(){var e={},n={a:[1,2,3]},t='{"a":[1,2,3]}';return"undefined"!=typeof JSON&&"function"==typeof JSON.stringify&&JSON.stringify(n).replace(/\s/g,"")===t?JSON:(Object.toJSON&&Object.toJSON(n).replace(/\s/g,"")===t&&(e.stringify=Object.toJSON),"function"==typeof String.prototype.evalJSON&&(n=t.evalJSON(),n.a&&3===n.a.length&&3===n.a[2]&&(e.parse=function(e){return e.evalJSON()})),e.stringify&&e.parse?($=function(){return e},e):null)};g(B,{version:"2.4.20.4",query:z,stack:{},apply:g,getJSONObject:$,whenReady:i,noConflict:s});var V={_deferred:[],flush:function(){this.trace("... deferred messages ...");for(var e=0,n=this._deferred.length;e<n;e++)this.trace(this._deferred[e]);this._deferred.length=0,this.trace("... end of deferred messages ...")},getTime:function(){var e=new Date,n=e.getHours()+"",t=e.getMinutes()+"",o=e.getSeconds()+"",r=e.getMilliseconds()+"";return 1==n.length&&(n="0"+n),1==t.length&&(t="0"+t),1==o.length&&(o="0"+o),r="000".substring(r.length)+r,n+":"+t+":"+o+"."+r},log:function(e){D.debug(location.host+(X?":"+X:"")+": "+e)},getTracer:function(n){var t=e.register(n);return function(e){t.debug(e)}}};return V.log("easyXDM present on '"+location.href),B.Debug=V,L=V.getTracer("EasyXDM.{Private}"),B.DomHelper={on:T,un:R,requiresJSON:function(e){t(window,"JSON")?V.log("native JSON found"):(V.log("loading external JSON"),document.write('<script type="text/javascript" src="'+e+'"><\/script>'))}},function(){var e={};B.Fn={set:function(n,t){this._trace("storing function "+n),e[n]=t},get:function(n,t){if(this._trace("retrieving function "+n),e.hasOwnProperty(n)){var o=e[n];return o||this._trace(n+" not found"),t&&delete e[n],o}}},B.Fn._trace=V.getTracer("easyXDM.Fn")}(),B.Socket=function(e){V.getTracer("easyXDM.Socket")("constructor");var n=k(b(e).concat([{incoming:function(n,t){e.onMessage(n,t)},callback:function(n){e.onReady&&e.onReady(n)}}])),t=d(e.remote);this.origin=d(e.remote),this.destroy=function(){n.destroy()},this.postMessage=function(e){n.outgoing(e,t)},n.init()},B.Rpc=function(e,n){if(V.getTracer("easyXDM.Rpc")("constructor"),n.local)for(var t in n.local)if(n.local.hasOwnProperty(t)){var o=n.local[t];"function"==typeof o&&(n.local[t]={method:o})}var r=k(b(e).concat([new B.stack.RpcBehavior(this,n),{callback:function(n){e.onReady&&e.onReady(n)}}]));this.origin=d(e.remote),this.destroy=function(){r.destroy()},r.init()},B.stack.SameOriginTransport=function(e){var n=V.getTracer("easyXDM.stack.SameOriginTransport");n("constructor");var t,o,r,a;return t={outgoing:function(e,n,t){r(e),t&&t()},destroy:function(){n("destroy"),o&&(o.parentNode.removeChild(o),o=null)},onDOMReady:function(){n("init"),a=d(e.remote),e.isHost?(g(e.props,{src:f(e.remote,{xdm_e:location.protocol+"//"+location.host+location.pathname,xdm_c:e.channel,xdm_p:4}),name:I+e.channel+"_provider"}),o=v(e),B.Fn.set(e.channel,function(e){return r=e,S(function(){t.up.callback(!0)},0),function(e){t.up.incoming(e,a)}})):(r=c().Fn.get(e.channel,!0)(function(e){t.up.incoming(e,a)}),S(function(){t.up.callback(!0)},0))},init:function(){i(t.onDOMReady,t)}}},B.stack.FlashTransport=function(e){function n(e,n){S(function(){o("received message"),r.up.incoming(e,c)},0)}function t(n){o("creating factory with SWF from "+n);var t=e.swf+"?host="+e.isHost,r="easyXDM_swf_"+Math.floor(1e4*Math.random());B.Fn.set("flash_loaded"+n.replace(/[\-.]/g,"_"),function(){B.stack.FlashTransport[n].swf=s=m.firstChild;for(var e=B.stack.FlashTransport[n].queue,t=0;t<e.length;t++)e[t]();e.length=0}),e.swfContainer?m="string"==typeof e.swfContainer?document.getElementById(e.swfContainer):e.swfContainer:(m=document.createElement("div"),g(m.style,O&&e.swfNoThrottle?{height:"20px",width:"20px",position:"fixed",right:0,top:0}:{height:"1px",width:"1px",position:"absolute",overflow:"hidden",right:0,top:0}),document.body.appendChild(m));var a="callback=flash_loaded"+encodeURIComponent(n.replace(/[\-.]/g,"_"))+"&proto="+E.location.protocol+"&domain="+encodeURIComponent(l(E.location.href))+"&port="+encodeURIComponent(u(E.location.href))+"&ns="+encodeURIComponent(X);a+="&log=true",m.innerHTML="<object height='20' width='20' type='application/x-shockwave-flash' id='"+r+"' data='"+t+"'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='"+t+"'></param><param name='flashvars' value='"+a+"'></param><embed type='application/x-shockwave-flash' FlashVars='"+a+"' allowScriptAccess='always' wmode='transparent' src='"+t+"' height='1' width='1'></embed></object>"}var o=V.getTracer("easyXDM.stack.FlashTransport");o("constructor");var r,a,c,s,m;return r={outgoing:function(n,t,o){s.postMessage(e.channel,n.toString()),o&&o()},destroy:function(){o("destroy");try{s.destroyChannel(e.channel)}catch(e){}s=null,a&&(a.parentNode.removeChild(a),a=null)},onDOMReady:function(){o("init"),c=e.remote,B.Fn.set("flash_"+e.channel+"_init",function(){S(function(){o("firing onReady"),r.up.callback(!0)})}),B.Fn.set("flash_"+e.channel+"_onMessage",n),e.swf=p(e.swf);var i=l(e.swf),u=function(){B.stack.FlashTransport[i].init=!0,s=B.stack.FlashTransport[i].swf,s.createChannel(e.channel,e.secret,d(e.remote),e.isHost),e.isHost&&(O&&e.swfNoThrottle&&g(e.props,{position:"fixed",right:0,top:0,height:"20px",width:"20px"}),g(e.props,{src:f(e.remote,{xdm_e:d(location.href),xdm_c:e.channel,xdm_p:6,xdm_s:e.secret}),name:I+e.channel+"_provider"}),a=v(e))};B.stack.FlashTransport[i]&&B.stack.FlashTransport[i].init?u():B.stack.FlashTransport[i]?B.stack.FlashTransport[i].queue.push(u):(B.stack.FlashTransport[i]={queue:[u]},t(i))},init:function(){i(r.onDOMReady,r)}}},B.stack.PostMessageTransport=function(e){function n(e){if(e.origin)return d(e.origin);if(e.uri)return d(e.uri);if(e.domain)return location.protocol+"//"+e.domain;throw"Unable to retrieve the origin of the event"}function t(t){if("string"==typeof t.data){var o=n(t);r("received message '"+t.data+"' from "+o),o==l&&t.data.substring(0,e.channel.length+1)==e.channel+" "&&a.up.incoming(t.data.substring(e.channel.length+1),o)}}function o(n){n.data==e.channel+"-ready"&&(r("firing onReady"),s="postMessage"in c.contentWindow?c.contentWindow:c.contentWindow.document,R(window,"message",o),T(window,"message",t),S(function(){a.up.callback(!0)},0))}var r=V.getTracer("easyXDM.stack.PostMessageTransport");r("constructor");var a,c,s,l;return a={outgoing:function(n,t,o){s.postMessage(e.channel+" "+n,t||l),o&&o()},destroy:function(){r("destroy"),R(window,"message",o),R(window,"message",t),c&&(s=null,c.parentNode.removeChild(c),c=null)},onDOMReady:function(){r("init"),l=d(e.remote),e.isHost?(T(window,"message",o),g(e.props,{src:f(e.remote,{xdm_e:d(location.href),xdm_c:e.channel,xdm_p:1}),name:I+e.channel+"_provider"}),c=v(e)):(T(window,"message",t),s="postMessage"in window.parent?window.parent:window.parent.document,s.postMessage(e.channel+"-ready",l),S(function(){a.up.callback(!0)},0))},init:function(){i(a.onDOMReady,a)}}},B.stack.FrameElementTransport=function(e){var n=V.getTracer("easyXDM.stack.FrameElementTransport");n("constructor");var t,o,r,a;return t={outgoing:function(e,n,t){r.call(this,e),t&&t()},destroy:function(){n("destroy"),o&&(o.parentNode.removeChild(o),o=null)},onDOMReady:function(){n("init"),a=d(e.remote),e.isHost?(g(e.props,{src:f(e.remote,{xdm_e:d(location.href),xdm_c:e.channel,xdm_p:5}),name:I+e.channel+"_provider"}),o=v(e),o.fn=function(e){return delete o.fn,r=e,S(function(){t.up.callback(!0)},0),function(e){t.up.incoming(e,a)}}):(document.referrer&&d(document.referrer)!=z.xdm_e&&(window.top.location=z.xdm_e),r=window.frameElement.fn(function(e){t.up.incoming(e,a)}),t.up.callback(!0))},init:function(){i(t.onDOMReady,t)}}},B.stack.NameTransport=function(e){function n(n){var t=e.remoteHelper+(s?"#_3":"#_2")+e.channel;a("sending message "+n),a("navigating to  '"+t+"'"),l.contentWindow.sendMessage(n,t)}function t(){s?2!=++h&&s||c.up.callback(!0):(n("ready"),a("calling onReady"),c.up.callback(!0))}function o(e){a("received message "+e),c.up.incoming(e,y)}function r(){w&&S(function(){w(!0)},0)}var a=V.getTracer("easyXDM.stack.NameTransport");a("constructor"),e.isHost&&m(e.remoteHelper)&&a("missing remoteHelper");var c,s,l,u,h,w,y,b;return c={outgoing:function(e,t,o){w=o,n(e)},destroy:function(){a("destroy"),l.parentNode.removeChild(l),l=null,s&&(u.parentNode.removeChild(u),u=null)},onDOMReady:function(){a("init"),s=e.isHost,h=0,y=d(e.remote),e.local=p(e.local),s?(B.Fn.set(e.channel,function(n){a("received initial message "+n),s&&"ready"===n&&(B.Fn.set(e.channel,o),t())}),b=f(e.remote,{xdm_e:e.local,xdm_c:e.channel,xdm_p:2}),g(e.props,{src:b+"#"+e.channel,name:I+e.channel+"_provider"}),u=v(e)):(e.remoteHelper=e.remote,B.Fn.set(e.channel,o));var n=function(){var o=l||this;R(o,"load",n),B.Fn.set(e.channel+"_load",r),function e(){"function"==typeof o.contentWindow.sendMessage?t():S(e,50)}()};l=v({props:{src:e.local+"#_4"+e.channel},onLoad:n})},init:function(){i(c.onDOMReady,c)}}},B.stack.HashTransport=function(e){function n(n){if(a("sending message '"+(f+1)+" "+n+"' to "+y),!h)return void a("no caller window");var t=e.remote+"#"+f+++"_"+n;(s||!w?h.contentWindow:h).location=t}function t(e){p=e,a("received message '"+p+"' from "+y),c.up.incoming(p.substring(p.indexOf("_")+1),y)}function o(){if(m){var e=m.location.href,n="",o=e.indexOf("#");-1!=o&&(n=e.substring(o)),n&&n!=p&&(a("poll: new message"),t(n))}}function r(){a("starting polling"),l=setInterval(o,u)}var a=V.getTracer("easyXDM.stack.HashTransport");a("constructor");var c,s,l,u,p,f,m,h,w,y;return c={outgoing:function(e,t){n(e)},destroy:function(){window.clearInterval(l),!s&&w||h.parentNode.removeChild(h),h=null},onDOMReady:function(){if(s=e.isHost,u=e.interval,p="#"+e.channel,f=0,w=e.useParent,y=d(e.remote),s){if(g(e.props,{src:e.remote,name:I+e.channel+"_provider"}),w)e.onLoad=function(){m=window,r(),c.up.callback(!0)};else{var n=0,t=e.delay/50;!function o(){if(++n>t)throw a("unable to get reference to _listenerWindow, giving up"),new Error("Unable to reference listenerwindow");try{m=h.contentWindow.frames[I+e.channel+"_consumer"]}catch(e){}m?(r(),a("got a reference to _listenerWindow"),c.up.callback(!0)):S(o,50)}()}h=v(e)}else m=window,r(),w?(h=parent,c.up.callback(!0)):(g(e,{props:{src:e.remote+"#"+e.channel+new Date,name:I+e.channel+"_consumer"},onLoad:function(){c.up.callback(!0)}}),h=v(e))},init:function(){i(c.onDOMReady,c)}}},B.stack.ReliableBehavior=function(e){var n=V.getTracer("easyXDM.stack.ReliableBehavior");n("constructor");var t,o,r=0,a=0,i="";return t={incoming:function(e,c){n("incoming: "+e);var s=e.indexOf("_"),l=e.substring(0,s).split(",");e=e.substring(s+1),l[0]==r&&(n("message delivered"),i="",o&&o(!0)),e.length>0&&(n("sending ack, and passing on "+e),t.down.outgoing(l[1]+","+r+"_"+i,c),a!=l[1]&&(a=l[1],t.up.incoming(e,c)))},outgoing:function(e,n,c){i=e,o=c,t.down.outgoing(a+","+ ++r+"_"+e,n)}}},B.stack.QueueBehavior=function(e){function n(){if(e.remove&&0===a.length)return t("removing myself from the stack"),void _(o);if(!i&&0!==a.length&&!r){t("dispatching from queue"),i=!0;var c=a.shift();o.down.outgoing(c.data,c.origin,function(e){i=!1,c.callback&&S(function(){c.callback(e)},0),n()})}}var t=V.getTracer("easyXDM.stack.QueueBehavior");t("constructor");var o,r,a=[],i=!0,c="",s=0,l=!1,u=!1;return o={init:function(){m(e)&&(e={}),e.maxLength&&(s=e.maxLength,u=!0),e.lazy?l=!0:o.down.init()},callback:function(e){i=!1;var t=o.up;n(),t.callback(e)},incoming:function(n,r){if(u){var a=n.indexOf("_"),i=parseInt(n.substring(0,a),10);c+=n.substring(a+1),0===i?(t("received the last fragment"),e.encode&&(c=decodeURIComponent(c)),o.up.incoming(c,r),c=""):t("waiting for more fragments, seq="+n)}else o.up.incoming(n,r)},outgoing:function(r,i,c){e.encode&&(r=encodeURIComponent(r));var d,p=[];if(u){for(;0!==r.length;)d=r.substring(0,s),r=r.substring(d.length),p.push(d);for(;d=p.shift();)t("enqueuing"),a.push({data:p.length+"_"+d,origin:i,callback:0===p.length?c:null})}else a.push({data:r,origin:i,callback:c});l?o.down.init():n()},destroy:function(){t("destroy"),r=!0,o.down.destroy()}}},B.stack.VerifyBehavior=function(e){function n(){t("requesting verification"),r=Math.random().toString(16).substring(2),o.down.outgoing(r)}var t=V.getTracer("easyXDM.stack.VerifyBehavior");t("constructor");var o,r,a;return o={incoming:function(i,c){var s=i.indexOf("_");-1===s?i===r?(t("verified, calling callback"),o.up.callback(!0)):a||(t("returning secret"),a=i,e.initiate||n(),o.down.outgoing(i)):i.substring(0,s)===a&&o.up.incoming(i.substring(s+1),c)},outgoing:function(e,n,t){o.down.outgoing(r+"_"+e,n,t)},callback:function(t){e.initiate&&n()}}},B.stack.RpcBehavior=function(e,n){function t(e){e.jsonrpc="2.0",i.down.outgoing(s.stringify(e))}function r(e,n){var o=Array.prototype.slice;return c("creating method "+n),function(){c("executing method "+n);var r,a=arguments.length,i={method:n};return a>0&&"function"==typeof arguments[a-1]?(a>1&&"function"==typeof arguments[a-2]?(r={success:arguments[a-2],error:arguments[a-1]},i.params=o.call(arguments,0,a-2)):(r={success:arguments[a-1]},i.params=o.call(arguments,0,a-1)),u[""+ ++l]=r,i.id=l):i.params=o.call(arguments,0),e.namedParams&&1===i.params.length&&(i.params=i.params[0]),t(i),i.id}}function a(e,n,r,a){if(!r)return c("requested to execute non-existent procedure "+e),void(n&&t({id:n,error:{code:-32601,message:"Procedure not found."}}));c("requested to execute procedure "+e);var i,s;n?(i=function(e){i=C,t({id:n,result:e})},s=function(e,o){s=C;var r={id:n,error:{code:-32099,message:e}};o&&(r.error.data=o),t(r)}):i=s=C,o(a)||(a=[a]);try{var l=r.method.apply(r.scope,a.concat([i,s]));m(l)||i(l)}catch(e){s(e.message)}}var i,c=V.getTracer("easyXDM.stack.RpcBehavior"),s=n.serializer||$(),l=0,u={};return i={incoming:function(e,o){var r=s.parse(e);if(r.method)c("received request to execute method "+r.method+(r.id?" using callback id "+r.id:"")),r&&r.params&&r.params[0]&&"object"==typeof r.params[0]&&(r.params[0].id=r.id),n.handle?n.handle(r,t):a(r.method,r.id,n.local[r.method],r.params);else{c("received return value destined to callback with id "+r.id);var i=u[r.id];r.error?i.error?i.error(r.error):c("unhandled error returned."):i.success&&i.success(r.result),delete u[r.id]}},init:function(){if(c("init"),n.remote){c("creating stubs");for(var t in n.remote)n.remote.hasOwnProperty(t)&&(e[t]=r(n.remote[t],t))}i.down.init()},destroy:function(){c("destroy");for(var t in n.remote)n.remote.hasOwnProperty(t)&&e.hasOwnProperty(t)&&delete e[t];i.down.destroy()}}},B});