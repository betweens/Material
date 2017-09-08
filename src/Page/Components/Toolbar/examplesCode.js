const examplesCode = `import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class ToolbarExamplesSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
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
    );
  }
}`;
const propertiesData1 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'children',
    'node',
    '',
    '可以是一个ToolbarGroup来渲染一组相关的项目。',
  ], [
    'className',
    'string',
    '',
    '根元素的css类名称。',
  ], [
    'noGutter',
    'bool',
    'false',
    '不要将desktopGutter应用于工具栏。',
  ], [
    'style',
    'object',
    'false',
    '覆盖根元素的内联样式。',
  ]]
};
const propertiesData2 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'children',
    'node',
    '',
    '可以是任何节点或节点数。',
  ], [
    'className',
    'string',
    '',
    '根元素的css类名称。',
  ], [
    'firstChild',
    'bool',
    'false',
    '如果ToolbarGroup是工具栏的第一个子元素，以防止设置左间隙，请将其设置为true。',
  ], [
    'lastChild',
    'bool',
    'false',
    '如果工具栏组是工具栏的最后一个子元素，以防止设置正确的间距，请将其设置为true。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ]]
};
const propertiesData3 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'className',
    'string',
    '',
    '根元素的css类名称。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ]]
};
const propertiesData4 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'className',
    'string',
    '',
    '根元素的css类名称。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ], [
    'text',
    'node',
    '',
    '要显示的文字。',
  ]]
};
export {
  examplesCode,
  propertiesData1,
  propertiesData2,
  propertiesData3,
  propertiesData4,
}
