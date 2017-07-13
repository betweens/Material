import React from 'react';
// import './ServerRendering.css';
import { FooterBanner } from '../../components/index.js';
const ServerRendering = () => {
  return (<div>
    <div className="markdown-body">
      <h2>案例</h2>
      <p>有3个项目，您可以看看开始。 它们可以在<a href="https://github.com/callemall/material-ui/tree/master/examples">examples</a>文件夹中找到。 这些项目是显示如何在自己的项目中使用material-ui组件的基本示例。</p>
      <ul>
        <li>第一个项目使用<a href="http://browserify.org/">browserify</a>进行模块打包和<a href="http://gulpjs.com/">gulp</a>的JS任务自动化。</li>
        <li>第二个项目是用<a href="https://github.com/jaredpalmer/razzle">razzle</a> 模式建立和运行的。</li>
        <li>第三个项目使用<a href="http://webpack.github.io/">webpack</a>进行模块捆绑和构建。</li>
      </ul>
      <p>该文档站点的源代码也包含在存储库中。 这是一个稍微复杂的项目，它也使用webpack，并且包含每个material-ui组件的例子。 查看<a href="https://github.com/callemall/material-ui/tree/master/docs">docs</a>文件夹以获取构建说明。</p>
    </div>
    <FooterBanner />
  </div>);
};

export default ServerRendering;
