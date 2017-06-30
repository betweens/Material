import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

// 子页面
import AppBarPage from './page/AppBarPage';
import DrawerPage from './page/DrawerPage';
// 路由配置
const routes = [
  { path: '/',
    exact: true,
    sidebar: () => <AppBarPage />,
    main: () => <h2>主页</h2>
  }
]

const routesArray = routes.map((route, index) => (<Route key={index} path={route.path}  exact={route.exact} component={route.sidebar} />));
const App = () => (<Router><div>
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <DrawerPage />
  </MuiThemeProvider>
  {routesArray}
</div></Router>);


injectTapEventPlugin();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
