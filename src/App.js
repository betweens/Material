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
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
// 左侧菜单
import LeftMenu from './LeftMenu';

// 子页面
import AppBarPage from './page/AppBarPage';
import RequiredKnowledge from './page/RequiredKnowledge';
import Installation from './page/Installation';
import Usage from './page/Usage';
import Examples from './page/Examples';
import Colors from './page/Colors';
import ServerRendering from './page/ServerRendering';
import Themes from './page/Themes';
import Styles from './page/Styles';
import AutoComplete from './page/AutoComplete';
let appTheme = lightBaseTheme;
/*window.custom = () => {
 
 ReactDOM.render(<App />, document.getElementById('root'));
}
*/

// 跳转github页面
const goToGitHub = () => {
  window.location.href = "https://github.com/betweens/Material";
}
// 主容器
const AppContainer = (props) => (
  <MuiThemeProvider muiTheme={getMuiTheme(appTheme)}>{props.children}</MuiThemeProvider>
);

// 路由集合
const App = () => (<Router><section className="flex-hrz app-container">
  <div className="flex-init left-menu">
    <MuiThemeProvider muiTheme={getMuiTheme(appTheme)}>
      <LeftMenu />
    </MuiThemeProvider>
  </div>
  <AppContainer>
    <div className="flex-full right-content">
      <div className="top-bg">Aww yeah, Material-UI v1 is coming!</div>
      <AppBar showMenuIconButton={false} iconElementRight={<FlatButton label="github" onTouchTap={goToGitHub} />} />
      <Route exact path="/" component={AppBarPage}/>
      <Route exact path="/app-bar" component={AppBarPage}/>
      <Route exact path="/required-knowledge" component={RequiredKnowledge}/>
      <Route exact path="/installation" component={Installation}/>
      <Route exact path="/usage" component={Usage}/>
      <Route exact path="/examples" component={Examples}/>
      <Route exact path="/server-rendering" component={ServerRendering}/>
      <Route exact path="/themes" component={Themes}/>
      <Route exact path="/styles" component={Styles}/>
      <Route exact path="/colors" component={Colors}/>
      <Route exact path="/auto-complete" component={AutoComplete}/>
    </div>
  </AppContainer>
</section></Router>);


injectTapEventPlugin();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
