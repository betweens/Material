import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  examplesCode,
  propertiesData1,
  propertiesData2,
  propertiesData3,
  propertiesData4,
} from './examplesCode.js'; 
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
class ToolbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});
  render() {
    return (<div>
	      <h2>Toolbar</h2>
	      <p><a href="https://www.google.com/design/spec/layout/structure.html#structure-toolbars">tollolbars</a>是组合在一起的水平堆叠的组合。 工具栏提供比AppBars更多的多功能性，它们是toolbars的一个子集。 以下工具栏组件可以帮助您组织布局。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Examples">
	        <PrintCode code={examplesCode} />
          <div className="show-examples">
	          <p>一个示例工具栏演示使用可用的子组件，并包括一些其他Material-UI组件，如<a href="http://www.material-ui.com/#/components/dropdown-menu">Drop Down Menu</a>, <a href="http://www.material-ui.com/#/components/font-icon">Font Icon</a>, <a href="http://www.material-ui.com/#/components/icon-menu">Icon Menu</a> 和 <a href="http://www.material-ui.com/#/components/raised-button">Raised Button</a> .</p>
	          <Toolbar>
			        <ToolbarGroup firstChild={true}>
			          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
			            <MenuItem value={1} primaryText="All Broadcasts" />
			            <MenuItem value={2} primaryText="All Voice" />
			            <MenuItem value={3} primaryText="All Text" />
			            <MenuItem value={4} primaryText="Complete Voice" />
			            <MenuItem value={5} primaryText="Complete Text" />
			            <MenuItem value={6} primaryText="Active Voice" />
			            <MenuItem value={7} primaryText="Active Text" />
			          </DropDownMenu>
			        </ToolbarGroup>
			        <ToolbarGroup>
			          <ToolbarTitle text="Options" />
			          <FontIcon className="muidocs-icon-custom-sort" />
			          <ToolbarSeparator />
			          <RaisedButton label="Create Broadcast" primary={true} />
			          <IconMenu
			            iconButtonElement={
			              <IconButton touch={true}>
			                <NavigationExpandMoreIcon />
			              </IconButton>
			            }
			          >
			            <MenuItem primaryText="Download" />
			            <MenuItem primaryText="More Info" />
			          </IconMenu>
			        </ToolbarGroup>
			      </Toolbar>
	        </div>
	      </ContainerPreCode>
	      <h3>Properties</h3>
	      <PropertiesList items={propertiesData1} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <h3>Properties</h3>
	      <p>ToolbarGroup contains a collection of components for you. It is recommended that all components in a Toolbar are contained within a ToolbarGroup.</p>
	      <PropertiesList items={propertiesData2} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <h3>Properties</h3>
	      <p>A vertical bar used to separate groups of components. It is used to easily organize components within a Toolbar.</p>
	      <PropertiesList items={propertiesData3} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <h3>ToolbarTitle Properties</h3>
	      <p>A simple text that is displayed in the Toolbar.</p>
	      <PropertiesList items={propertiesData4} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	     </div>);
  }
}

export default ToolbarPage;

