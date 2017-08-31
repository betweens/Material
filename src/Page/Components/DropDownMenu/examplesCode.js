import React from 'react';
const simpleExampleCode = `import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 200,
  },
};

export default class DropDownMenuSimpleExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </DropDownMenu>
        <br />
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
        >
          <MenuItem value={1} primaryText="Custom width" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </DropDownMenu>
      </div>
    );
  }
}`;
const openImmediateExampleCode = `import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class DropDownMenuOpenImmediateExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 2};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <DropDownMenu value={this.state.value} onChange={this.handleChange} openImmediately={true}>
        <MenuItem value={1} primaryText="Never" />
        <MenuItem value={2} primaryText="Every Night" />
        <MenuItem value={3} primaryText="Weeknights" />
        <MenuItem value={4} primaryText="Weekends" />
        <MenuItem value={5} primaryText="Weekly" />
      </DropDownMenu>
    );
  }
}`;
const longExampleCode = `import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const items = [];
for (let i = 0; i < 100; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={·Item $ {i}·} />);
}

export default class DropDownMenuLongMenuExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 10};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>
        {items}
      </DropDownMenu>
    );
  }
}`;
const labelExampleCode = `import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class DropDownMenuLabeledExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 2};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <DropDownMenu value={this.state.value} onChange={this.handleChange}>
        <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning" />
        <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon" />
        <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening" />
        <MenuItem value={4} label="9 pm - 5 am" primaryText="Night" />
      </DropDownMenu>
    );
  }
}`;
const propertiesData = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'anchorOrigin',
    'propTypes.origin',
    "{ vertical: 'top', horizontal: 'left',}",
    '这是popo的targetOrigin将附加到的锚点。 选项：vertical：[top，center，bottom] horizontal：[left，middle，right]。',
  ], [
    'animated',
    'bool',
    'true',
    '如果为true，Popover将被添加到DOM时应用过渡效果。',
  ], [
    'animation',
    'function',
    '',
    '覆盖所使用的默认动画组件。',
  ], [
    'autoWidth',
    'bool',
    'true',
    '宽度将根据菜单中的项目自动设置。 要控制CSS中的宽度，请将此prop设置为false。',
  ], [
    'children',
    'node',
    '',
    'MenuItems用来填充菜单。 如果MenuItems具有该标签，该值将用于在该字段内呈现该项目的表示。',
  ], [
    'className',
    'string',
    '',
    '根元素的css类名称。',
  ], [
    'disabled',
    'bool',
    'false',
    '禁用菜单。',
  ], [
    'iconButton',
    'bool',
    'false',
    '覆盖默认的SvgIcon下拉箭头组件。',
  ], [
    'iconStyle',
    'object',
    '',
    '覆盖icon元素的样式。',
  ], [
    'labelStyle',
    'object',
    '',
    '当DropDownMenu处于非活动状态时，覆盖标签的样式。',
  ], [
    'listStyle',
    'object',
    '',
    '用于覆盖基础列表样式的样式对象。',
  ], [
    'maxHeight',
    'number',
    '500',
    '菜单显示时的最大高度。',
  ], [
    'menuItemStyle',
    'object',
    '',
    '覆盖菜单项的内联样式。',
  ], [
    'menuStyle',
    'object',
    '',
    '当显示DropDownMenu时，覆盖Menu的样式。',
  ], [
    'multiple',
    'bool',
    'false',
    '如果为true，则值必须为数组，菜单将支持多个选择。',
  ], [
    'onChange',
    'function',
    '',
    <div>当单击菜单项时，回调函数被触发，而不是当前选择的菜单项。<br />

    Signature:<br />
    <span className="code">function(event: object, key: number, value: any) => void</span><br />
    event: TouchTap event targeting the menu item that was clicked.<br />
    key: children集合中点击的菜单项的索引。<br />
    value: 如果multiple为true，则菜单值数组将添加菜单项的值（如果尚未选择）或省略（如果已经选择）。 否则，菜单项的值。
    </div>,
  ], [
    'onClose',
    'function',
    '',
    '当菜单关闭时，回调函数触发。',
  ], [
    'openImmediately',
    'bool',
    'false',
    '设置为true将DropDownMenu自动打开。',
  ], [
    'selectedMenuItemStyle',
    'object',
    '',
    '覆盖所选菜单项的内联样式。',
  ], [
    'selectionRenderer',
    'function',
    'false',
    <div>当单击菜单项时，回调函数被触发，而不是当前选择的菜单项。<br />

    Signature:<br />
    <span className="code">function(value: any, menuItem: any) => void</span><br />
    value: 如果multiple为true，则菜单值数组将添加菜单项的值（如果尚未选择）或省略（如果已经选择）。 否则，菜单项的值。<br />
    menuItem: 所选的MenuItem。 如果multiple为真，则这将是一个数组，MenuItems与values参数匹配。
    </div>,
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ], [
    'targetOrigin',
    'propTypes.origin ',
    '',
    '这是移民的点，这将附加到锚的起源。 选项：vertical：[top，center，bottom] horizontal：[left，middle，right]。',
  ], [
    'underlineStyle',
    'object',
    '',
    '覆盖underline的内联样式。',
  ], [
    'value',
    'any',
    '',
    '如果multiple为真，则选择菜单项的值的数组。 否则，选择菜单项的值。 如果提供，菜单将是受控组件。',
  ]]
};
export {
  simpleExampleCode,
  openImmediateExampleCode,
  longExampleCode,
  labelExampleCode,
  propertiesData,
}
