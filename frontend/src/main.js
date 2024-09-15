const { app, BrowserWindow } = require('electron');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// 定义 React 组件
const App = () => (
    React.createElement('div', null,
        React.createElement('h1', null, 'Welcome to PureVault Demo'),
        React.createElement('p', null, 'This is a simple demo of Electron and React integration.')
    )
);

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
            // preload: path.join(__dirname, 'preload.js') // 移除 preload 选项
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
