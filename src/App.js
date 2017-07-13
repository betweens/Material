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
import FlatButton from 'material-ui/FlatButton';
// 左侧菜单
import LeftMenu from './LeftMenu';

// 子页面
import AppBarPage from './page/AppBarPage';
import RequiredKnowledge from './page/RequiredKnowledge';
import Installation from './page/Installation';
import Usage from './page/Usage';
import ServerRendering from './page/ServerRendering';

// 跳转github页面
const goToGitHub = () => {
  window.location.href = "https://github.com/betweens/Material";
}
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
      <AppBar showMenuIconButton={false} iconElementRight={<FlatButton label="github" onTouchTap={goToGitHub} />} />
      <Route exact path="/" component={AppBarPage}/>
      <Route exact path="/app-bar" component={AppBarPage}/>
      <Route exact path="/required-knowledge" component={RequiredKnowledge}/>
      <Route exact path="/installation" component={Installation}/>
      <Route exact path="/usage" component={Usage}/>
      <Route exact path="/server-rendering" component={ServerRendering}/>
    </div>
  </AppContainer>
</section></Router>);


injectTapEventPlugin();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
