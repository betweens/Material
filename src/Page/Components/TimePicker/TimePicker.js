import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  simpleExamplesCode,
  controlledExamplesCode,
  localisedExampleCode,
  stepExampleCode,
  propertiesData,
} from './examplesCode.js';
import TimePicker from 'material-ui/TimePicker';

const TimePickerExampleSimple = () => (<ContainerPreCode title="Simple Examples">
  <PrintCode code={simpleExamplesCode} />
  <div className="show-examples">
    <p>时间选择器支持12小时和24小时格式。 在12小时格式中，AM和PM指示灯会切换所选的时间段。 您还可以禁用对话框传递到禁用属性。</p>
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
</ContainerPreCode>);

class TimePickerExampleComplex extends Component {
 
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
    return (<ContainerPreCode title="Controlled Examples">
      <PrintCode code={controlledExamplesCode} />
      <div className="show-examples">
         <p><span className="code">TimePicker</span>可以用作受控组件。</p>
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
    </ContainerPreCode>);
  }
}

const TimePickerInternational = () => (<ContainerPreCode title="Localised Examples">
  <PrintCode code={localisedExampleCode} />
  <div className="show-examples">
    <p>按钮可以使用cancelLabel和okLabel属性进行本地化。</p>
    <TimePicker
      hintText="Custom Labels"
      okLabel="确定"
      cancelLabel="取消"
    />
  </div>
</ContainerPreCode>);
const TimePickerExampleStep = () => (<ContainerPreCode title="Step Examples">
  <PrintCode code={stepExampleCode} />
  <div className="show-examples">
    <p>可以使用minutesStep属性配置每个步骤的分钟数。</p>
		  <TimePicker
		    hintText="5 minutes step"
		    minutesStep={5}
		  />
		  <TimePicker
		    hintText="10 minutes step"
		    minutesStep={10}
		  />
  </div>
</ContainerPreCode>);
const TimePickerPage = () => (<div>
	<h2>Checkbox</h2>
	<p><a href="https://www.google.com/design/spec/components/pickers.html#pickers-time-pickers">time picker</a>用于通过显示用户可以交互的界面来输入时间。</p>
	<h3>Examples</h3>
	<TimePickerExampleSimple />
	<TimePickerExampleComplex />
	<TimePickerInternational />
	<TimePickerExampleStep />
	<h3>Properties</h3>
	<PropertiesList items={propertiesData} />
	<p>Other properties (not documented) are applied to the root element.</p>
</div>);

export default TimePickerPage;
