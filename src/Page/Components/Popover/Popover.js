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
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RadioButton from 'material-ui/RadioButton';
// import './Popover.css';
 
class PopoverPage extends Component {
 constructor(props) {
    super(props);

    this.state = {
      open1: false,
      open2: false,
      open3: false,
      anchorOrigin: {
        horizontal: 'left',
        vertical: 'bottom',
      },
      targetOrigin: {
        horizontal: 'left',
        vertical: 'top',
      },
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
  handleTouchTap2 = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open2: true,
      anchorEl2: event.currentTarget,
    });
  };

  handleRequestClose2 = () => {
    this.setState({
      open2: false,
    });
  };
 handleTouchTap3 = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open3: true,
      anchorEl3: event.currentTarget,
    });
  };

  handleRequestClose3 = () => {
    this.setState({
      open3: false,
    });
  };

  setAnchor = (positionElement, position) => {
    const {anchorOrigin} = this.state;
    anchorOrigin[positionElement] = position;

    this.setState({
      anchorOrigin: anchorOrigin,
    });
  };

  setTarget = (positionElement, position) => {
    const {targetOrigin} = this.state;
    targetOrigin[positionElement] = position;

    this.setState({
      targetOrigin: targetOrigin,
    });
  };
  render() {
  	const styles = {
		  h3: {
		    marginTop: 20,
		    fontWeight: 400,
		  },
		  block: {
		    display: 'flex',
		  },
		  block2: {
		    margin: 10,
		  },
		  pre: {
		    overflow: 'hidden', // Fix a scrolling issue on iOS.
		  },
		};
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
	      <ContainerPreCode title="Animation">
	        <PrintCode code={animationCode} />
          <div className="show-examples">
            <p>默认动画风格是围绕原点动画。 可以使用<span className="code">animation</span>属性应用替代动画。 目前有一种替代动画可供选择，<span className="code">popover-animation-from-top</span>垂直动画。</p>
             <RaisedButton
		          onClick={this.handleTouchTap2}
		          label="Click me"
		        />
		        <Popover
		          open={this.state.open2}
		          anchorEl={this.state.anchorEl2}
		          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
		          targetOrigin={{horizontal: 'left', vertical: 'top'}}
		          onRequestClose={this.handleRequestClose2}
		          animation={PopoverAnimationVertical}
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
	      <ContainerPreCode title="Anchor Playground">
	        <PrintCode code={anchorPlaygroundCode} />
          <div className="show-examples">
            <p>使用单选按钮调整<span className="code">anchorOrigin</span>和<span className="code">targetOrigin</span>位置。</p>
             <RaisedButton
          onClick={this.handleTouchTap3}
          label="Click me"
        />
        <h3 style={styles.h3}>Current Settings</h3>
        <pre style={styles.pre}>
          anchorOrigin: {JSON.stringify(this.state.anchorOrigin)}
          <br />
          targetOrigin: {JSON.stringify(this.state.targetOrigin)}
        </pre>
        <h3 style={styles.h3}>Position Options</h3>
        <p>Use the settings below to toggle the positioning of the popovers above</p>
        <h3 style={styles.h3}>Anchor Origin</h3>
        <div style={styles.block}>
          <div style={styles.block2}>
            <span>Vertical</span>
            <RadioButton
              onClick={this.setAnchor.bind(this, 'vertical', 'top')}
              label="Top" checked={this.state.anchorOrigin.vertical === 'top'}
            />
            <RadioButton
              onClick={this.setAnchor.bind(this, 'vertical', 'center')}
              label="Center" checked={this.state.anchorOrigin.vertical === 'center'}
            />
            <RadioButton
              onClick={this.setAnchor.bind(this, 'vertical', 'bottom')}
              label="Bottom" checked={this.state.anchorOrigin.vertical === 'bottom'}
            />
          </div>
          <div style={styles.block2}>
            <span>Horizontal</span>
            <RadioButton
              onClick={this.setAnchor.bind(this, 'horizontal', 'left')}
              label="Left" checked={this.state.anchorOrigin.horizontal === 'left'}
            />
            <RadioButton
              onClick={this.setAnchor.bind(this, 'horizontal', 'middle')}
              label="Middle" checked={this.state.anchorOrigin.horizontal === 'middle'}
            />
            <RadioButton
              onClick={this.setAnchor.bind(this, 'horizontal', 'right')}
              label="Right" checked={this.state.anchorOrigin.horizontal === 'right'}
            />
          </div>
        </div>
        <h3 style={styles.h3}>Target Origin</h3>
        <div style={styles.block}>
          <div style={styles.block2}>
            <span>Vertical</span>
            <RadioButton
              onClick={this.setTarget.bind(this, 'vertical', 'top')}
              label="Top" checked={this.state.targetOrigin.vertical === 'top'}
            />
            <RadioButton
              onClick={this.setTarget.bind(this, 'vertical', 'center')}
              label="Center" checked={this.state.targetOrigin.vertical === 'center'}
            />
            <RadioButton
              onClick={this.setTarget.bind(this, 'vertical', 'bottom')}
              label="Bottom" checked={this.state.targetOrigin.vertical === 'bottom'}
            />
          </div>
          <div style={styles.block2}>
            <span>Horizontal</span>
            <RadioButton
              onClick={this.setTarget.bind(this, 'horizontal', 'left')}
              label="Left" checked={this.state.targetOrigin.horizontal === 'left'}
            />
            <RadioButton
              onClick={this.setTarget.bind(this, 'horizontal', 'middle')}
              label="Middle" checked={this.state.targetOrigin.horizontal === 'middle'}
            />
            <RadioButton
              onClick={this.setTarget.bind(this, 'horizontal', 'right')}
              label="Right" checked={this.state.targetOrigin.horizontal === 'right'}
            />
          </div>
        </div>
        <Popover
          open={this.state.open3}
          anchorEl={this.state.anchorEl3}
          anchorOrigin={this.state.anchorOrigin}
          targetOrigin={this.state.targetOrigin}
          onRequestClose={this.handleRequestClose3}
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
