import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
	appBarCode,
  ButtonsCode,
  compositionCode,
  propertiesData,
} from './examplesCode.js';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import './AppBarPage.css';
class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}
const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';
class AppBarPage extends Component {
	state = {
    logged: true,
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };
	handleTouchTap() {
	  alert('onTouchTap triggered on the title component');
	}
  render() {

    const styles = {
		  title: {
		    cursor: 'pointer',
		  },
		};

    return (<div>
	      <h2>导航条</h2>
	      <p><a href="https://www.google.com/design/spec/layout/structure.html#structure-app-bar">app bar</a>, 以前被称为Android操作栏,是一种特殊的工具栏，用于品牌、导航、搜索和操作。</p>
	      <ContainerPreCode>
	        <PrintCode code={appBarCode} />
          <div className="show-examples">
	          <p>AppBar的一个简单示例，右侧有一个图标。 默认情况下，左侧图标是导航菜单。</p>
	          <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Buttons example">
	        <PrintCode code={ButtonsCode} />
          <div className="show-examples">
	          <p>此示例使用左侧的IconButton，通过onTouchTap属性具有可点击的标题，右侧使用FlatButton。</p>
	          <AppBar
					    title={<span style={styles.title}>Title</span>}
					    onTitleTouchTap={this.handleTouchTap}
					    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
					    iconElementRight={<FlatButton label="Save" />}
					  />
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Composition example">
	        <PrintCode code={compositionCode} />
          <div className="show-examples">
	          <p>该示例利用App Bar的可组合性来根据应用程序状态渲染不同的组件。</p>
	          <div>
			        <Toggle
			          label="Logged"
			          defaultToggled={true}
			          onToggle={this.handleChange}
			          labelPosition="right"
			          style={{margin: 20}}
			        />
			        <AppBar
			          title="Title"
			          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
			          iconElementRight={this.state.logged ? <Logged /> : <Login />}
			        />
			      </div>
	        </div>
	      </ContainerPreCode>
	      <h3>属性</h3>
	      <PropertiesList items={propertiesData} />
  </div>);
  }
}

export default AppBarPage;
