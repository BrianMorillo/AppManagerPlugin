/*cordova.define("cordova.plugin.appmanagerplugin.AppManagerPlugin", function(require, exports, module) {

var exec = require('cordova/exec');

module.exports = {
	coolMethod: function (arg0, success, error) {
		exec(success, error, 'AppManagerPlugin', 'coolMethod', [arg0]);
	}
};

});*/


'use strict';
var exec = require('cordova/exec');

var AppManager = {
	coolMethod: function (arg0, success, error) {
		exec(success, error, 'AppManagerPlugin', 'coolMethod', [arg0]);
	}
};

module.exports = AppManager;


/*
function AppManagerPlugin(){}

AppManagerPlugin.prototype.pInvoker = function(method,data,callbackOK,callbackErr)
{

	if (data == null) {}
}

function AppManagerPlugin() {}

AppManagerPlugin.prototype.PluginName = "AppManagerPlugin";

AppManagerPlugin.prototype.pInvoke = function(method, data, callbackOK, callbackError)
{
    if (data == null || data === undefined) {
        data = [];
    }
    else if (!Array.isArray(data)) {
        data = [data];
    }
    cordova.exec(callbackOK, callbackError, this.PluginName, method, data);
};

AppManagerPlugin.prototype.printData = function(data, callbackOK, callbackError)
{
    this.pInvoke("printData", data, callbackOK, callbackError);
};

AppManagerPlugin.install = function()
{
    if (!window.plugins) {
        window.plugins = {};
    }
    
    window.plugins.appmanagerplugin = new AppManagerPlugin();
    return window.plugins.appmanagerplugin;
};

cordova.addConstructor(AppManagerPlugin.install);*/