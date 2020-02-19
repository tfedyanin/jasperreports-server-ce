define(["require","exports","module","underscore","jquery","./BaseDataSourceModel","runtime_dependencies/js-sdk/src/jrs.configs","requestSettings","../enum/connectionTypes","runtime_dependencies/bi-repository/src/bi/repository/enum/repositoryResourceTypes","../../components/components.dialogs","bundle!all","bundle!jasperserver_config","text!runtime_dependencies/js-sdk/src/common/templates/dialogErrorPopupTemplate.htm"],function(e,t,s){var i=e("underscore"),o=e("jquery"),r=e("./BaseDataSourceModel"),n=e("runtime_dependencies/js-sdk/src/jrs.configs"),a=e("requestSettings"),p=e("../enum/connectionTypes"),u=e("runtime_dependencies/bi-repository/src/bi/repository/enum/repositoryResourceTypes"),d=e("../../components/components.dialogs"),c=e("bundle!all"),l=e("bundle!jasperserver_config"),m=e("text!runtime_dependencies/js-sdk/src/common/templates/dialogErrorPopupTemplate.htm"),y=r.extend({type:u.CUSTOM_DATA_SOURCE,constructor:function(e,t){this.defaults=i.extend({},this.defaults,{dataSourceName:t.dataSourceType,connectionType:p.CUSTOM}),r.prototype.constructor.apply(this,arguments)},initialize:function(e,t){var s=r.prototype.initialize.apply(this,arguments);return this.customFields=[],this.testable=!1,this.queryTypes=null,this.initialization=o.Deferred(),this.getCustomFieldsDefinition(),s},getCustomFieldsDefinition:function(){var e={};return i.extend(e,a,{Accept:"application/json"}),o.ajax({type:"GET",headers:e,url:n.contextPath+"/rest_v2/customDataSources/"+this.get("dataSourceName")}).done(i.bind(this.getCustomFieldsDefinitionDone,this)).fail(i.bind(this.getCustomFieldsDefinitionFail,this))},getCustomFieldsDefinitionDone:function(e){var t=this;e&&e.propertyDefinitions&&i.isArray(e.propertyDefinitions)&&(this.resetValidation(),this.testable=!!e.testable,this.queryTypes=e.queryTypes?e.queryTypes:null,i.each(e.propertyDefinitions,function(e){var s={};e.properties&&(e.properties=i(e.properties).reduce(function(e,t){return e[t.key]=t.value,e},{})),t.customFields.push(e),t.defaults[e.name]=e.defaultValue,t.options.isEditMode||t.set(e.name,e.defaultValue),"password"===e.name&&t.options.isEditMode&&!t.isNew()&&t.set("password",l["input.password.substitution"]),e.properties&&e.properties.mandatory&&(s[e.name]={required:!0,msg:c[t.get("dataSourceName")+"."+e.name+".required"]||c["required.field.specify.value"]},i.extend(t.validation,s))})),this.options.isEditMode||this.set(this.parse(this.attributes),{silent:!0}),this.initialization.resolve()},getCustomFieldsDefinitionFail:function(e){var t=!1;try{t=JSON.parse(e.responseText)}catch(e){}var s=i.template(m,{message:"Failed to load custom data source definition. ",errorCode:t&&t[0]?t[0].errorCode:null,errorMsg:t&&t.message,respText:e.responseText});d.errorPopup.show(s)},parse:function(e){var t=r.prototype.parse.apply(this,arguments);return t=i.extend(t,this.parseProperties(e.properties)),delete e.properties,t},parseProperties:function(e){var t={};return i.isEmpty(e)||i.each(e,function(e){t[e.key]="password"===e.key?l["input.password.substitution"]:e.value}),t},toJSON:function(){var e=r.prototype.toJSON.apply(this,arguments);return this.customFieldsToJSON(e,this.customFields)},customFieldsToJSON:function(e,t){return i.isEmpty(t)||(e.properties=[],i.each(t,function(t){var s=e[t.name],o="password"===t.name;i.isUndefined(s)||(!o||o&&s!==l["input.password.substitution"])&&(e.properties.push({key:t.name,value:s}),delete e[t.name])})),e},resetValidation:function(){this.validation=i.clone(y.prototype.validation)}});s.exports=y});