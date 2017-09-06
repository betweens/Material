import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  simpleExampleCode,
  exampleActionCode,
  consecutiveSnackbarsCode,
  propertiesData,
} from './examplesCode.js';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton'; 
import TextField from 'material-ui/TextField'; 
class SnackbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open1: false,
      autoHideDuration: 4000,
      message: 'Event added to your calendar',
      open2: false,
      message2: 'Event 1 added to your calendar',
      open3: false,
    };
  }
  componentWillUnMount() {
    clearTimeout(this.timer);
  }
  handleTouchTap1 = () => {
    this.setState({
      open1: true,
    });
  };

  handleRequestClose1 = () => {
    this.setState({
      open1: false,
    });
  };
  handleTouchTap2 = () => {
    this.setState({
      open2: true,
    });
  };

  handleActionTouchTap2 = () => {
    this.setState({
      open2: false,
    });
    alert('Event removed from your calendar.');
  };

  handleChangeDuration2 = (event) => {
    const value = event.target.value;
    this.setState({
      autoHideDuration: value.length > 0 ? window.parseInt(value) : 0,
    });
  };

  handleRequestClose2 = () => {
    this.setState({
      open2: false,
    });
  };
  handleTouchTap3 = () => {
    this.setState({
      open3: true,
    });

    this.timer = setTimeout(() => {
      this.setState({
        message2: `Event ${Math.round(Math.random() * 100)} added to your calendar`,
      });
    }, 1500);
  };

  handleRequestClose3 = () => {
    this.setState({
      open3: false,
    });
  };
  render() {
    return (<div>
	      <h2>Snackbar</h2>
	      <p><a href="https://www.google.com/design/spec/components/snackbars-toasts.html">Snackbars</a>通过在屏幕底部显示简短的信息来提供有关操作的轻量级反馈。 <span className="code">Snackbars</span>可以包含一个动作。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Simple Examples">
	        <PrintCode code={simpleExampleCode} />
          <div className="show-examples">
	          <p><span className="code">Snackbar</span>是受控组件，打开时显示。 点击从<span className="code">Snackbar</span>关闭它，或等待<span className="code">autoHideDuration</span>到期。</p>
	          <RaisedButton onClick={this.handleTouchTap1} label="Add to my calendar"/>
		        <Snackbar open={this.state.open1}  message="Event added to your calendar" autoHideDuration={4000} onRequestClose={this.handleRequestClose1}/>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Examples ActionCode">
	        <PrintCode code={exampleActionCode} />
          <div className="show-examples">
 	          <p>一个动作可以添加到<span className="code">Snackbar</span>，并触发<span className="code">onActionTouchTap</span>。 编辑文本框以更改<span className="code">autoHideDuration</span></p>
		        <RaisedButton
	          onClick={this.handleTouchTap2}
	          label="Add to my calendar"
	        />
	        <br />
	        <TextField
	          floatingLabelText="Auto Hide Duration in ms"
	          value={this.state.autoHideDuration2}
	          onChange={this.handleChangeDuration2}
	        />
	        <Snackbar
	          open={this.state.open2}
	          message={this.state.message}
	          action="undo"
	          autoHideDuration={this.state.autoHideDuration2}
	          onActionTouchTap={this.handleActionTouchTap2}
	          onRequestClose={this.handleRequestClose2}
	        />
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Consecutive Snackbars">
	        <PrintCode code={consecutiveSnackbarsCode} />
          <div className="show-examples">
 	          <p>更改消息会导致<span className="code">Snackbar</span>动画化 - 无需使用打开的props关闭并重新打开<span className="code">Snackbar</span>。</p>
	          <RaisedButton
		          onClick={this.handleTouchTap3}
		          label="Add to my calendar two times"
		        />
		        <Snackbar
		          open={this.state.open3}
		          message={this.state.message2}
		          action="undo"
		          autoHideDuration={3000}
		          onRequestClose={this.handleRequestClose3}
		        />
	        </div>
	      </ContainerPreCode>
	      <h3>Properties</h3>
	      <PropertiesList items={propertiesData} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	     </div>);
  }
}

export default SnackbarPage;

