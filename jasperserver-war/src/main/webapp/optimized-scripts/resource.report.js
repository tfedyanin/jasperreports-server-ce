var resourceReport={SET_UP_PAGE_ID:"addReport_SetUp",LABEL_ID:"label",RESOURCE_ID_ID:"resourceID",DESCRIPTION_ID:"reportUnit.description",FILE_PATH_ID:"filePath",RESOURCE_URI_ID:"resourceUri",FILE_SYSTEM_SOURCE_ID:"FILE_SYSTEM",CONTENT_REPOSITORY_SOURCE_ID:"CONTENT_REPOSITORY",RESOURCE_NAME_ID:"resourceName",EDIT_RESOURCE_BUTTON_ID:"editResourceButton",REMOVE_RESOURCE_BUTTON_ID:"removeResourceButton",ADD_RESOURCE_BUTTON_ID:"addResourceButton",EDIT_CONTROL_BUTTON_ID:"editControlButton",REMOVE_CONTROL_BUTTON_ID:"removeControlButton",ADD_CONTROL_BUTTON_ID:"addControlButton",FILE_NAME_ID:"fileName",FILE_UPLOAD_BUTTON_ID:"fake_upload_button",SAVE_BUTTON_ID:"done",JRXML_FILE_PATH_COOKIE:"jrxmlFilePath",_canGenerateId:!0,initialize:function(e){this._setUpPage=$(this.SET_UP_PAGE_ID),this._setUpPage&&(this._form=$(document.body).select("form")[0],this._label=$(this.LABEL_ID),this._resourceId=$(this.RESOURCE_ID_ID),this._description=$(this.DESCRIPTION_ID),this._filePath=$(this.FILE_PATH_ID),this._resourceUri=$(this.RESOURCE_URI_ID),this._fileName=$(this.FILE_NAME_ID),this._fileSystemSource=$(this.FILE_SYSTEM_SOURCE_ID),this._contentRepositorySource=$(this.CONTENT_REPOSITORY_SOURCE_ID),this._saveButton=$(this.SAVE_BUTTON_ID),this._isEditMode=e?e.isEditMode:!1,this._initialSource=this._fileSystemSource.checked?this._fileSystemSource:this._contentRepositorySource,this._jrxmlFileResourceAlreadyUploaded=e.jrxmlFileResourceAlreadyUploaded,this._label.validator=resource.labelValidator.bind(this),this._resourceId.validator=resource.resourceIdValidator.bind(this),this._description.validator=resource.descriptionValidator.bind(this),this._filePath.validator=this._filePathValidator.bind(this),this._resourceUri.validator=this._resourceUriValidator.bind(this),this._initEvents(),this._adjustFileSelectorPosition(),this._fileName.value=this._jrxmlFileResourceAlreadyUploaded);var t={fileUploadInput:"filePath",fakeFileUploadInput:"fake_upload_button",fakeFileUploadInputText:"fileName",resourceInput:"resourceUri",browseButton:"browser_button",uploadButton:"upload_button",treeId:"resourceTreeRepoLocation",dialogTitle:resource.messages["resource.Report.Title"],selectLeavesOnly:!0};e&&$(t.browseButton)&&("fileResource"==e.type?t.providerId="fileResourceTreeDataProvider":"jrxml"==e.type?t.providerId="jrxmlTreeDataProvider":"olapMondrianSchema"==e.type?t.providerId="olapSchemaTreeDataProvider":"folder"==e.type&&(t.treeId="addFileTreeRepoLocation",t.providerId="repositoryExplorerTreeFoldersProvider",t.resourceInput="folderUri"),resourceLocator.initialize(t),resourceLocator._updateResourceSelectorState(jQuery("input[type=radio]:checked").attr("id")))},_initEvents:function(){var e=this;jQuery("#"+this.FILE_UPLOAD_BUTTON_ID).click(function(t){t.preventDefault(),jQuery("#"+e.FILE_PATH_ID).trigger("click")}),this._saveButton.observe("click",function(t){e._isDataValid()||t.stop()}),this._form.observe("keyup",function(t){var i=t.element(),r=[e._label,e._resourceId,e._description];r.include(i)&&(ValidationModule.validate(resource.getValidationEntries([i])),i==e._resourceId&&e._resourceId.getValue()!=resource.generateResourceId(e._label.getValue())&&(e._canGenerateId=!1),i==e._label&&!e._isEditMode&&e._canGenerateId&&(e._resourceId.setValue(resource.generateResourceId(e._label.getValue())),ValidationModule.validate(resource.getValidationEntries([e._resourceId]))))}),this._filePath.observe("change",function(){isIE()?-1!=this.value.toLowerCase().indexOf("c:\\fakepath\\")?e._fileName.value=this.value.substring("c:\\fakepath\\".length,this.value.length):e._fileName.value=this.value:e._fileName.value=this.files[0].name,$("fileUpload").removeClassName("error"),e._adjustFileSelectorPosition()})},_isDataValid:function(){var e=[this._label,this._resourceId,this._description,this._filePath,this._resourceUri];return isIE()?this.file=this._filePath.value:this.file=this._filePath.files[0],this.html=this._filePath.innerHTML,ValidationModule.validate(resource.getValidationEntries(e))},_filePathValidator:function(e){var t=!0,i="";return!this._fileSystemSource.checked||!e.blank()||this._isEditMode&&this._initialSource==this._fileSystemSource||this._jrxmlFileResourceAlreadyUploaded||(i=resource.messages.filePathIsEmpty,t=!1),t?ValidationModule.hideError($("fileName")):ValidationModule.showError($("fileName"),i),{isValid:t,errorMessage:i}},_resourceUriValidator:function(e){var t=!0,i="";return this._contentRepositorySource.checked&&e.blank()&&(i=resource.messages.resourceUriIsEmpty,t=!1),{isValid:t,errorMessage:i}},_adjustFileSelectorPosition:function(){var e=jQuery("#filePath");if(isIE7()||isIE8()||isIE9()||isIE10()){var t=20,i=0,r=95,o=30,s=e.parents("label").hasClass("error");s&&(t+=13),e.css({opacity:"0",position:"absolute",right:i,top:t,width:r,height:o})}else e.css({position:"fixed",right:"-1000px",top:"-1000px"})},editResource:function(e){$(this.RESOURCE_NAME_ID).setValue(e),$(this.EDIT_RESOURCE_BUTTON_ID).click()},removeResource:function(e){$(this.RESOURCE_NAME_ID).setValue(e),$(this.REMOVE_RESOURCE_BUTTON_ID).click()},addResource:function(){$(this.ADD_RESOURCE_BUTTON_ID).click()},editControl:function(e){$(this.RESOURCE_NAME_ID).setValue(e),$(this.EDIT_CONTROL_BUTTON_ID).click()},removeControl:function(e){$(this.RESOURCE_NAME_ID).setValue(e),$(this.REMOVE_CONTROL_BUTTON_ID).click()},addControl:function(){$(this.ADD_CONTROL_BUTTON_ID).click()}};"undefined"==typeof require&&document.observe("dom:loaded",function(){resourceReport.initialize(localContext.initOptions)});