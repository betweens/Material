import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
// 左侧菜单
import LeftMenu from './Page/LeftMenu';
// 开始使用
import RequiredKnowledge from './Page/GetStarted/RequiredKnowledge';
import Installation from './Page/GetStarted/Installation';
import Examples from './Page/GetStarted/Examples';
import ServerRendering from './Page/GetStarted/ServerRendering';
// 自定义设置
import Usage from './Page/Customization/Usage';
import Colors from './Page/Customization/Colors';
import Themes from './Page/Customization/Themes';
import Styles from './Page/Customization/Styles';
// 组件列表
import AppBarPage from './Page/Components/AppBarPage';
import AutoComplete from './Page/Components/AutoComplete';
import Avatar from './Page/Components/Avatar';
import Badge from './Page/Components/Badge';
import BottomNavigation from './Page/Components/BottomNavigation';
import FlatButtonPage from './Page/Components/FlatButton';
import RaisedButton from './Page/Components/RaisedButton';
let appTheme = lightBaseTheme;

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
  <div className="top-bg">Aww yeah, Material-UI v1 is coming!</div>
  <MuiThemeProvider muiTheme={getMuiTheme(appTheme)}><LeftMenu /></MuiThemeProvider>
  <AppContainer>
    <div className="flex-full">
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
      <Route exact path="/avatar" component={Avatar}/>
      <Route exact path="/badge" component={Badge}/>
      <Route exact path="/bottom-navigation" component={BottomNavigation}/>
      <Route exact path="/flat-button" component={FlatButtonPage}/>
      <Route exact path="/raised-button" component={RaisedButton}/>
    </div>
  </AppContainer>
</section></Router>);
/*window.custom = () => {
 ReactDOM.render(<App />, document.getElementById('root'));
}*/


injectTapEventPlugin();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
