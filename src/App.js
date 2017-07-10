import React, { Component } from 'react';
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

// 子页面
import AppBarPage from './page/AppBarPage';
import LeftMenu from './LeftMenu';


// 主容器
class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>{this.props.children}</MuiThemeProvider>;
  }
}

const App = () => (<Router><section className="app-container flex-hrz">
  <div className="flex-init left-menu">
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <LeftMenu />
    </MuiThemeProvider>
  </div>
  <AppContainer>
    <div className="flex-full right-content">
      <Route exact path="/" component={AppBarPage}/>
      <Route path="/app-bar" component={AppBarPage}/>
    </div>
  </AppContainer>
</section></Router>);

injectTapEventPlugin();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
