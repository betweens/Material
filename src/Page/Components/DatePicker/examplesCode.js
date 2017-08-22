import React from 'react';
const simpleExamplesCode = `import React from 'react';
import DatePicker from 'material-ui/DatePicker';

/**
 * The Date Picker defaults to a portrait dialog. The ｀mode｀ property can be set to ｀landscape｀.
 * You can also disable the Dialog passing ｀true｀ to the ｀disabled｀ property.
 * To display the year selection first, set the ｀openToYearSelection｀ property to ｀true｀.
 */
const DatePickerExampleSimple = () => (
  <div>
    <DatePicker hintText="Portrait Dialog" />
    <DatePicker hintText="Landscape Dialog" mode="landscape" />
    <DatePicker hintText="Dialog Disabled" disabled={true} />
    <DatePicker hintText="Open to Year" openToYearSelection={true} />
  </div>
);

export default DatePickerExampleSimple;`;
const inlineExamplesCode = `import React from 'react';
import DatePicker from 'material-ui/DatePicker';

/**
 * Inline Date Pickers are displayed below the input, rather than as a modal dialog.
 */
const DatePickerExampleInline = () => (
  <div>
    <DatePicker hintText="Portrait Inline Dialog" container="inline" />
    <DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape" />
  </div>
);

export default DatePickerExampleInline;`;
const RangedExampleCode = `import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';

const optionsStyle = {
  maxWidth: 255,
  marginRight: 'auto',
};

/**
 * This example allows you to set a date range, and to toggle ｀autoOk｀, and ｀disableYearSelection｀.
 */
export default class DatePickerExampleToggle extends React.Component {
  constructor(props) {
    super(props);

    const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    maxDate.setHours(0, 0, 0, 0);

    this.state = {
      minDate: minDate,
      maxDate: maxDate,
      autoOk: false,
      disableYearSelection: false,
    };
  }

  handleChangeMinDate = (event, date) => {
    this.setState({
      minDate: date,
    });
  };

  handleChangeMaxDate = (event, date) => {
    this.setState({
      maxDate: date,
    });
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  render() {
    return (
      <div>
        <DatePicker
          floatingLabelText="Ranged Date Picker"
          autoOk={this.state.autoOk}
          minDate={this.state.minDate}
          maxDate={this.state.maxDate}
          disableYearSelection={this.state.disableYearSelection}
        />
        <div style={optionsStyle}>
          <DatePicker
            onChange={this.handleChangeMinDate}
            autoOk={this.state.autoOk}
            floatingLabelText="Min Date"
            defaultDate={this.state.minDate}
            disableYearSelection={this.state.disableYearSelection}
          />
          <DatePicker
            onChange={this.handleChangeMaxDate}
            autoOk={this.state.autoOk}
            floatingLabelText="Max Date"
            defaultDate={this.state.maxDate}
            disableYearSelection={this.state.disableYearSelection}
          />
          <Toggle
            name="autoOk"
            value="autoOk"
            label="Auto Ok"
            toggled={this.state.autoOk}
            onToggle={this.handleToggle}
          />
          <Toggle
            name="disableYearSelection"
            value="disableYearSelection"
            label="Disable Year Selection"
            toggled={this.state.disableYearSelection}
            onToggle={this.handleToggle}
          />
        </div>
      </div>
    );
  }
}`;
const  controlledExampleCode = `import React from 'react';
import DatePicker from 'material-ui/DatePicker';

/**
 * ｀DatePicker｀ can be implemented as a controlled input,
 * where ｀value｀ is handled by state in the parent component.
 */
export default class DatePickerExampleControlled extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      controlledDate: null,
    };
  }

  handleChange = (event, date) => {
    this.setState({
      controlledDate: date,
    });
  };

  render() {
    return (
      <DatePicker
        hintText="Controlled Date Input"
        value={this.state.controlledDate}
        onChange={this.handleChange}
      />
    );
  }
}`;
const disabledDatesExampleCode = `import React from 'react';
import DatePicker from 'material-ui/DatePicker';

function disableWeekends(date) {
  return date.getDay() === 0 || date.getDay() === 6;
}

function disableRandomDates() {
  return Math.random() > 0.7;
}
/**
 * ｀DatePicker｀ can disable specific dates based on the return value of a callback.
 */
const DatePickerExampleDisableDates = () => (
  <div>
    <DatePicker hintText="Weekends Disabled" shouldDisableDate={disableWeekends} />
    <DatePicker hintText="Random Dates Disabled" shouldDisableDate={disableRandomDates} />
  </div>
);

export default DatePickerExampleDisableDates;`;
const localisedExampleCode = `import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import areIntlLocalesSupported from 'intl-locales-supported';
import persianUtils from 'material-ui-persian-date-picker-utils';

let DateTimeFormat;

/**
 * Use the native Intl.DateTimeFormat if available, or a polyfill if not.
 */
if (areIntlLocalesSupported(['fr', 'fa-IR'])) {
  DateTimeFormat = global.Intl.DateTimeFormat;
} else {
  const IntlPolyfill = require('intl');
  DateTimeFormat = IntlPolyfill.DateTimeFormat;
  require('intl/locale-data/jsonp/fr');
  require('intl/locale-data/jsonp/fa-IR');
}

/**
 *  ｀DatePicker｀ can be localised using the ｀locale｀ property. The first example is localised in French.
 *  Note that the buttons must be separately localised using the ｀cancelLabel｀ and ｀okLabel｀ properties.
 *
 *  The second example shows ｀firstDayOfWeek｀ set to ｀0｀, (Sunday), and ｀locale｀ to ｀en-US｀ which matches the
 *  behavior of the Date Picker prior to 0.15.0. Note that the 'en-US' locale is built in, and so does not require
 *  ｀DateTimeFormat｀ to be supplied.
 *
 *  The final example displays the resulting date in a custom format using the ｀formatDate｀ property.
 */
const DatePickerExampleInternational = () => (
  <div>
    <DatePicker
      hintText="fr locale"
      DateTimeFormat={DateTimeFormat}
      okLabel="OK"
      cancelLabel="Annuler"
      locale="fr"
    />
    <DatePicker
      hintText="fa-IR locale"
      DateTimeFormat={DateTimeFormat}
      okLabel="تایید"
      cancelLabel="لغو"
      locale="fa-IR"
      firstDayOfWeek={6}
      utils={persianUtils}
    />
    <DatePicker
      hintText="en-US locale"
      locale="en-US"
      firstDayOfWeek={0}
    />
    <DatePicker
      hintText="Custom date format"
      firstDayOfWeek={0}
      formatDate={new DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format}
    />
  </div>
);`;
const propertiesData = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'DateTimeFormat',
    'function',
    '',
    '用于指定区域设置的日期格式化的构造方法。 构造函数必须遵循此规范：ECMAScript Internationalization API 1.0（ECMA-402）。 Intl.DateTimeFormat由大多数现代浏览器支持，请参见http://caniuse.com/#search=intl，否则https://github.com/andyearnshaw/Intl.js是一个很好的polyfill。默认情况下，使用内置的DateTimeFormat来支持"en-US"区域设置。',
  ], [
    'autoOk',
    'bool',
    'false',
    '如果为true, 在选择的日期自动接受并关闭选择器。',
  ], [
    'cancelLabel',
    'node',
    '',
    '覆盖“Cancel”按钮的默认文本。',
  ], [
    'className',
    'string',
    '',
    '它的css类名称是根元素。',
  ], [
    'container',
    "enum: 'dialog' 'inline'",
    'dialog',
    '用于控制当输入字段聚焦时如何显示“日期选择器”。 dialog（默认）将DatePicker显示为具有模态的对话框。 inline在输入字段下方显示DatePicker（类似于自动完成）。',
  ], [
    'defaultDate',
    'object',
    '',
    '这是组件的初始日期值。 如果提供了任何一个值或valueLink，它们将覆盖优先级值。',
  ], [
    'dialogContainerStyle',
    'object',
    '',
    '覆盖DatePickerDialog的Container元素的内联样式。',
  ], [
    'disableYearSelection',
    'bool',
    'false',
    '禁用日期选择器中的年份选择。',
  ], [
    'disabled',
    'bool',
    'false',
    '禁用DatePicker。',
  ], [
    'firstDayOfWeek',
    'number',
    '1',
    '用于改变一周的第一天。 不同地区之间的星期六到星期一不等。 允许的范围是0（星期日）到6（星期六）。 默认值为1，星期一，按照ISO 8601。',
  ], [
    'formatDate',
    'function',
    '',
    <div>调用此函数来格式化输入字段中显示的日期，并返回一个字符串。 默认情况下，如果没有提供语言环境和DateTimeFormat日期对象格式化为ISO 8601 YYYY-MM-DD。<br />
      Signature:<br />
      function(date: object) => any<br />
      date: 要格式化的日期对象.<br />
      returns (any): 格式化日期.
    </div>,
  ], [
    'hideCalendarDate',
    'bool',
    'false',
    '隐藏日期显示',
  ], [
    'locale',
    'string',
    '',
    "于格式化DatePicker日期字符串的区域设置。 除了'en-US'之外，您必须提供支持所选语言环境的DateTimeFormat。",
  ], [
    'maxDate',
    'object',
    '',
    "一段有效日期的结束。 该范围包括endDate。 默认值为当前日期+ 100年。",
  ], [
    'minDate',
    'object',
    '',
    "有效日期范围的开始。 该范围包括startDate。 默认值为当前日期 - 100年。",
  ], [
    'mode',
    "enum: 'portrait' 'landscape'",
    '',
    "告诉组件以纵向或横向模式显示选择器。",
  ], [
    'okLabel',
    'node',
    '',
    "覆盖“OK”按钮的默认文本。",
  ], [
    'okLabel',
    'node',
    '',
    "覆盖“OK”按钮的默认文本。",
  ], [
    'onChange',
    'function',
    '',
    <div>日期值更改时触发的回调函数。<br />
      Signature:<br />
      function(null: undefined, date: object) => void<br />
      null: 由于没有与更改相关联的特定事件，因此第一个参数将始终为空。<br />
      date: 新的日期。
    </div>,
  ], [
    'onClick',
    'function',
    '',
    <div>在Date Picker的TextField上发生触摸点击事件时触发的回调功能。<br />
      Signature:<br />
      function(event: object) => void<br />
      event: TouchTap事件定位到TextField。
    </div>,
  ], [
    'onDismiss',
    'function',
    '',
    "取消“日期选取器”对话框时触发的回调函数。",
  ], [
    'onFocus',
    'function',
    '',
    "回调函数被触发时的Date Picker TextField获得焦点。",
  ], [
    'onShow',
    'function',
    '',
    "显示 Date Picker's对话框时触发的回调函数。",
  ], [
    'openToYearSelection',
    'bool',
    'false',
    "如果为true，将datepicker设置为首先打开年份选择。",
  ], [
    'shouldDisableDate',
    'function',
    '',
    <div>回调函数用于确定日历中是否应禁用一天的条目。<br />
      Signature:<br />
      function(day: object) => boolean<br />
      day: 一天的日期对象.<br />
      returns (boolean): 指示是否应禁用该日期.
    </div>,
  ], [
    'style',
    'object',
    '{}',
    "覆盖根元素的内联样式。",
  ], [
    'textFieldStyle',
    'object',
    '',
    "覆盖DatePicker文本字段元素的内联样式。",
  ], [
    'utils',
    'object',
    '',
    <p>此对象应包含构建日历系统所需的方法。用于构建自定义日历系统。 有关更多信息，请参阅<a href="https://github.com/callemall/material-ui/blob/master/src/DatePicker/dateUtils.js">源代码</a>和<a href="https://github.com/alitaheri/material-ui-persian-date-picker-utils">示例实现</a>。</p>,
  ], [
    'value',
    'object',
    '',
    "以编程方式设置日期选择器的日期。",
  ]]
};
export {
  simpleExamplesCode,
  inlineExamplesCode,
  RangedExampleCode,
  controlledExampleCode,
  disabledDatesExampleCode,
  localisedExampleCode,
  propertiesData,
}
