define(["require","exports","module","underscore","jquery","../view/MultiSelect","jquery-ui/ui/widgets/resizable"],function(e,t,i){var s=e("underscore"),a=e("jquery"),l=e("../view/MultiSelect");e("jquery-ui/ui/widgets/resizable");i.exports={_checkDataSize:function(){var e=this.resizableOptions,t=e.sizer,i=e.el,s=e.defaultItemsCount,a=this.availableItemsList.listViewModel.get("total");if(this.resized)return void t.removeClass("hidden");a<=e.defaultItemsCount?(t.addClass("hidden"),i.css("height",this.calcHeightByItemsCount(a)+"px")):(t.removeClass("hidden"),i.css("height",this.calcHeightByItemsCount(s)+"px"))},makeResizable:function(e){if(e=e||{},!e.el||!e.sizer)throw"resizableMultiSelectTrait expect el and sizable to be defined";s.defaults(e,{defaultItemsCount:10,minItemsCount:3,sizerOptions:{}}),this.resizableOptions=e,e.el=a(e.el),e.sizer=a(e.sizer);var t=e.el,i=e.sizer,l=e.sizerOptions,n=e.minItemsCount,r=Math.max(e.defaultItemsCount,n),o=this.calcHeightByItemsCount(r);return s.defaults(l,{handles:{s:i},minHeight:this.calcHeightByItemsCount(n),stop:s.bind(function(){this.resize(),this.resized=!0},this)}),i.addClass(e.sizerClass),t.css("height",o+"px").resizable(l),this.listenTo(this.availableItemsList.model,"change:totalValues",this._checkDataSize,this),this},calcHeightByItemsCount:function(e){return e*this.availableItemsList.listView.itemHeight+this.emptyContainerHeight},destroyResizable:function(){try{this.resizableOptions&&this.resizableOptions.el.resizable("destroy")}catch(e){}},enableResizable:function(){try{this.resizableOptions&&this.resizableOptions.el.resizable("disable")}catch(e){}},disableResizable:function(){try{this.resizableOptions&&this.resizableOptions.el.resizable("enable")}catch(e){}},remove:function(){this.destroyResizable(),l.prototype.remove.call(this)}}});