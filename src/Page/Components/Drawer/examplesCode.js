import React from 'react';
const dockedExampleCode = `import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerSimpleExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onClick={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}`;
const undockedExampleCode = `import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <RaisedButton
          label="Open Drawer"
          onClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}`;
const openSecondaryExampleCode = `import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerOpenRightExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onClick={this.handleToggle}
        />
        <Drawer width={200} openSecondary={true} open={this.state.open} >
          <AppBar title="AppBar" />
        </Drawer>
      </div>
    );
  }
}`;
const propertiesData = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'children',
    'node',
    '',
    'Drawer的内容',
  ], [
    'className',
    'string',
    '',
    '根元素的CSS类名称。',
  ], [
    'containerClassName',
    'string',
    '',
    '容器元素的CSS类名称。',
  ], [
    'containerStyle',
    'object',
    '',
    '覆盖容器元素的内联样式。',
  ], [
    'disableSwipeToOpen',
    'bool',
    'false',
    '如果true，当Drawer关闭时侧向滑动，将不会打开它。',
  ], [
    'docked',
    'bool',
    'true',
    '如果true，Drawer将被停靠。 在这种状态下，叠加层不会显示，点击菜单项就不会关闭Drawer。',
  ],[
    'onRequestChange',
    'function',
    '',
    <div>当Drawer的打开状态被请求更改时，回调函数被触发。<br />
      Signature:<br />
      function(open: boolean, reason: string) => void<br />
      open: 如果true，Drawer会被打开。<br />
      reason: 开放或关闭请求的原因。可能的值是打开请求的“swipe”; 'clickaway'（on overlay clicks），'escape'（在转义键按下），'swipe'用于关闭请求。
    </div>,
  ], [
    'open',
    'bool',
    'null',
    '如果true，Drawer打开。 提供一个值将使Drawer成为受控组件。',
  ], [
    'openSecondary',
    'bool',
    'false',
    '如果true，Drawer定位为从相对侧打开。',
  ], [
    'overlayClassName',
    'string',
    '',
    '要添加到Drawer后面的Overlay组件的CSS类名称。',
  ], [
    'overlayStyle',
    'object',
    '',
    '覆盖在Drawer后面渲染的Overlay组件的内联样式。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ], [
    'swipeAreaWidth',
    'number',
    ' 30',
    '左侧（或最右侧）区域的宽度（以像素为单位），可从其中打开抽屉。 将此值设置为空，将该区域设置为整个页面（小心！将此属性设置为空可能会导致滑块和可滑动选项卡出现问题：自行使用）。',
  ], [
    'width',
    'union: string numbe',
    'null',
    'Drawer的宽度（以像素为单位）或字符串格式的百分比例如 50％填满窗口的一半或100％等等。 默认使用主题值。',
  ], [
    'zDepth',
    'propTypes.zDepth',
    '2',
    'The zDepth of the Drawer.',
  ]]
};
export {
  dockedExampleCode,
  undockedExampleCode,
  openSecondaryExampleCode,
  propertiesData,
}
