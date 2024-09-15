// renderUtils.js
import React from 'react';
import ReactDOMServer from 'react-dom/server'; // 确保导入了 ReactDOMServer
import App from './AppComponent';

export const renderReactApp = () => {
  return ReactDOMServer.renderToString(<App />);
};
