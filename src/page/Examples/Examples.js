import React from 'react';
// import './ServerRendering.css';
import { PrintCode, FooterBanner } from '../../components/index.js';
const ServerRendering = () => {
  const muiTheme = `import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100,
  },
}, {
  avatar: {
    borderColor: null,
  },
  userAgent: req.headers['user-agent'],
});

const Main = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>Hello world</div>
  </MuiThemeProvider>
);

export default Main;`;
 
  return (<div>
    <div className="markdown-body">
      <h2>服务端渲染</h2>
      <p>当使用Material-UI与服务器呈现时，我们必须为服务器和客户端使用相同的环境。 这有两个技术含义。</p>
      <h3>Autoprefixer</h3>
      <p>首先，Material-UI必须为自动前缀使用相同的用户代理。 在客户端，默认值为navigator.userAgent。 但是在服务器端，userAgen是undefined, 您需要将其提供给Material-UI。</p>
      <p>userAgent可以使用以下其中一个值：</p>
      <ul>
        <li>一个普通的 user agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.82 Safari/537.36'</li>
        <li>'all'  为所有用户代理前缀</li>
        <li>'false'  禁用前缀</li>
      </ul>
      <p>我们依靠<a href="http://www.material-ui.com/#/customization/themes">muiTheme</a>上下文将用户代理传播到我们所有的组件。 例如，您可以这样提供：</p>
      <PrintCode code={muiTheme}  />
      <h3>process.env.NODE_ENV</h3>
      <p>您还需要在客户端和服务器端之间使用相同的<span className="code">process.env.NODE_ENV</span> 否则，校验和将不匹配。</p>
      <p>我们在开发环境中运行一些风格完整性检查。 所以在生产过程中，确保将<span className="code">process.env.NODE_ENV</span>设置为<span className="code">“production”</span>，以加快样式计算。</p>
     </div>
    <FooterBanner />
  </div>);
};

export default ServerRendering;
