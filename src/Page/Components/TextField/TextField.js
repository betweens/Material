import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  simpleExamplesCode,
  errorExamplesCode,
  styledExamplesCode,
  disabledExamplesCode,
  controlledExampleCode,
  propertiesData,
} from './examplesCode.js';
import TextField from 'material-ui/TextField'
import {orange500, blue500} from 'material-ui/styles/colors';
const TextFieldExampleSimple = () => (<ContainerPreCode title="Simple Examples">
  <PrintCode code={simpleExamplesCode} />
  <div className="show-examples">
    <p>演示关键文本字段功能的示例。</p>
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
</ContainerPreCode>);

const TextFieldExampleError = () => (<ContainerPreCode title="Error Examples">
  <PrintCode code={errorExamplesCode} />
  <div className="show-examples">
    <p><span className="code">errorText</span>属性与各种其他功能结合使用。</p>
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
</ContainerPreCode>);

const TextFieldExampleCustomize = () => {
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
	return(<ContainerPreCode title="Styled Examples">
	  <PrintCode code={styledExamplesCode} />
	  <div className="show-examples">
	    <p>设计各种文本字段功能的示例。</p>
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
	</ContainerPreCode>);
}

const TextFieldExampleDisabled = () => (<ContainerPreCode title="Disabled Examples">
  <PrintCode code={disabledExamplesCode} />
  <div className="show-examples">
    <p>禁用的文本字段的各种示例。</p>
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
</ContainerPreCode>);

class TextFieldExampleControlled extends Component {

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
    return (<ContainerPreCode title="Controlled Examples">
		  <PrintCode code={controlledExampleCode} />
		  <div className="show-examples">
		  <p>受控文本字段示例。</p>
		   <TextField
          id="text-field-controlled"
          value={this.state.value}
          onChange={this.handleChange}
        />
		  </div>
		</ContainerPreCode>);
  }
}
 

const TextFieldPage = () => (<div>
  <h2>Text Field</h2>
  <p><a href="https://www.google.com/design/spec/components/text-fields.html">Text Field </a>允许用户输入文字。</p>
  <h3>Examples</h3>
  <TextFieldExampleSimple />
  <TextFieldExampleError />
  <TextFieldExampleCustomize />
  <TextFieldExampleDisabled />
  <TextFieldExampleControlled />
  <h3>Properties</h3>
  <PropertiesList items={propertiesData} />
  <p>Other properties (not documented) are applied to the root element.</p>
</div>);

export default TextFieldPage;

