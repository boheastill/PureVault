## 项目简介

**PureVault** 是一个跨平台的密码管理工具，旨在提供一种安全、简洁的方式来管理用户的密码和敏感信息。该前端项目用于构建应用程序的用户界面，支持多个平台，包括 Web、Electron 桌面应用、移动端、小程序和浏览器插件。

# PureVault 前端部分

npm install
## 目录结构

以下是项目的主要目录结构和各个目录的用途说明：

### 根目录

- `public/`  
  存放静态文件，如 `index.html`。这些文件将被直接提供给用户，并在构建过程中未经过任何处理。

- `assets/`  
  存放静态资源，例如图像、字体等。

- `tests/`  
  存放前端测试代码。

- `Dockerfile`  
  Docker 配置文件，用于构建项目的 Docker 镜像。

- `.gitignore`  
  Git 忽略文件配置，用于指定在版本控制中忽略的文件和目录。

- `package.json`  
  前端依赖和构建脚本的配置文件。

- `README.md`  
  项目的说明文件。

## `src/` 目录

`src/` 目录包含前端源代码。其结构如下：

### `src/common/`

- `components/`  
  存放通用的 UI 组件，这些组件可以在多个平台上重用。

- `services/`  
  存放与后端 API 交互的服务代码。

- `utils/`  
  存放工具函数和实用程序，例如数据格式化、验证等。

### `src/platform/`

`src/platform/` 目录包含针对不同平台的特定代码：

- `web/`  
  针对 Web 平台（包括 PC 和移动网页）的代码。
    - `components/`：特定于 Web 的 UI 组件。
    - `pages/`：Web 页面组件。
    - `styles/`：Web 页面和组件的样式。

- `electron/`  
  针对 Electron 桌面应用的代码。
    - `components/`：特定于 Electron 的 UI 组件。
    - `pages/`：Electron 应用中的页面组件。
    - `styles/`：Electron 应用的样式。

- `mobile/`  
  针对移动端应用（安卓和 iOS）的代码。
    - `components/`：特定于移动端的 UI 组件。
    - `pages/`：移动端应用中的页面组件。
    - `styles/`：移动端应用的样式。

- `miniapp/`  
  针对小程序的代码。
    - `components/`：特定于小程序的组件。
    - `pages/`：小程序的页面。
    - `styles/`：小程序的样式。

- `plugins/`  
  针对浏览器插件的代码。
    - `components/`：特定于插件的组件。
    - `pages/`：插件中的页面组件。
    - `styles/`：插件的样式。

## 开发和构建

- **开发**  
  使用 **VS Code** 或 **WebStorm** 进行开发。根据平台特定的需求，在相应的目录下进行开发。

- **构建**  
  使用 **Docker** 进行跨平台构建和部署。具体构建过程请参考 `Dockerfile` 文件。

## 贡献

欢迎对本项目进行贡献。如果你发现了问题或有改进建议，请提交 [Issue](https://github.com/your-repository/issues) 或 [Pull Request](https://github.com/your-repository/pulls)。

## 许可

本项目采用 [MIT License](LICENSE) 许可协议。

本地构建命令：

检查
node -v
nvm list
nvm use 20.17.0
node -v
国内npm
npm install -g cnpm --registry=https://registry.npmmirror.com
cd 项目路径
# 安装 Electron 和 React
npm install electron --save-dev
npm install react react-dom

# 安装开发工具
npm install @babel/core @babel/preset-react @babel/preset-env babel-loader webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev

[//]: # (es转cs插件)
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli webpack-dev-server

补充一下
cnpm install
日志记录一下命令
doskey /history > history.txt


