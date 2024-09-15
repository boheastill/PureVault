const { BrowserWindow } = require('electron');
const path = require('path');
const { renderReactApp } = require('./renderUtils');
// 负责创建和配置 BrowserWindow 实例。
const windowManager = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false
        }
    });

    // 加载内联 HTML 内容
    mainWindow.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(renderReactApp())}`);
};

module.exports = { createWindow: windowManager };
