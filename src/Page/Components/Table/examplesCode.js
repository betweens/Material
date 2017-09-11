// import React from 'react';
const simpleExampleCode  = `import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

/**
 * A simple table demonstrating the hierarchy of the ·Table· component and its sub-components.
 */
const TableExampleSimple = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Randal White</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Stephanie Sanders</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Steve Brown</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>5</TableRowColumn>
        <TableRowColumn>Christopher Nolan</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default TableExampleSimple;`;
const controlledExampleCode = `import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class TableExampleControlled extends Component {
  state = {
    selected: [1],
  };

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };

  render() {
    return (
      <Table onRowSelection={this.handleRowSelection}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow selected={this.isSelected(0)}>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
          <TableRow selected={this.isSelected(1)}>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>Randal White</TableRowColumn>
            <TableRowColumn>Unemployed</TableRowColumn>
          </TableRow>
          <TableRow selected={this.isSelected(2)}>
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn>Stephanie Sanders</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
          <TableRow selected={this.isSelected(3)}>
            <TableRowColumn>4</TableRowColumn>
            <TableRowColumn>Steve Brown</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}`;
const complexExampleCode = `import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
];

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
export default class TableExampleComplex extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: true,
    height: '300px',
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                Super Header
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
            <TableRow>
              <TableRowColumn>ID</TableRowColumn>
              <TableRowColumn>Name</TableRowColumn>
              <TableRowColumn>Status</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                Super Footer
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>

        <div style={styles.propContainer}>
          <h3>Table Properties</h3>
          <TextField
            floatingLabelText="Table Body Height"
            defaultValue={this.state.height}
            onChange={this.handleChange}
          />
          <Toggle
            name="fixedHeader"
            label="Fixed Header"
            onToggle={this.handleToggle}
            defaultToggled={this.state.fixedHeader}
          />
          <Toggle
            name="fixedFooter"
            label="Fixed Footer"
            onToggle={this.handleToggle}
            defaultToggled={this.state.fixedFooter}
          />
          <Toggle
            name="selectable"
            label="Selectable"
            onToggle={this.handleToggle}
            defaultToggled={this.state.selectable}
          />
          <Toggle
            name="multiSelectable"
            label="Multi-Selectable"
            onToggle={this.handleToggle}
            defaultToggled={this.state.multiSelectable}
          />
          <Toggle
            name="enableSelectAll"
            label="Enable Select All"
            onToggle={this.handleToggle}
            defaultToggled={this.state.enableSelectAll}
          />
          <h3 style={styles.propToggleHeader}>TableBody Properties</h3>
          <Toggle
            name="deselectOnClickaway"
            label="Deselect On Clickaway"
            onToggle={this.handleToggle}
            defaultToggled={this.state.deselectOnClickaway}
          />
          <Toggle
            name="stripedRows"
            label="Stripe Rows"
            onToggle={this.handleToggle}
            defaultToggled={this.state.stripedRows}
          />
          <Toggle
            name="showRowHover"
            label="Show Row Hover"
            onToggle={this.handleToggle}
            defaultToggled={this.state.showRowHover}
          />
          <h3 style={styles.propToggleHeader}>Multiple Properties</h3>
          <Toggle
            name="showCheckboxes"
            label="Show Checkboxes"
            onToggle={this.handleToggle}
            defaultToggled={this.state.showCheckboxes}
          />
        </div>
      </div>
    );
  }
}`;

