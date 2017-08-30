import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  simpleExamplesCode,
  disabledItemsCode,
  iconsCode,
  secondaryTextCode,
  nestedMenusCode,
  propertiesData1,
  propertiesData2,
} from './examplesCode.js';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import ContentLink from 'material-ui/svg-icons/content/link';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';
// import './Menu.css';
 
class MenuPage extends Component {
 
  render() {
  	const style = {
		  display: 'inline-block',
		  margin: '16px 32px 16px 0',
		};
		const IconRightIcon = {
	    textAlign: 'center',
	    lineHeight: '24px',
	  };
    return (<div>
	      <h2>Menu</h2>
	      <p><a href="https://www.google.com/design/spec/components/menus.html">Menus</a> allow you to take an action by selecting from a list revealed upon opening a temporary, new sheet of material.</p>
	      <p><span className="code">menu</span>通常用于<a href="http://www.material-ui.com/#/components/popover">Popover</a>。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Simple Examples">
	        <PrintCode code={simpleExamplesCode} />
          <div className="show-examples">
	          <p>两个简单的例子。 调整菜单宽度以适应内容。</p>
			      <Paper style={style}>
				      <Menu>
				        <MenuItem primaryText="Maps" />
				        <MenuItem primaryText="Books" />
				        <MenuItem primaryText="Flights" />
				        <MenuItem primaryText="Apps" />
				      </Menu>
				    </Paper>
				    <Paper style={style}>
				      <Menu>
				        <MenuItem primaryText="Refresh" />
				        <MenuItem primaryText="Help &amp; feedback" />
				        <MenuItem primaryText="Settings" />
				        <MenuItem primaryText="Sign out" />
				      </Menu>
				    </Paper>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Disabled Items">
	        <PrintCode code={disabledItemsCode} />
          <div className="show-examples">
	          <p>禁用的属性禁用一个MenuItem。 菜单使用桌面属性支持更紧凑的垂直间距。 <a href="http://www.material-ui.com/#/components/divider">divider</a>可用于分离MenuItem。</p>
			      <Paper style={style}>
			      <Menu desktop={true}>
			        <MenuItem primaryText="Back" />
			        <MenuItem primaryText="Forward" disabled={true} />
			        <Divider />
			        <MenuItem primaryText="Recently closed" disabled={true} />
			        <MenuItem primaryText="Google" disabled={true} />
			        <MenuItem primaryText="YouTube" />
			      </Menu>
			    </Paper>
			    <Paper style={style}>
			      <Menu desktop={true}>
			        <MenuItem primaryText="Undo" />
			        <MenuItem primaryText="Redo" disabled={true} />
			        <Divider />
			        <MenuItem primaryText="Cut" disabled={true} />
			        <MenuItem primaryText="Copy" disabled={true} />
			        <MenuItem primaryText="Paste" />
			      </Menu>
			    </Paper>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Icons">
	        <PrintCode code={iconsCode} />
          <div className="show-examples">
	          <p><span className="code">MenuItem</span>通过<span className="code">leftIcon</span>和<span className="code">rightIcon</span>属性来支持图标。</p>
			      <Paper style={style}>
				      <Menu>
				        <MenuItem primaryText="Preview" leftIcon={<RemoveRedEye />} />
				        <MenuItem primaryText="Share" leftIcon={<PersonAdd />} />
				        <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />
				        <Divider />
				        <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
				        <MenuItem primaryText="Download" leftIcon={<Download />} />
				        <Divider />
				        <MenuItem primaryText="Remove" leftIcon={<Delete />} />
				      </Menu>
				    </Paper>
				    <Paper style={style}>
				      <Menu>
				        <MenuItem primaryText="Clear Config" />
				        <MenuItem primaryText="New Config" rightIcon={<PersonAdd />} />
				        <MenuItem primaryText="Project" rightIcon={<FontIcon className="material-icons">settings</FontIcon>} />
				        <MenuItem
				          primaryText="Workspace"
				          rightIcon={
				            <FontIcon className="material-icons" style={{color: '#559'}}>settings</FontIcon>
				          }
				        />
				        <MenuItem primaryText="Paragraph" rightIcon={<b style={IconRightIcon}>¶</b>} />
				        <MenuItem primaryText="Section" rightIcon={<b style={IconRightIcon}>§</b>} />
				      </Menu>
				    </Paper>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Secondary Text">
	        <PrintCode code={secondaryTextCode} />
          <div className="show-examples">
	          <p><span className="code">MenuItem</span>支持<span className="code">secondaryText</span>属性。</p>
			      <Paper style={style}>
				      <Menu>
				        <MenuItem primaryText="Maps" />
				        <MenuItem primaryText="Books" />
				        <MenuItem primaryText="Flights" />
				        <MenuItem primaryText="Apps" />
				      </Menu>
				    </Paper>
				    <Paper style={style}>
				      <Menu>
				        <MenuItem primaryText="Refresh" />
				        <MenuItem primaryText="Help &amp; feedback" />
				        <MenuItem primaryText="Settings" />
				        <MenuItem primaryText="Sign out" />
				      </Menu>
				    </Paper>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Nested Menus">
	        <PrintCode code={nestedMenusCode} />
          <div className="show-examples">
	          <p>可以使用<span className="code">MenuItem</span>组件的<span className="code">menuItems</span>属性来配置级联菜单。</p>
			      <Paper style={style}>
				      <Menu desktop={true} width={320}>
				        <MenuItem primaryText="Single" insetChildren={true} />
				        <MenuItem primaryText="1.15" insetChildren={true} />
				        <MenuItem primaryText="Double" insetChildren={true} />
				        <MenuItem
				          primaryText="Custom: 1.2"
				          checked={true}
				          rightIcon={<ArrowDropRight />}
				          menuItems={[
				            <MenuItem
				              primaryText="Show"
				              rightIcon={<ArrowDropRight />}
				              menuItems={[
				                <MenuItem primaryText="Show Level 2" />,
				                <MenuItem primaryText="Grid lines" checked={true} />,
				                <MenuItem primaryText="Page breaks" insetChildren={true} />,
				                <MenuItem primaryText="Rules" checked={true} />,
				              ]}
				            />,
				            <MenuItem primaryText="Grid lines" checked={true} />,
				            <MenuItem primaryText="Page breaks" insetChildren={true} />,
				            <MenuItem primaryText="Rules" checked={true} />,
				          ]}
				        />
				        <Divider />
				        <MenuItem primaryText="Add space before paragraph" />
				        <MenuItem primaryText="Add space after paragraph" />
				        <Divider />
				        <MenuItem primaryText="Custom spacing..." />
				      </Menu>
				    </Paper>
	        </div>
	      </ContainerPreCode>
	      <h3>Menu Properties</h3>
	      <PropertiesList items={propertiesData1} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <h3>MenuItem Properties</h3>
	      <PropertiesList items={propertiesData2} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	     </div>);
  }
}

export default MenuPage;
