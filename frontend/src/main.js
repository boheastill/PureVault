const { app, BrowserWindow } = require('electron');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./App');

// 渲染 React 组件为 HTML 字符串
const renderReactApp = () => ReactDOMServer.renderToString(React.createElement(App));

// 创建 Electron 窗口
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

    // 加载内联 HTML 内容
    mainWindow.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(renderReactApp())}`);
};

// Electron 应用启动
app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
