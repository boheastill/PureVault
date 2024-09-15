require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react']
});

const { app, BrowserWindow } = require('electron');
const { createWindow } = require('./windowManager');
// 负责 Electron 应用的启动逻辑。
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
