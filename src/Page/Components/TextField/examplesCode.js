import React from 'react';
const simpleExamplesCode = `import React from 'react';
import TextField from 'material-ui/TextField';

const TextFieldExampleSimple = () => (
  <div>
    <TextField
      hintText="Hint Text"
    /><br />
    <br />
    <TextField
      hintText="The hint text can be as long as you want, it will wrap."
    /><br />
    <TextField
      id="text-field-default"
      defaultValue="Default Value"
    /><br />
    <TextField
      hintText="Hint Text"
      floatingLabelText="Floating Label Text"
    /><br />
    <TextField
      defaultValue="Default Value"
      floatingLabelText="Floating Label Text"
    /><br />
    <TextField
      hintText="Hint Text"
      floatingLabelText="Fixed Floating Label Text"
      floatingLabelFixed={true}
    /><br />
    <TextField
      hintText="Password Field"
      floatingLabelText="Password"
      type="password"
    /><br />
    <TextField
      hintText="MultiLine with rows: 2 and rowsMax: 4"
      multiLine={true}
      rows={2}
      rowsMax={4}
    /><br />
    <TextField
      hintText="Message Field"
      floatingLabelText="MultiLine and FloatingLabel"
      multiLine={true}
      rows={2}
    /><br />
    <TextField
      hintText="Full width"
      fullWidth={true}
    />
  </div>
);

export default TextFieldExampleSimple;`;
const errorExamplesCode = `import React from 'react';
import TextField from 'material-ui/TextField';

const TextFieldExampleError = () => (
  <div>
    <TextField
      hintText="Hint Text"
      errorText="This field is required"
    /><br />
    <TextField
      hintText="Hint Text"
      errorText="The error text can be as long as you want, it will wrap."
    /><br />
    <TextField
      hintText="Hint Text"
      errorText="This field is required"
      floatingLabelText="Floating Label Text"
    /><br />
    <TextField
      hintText="Message Field"
      errorText="This field is required."
      floatingLabelText="MultiLine and FloatingLabel"
      multiLine={true}
      rows={2}
    /><br />
  </div>
);

export default TextFieldExampleError;`;
const styledExamplesCode = `import React from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';

const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};

const TextFieldExampleCustomize = () => (
  <div>
    <TextField
      hintText="Styled Hint Text"
      hintStyle={styles.errorStyle}
    /><br />
    <TextField
      hintText="Custom error color"
      errorText="This field is required."
      errorStyle={styles.errorStyle}
    /><br />
    <TextField
      hintText="Custom Underline Color"
      underlineStyle={styles.underlineStyle}
    /><br />
    <TextField
      hintText="Custom Underline Focus Color"
      underlineFocusStyle={styles.underlineStyle}
    /><br />
    <TextField
      floatingLabelText="Styled Floating Label Text"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    />
  </div>
);

export default TextFieldExampleCustomize;`;
const disabledExamplesCode = `import React from 'react';
import TextField from 'material-ui/TextField';

const TextFieldExampleDisabled = () => (
  <div>
    <TextField
      disabled={true}
      hintText="Disabled Hint Text"
    /><br />
    <TextField
      disabled={true}
      id="text-field-disabled"
      defaultValue="Disabled Value"
    /><br />
    <TextField
      disabled={true}
      hintText="Disabled Hint Text"
      floatingLabelText="Floating Label Text"
    /><br />
    <TextField
      disabled={true}
      hintText="Disabled Hint Text"
      defaultValue="Disabled With Floating Label"
      floatingLabelText="Floating Label Text"
    />
  </div>
);

export default TextFieldExampleDisabled;`; 
const controlledExampleCode = `import React from 'react';
import TextField from 'material-ui/TextField';

export default class TextFieldExampleControlled extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 'Property Value',
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <TextField
          id="text-field-controlled"
          value={this.state.value}
          onChange={this.handleChange}
        />
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
    '',
  ], [
    'className',
    'string',
    '',
    '根元素的css类名称。',
  ], [
    'defaultValue',
    'any',
    '',
    '用作默认值的文本字符串。',
  ], [
    'disabled',
    'bool',
    'false',
    '如果设置为true，则禁用文本字段。',
  ], [
    'errorStyle',
    'object',
    '',
    '用于覆盖错误样式的样式对象。',
  ], [
    'errorText',
    'node',
    '',
    '要显示的错误内容。',
  ], [
    'floatingLabelFixed',
    'bool',
    'false',
    '如果为true，即使没有值，浮动标签也将浮动。',
  ], [
    'floatingLabelFocusStyle',
    'object',
    '',
    '用于覆盖浮动标签样式时使用的样式对象。',
  ], [
    'floatingLabelShrinkStyle',
    'object',
    '',
    '用于在收缩时覆盖浮动标签样式的样式对象。',
  ], [
    'floatingLabelStyle',
    'object',
    '',
    '用于覆盖浮动标签样式的样式对象。',
  ], [
    'floatingLabelText',
    'node',
    '',
    '用于浮动标签元素的内容。',
  ], [
    'fullWidth',
    'bool',
    'false',
    '如果为true，则该字段接收属性宽度100％。',
  ], [
    'hintStyle',
    'object',
    '',
    '覆盖TextField的提示文本元素的内联样式。',
  ], [
    'hintText',
    'node',
    '',
    '要显示的提示内容。',
  ], [
    'id',
    'string',
    '',
    '文本字段的id支持。',
  ], [
    'inputStyle',
    'object',
    '',
    '覆盖TextField输入元素的内联样式。 multiLine为false时：定义输入元素的样式。 multiLine为true时：定义textarea容器的样式。',
  ], [
    'multiLine',
    'bool',
    'false',
    '如果为true，则将渲染textarea元素。 文字区也根据行数增长和缩小。',
  ], [
    'name',
    'string',
    '',
    'Name applied to the input.',
  ], [
    'onChange',
    'function',
    '',
    <div> Callback function that is fired when the textfield's value changes.<br />

      Signature:<br />
      <span className="code">function(event: object, newValue: string) => void</span><br />
      event: Change event targeting the text field.<br />
      newValue: The new value of the text field.<br />
    </div>,
  ], [
    'rows',
    'number',
    '1',
    '当MultiLine选项设置为true时显示的行数。',
  ], [
    'rowsMax',
    'number',
    '',
    'multiLine选项设置为true时显示的最大行数。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ], [
    'textareaStyle',
    'object',
    '',
    '覆盖TextField的textarea元素的内联样式。 TextField使用textarea或input，该属性仅在multiLine为true时具有效果。',
  ], [
    'type',
    'string',
    'text',
    '指定要显示的输入类型，例如“password”或“text”。',
  ], [
    'underlineDisabledStyle',
    'object',
    '',
    '禁用时，覆盖TextField下划线元素的内联样式。',
  ], [
    'underlineFocusStyle',
    'object',
    '',
    '当获取焦点时，覆盖TextField下划线元素的内联样式。',
  ], [
    'underlineShow',
    'bool',
    'true',
    '如果为true，则显示文本字段的下划线。',
  ], [
    'underlineStyle',
    'object',
    '',
    '覆盖TextField下划线元素的内联样式。',
  ], [
    'value',
    'any',
    '',
    'The value of the text field.',
  ]]
};
export {
  simpleExamplesCode,
  errorExamplesCode,
  styledExamplesCode,
  disabledExamplesCode,
  controlledExampleCode,
  propertiesData,
}
