import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import { FooterBanner } from '../../components';
import Version from './Version';
import OutMenu from './OutMenu.js';
import './AppContainer.css';
class AppContainer extends Component {
	constructor(props) {
    super(props);
    this.state = {
      value: 1,
      open: true,
      size: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.listenInWindowSize = this.listenInWindowSize.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }
  // 选择版本
  handleChange(event, index, value) {
    this.setState({ value });
  }
  componentWillMount() {
    this.listenInWindowSize();
    window.onresize = this.listenInWindowSize;
  }

  listenInWindowSize () {
    const size = window.innerWidth;
    if (size < 996) {
      if (this.state.open === false) return;
      this.setState({
        open: false,
        size,
      })
    } else {
      if (this.state.open) return;
      this.setState({
        open: true,
        size,
      })
    }
  }
  // 切换左侧菜单
  handleTouchTap() {
    this.setState({
      open: !this.state.open,
      docked: true,
    })
  }
  
  render() {
    // 左侧导航栏配置
    const drawerConfig = {
		  open: this.state.open,
		  disableSwipeToOpen: true,
      onRequestChange: (open) => this.setState({open}),
		}
		// 版本选择框宽度
		const styles = {
		  customWidth: {
		    width: '100%',
		  },
		};
		// 版本选择框宽度配置
		const versionConfig = {
		  value: this.state.value,
		  onChange: this.handleChange,
		  style: styles.customWidth,
		  autoWidth: false,
		}

    // 控制展示侧边栏是容器边距
    let noBodyPadding = {
      margin: this.state.open ? '48px 72px' : '20px',
      paddingLeft: this.state.open ? '256px' : '0',
    }

    if (this.state.size < 996 && this.state.size > 0) {
      drawerConfig.docked = false;
      noBodyPadding = {
        margin: '20px',
        paddingLeft: '0',
      }
    }

    return ( <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}><div className="left-menu">
      <div className="top-bg">Aww yeah, Material-UI v1 is coming!</div>
      <AppBar onLeftIconButtonTouchTap={this.handleTouchTap} iconElementRight={<FlatButton icon={<FontIcon className="muidocs-icon-custom-github" />} target="_blank" href="https://github.com/betweens/Material" />} />
      <Drawer {...drawerConfig}>
      <div className="top-bg"></div>
    	<AppBar title="Material-UI" showMenuIconButton={false} style={{  marginTop: "40px" }}/>
    	<div style={{paddingLeft: "16px" , fontSize: "16px", marginTop: "8px" }}>Version:</div>
    	<DropDownMenu {...versionConfig}>{Version}</DropDownMenu>
    	<List>
    	  {OutMenu}
    	  <hr />
    	  <ListItem key={1} children={<a href="https://github.com/betweens/Material">GitHub</a>}/>
    	  <ListItem key={2} children={<a href="https://facebook.github.io/react/">React</a>}/>
    	  <ListItem key={3} children={<a href="https://material.io/guidelines/material-design/introduction.html">Material Design</a>}/>
    	</List>
    </Drawer>
   <div className="markdown-body" style={noBodyPadding}>{this.props.children}</div>
   <FooterBanner />
  </div></MuiThemeProvider>);
  }
}

export default AppContainer;
