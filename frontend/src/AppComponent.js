const React = require('react');
// 定义 React 组件。
const AppComponent = () => (
    React.createElement('div', null,
        React.createElement('h1', null, 'Welcome to PureVault Demo'),
        React.createElement('p', null, 'This is a simple demo of Electron and React integration.')
    )
);

module.exports = AppComponent;
