const simpleExamplesCode= `import React from 'react';
import TimePicker from 'material-ui/TimePicker';

const TimePickerExampleSimple = () => (
  <div>
    <TimePicker
      hintText="12hr Format"
    />
    <TimePicker
      hintText="12hr Format with auto ok"
      autoOk={true}
    />
    <TimePicker
      format="24hr"
      hintText="24hr Format"
    />
    <TimePicker
      disabled={true}
      format="24hr"
      hintText="Disabled TimePicker"
    />
  </div>
);

export default TimePickerExampleSimple;`;
const controlledExamplesCode = `import React from 'react';
import TimePicker from 'material-ui/TimePicker';

export default class TimePickerExampleComplex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value24: null, value12: null};
  }

  handleChangeTimePicker24 = (event, date) => {
    this.setState({value24: date});
  };

  handleChangeTimePicker12 = (event, date) => {
    this.setState({value12: date});
  };

  render() {
    return (
      <div>
        <TimePicker
          format="ampm"
          hintText="12hr Format"
          value={this.state.value12}
          onChange={this.handleChangeTimePicker12}
        />
        <TimePicker
          format="24hr"
          hintText="24hr Format"
          value={this.state.value24}
          onChange={this.handleChangeTimePicker24}
        />
      </div>
    );
  }
}`;
const localisedExampleCode = `import React from 'react';
import TimePicker from 'material-ui/TimePicker';

const TimePickerInternational = () => (
  <div>
    <TimePicker
      hintText="Custom Labels"
      okLabel="确定"
      cancelLabel="取消"
    />
  </div>
);

export default TimePickerInternational;`;
const stepExampleCode = `import React from 'react';
import TimePicker from 'material-ui/TimePicker';

const TimePickerExampleStep = () => (
  <div>
    <TimePicker
      hintText="5 minutes step"
      minutesStep={5}
    />
    <TimePicker
      hintText="10 minutes step"
      minutesStep={10}
    />
  </div>
);

export default TimePickerExampleStep;`;
const propertiesData = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'autoOk',
    'bool',
    'false',
    '如果true，在设定的分钟内自动接受并关闭选择器。',
  ], [
    'cancelLabel',
    'node',
    'Cancel',
    '覆盖“Cancel”按钮的标签。',
  ], [
    'defaultTime',
    'object',
    'null',
    'TimePicker的初始时间值。',
  ], [
    'dialogBodyStyle',
    'object',
    '',
    '覆盖TimePickerDialog的body元素的内联样式。',
  ], [
    'dialogStyle',
    'object',
    '',
    '覆盖TimePickerDialog的根元素的内联样式。',
  ], [
    'disabled',
    'bool',
    'false',
    '如果为true，则TimePicker将被禁用。',
  ], [
    'format',
    "enum: 'ampm'  '24hr'",
    "'ampm'",
    '如果为true，则TimePicker将被禁用。',
  ], [
    'minutesStep',
    'number',
    '1',
    '移动时钟指针时应加多少分钟。',
  ], [
    'okLabel',
    'node',
    'OK',
    'Override the label of the "OK" button.',
  ], [
    'onChange',
    'function',
    '',
    '当时间值更改时触发的回调函数。 时间值在Date对象中传递。 由于没有与更改关联的特定事件，第一个参数将始终为空，第二个参数将为新的Date实例。',
  ], [
    'onClick',
    'function',
    '',
    '点击或点击TimePicker时触发回调功能。',
  ], [
    'onDismiss',
    'function',
    '',
    '当TimePicker对话框被关闭时，回调函数被触发。',
  ], [
    'onFocus',
    'function',
    '',
    '当TimePicker TextField获取焦点时，回调函数被触发。',
  ], [
    'onShow',
    'function',
    '',
    '当显示TimePicker对话框时，回调函数触发。',
  ], [
    'pedantic',
    'bool',
    'false',
    'If true, uses ("noon" / "midnight") instead of ("12 a.m." / "12 p.m."). It‘s technically more correct to refer to "12 noon" and "12 midnight" rather than "12 a.m." and "12 p.m." and it avoids confusion between different locales. By default (for compatibility reasons) TimePicker uses ("12 a.m." / "12 p.m.").',
  ], [
    'style',
    'object',
    '{}',
    '覆盖根元素的内联样式。',
  ], [
    'textFieldStyle',
    'object',
    '{}',
    '覆盖TimePicker的TextField元素的内联样式。',
  ], [
    'value',
    'any',
    '',
    '以编程方式设置时间选择器的时间。',
  ]]
};
export {
  simpleExamplesCode,
  controlledExamplesCode,
  localisedExampleCode,
  stepExampleCode,
  propertiesData,
}
