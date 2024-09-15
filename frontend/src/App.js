const React = require('react');

// 定义 React 组件
const App = () => (
    React.createElement('div', { style: { padding: '20px', fontFamily: 'Arial, sans-serif' } },
        React.createElement('h1', { style: { color: '#333' } }, 'Welcome to PureVault Demo'),
        React.createElement('p', { style: { color: '#666' } }, 'This is a simple demo of Electron and React integration.')
    )
);

module.exports = App;
