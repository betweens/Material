import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'

// 左侧菜单
import AppContainer from './Page/AppContainer';
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
import FloatingActionButton from './Page/Components/FloatingActionButton';
import IconButton from './Page/Components/IconButton';
import Card from './Page/Components/Card';
import Chip from './Page/Components/Chip';
import DatePicker from './Page/Components/DatePicker';
import Dialog from './Page/Components/Dialog';
import Divider from './Page/Components/Divider';
import Drawer from './Page/Components/Drawer';
import GridList from './Page/Components/GridList';
import FontIcon from './Page/Components/FontIcon';
import SvgIcon from './Page/Components/SvgIcon';
import List from './Page/Components/List';
import Paper from './Page/Components/Paper';
import Menu from './Page/Components/Menu';
import IconMenu from './Page/Components/IconMenu';
import DropDownMenu from './Page/Components/DropDownMenu';
import Popover from './Page/Components/Popover';
import CircularProgress from './Page/Components/CircularProgress';
import LinearProgress from './Page/Components/LinearProgress';
import RefreshIndicator from './Page/Components/RefreshIndicator';
import SelectField from './Page/Components/SelectField';
import Slider from './Page/Components/Slider';
import Checkbox from './Page/Components/Checkbox';
// 路由集合
const App = () => (<Router>
  <AppContainer>
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
    <Route exact path="/floating-action-button" component={FloatingActionButton}/>
    <Route exact path="/icon-button" component={IconButton}/>
    <Route exact path="/card" component={Card}/>
    <Route exact path="/chip" component={Chip}/>
    <Route exact path="/date-picker" component={DatePicker}/>
    <Route exact path="/dialog" component={Dialog}/>
    <Route exact path="/divider" component={Divider}/>
    <Route exact path="/drawer" component={Drawer}/>  
    <Route exact path="/grid-list" component={GridList}/>
    <Route exact path="/font-icon" component={FontIcon}/>
    <Route exact path="/svg-icon" component={SvgIcon}/>
    <Route exact path="/list" component={List}/>
    <Route exact path="/paper" component={Paper} />
    <Route exact path="/menu" component={Menu} />
    <Route exact path="/icon-menu" component={IconMenu} />
    <Route exact path="/dropdown-menu" component={DropDownMenu} />
    <Route exact path="/popover" component={Popover} />
    <Route exact path="/circular-progress" component={CircularProgress} />
    <Route exact path="/linear-progress" component={LinearProgress} />
    <Route exact path="/refresh-progress" component={RefreshIndicator} />
    <Route exact path="/select-field" component={SelectField} />
    <Route exact path="/slider" component={Slider} />
    <Route exact path="/checkbox" component={Checkbox} />
  </AppContainer>
</Router>);

injectTapEventPlugin();
ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
