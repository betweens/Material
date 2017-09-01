import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  simpleExampleCode,
  animationCode,
  anchorPlaygroundCode,
  propertiesData,
} from './examplesCode.js';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
// import './Popover.css';
 
class PopoverPage extends Component {
 constructor(props) {
    super(props);

    this.state = {
      open1: false,
    };
  }
  handleTouchTap1 = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open1: true,
      anchorEl1: event.currentTarget,
    });
  };

  handleRequestClose1 = () => {
    this.setState({
      open1: false,
    });
  };

  render() {
    return (<div>
	      <h2>Paper</h2>
	      <p><span className="code">Popover</span>可以用作可以包含元素的<a href="http://www.material-ui.com/#/components/dropdown-menu">Drop Down Menu</a>的替代方法。 在我们的示例中，我们使用了一个菜单，但可以使用任何合适的组件组合。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Simple Example">
	        <PrintCode code={simpleExampleCode} />
          <div className="show-examples">
	          <p>一个简单的示例显示一个包含<a href="http://www.material-ui.com/#/components/menu">menu</a>的Popover。 也可以通过点击按钮来关闭Popover。</p>
					   <RaisedButton
	          onClick={this.handleTouchTap1}
	          label="Click me"
	        />
	        <Popover
	          open={this.state.open1}
	          anchorEl={this.state.anchorEl1}
	          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
	          targetOrigin={{horizontal: 'left', vertical: 'top'}}
	          onRequestClose={this.handleRequestClose1}
	        >
	          <Menu>
	            <MenuItem primaryText="Refresh" />
	            <MenuItem primaryText="Help &amp; feedback" />
	            <MenuItem primaryText="Settings" />
	            <MenuItem primaryText="Sign out" />
	          </Menu>
	        </Popover>
	        </div>
	      </ContainerPreCode>
	      <h3>属性</h3>
	      <PropertiesList items={propertiesData} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	     </div>);
  }
}

export default PopoverPage;
