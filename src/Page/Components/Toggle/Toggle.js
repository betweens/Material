import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  examplesCode,
  propertiesData,
} from './examplesCode.js';
import Toggle from 'material-ui/Toggle';
 
class TogglePage extends Component {
 
  render() {
	 const styles = {
		  block: {
		    maxWidth: 250,
		  },
		  toggle: {
		    marginBottom: 16,
		  },
		  thumbOff: {
		    backgroundColor: '#ffcccc',
		  },
		  trackOff: {
		    backgroundColor: '#ff9d9d',
		  },
		  thumbSwitched: {
		    backgroundColor: 'red',
		  },
		  trackSwitched: {
		    backgroundColor: '#ff9d9d',
		  },
		  labelStyle: {
		    color: 'red',
		  },
		};
    return (<div>
	      <h2>Checkbox</h2>
	      <p><a href="https://www.google.com/design/spec/components/selection-controls.html#selection-controls-switch">toggle switch </a>用作开/关控制。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Examples">
	        <PrintCode code={examplesCode} />
          <div className="show-examples">
	          <p>默认情况下，使用<span className="code">defaultToggled</span>属性选择第二个示例。 第三个示例使用<span className="code">disabled</span>属性禁用。 最后一个示例使用<span className="code">labelPosition</span>属性将标签放在右侧。</p>
	          <div style={styles.block}>
					    <Toggle
					      label="Simple"
					      style={styles.toggle}
					    />
					    <Toggle
					      label="Toggled by default"
					      defaultToggled={true}
					      style={styles.toggle}
					    />
					    <Toggle
					      label="Disabled"
					      disabled={true}
					      style={styles.toggle}
					    />
					    <Toggle
					      label="Label on the right"
					      labelPosition="right"
					      style={styles.toggle}
					    />
					    <Toggle
					      label="Styling"
					      thumbStyle={styles.thumbOff}
					      trackStyle={styles.trackOff}
					      thumbSwitchedStyle={styles.thumbSwitched}
					      trackSwitchedStyle={styles.trackSwitched}
					      labelStyle={styles.labelStyle}
					    />
					  </div>
	        </div>
	      </ContainerPreCode>
	      <h3>Properties</h3>
	      <PropertiesList items={propertiesData} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	     </div>);
  }
}

export default TogglePage;

