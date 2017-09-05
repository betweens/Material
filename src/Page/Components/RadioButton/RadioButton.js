import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  examplesCode,
  propertiesData1,
  propertiesData2,
} from './examplesCode.js';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
 
class CheckboxPage extends Component {
 
  render() {
	 const styles = {
		  block: {
		    maxWidth: 250,
		  },
		  radioButton: {
		    marginBottom: 16,
		  },
		};
    return (<div>
	      <h2>Checkbox</h2>
	      <p><a href="https://www.google.com/design/spec/components/selection-controls.html#selection-controls-radio-button">单选按钮</a>是用于从多个选项中选择的开关。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Examples">
	        <PrintCode code={examplesCode} />
          <div className="show-examples">
 			      <p>默认情况下，使用<span className="code">RadioButtonGroup</span>的<span className="code">defaultSelected</span>属性选择第二个按钮。 使用<span className="code">RadioButton的disabled</span>属性禁用第三个按钮。 最后一个示例使用<span className="code">labelPosition</span>属性将标签放在左边。</p>
	          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
				      <RadioButton
				        value="light"
				        label="Simple"
				        style={styles.radioButton}
				      />
				      <RadioButton
				        value="not_light"
				        label="Selected by default"
				        style={styles.radioButton}
				      />
				      <RadioButton
				        value="ludicrous"
				        label="Custom icon"
				        checkedIcon={<ActionFavorite style={{color: '#F44336'}} />}
				        uncheckedIcon={<ActionFavoriteBorder />}
				        style={styles.radioButton}
				      />
				    </RadioButtonGroup>
				    <RadioButtonGroup name="shipName" defaultSelected="community">
				      <RadioButton
				        value="enterprise"
				        label="Disabled unchecked"
				        disabled={true}
				        style={styles.radioButton}
				      />
				      <RadioButton
				        value="community"
				        label="Disabled checked"
				        disabled={true}
				        style={styles.radioButton}
				      />
				    </RadioButtonGroup>
				    <RadioButtonGroup name="notRight" labelPosition="left" style={styles.block}>
				      <RadioButton
				        value="reverse"
				        label="Label on the left"
				        style={styles.radioButton}
				      />
				    </RadioButtonGroup>
	        </div>
	      </ContainerPreCode>
	      <h3>Properties</h3>
	      <PropertiesList items={propertiesData1} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <PropertiesList items={propertiesData2} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <p><small>* required property</small></p>
	     </div>);
  }
}

export default CheckboxPage;