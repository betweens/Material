import React from 'react';
const simpleExampleCode = `import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

export default class SnackbarExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
          onClick={this.handleTouchTap}
          label="Add to my calendar"
        />
        <Snackbar
          open={this.state.open}
          message="Event added to your calendar"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}`;
const exampleActionCode = `import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class SnackbarExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      autoHideDuration: 4000,
      message: 'Event added to your calendar',
      open: false,
    };
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleActionTouchTap = () => {
    this.setState({
      open: false,
    });
    alert('Event removed from your calendar.');
  };

  handleChangeDuration = (event) => {
    const value = event.target.value;
    this.setState({
      autoHideDuration: value.length > 0 ? parseInt(value) : 0,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
          onClick={this.handleTouchTap}
          label="Add to my calendar"
        />
        <br />
        <TextField
          floatingLabelText="Auto Hide Duration in ms"
          value={this.state.autoHideDuration}
          onChange={this.handleChangeDuration}
        />
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          action="undo"
          autoHideDuration={this.state.autoHideDuration}
          onActionTouchTap={this.handleActionTouchTap}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}`;
const consecutiveSnackbarsCode = `import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

export default class SnackbarExampleTwice extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: 'Event 1 added to your calendar',
      open: false,
    };
    this.timer = undefined;
  }

  componentWillUnMount() {
    clearTimeout(this.timer);
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });

    this.timer = setTimeout(() => {
      this.setState({
        message: ·Event $ {Math.round(Math.random() * 100)} added to your calendar·,
      });
    }, 1500);
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
          onClick={this.handleTouchTap}
          label="Add to my calendar two times"
        />
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          action="undo"
          autoHideDuration={3000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}`;
const propertiesData = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'action',
    'node',
    '',
    'snackbar上的动作标签。',
  ], [
    'autoHideDuration',
    'number',
    '',
    '自动关闭之前等待的毫秒数。 如果没有指定值，snackbar将正常关闭。 如果提供了一个值，snackbar仍然可以正常关闭。 如果在定时器超时之前snackbar被关闭，定时器将被清除。',
  ], [
    'bodyStyle',
    'object',
    '',
    '覆盖body元素的内联样式。',
  ], [
    'className',
    'string',
    '',
    '根元素的css类名称。',
  ], [
    'contentStyle',
    'object',
    '',
    '覆盖内容元素的内联样式。',
  ], [
    'message *',
    'node',
    '',
    '要显示的消息。 （注意：如果消息是元素或数组，并且Snackbar可能在仍然打开时可能会重新呈现，请确保相同的对象保持为消息属性，如果要避免Snackbar隐藏并再次显示）',
  ], [
    'onActionTouchTap',
    'function',
    '',
    <div>触发动作按钮时触发。<br />
      Signature:<br />
      function(event: object) => void<br />
      event: Action button event.
    </div>,
  ], [
    'onRequestClose',
    'function',
    '',
    <div>当Snackbar被要求通过Snackbar之外的点击关闭，或者在AutoHideDuration定时器到期之后被触发。通常，onRequestClose用于设置父组件中的状态，用于控制Snackbar打开支架。reason参数可以选择用于控制对onRequestClose的响应，例如忽略clickaway。<br />
      Signature:<br />
      function(reason: string) => void<br />
      reason: Can be:"timeout" (autoHideDuration expired) or: "clickaway"
    </div>,
  ], [
    'open *',
    'bool',
    '',
    '控制Snackbar是否打开。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ]]
};
export {
  simpleExampleCode,
  exampleActionCode,
  consecutiveSnackbarsCode,
  propertiesData,
}
