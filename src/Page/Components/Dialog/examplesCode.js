import React from 'react';
const simpleDialogCode = `import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class DialogExampleSimple extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Dialog" onClick={this.handleOpen} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    );
  }
}`;
const modalDialogCode = `import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class DialogExampleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Modal Dialog" onClick={this.handleOpen} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          Only actions can close this dialog.
        </Dialog>
      </div>
    );
  }
}`;
const styledDialogCode = `import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

/**
 * The dialog width has been set to occupy the full width of browser through the ｀contentStyle｀ property.
 */
export default class DialogExampleCustomWidth extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Dialog With Custom Width" onClick={this.handleOpen} />
        <Dialog
          title="Dialog With Custom Width"
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
          This dialog spans the entire width of the screen.
        </Dialog>
      </div>
    );
  }
}`;
const nestedDialogsCode = `import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
export default class DialogExampleDialogDatePicker extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Dialog With Date Picker" onClick={this.handleOpen} />
        <Dialog
          title="Dialog With Date Picker"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Open a Date Picker dialog from within a dialog.
          <DatePicker hintText="Date Picker" />
        </Dialog>
      </div>
    );
  }
}`;
const scrollableDialogCode = `import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  radioButton: {
    marginTop: 16,
  },
};

/**
 * Dialog content can be scrollable.
 */
export default class DialogExampleScrollable extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    const radios = [];
    for (let i = 0; i < 30; i++) {
      radios.push(
        <RadioButton
          key={i}
          value={｀value $ {i + 1}｀}
          label={｀Option $ {i + 1}｀}
          style={styles.radioButton}
        />
      );
    }

    return (
      <div>
        <RaisedButton label="Scrollable Dialog" onClick={this.handleOpen} />
        <Dialog
          title="Scrollable Dialog"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            {radios}
          </RadioButtonGroup>
        </Dialog>
      </div>
    );
  }
}`;
const alertDialogCode = `import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
export default class DialogExampleAlert extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Discard"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Alert" onClick={this.handleOpen} />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Discard draft?
        </Dialog>
      </div>
    );
  }
}`;
const propertiesData = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'actions',
    'node',
    '',
    'Action对话框显示对话框内容（children）。 此属性接受React元素或React元素数组',
  ],[
    'actionsContainerClassName',
    'string',
    '',
    '要添加到actions容器的根元素的className。',
  ],[
    'actionsContainerClassName',
    'string',
    '',
    '覆盖操作容器的根元素的内联样式。',
  ],[
    'autoDetectWindowHeight',
    'bool',
    'true',
    '如果设置为true，Dialog的高度将被自动检测。 将执行最大高度，以使内容不会超出视口。',
  ],[
    'autoScrollBodyContent',
    'bool',
    'false',
    '如果设置为true，则Dialog的正文内容将可滚动。',
  ],[
    'bodyClassName',
    'string',
    '',
    'className添加到内容的根元素下的标题。',
  ],[
    'bodyStyle',
    'object',
    '',
    '覆盖标题下内容根元素的内联样式。',
  ],[
    'children',
    'node',
    '',
    'Dialog的内容。',
  ],[
    'contentClassName',
    'string',
    '',
    'className添加到内容容器。',
  ],[
    'contentStyle',
    'object',
    '',
    '覆盖内容容器的内联样式。',
  ],[
    'modal',
    'bool',
    'false',
    '强制用户使用对话框中的一个操作。 点击对话框外不会触发onRequestClose。',
  ],[
    'onRequestClose',
    'function',
    '',
    <div>当Dialog被要求通过Dialog之外的按钮或按钮关闭时触发。<br />
      Signature:<br />
      function(buttonClicked: bool) => void<br />
      buttonClicked: 确定按钮点击是否触发了此请求.
    </div>,
  ],[
    'open *',
    'bool',
    '',
    '控制对话框是否打开。',
  ],[
    'overlayClassName',
    'string',
    '',
    '要添加到在Dialog后面渲染的Overlay组件的className。',
  ],[
    'overlayStyle',
    'object',
    '',
    '覆盖在Dialog后面渲染的Overlay组件的内联样式。',
  ],[
    'paperClassName',
    'string',
    '',
    'Paper元素的CSS类名称。',
  ],[
    'paperProps',
    'object',
    '',
    '应用于Paper元素的属性。',
  ],[
    'repositionOnUpdate',
    'bool',
    'true',
    '确定在内容更新时是否应重新定位Dialog。',
  ],[
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ],[
    'title',
    'node',
    '',
    '在Dialog上显示的标题。 可以是数字，字符串，元素或包含这些类型的数组。',
  ],[
    'titleClassName',
    'string',
    '',
    '要添加到标题的根容器元素中的className。',
  ],[
    'titleStyle',
    'object',
    '',
    '覆盖标题的根容器元素的内联样式。',
  ]]
};
export {
  simpleDialogCode,
  modalDialogCode,
  styledDialogCode,
  nestedDialogsCode,
  scrollableDialogCode,
  alertDialogCode,
  propertiesData,
}
