import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  simpleExamplesCode,
  inlineExamplesCode,
  RangedExampleCode,
  controlledExampleCode,
  disabledDatesExampleCode,
  localisedExampleCode,
  propertiesData,
} from './examplesCode.js';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';
import areIntlLocalesSupported from 'intl-locales-supported';
import persianUtils from 'material-ui-persian-date-picker-utils';
// import './DatePicker.css';
let DateTimeFormat;
if (areIntlLocalesSupported(['fr', 'fa-IR'])) {
  DateTimeFormat = global.Intl.DateTimeFormat;
} else {
  const IntlPolyfill = require('intl');
  DateTimeFormat = IntlPolyfill.DateTimeFormat;
  require('intl/locale-data/jsonp/fr');
  require('intl/locale-data/jsonp/fa-IR');
}
class DatePickerPage extends Component {
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
      controlledDate: null,
    };
    this.handleChangeMinDate = this.handleChangeMinDate.bind(this);
    this.handleChangeMaxDate = this.handleChangeMaxDate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChangeMinDate(event, date) {
    this.setState({
      minDate: date,
    });
  };

  handleChangeMaxDate(event, date) {
    this.setState({
      maxDate: date,
    });
  };

  handleToggle(event, toggled) {
    this.setState({
      [event.target.name]: toggled,
    });
  };
  handleChange(event, date) {
    this.setState({
      controlledDate: date,
    });
  };
  disableWeekends(date) {
	  return date.getDay() === 0 || date.getDay() === 6;
	}
  disableRandomDates() {
    return Math.random() > 0.7;
  }
  render() {
  	const optionsStyle = {
		  maxWidth: 255,
		  marginRight: 'auto',
		};
    return (<div>
	      <h2>Date Picker</h2>
	      <p>Date Pickers用于为输入选择单个日期。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Simple Examples">
	        <PrintCode code={simpleExamplesCode} />
          <div className="show-examples">
	          <p>Date Picker默认为纵向对话框。<span className="code">mode</span>属性可以设置为横向。您还可以禁用对话框传递到禁用属性。 要首先显示年份选择，请将<span className="code">openToYearSelection</span>属性设置为<span className="code">true</span>。</p>
	          <DatePicker hintText="Portrait Dialog" />
				    <DatePicker hintText="Landscape Dialog" mode="landscape" />
				    <DatePicker hintText="Dialog Disabled" disabled={true} />
				    <DatePicker hintText="Open to Year" openToYearSelection={true} />
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Inline Examples">
	        <PrintCode code={inlineExamplesCode} />
          <div className="show-examples">
	          <p>Inline Date Pickers显示在输入下方，而不是作为模态对话框。</p>
	          <DatePicker hintText="Portrait Inline Dialog" container="inline" />
            <DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape" />
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Ranged Examples">
	        <PrintCode code={RangedExampleCode} />
          <div className="show-examples">
	          <p>此示例允许您设置日期范围，并切换<span className="code">autoOk</span>，并禁用<span className="code">YearSelection。</span></p>
	          <DatePicker floatingLabelText="Ranged Date Picker" autoOk={this.state.autoOk} minDate={this.state.minDate} maxDate={this.state.maxDate} disableYearSelection={this.state.disableYearSelection}/>
		        <div style={optionsStyle}>
		          <DatePicker onChange={this.handleChangeMinDate} autoOk={this.state.autoOk} floatingLabelText="Min Date" defaultDate={this.state.minDate} disableYearSelection={this.state.disableYearSelection}/>
		          <DatePicker onChange={this.handleChangeMaxDate} autoOk={this.state.autoOk} floatingLabelText="Max Date" defaultDate={this.state.maxDate} disableYearSelection={this.state.disableYearSelection}/>
		          <Toggle name="autoOk" value="autoOk" label="Auto Ok" toggled={this.state.autoOk} onToggle={this.handleToggle} />
		          <Toggle name="disableYearSelection" value="disableYearSelection" label="Disable Year Selection" toggled={this.state.disableYearSelection} onToggle={this.handleToggle} />
		        </div>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Controlled Examples">
	        <PrintCode code={controlledExampleCode} />
          <div className="show-examples">
	          <p><span className="code">DatePicker</span>可以实现为受控输入，其中<span className="code">value</span>由父组件中的状态处理。</p>
	           <DatePicker hintText="Controlled Date Input" value={this.state.controlledDate} onChange={this.handleChange}/>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="DisabledDates Examples">
	        <PrintCode code={disabledDatesExampleCode} />
          <div className="show-examples">
	          <p><span className="code">DatePicker</span>可以根据回调的返回值来禁用特定的日期。</p>
	          <DatePicker hintText="Weekends Disabled" shouldDisableDate={this.disableWeekends} />
            <DatePicker hintText="Random Dates Disabled" shouldDisableDate={this.disableRandomDates} />
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Localised Examples">
	        <PrintCode code={localisedExampleCode} />
          <div className="show-examples">
	          <p><span className="code">DatePicker</span>可以使用<span className="code">locale</span>属性进行本地化。第一个例子是以法语本地化。 请注意，按钮必须使用<span className="code">cancelLabel</span>和<span className="code">okLabel</span>属性单独本地化。第二个例子显示<span className="code">firstDayOfWeek</span>设置为<span className="code">0</span>，（Sunday），并将区域设置为<span className="code">en-US</span>，匹配日期选择器的行为在0.15.0之前。 请注意，“en-US”区域设置是内置的，因此不需要提供<span className="code">DateTimeFormat</span>。最终的示例使用<span className="code">formatDate</span>属性以自定义格式显示生成的日期。</p>
	          <DatePicker hintText="fr locale" DateTimeFormat={DateTimeFormat} okLabel="OK" cancelLabel="Annuler" locale="fr"/>
				    <DatePicker hintText="fa-IR locale" DateTimeFormat={DateTimeFormat} okLabel="تایید" cancelLabel="لغو" locale="fa-IR" firstDayOfWeek={6} utils={persianUtils} />
				    <DatePicker hintText="en-US locale" locale="en-US" firstDayOfWeek={0} />
				    <DatePicker hintText="Custom date format" firstDayOfWeek={0} formatDate={new DateTimeFormat('en-US', {
				        day: 'numeric',
				        month: 'long',
				        year: 'numeric',
				      }).format}
				    />
	        </div>
	      </ContainerPreCode>
	      <h3>属性</h3>
	      <PropertiesList items={propertiesData} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	     </div>);
  }
}

export default DatePickerPage;
