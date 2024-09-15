const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./AppComponent');

// 负责将 React 组件渲染为 HTML 字符串。
const renderUtils = () => ReactDOMServer.renderToString(React.createElement(App));

module.exports = { renderReactApp: renderUtils };
