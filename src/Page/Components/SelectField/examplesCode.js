import React from 'react';
const simpleExamplesCode = `import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 150,
  },
};

/**
 * ·SelectField· is implemented as a controlled component,
 * with the current selection set through the ·value· property.
 * The ·SelectField· can be disabled with the ·disabled· property.
 */
export default class SelectFieldExampleSimple extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Frequency"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField>
        <br />
        <SelectField floatingLabelText="Frequency" value={1} disabled={true}>
          <MenuItem value={1} primaryText="Disabled" />
          <MenuItem value={2} primaryText="Every Night" />
        </SelectField>
        <br />
        <SelectField
          floatingLabelText="Frequency"
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
        >
          <MenuItem value={1} primaryText="Custom width" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField>
        <br />
        <SelectField
          floatingLabelText="Frequency"
          value={this.state.value}
          onChange={this.handleChange}
          autoWidth={true}
        >
          <MenuItem value={1} primaryText="Auto width" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField>
      </div>
    );
  }
}`;
const nullableSelectCode = `import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

/**
 * ·SelectField· can also be nullable. In this case, just specify a ·MenuItem·
 * with no text and with a ·null· value. For instance, for a boolean:
 */
export default class SelectFieldExampleNullable extends Component {
  state = {
    value: null,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Ready?"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={null} primaryText="" />
          <MenuItem value={false} primaryText="No" />
          <MenuItem value={true} primaryText="Yes" />
        </SelectField>
      </div>
    );
  }
}`;
const longExampleCode = `import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [];
for (let i = 0; i < 100; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={·Item $ {i}·} />);
}

/**
 * With the ·maxHeight· property set, the Select Field will be scrollable
 * if the number of items causes the height to exceed this limit.
 */
export default class DropDownMenuLongMenuExample extends Component {
  state = {
    value: 10,
  };

  handleChange = (event, index, value) => {
    this.setState({value});
  };

  render() {
    return (
      <SelectField
        value={this.state.value}
        onChange={this.handleChange}
        maxHeight={200}
      >
        {items}
      </SelectField>
    );
  }
}`;
const labelExampleCode = `import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

/**
 * With a ·label· applied to each ·MenuItem·, ·SelectField· displays
 * a complementary description of the selected item.
 */
export default class SelectFieldExampleCustomLabel extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <SelectField value={this.state.value} onChange={this.handleChange}>
        <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning" />
        <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon" />
        <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening" />
        <MenuItem value={4} label="9 pm - 5 am" primaryText="Night" />
      </SelectField>
    );
  }
}`;
const floatingLabelExampleCode  = `import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [
  <MenuItem key={1} value={1} primaryText="Never" />,
  <MenuItem key={2} value={2} primaryText="Every Night" />,
  <MenuItem key={3} value={3} primaryText="Weeknights" />,
  <MenuItem key={4} value={4} primaryText="Weekends" />,
  <MenuItem key={5} value={5} primaryText="Weekly" />,
];

/**
 * ·SelectField· supports a floating label with the ·floatingLabelText· property.
 * This can be fixed in place with the ·floatingLabelFixed· property,
 * and can be customised with the ·floatingLabelText· property.
 */
export default class SelectFieldExampleFloatingLabel extends Component {
  state = {
    value: null,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          floatingLabelText="Floating Label Text"
        >
          {items}
        </SelectField>
        <br />
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          floatingLabelText="Floating Label Text"
          floatingLabelFixed={true}
          hintText="Hint text"
        >
          {items}
        </SelectField>
        <br />
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          floatingLabelText="Styled Floating Label Text"
          floatingLabelStyle={{color: 'red'}}
        >
          {items}
        </SelectField>
      </div>
    );
  }
}`;
const errorTextExampleCode = `import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [
  <MenuItem key={1} value={1} primaryText="Never" />,
  <MenuItem key={2} value={2} primaryText="Every Night" />,
  <MenuItem key={3} value={3} primaryText="Weeknights" />,
  <MenuItem key={4} value={4} primaryText="Weekends" />,
  <MenuItem key={5} value={5} primaryText="Weekly" />,
];

/**
 * The ·errorText· property displays an error message below the Select Field.
 * This can be customised with the ·errorStyle· property.
 */
export default class SelectFieldExampleError extends Component {
  state = {
    value: null,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    const {value} = this.state;
    const night = value === 2 || value === 3;

    return (
      <div>
        <SelectField
          value={value}
          onChange={this.handleChange}
          errorText={!night && 'Should be Night'}
        >
          {items}
        </SelectField>
        <br />
        <SelectField
          value={value}
          onChange={this.handleChange}
          errorText={night && 'Should not be Night (Custom error style)'}
          errorStyle={{color: 'orange'}}
        >
          {items}
        </SelectField>
      </div>
    );
  }
}`;
const multipleSelectionExampleCode = `import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

/**
 * ·SelectField· can handle multiple selections. It is enabled with the ·multiple· property.
 */
export default class SelectFieldExampleMultiSelect extends Component {
  state = {
    values: [],
  };

  handleChange = (event, index, values) => this.setState({values});

  menuItems(values) {
    return names.map((name) => (
      <MenuItem
        key={name}
        insetChildren={true}
        checked={values && values.indexOf(name) > -1}
        value={name}
        primaryText={name}
      />
    ));
  }

  render() {
    const {values} = this.state;
    return (
      <SelectField
        multiple={true}
        hintText="Select a name"
        value={values}
        onChange={this.handleChange}
      >
        {this.menuItems(values)}
      </SelectField>
    );
  }
}`;
const selectionRendererExampleCode = `import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const persons = [
  {value: 0, name: 'Oliver Hansen'},
  {value: 1, name: 'Van Henry'},
  {value: 2, name: 'April Tucker'},
  {value: 3, name: 'Ralph Hubbard'},
  {value: 4, name: 'Omar Alexander'},
  {value: 5, name: 'Carlos Abbott'},
  {value: 6, name: 'Miriam Wagner'},
  {value: 7, name: 'Bradley Wilkerson'},
  {value: 8, name: 'Virginia Andrews'},
  {value: 9, name: 'Kelly Snyder'},
];

/**
 * The rendering of selected items can be customized by providing a ·selectionRenderer·.
 */
export default class SelectFieldExampleSelectionRenderer extends Component {
  state = {
    values: [],
  };

  handleChange = (event, index, values) => this.setState({values});

  selectionRenderer = (values) => {
    switch (values.length) {
      case 0:
        return '';
      case 1:
        return persons[values[0]].name;
      default:
        return ·$ {values.length} names selected·;
    }
  }

  menuItems(persons) {
    return persons.map((person) => (
      <MenuItem
        key={person.value}
        insetChildren={true}
        checked={this.state.values.indexOf(person.value) > -1}
        value={person.value}
        primaryText={person.name}
      />
    ));
  }

  render() {
    return (
      <SelectField
        multiple={true}
        hintText="Select a name"
        value={this.state.values}
        onChange={this.handleChange}
        selectionRenderer={this.selectionRenderer}
      >
        {this.menuItems(persons)}
      </SelectField>
    );
  }
}`;

