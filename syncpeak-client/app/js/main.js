'use strict'

const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

var appWindow = null;

function createAppWindow(){
	appWindow = new BrowserWindow({width: 250, height: 600});

	appWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'app/views/index.html'),
		protocol: 'file',
		slashes: true
	}));

	appWindow.on('closed', () => {
		appWindow = null;
	});
}

app.on('ready', createAppWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
      app.quit();
    }
});

app.on('activate', () => {
	if(appWindow == null){
		createAppWindow();
	}
});