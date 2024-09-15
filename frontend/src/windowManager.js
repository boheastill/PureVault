// windowManager.js
const { BrowserWindow } = require('electron');
const { renderReactApp } = require('./renderUtils');

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false
        }
    });

    mainWindow.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(renderReactApp())}`);
};

module.exports = { createWindow };
