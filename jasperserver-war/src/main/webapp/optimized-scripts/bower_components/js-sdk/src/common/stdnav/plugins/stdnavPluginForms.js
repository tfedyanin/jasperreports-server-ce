define(["require","exports","module","jquery","underscore","logger","stdnav"],function(e,t,r){"use strict";var i=e("jquery"),n=(e("underscore"),e("logger").register(r)),s=e("stdnav"),a=0,u=function(){a++,this.serial=a};i.extend(u.prototype,{zinit:function(e){return n.debug("stdnavPluginForms.init("+e+")\n"),this},activate:function(){this.behavior={ariaprep:[this,this._ariaPrep,null],ariarefresh:[this,this._ariaRefresh,null],inherit:!1,inheritable:!0,fixsuperfocus:[s,s.basicFixSuperfocus,null],superfocusin:[s,s.basicSuperfocusIn,{maxdepth:1,focusSelector:":input",ghostfocus:!1}]},s.registerNavtype(this.navtype,this.behavior,this.navtype_tags)},deactivate:function(){s.unregisterNavtype(this.navtype,this.behavior)},_ariaPrep:function(e){return i(e).attr("role","form"),null},_ariaRefresh:function(e){return i(e).attr("role","form"),null}}),i.extend(u.prototype,{navtype:"forms",navtype_tags:["FORM","INPUT","OPTGROUP","OPTION","SELECT","TEXTAREA"]});var o=new u;return o});