const propertiesData1 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'allRowsSelected',
    'bool',
    'false',
    '设置为true表示应选择所有行。',
  ], [
    'bodyStyle',
    'object',
    '',
    '覆盖正文的表格元素的内联样式。',
  ], [
    'children',
    'node',
    '',
    'children传递给Table组件。',
  ], [
    'className',
    'string',
    '',
    '根元素的css类名称。',
  ], [
    'fixedFooter',
    'bool',
    'true',
    '如果true，页脚将出现固定在table下面。 默认值为true。',
  ], [
    'fixedHeader',
    'bool',
    'true',
    '如果为true，表头上将显示固定的标题。 默认值为true。',
  ], [
    'footerStyle',
    'object',
    '',
    '覆盖页脚元素的内联样式。',
  ], [
    'headerStyle',
    'object',
    '',
    '覆盖头表元素的内联样式。',
  ], [
    'height',
    'string',
    'inherit',
    'The height of the table.',
  ], [
    'multiSelectable',
    'bool',
    'false',
    '如果为true，则可以选择多个表行。 CTRL / CMD +单击和SHIFT +单击是有效的操作。 默认值为false。',
  ], [
    'onCellClick',
    'function',
    '',
    '单击行单元格时调用。 行号是行号，列Id是列号或列键。',
  ], [
    'onCellHover',
    'function',
    '',
    '当表格单元格悬停时调用。 行号是悬停行的行号，列Id是单元格的列号或列键。',
  ], [
    'onCellHoverExit',
    'function',
    '',
    '当表格单元格不再悬停时调用。 行号是行的行号，列ID是单元格的列号或列键。',
  ], [
    'onRowHover',
    'function',
    '',
    '当表格行悬停时调用。 行号是悬停行的行号。',
  ], [
    'onRowHoverExit',
    'function',
    '',
    '当表格行不再悬停时调用。 行号是不再悬停的行的行号。',
  ], [
    'onRowSelection',
    'function',
    '',
    '当选择行时调用。 selectedRows是所有行选择的数组。 如果所有行已被选中，则将返回字符串“all”，以指示已选择所有行。',
  ], [
    'selectable',
    'bool',
    'true',
    '如果为true，则可以选择表格行。 如果需要多行选择，请启用multiSelectable。 默认值为true。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ], [
    'wrapperStyle',
    'object',
    '',
    '覆盖表的包裹元素的内联样式。',
  ]]
};
const propertiesData2 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'children',
    'node',
    'false',
    'Children passed to table row.',
  ], [
    'className',
    'string',
    '',
    '根元素的css类名称。',
  ], [
    'displayBorder',
    'bool',
    'true',
    '如果为true，行的行边框将会显示。 如果false，将不会绘制边框。',
  ], [
    'hoverable',
    'bool',
    'false',
    '控制行是否响应悬停事件。',
  ], [
    'hovered',
    'bool',
    'false',
    '控制该行是否应呈现为悬停。 此属性除了this.state.hovered之外也被评估，并且可以用于将悬停状态与其他一些外部事件同步。',
  ], [
    'rowNumber',
    'number',
    '',
    '要识别行的数字。 当与TableBody组件一起使用时，此属性将自动填充。',
  ], [
    'selectable',
    'bool',
    'true',
    '如果为true，则可以选择表格行。 如果需要多行选择，请启用multiSelectable。 默认值为true。',
  ], [
    'selected',
    'bool',
    '',
    '表示选择了特定行。 此属性可用于以编程方式选择行。',
  ], [
    'striped',
    'bool',
    'false',
    'Indicates whether or not the row is striped.',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ]]
}
const propertiesData3 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'children',
    'node',
    'false',
    '',
  ], [
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
}
const propertiesData4 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'adjustForCheckbox',
    'bool',
    'true',
    '控制是否应为复选框列调整标题行。 如果select all复选框为true，则此属性不会影响列数。 这对于“超级标题”行非常有用，因此checkbox列不会创建需要手动计入的偏移量。',
  ], [
    'children',
    'node',
    '',
    'Children passed to table row.',
  ], [
    'className',
    'string',
    '',
    '根元素的css类名称。',
  ], [
    'displaySelectAll',
    'bool',
    'true',
    '控制是否显示全选复选框。',
  ], [
    'enableSelectAll',
    'bool',
    'true',
    '如果设置为true，则选择所有按钮将是可互动的。 如果设置为false，该按钮将无法进行交互。 要隐藏该复选框，请将displaySelectAll设置为false。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ]]
}
const propertiesData5 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'children',
    'node',
    '',
    '',
  ], [
    'className',
    'string',
    '',
    '根元素的css类名称。',
  ], [
    'columnNumber',
    'number',
    '',
    '要标识标题行的数字。 与TableHeader一起使用时，此属性将自动填充。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ], [
    'tooltip',
    'string',
    '',
    '字符串提供给tooltip。 如果没有提供字符串，则不会显示tooltip。',
  ], [
    'tooltipStyle',
    'object',
    '',
    '额外的样式可以应用于to111oltip。',
  ]]
}
const propertiesData6 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'children',
    'node',
    'false',
    'Children passed to table row.',
  ], [
    'className',
    'string',
    '',
    '根元素的css类名称。',
  ], [
    'deselectOnClickaway',
    'bool',
    'true',
    '控制是否在单击表外点击所有选定的行后取消选择。',
  ], [
    'displayRowCheckbox',
    'bool',
    'true',
    '控制行的显示复选框。 默认值为true。',
  ], [
    'preScanRows',
    'bool',
    'true',
    '控制行是否被预先扫描以确定初始状态。 如果您的表有大量行，并且您在渲染中遇到延迟，请关闭此属性。',
  ], [
    'showRowHover',
    'bool',
    '',
    '如果为true，当光标悬停在该行上时，表格行将突出显示。 默认值为false。',
  ], [
    'stripedRows',
    'bool',
    '',
    '如果为true，则从第一行开始的每个其他表行都将被条带化。 默认值为false。',
  ], [
    'style',
    'object',
    '{}',
    '覆盖根元素的内联样式。',
  ]]
}
const propertiesData7 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'children',
    'node',
    'false',
    'Children passed to table row.',
  ], [
    'className',
    'string',
    '',
    '根元素的css类名称。',
  ], [
    'style',
    'object',
    '{}',
    '覆盖根元素的内联样式。',
  ]]
}
export {
  simpleExampleCode,
  controlledExampleCode,
  complexExampleCode,
  propertiesData1,
  propertiesData2,
  propertiesData3,
  propertiesData4,
  propertiesData5,
  propertiesData6,
  propertiesData7,
}
