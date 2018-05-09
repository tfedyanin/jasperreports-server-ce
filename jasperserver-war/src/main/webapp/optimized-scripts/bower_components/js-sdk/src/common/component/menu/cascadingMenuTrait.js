define(["require","./Menu","./HoverMenu","underscore"],function(e){"use strict";var t=e("./Menu"),i=e("./HoverMenu"),n=e("underscore"),o={_subMenuHovered:!1,_onConstructor:function(e,t){this.additionalOptions=t},_onInitialize:function(){this.on("mouseover",n.bind(this._showSubMenu,this))},_showSubMenu:function(e){if(e.model.has("children")){var t=this._getSubMenu(e.cid,e.model.get("children"),e,this);t&&t.show()}},_onMenuItemMouseOut:function(e,t,i){var n=e.model.get("children");if(this._menuHovered=!1,n){var o=this._getSubMenu(e.cid),s=o.$el.offset(),u=i.pageX-s.left,h=i.pageY-s.top;this._subMenuHovered=u>=0&&u<=o.$el.width()+3&&h>=0&&h<=o.$el.height()+3}this._hideByTimeout()},_initCascadingMenuEvents:function(e){var t=this;this.listenTo(e.collection,"select",function(e,i,n){t._selectOption(e,i,n)}),this.listenTo(e,"hidden",function(){t._subMenuHovered=!1,t._tryHide()})},_hideByTimeout:function(){this._elementHovered||this._menuHovered||this._subMenuHovered||setTimeout(n.bind(this._tryHide,this),this.TIME_BETWEEN_MOUSE_OVERS)},_tryHide:function(){this._elementHovered||this._menuHovered||this._subMenuHovered||this._hide()},_getSubMenu:n.memoize(function(e,t,i,n){var o=new s(t,i,n.additionalOptions);return n._initCascadingMenuEvents(o),o})},s=i.extend(n.extend({constructor:function(e,t,n){i.call(this,e,t.$el,null,n)},show:function(){var e=this.$attachTo.offset(),i=this.$attachTo.outerWidth();return this.$el.css({top:e.top,left:e.left+i}),t.prototype.show.apply(this,arguments)}},o));return o});