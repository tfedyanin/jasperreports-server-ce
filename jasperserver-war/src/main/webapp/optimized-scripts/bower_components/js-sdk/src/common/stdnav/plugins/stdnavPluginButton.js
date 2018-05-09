define(["require","exports","module","jquery","underscore","common/util/eventAutomation","logger","stdnav"],function(t,e,n){"use strict";var i=t("jquery"),o=(t("underscore"),t("common/util/eventAutomation")),r=t("logger").register(n),s=t("stdnav"),u=0,a=function(){u++,this.serial=u};i.extend(a.prototype,{zinit:function(t){return r.debug("stdnavPluginButton.init("+t+")\n"),this},activate:function(){this.behavior={enter:[this,this._onEnterOrEntered,null],entered:[this,this._onEnterOrEntered,null],toggle:[this,this._onEnterOrEntered,null],inherit:!1,inheritable:!0},s.registerNavtype(this.navtype,this.behavior,this.navtype_tags)},deactivate:function(){s.unregisterNavtype("button",this.behavior)},_fixSubfocus:function(t){var e,n=i(t);if(n.is("BUTTON,[role='button']"))e=n;else if(e=i(t).closest("BUTTON,[role='button']"),void 0===e)return;return e.find(".ghostfocus").removeClass(".ghostfocus"),e.children().find(".subfocus").removeClass(".subfocus"),e},_onFocusIn:function(t){var e,n=i(t).children(".ghostfocus");if(n.length>0)n.removeClass("ghostfocus"),e=this._fixSubfocus(n[0]);else{var o=i(t).children('li[js-navigable!="false"]');e=o.length>0?this._fixSubfocus(o[0]):t}return e},_onSubfocusIn:function(t){if("BUTTON"!=i(t).prop("nodeName")){var e=this._fixSubfocus(t);s.setSubfocus(e,!1)}},_onEnterOrEntered:function(t){var e=i(t);return e.is("BUTTON,[role='button']")&&o.simulateClickSequence(t),t}}),i.extend(a.prototype,{navtype:"button",navtype_tags:["BUTTON"]});var c=new a;return c});