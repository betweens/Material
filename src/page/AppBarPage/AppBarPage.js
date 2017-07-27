import React, { Component } from 'react';
import { 
	PrintCode, 
	FooterBanner, 
	ContainerPreCode,
	PropertiesList,
} from '../../components'
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
  	const appBarCode = `import React from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * A simple example of ｀AppBar｀ with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExampleIcon = () => (
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

export default AppBarExampleIcon;`;
const ButtonsCode = `import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable ｀title｀
 * through the ｀onTouchTap｀ property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const AppBarExampleIconButton = () => (
  <AppBar
    title={<span style={styles.title}>Title</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={<FlatButton label="Save" />}
  />
);

export default AppBarExampleIconButton;`;
const compositionCode = `import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

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

/**
 * This example is taking advantage of the composability of the ｀AppBar｀
 * to render different components depending on the application state.
 */
class AppBarExampleComposition extends Component {
  state = {
    logged: true,
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  render() {
    return (
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
    );
  }
}

export default AppBarExampleComposition;`;
    const styles = {
		  title: {
		    cursor: 'pointer',
		  },
		};
		const propertiesData = {
      title: ['Name', 'Type', 'Default', 'Description'],
      body:[[
      	'children',
      	'node',
      	'',
      	'可以渲染一个自定义子元素在app bar里面',
      ], [
	      'className',
	      'string',
	      '',
	      "应用于app bar's的根元素。",
      ], [
	      'iconClassNameLeft',
				'string',
				'',
				' app bar左侧的图标的类名。 如果您为图标使用样式表，请在此处输入要使用的图标的类名。',
      ], [
	      'iconClassNameRight',
				'string',
				'',
				'类似于iconClassNameLeft prop，除了它适用于app bar右侧显示的图标。',
      ], [
				'iconElementLeft',
				'element',	
				'',
				'要显示在应用程序栏左侧的自定义元素，如SvgIcon。',
      ], [
	      'iconElementRight',
				'element',	
				'',	
				'类似于iconElementLeft prop，除了该元素显示在app bar的右侧。'
      ], [
				'iconStyleLeft'	,
				'object',
				'',		
				'覆盖显示在app bar左侧的元素的内联样式。'
      ], [
	      'iconStyleRight',	
				'object',
				'',	
				'覆盖显示在app bar右侧的元素的内联样式。'
      ], [
	      'onLeftIconButtonTouchTap',
				'function',
				'',		
				<div>
		      <span>当通过点击或触摸选择左图标时的回调功能。</span><br />
				  Signature:<br />
					function(event: object) => void<br />
					event: TouchTap事件定位到左侧IconButton。<br />
				</div>
	      ], [
	      'onRightIconButtonTouchTap',
				'function',
				'',		
				<div>
		      <span>当通过触摸点选择右图标时的回调功能。</span><br />
		      Signature:<br />
					function(event: object) => void<br />
					event: TouchTap事件定位到右侧IconButton。
				</div>
      ], [
	      'onTitleTouchTap',
				'function',
				'',		
				<div>
	      <span>当通过点击或触摸选择标题文本时的回调功能。</span><br />
					Signature:<br />
					function(event: object) => void<br />
					event: TouchTap事件定位到标题节点。
				</div>
      ], [
	      'showMenuIconButton',
				'bool',	
				'true',	
				'确定是否在标题旁边显示“菜单”图标。 将此属性设置为false会隐藏图标。'
      ], [
	      'style',
				'object',
				'',
				'覆盖根元素的内联样式。'
      ], [
				'title',	
				'node',
				'',	
				'在app bar上显示的标题。',
      ], [
				'titleStyle',	
				'object',	
				'',	
				"覆盖应用程序栏标题元素的内联样式。"
      ], [
				'zDepth',	
				'propTypes.zDepth',	
				'1',	
				'zDepth组件层级的深度。 应用程序栏的阴影也取决于此属性。'
      ]]
		};
    return (<div>
	    <div className="markdown-body">
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
	     </div>
	    <FooterBanner />
  </div>);
  }
}

export default AppBarPage;
