import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import { 
	formDividerCode,
  insetDividerCode,
  menuDividerCode,
  propertiesData,
} from './examplesCode.js';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import {Menu, MenuItem} from 'material-ui/Menu';
// import './Avatar.css';
 
class DividerPage extends Component {
 
  render() {	
  	const style = {
		  marginLeft: 20,
		};
		const styleMenu = {
		  // Without this, the menu overflows the CodeExample container.
		  // float: 'left',
		};
    return (<div>
	      <h2>Divider</h2>
	      <p><a href="">Dividers</a>组和列表和页面布局中的单独内容。 分隔线是一个轻薄的规则，足以在视觉和空间上区分内容。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Form Divider">
	        <PrintCode code={formDividerCode} />
          <div className="show-examples">
	          <p>这里,<span className="code">Divider</span>用于分隔<a href="http://www.material-ui.com/#/components/text-field">TextField</a>组件。 它默认为“full-bleeding1”（ful1l width）。</p>
	          <Paper zDepth={2}>
					    <TextField hintText="First name" style={style} underlineShow={false} />
					    <Divider />
					    <TextField hintText="Middle name" style={style} underlineShow={false} />
					    <Divider />
					    <TextField hintText="Last name" style={style} underlineShow={false} />
					    <Divider />
					    <TextField hintText="Email address" style={style} underlineShow={false} />
					    <Divider />
					  </Paper>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Menu Divider">
	        <PrintCode code={menuDividerCode} />
          <div className="show-examples">
	          <p>插入参数允许分隔符与插入内容对齐，如插入列表组件。</p>
	          <div style={{width: "360px"}}>
		          <List>
					      <ListItem insetChildren={true} primaryText="Janet Perkins Bennet" />
					      <ListItem insetChildren={true} primaryText="Peter Carlsson" />
					    </List>
					    <Divider inset={true} />
					    <List>
					      <ListItem insetChildren={true} primaryText="Aaron Bennet" />
					      <ListItem insetChildren={true} primaryText="Abbey Christensen" />
					    </List>
				    </div>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Inset Divider">
	        <PrintCode code={insetDividerCode} />
          <div className="show-examples">
	          <p><span className="code">Divider</span>也可以在<a href="http://www.material-ui.com/#/components/menu">Menu</a>中使用。</p>
	          <div style={{width: "320px"}}>
		          <Menu desktop={true} style={styleMenu}>
						    <MenuItem primaryText="Settings" />
						    <MenuItem primaryText="Help & feedback" />
						    <Divider />
						    <MenuItem primaryText="Sign out" />
						  </Menu>
	          </div>
	        </div>
	      </ContainerPreCode>
	      <h3>属性</h3>
	      <PropertiesList items={propertiesData} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	     </div>);
  }
}

export default DividerPage;
