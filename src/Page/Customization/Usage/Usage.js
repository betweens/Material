import React from 'react';
// import './Usage.css';
import { PrintCode, FooterBanner } from '../../../components';
const Usage = () => {
  const codeApp = `import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

const App = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);`;
const MyAwesomeReactComponent = `import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const MyAwesomeReactComponent = () => (
  <RaisedButton label="Default" />
);

export default MyAwesomeReactComponent;`;
const complex = "import RaisedButton from 'material-ui/RaisedButton';";
const simple = "import {RaisedButton} from 'material-ui';";
  return (<div>
    <div className="markdown-body">
      <h2>用法</h2>
      <p>从v0.15.0开始，Material-UI组件需要提供一个主题。 启动和运行的最快方法是使用<span className="code">MuiThemeProvider</span>将主题注入到应用程序上下文中。 之后，您可以使用文档中所示的任何组件。</p>
      <p>快速入门</p>
      <p><strong>./App.js</strong></p>
      <PrintCode code={codeApp}  />
      <p><strong>./MyAwesomeReactComponent.js</strong></p>
      <PrintCode code={MyAwesomeReactComponent}  />
      <p>请参阅每个组件的文档页面，了解如何导入它们。</p>
      <p>注意，在上面的例子中，我们使用：</p>
      <PrintCode code={complex}  />
      <p>替换为</p>
      <PrintCode code={simple}  />
      <p>这将使您的构建过程更快，构建输出更小。 要将Material-UI组件完整映射到导入，请参阅Material-UI npm软件包根目录中的/src/index.js。</p>
      <h3>定制</h3>
      <p>我们已经实现了一个默认主题来渲染所有的Material-UI组件。 根据您的喜好设计组件简单而轻松。 这可以通过以下两种方式实现：</p>
      <ul>
      <li><a href="#/customization/themes">使用主题</a>，您可以使用自定义主题来构建组件。</li>
      <li><a href="#/customization/styles">使用内联样式</a>，您可以通过style属性覆盖单个组件样式。</li>
      </ul>
     </div>
    <FooterBanner />
  </div>);
};

export default Usage;
