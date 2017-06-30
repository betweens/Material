import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import Version from './Version';
import LeftMenu from './LeftMenu';
import './DrawerPage.css';
console.log(LeftMenu);
class DrawerPage extends Component {
	constructor(props) {
    super(props);
    this.state = {value: 1};
    this.handleChange = this.handleChange.bind(this);
  }
  // 选择版本
  handleChange(event, index, value) {
    this.setState({ value });
  }
  render() {
    // 左侧导航栏配置
    const drawerConfig = {
		  open: true,
		  disableSwipeToOpen: true,
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
    	<AppBar title="Material-UI" showMenuIconButton={false} />
    	<div style={{paddingLeft: "16px" , fontSize: "16px", marginTop: "8px" }}>Version:</div>
    	<DropDownMenu {...versionConfig}>{Version}</DropDownMenu>
    	<List>{LeftMenu}

       </List>
    </Drawer>);
  }
}

export default DrawerPage;
