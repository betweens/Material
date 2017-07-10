import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppBar from 'material-ui/AppBar';
// 左侧菜单
import LeftMenu from './LeftMenu';

// 子页面
import AppBarPage from './page/AppBarPage';
import RequiredKnowledge from './page/RequiredKnowledge';

// 主容器
const AppContainer = (props) => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>{props.children}</MuiThemeProvider>
);

// 路由集合
const App = () => (<Router><section className="flex-hrz app-container">
  <div className="top-bg">Aww yeah, Material-UI v1 is coming!</div>
  <div className="flex-init left-menu">
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <LeftMenu />
    </MuiThemeProvider>
  </div>
  <AppContainer>
    <div className="flex-full right-content">
      <AppBar showMenuIconButton={true} iconClassNameRight="muidocs-icon-navigation-expand-more" />
      <Route exact path="/" component={AppBarPage}/>
      <Route exact path="/app-bar" component={AppBarPage}/>
      <Route exact path="/required-knowledge" component={RequiredKnowledge}/>
    </div>
  </AppContainer>
</section></Router>);


injectTapEventPlugin();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