const propertiesData = {
      title: ['Name', 'Type', 'Default', 'Description'],
      body:[[
        'autoWidth',
        'bool',
        'false',
        '如果为true，则宽度将根据菜单中的项目自动设置。 要控制CSS中的宽度，请将此支持设置为false。',
      ], [
        'children',
        'node',
        '',
        'MenuItem元素用于填充选择字段。 如果菜单项具有标签支持，该值将表示渲染选择字段中选定的菜单项。',
      ], [
        'disabled',
        'bool',
        'false',
        '如果true，则选择字段将被禁用。',
      ], [
        'dropDownMenuProps',
        'object',
        '',
        '可以处理和覆盖组件DropDownMenu的任何属性的对象。',
      ], [
        'errorStyle',
        'object',
        '',
        '覆盖错误元素的内联样式。',
      ], [
        'errorText',
        'node',
        '',
        '要显示的错误内容。',
      ], [
        'floatingLabelFixed',
        'bool',
        '',
        '如果为true，即使没有选择任何值，浮动标签也将浮动。',
      ], [
        'floatingLabelStyle',
        'object',
        '',
        '覆盖浮动标签的内联样式。',
      ], [
        'floatingLabelText',
        'node',
        '',
        '浮动标签的内容。',
      ], [
        'fullWidth',
        'bool',
        'false',
        '如果true，则选择字段将占据其容器的全部宽度。',
      ], [
        'hintStyle',
        'object',
        '',
        '覆盖提示元素的内联样式。',
      ], [
        'hintText',
        'node',
        '',
        '要显示的提示内容。',
      ], [
        'iconStyle',
        'object',
        '',
        '覆盖图标元素的内联样式。',
      ], [
        'id',
        'string',
        '',
        '文本字段的id支持。',
      ], [
        'labelStyle',
        'object',
        '',
        '当选择字段不活动时，覆盖标签样式。',
      ], [
        'maxHeight',
        'number',
        '',
        '覆盖底层DropDownMenu元素的默认最大高度。',
      ], [
        'menuItemStyle',
        'object',
        '',
        '覆盖menu items的内联样式。',
      ], [
        'menuStyle',
        'object',
        '',
        '覆盖底层DropDownMenu元素的内联样式。',
      ], [
        'multiple',
        'bool',
        'false',
        '如果为true，则值必须为数组，菜单将支持多个选择。',
      ], [
        'onChange',
        'function',
        '',
        <div>选择菜单项时，回调功能触发。<br />
          Signature:<br />
          <span className="code">function(event: object, key: number, payload: any) => void</span><br />
          event: TouchTap事件定位到所选的菜单项。<br />
          key: 所选菜单项的索引，如果多个为true，或undefined。<br />
          payload:如果multiple为true，则菜单值数组将添加菜单项的值（如果尚未选择）或省略（如果已经选择）。 否则，菜单项的值。
        </div>,
      ], [
        'selectedMenuItemStyle',
        'object',
        '',
        '覆盖所选菜单项的内联样式。',
      ], [
        'onChange',
        'function',
        '',
        <div>自定义所选项目的呈现。<br />
          Signature:<br />
          <span className="code">function(value: any, menuItem: any) => void</span><br />
          value: 如果multiple为true，则菜单值数组将添加菜单项的值（如果尚未选择）或省略（如果已经选择）。 否则，菜单项的值。<br />
          menuItem: 所选的MenuItem。 如果multiple为真，则这将是一个与MenuItems匹配values参数的数组。
        </div>,
      ], [
        'style',
        'object',
        '',
        '覆盖根元素的内联样式。',
      ], [
        'underlineDisabledStyle',
        'object',
        '',
        '当禁用选择字段时，覆盖下划线元素的内联样式。',
      ], [
        'underlineFocusStyle',
        'object',
        '',
        '当选择字段被聚焦时，覆盖下划线元素的内联样式。',
      ], [
        'underlineStyle',
        'object',
        '',
        '覆盖下划线元素的内联样式。',
      ], [
        'vaule',
        'any',
        '',
        '如果multiple为真，则选择菜单项的值的数组。 否则，选择菜单项的值。 如果提供，菜单将是受控组件。',
      ]]
    };
export {
  simpleExamplesCode,
  nullableSelectCode,
  longExampleCode,
  labelExampleCode,
  floatingLabelExampleCode,
  errorTextExampleCode,
  multipleSelectionExampleCode,
  selectionRendererExampleCode,
  propertiesData,
}
