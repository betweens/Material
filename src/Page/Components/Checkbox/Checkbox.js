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
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
 
class CheckboxPage extends Component {
 state = {
    checked: false,
  }

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }
  render() {
  	const styles = {
		  block: {
		    maxWidth: 250,
		  },
		  checkbox: {
		    marginBottom: 16,
		  },
		};
    return (<div>
	      <h2>Checkbox</h2>
	      <p><a href="https://www.google.com/design/spec/components/selection-controls.html#selection-controls-checkbox">checkbox</a>用于验证您想从组中选择哪些选项。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Examples">
	        <PrintCode code={examplesCode} />
          <div className="show-examples">
	          <p>默认情况下使用<span className="code">defaultChecked</span>属性选择第二个示例。 第三个示例使用<span className="code">disabled</span>属性禁用。 第四个例子通过<span className="code">checkedIcon</span>和<span className="code">uncheckedIcon</span>属性使用自定义图标。 最后一个示例使用<span className="code">labelPosition</span>属性将标签放在左边。</p>
			      <div style={styles.block}>
		        <Checkbox
		          label="Simple"
		          style={styles.checkbox}
		        />
		        <Checkbox
		          label="Simple with controlled value"
		          checked={this.state.checked}
		          onCheck={this.updateCheck.bind(this)}
		          style={styles.checkbox}
		        />
		        <Checkbox
		          checkedIcon={<ActionFavorite />}
		          uncheckedIcon={<ActionFavoriteBorder />}
		          label="Custom icon"
		          style={styles.checkbox}
		        />
		        <Checkbox
		          checkedIcon={<Visibility />}
		          uncheckedIcon={<VisibilityOff />}
		          label="Custom icon of different shapes"
		          style={styles.checkbox}
		        />
		        <Checkbox
		          label="Disabled unchecked"
		          disabled={true}
		          style={styles.checkbox}
		        />
		        <Checkbox
		          label="Disabled checked"
		          checked={true}
		          disabled={true}
		          style={styles.checkbox}
		        />
		        <Checkbox
		          label="Label on the left"
		          labelPosition="left"
		          style={styles.checkbox}
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

export default CheckboxPage;
