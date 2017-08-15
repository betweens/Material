import React from 'react';
// import './Installation.css';
import { PrintCode } from '../../../components';
import { code } from './examplesCode.js';
const Installation = () => {
  return (<div>
      <h2>安装</h2>
      <p>Material-UI可作为 <a href="https://www.npmjs.org/package/material-ui">npm软件包</a>使用。</p>
      <h3 id="react-tap-event-plugin">react-tap-event-plugin</h3>
      <p>我们的组件使用<a href="https://github.com/zilverline/react-tap-event-plugin">react-tap-event-plugin</a> 来监听 touch / tap / click 事件.  这种依赖关系是暂时的，一旦官方的React版本被释放就会消失。 在此之前，请务必在应用程序开始时注入该插件。</p>
      <PrintCode code={code} />
      <p><code>react-tap-event-plugin</code> 向所有的React组件提供 <code>onTouchTap()</code>   对于Material-UI中的组件，这是一个适用于移动设备的<code>onClick（）</code>替代方法，对于按钮尤其有用。</p>
      <h3 id="roboto-font">Roboto 字体</h3>
      <p>Material-UI设计了<a href="http://www.google.com/fonts/specimen/Roboto">Roboto</a>字体。 所以一定要把它包含在你的项目中。 以下是有关如何做的说明。</p>
      <h3 id="es-compiling">ES Compiling</h3>
      <p>本文档中的示例使用ECMAScript规范的<code>stage-1</code>段功能。 确保在您自己的项目中测试这些示例，您的编译器中安装了正确的插件。 以下是<a href="http://babeljs.io/docs/plugins/preset-stage-1/">有关如何安装Babel插件</a>的说明。</p>
    </div>);
};

export default Installation;
