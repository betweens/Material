import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import Version from './Version';
import OutMenu from './OutMenu.js';
import './LeftMenu.css';
class LeftMenu extends Component {
	constructor(props) {
    super(props);
    this.state = {
      value: 1,
      open: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.listenInWindowSize = this.listenInWindowSize.bind(this);
  }
  // 选择版本
  handleChange(event, index, value) {
    this.setState({ value });
  }
  componentWillMount() {
    window.onresize = this.listenInWindowSize;
  }

  componentDidMount() {
    this.listenInWindowSize();
  }

  listenInWindowSize () {
    const size = window.innerWidth;
    if (size < 996) {
      if (this.state.open === false) return;
      this.setState({
        open: false,
      })
    }
  }
  
  render() {
    // 左侧导航栏配置
    const drawerConfig = {
		  open: this.state.open,
		  disableSwipeToOpen: true,
      className: this.state.open ? 'flex-init left-menu' : 'flex-init',
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
    return (<Drawer {...drawerConfig}>
      <div className="top-bg"></div>
    	<AppBar title="Material-UI" showMenuIconButton={false} style={{  marginTop: "40px" }}/>
    	<div style={{paddingLeft: "16px" , fontSize: "16px", marginTop: "8px" }}>Version:</div>
    	<DropDownMenu {...versionConfig}>{Version}</DropDownMenu>
    	<List>
    	  {OutMenu}
    	  <hr />
    	  <ListItem key={1} primaryText="GitHub" />
    	  <ListItem key={2} primaryText="React" />
    	  <ListItem key={3} primaryText="Material Design" />
    	</List>
    </Drawer>);
  }
}

export default LeftMenu;
