import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  raisedBntCode,
  iconBtnCode,
  complexBtnCode,
  propertiesData,
} from './examplesCode.js';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import {fullWhite} from 'material-ui/styles/colors';
// import './RaisedButton.css';
 
class RaisedButtonPage extends Component {
 
  render() {

    const styles = {
      button: {
        margin: 12,
      },
      exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
      },
    };
		const style = {
      margin: 12,
    };

    return (<div>
	      <h2>Raised Button</h2>
	      <p>此<a href="https://www.google.com/design/spec/components/buttons.html#buttons-flat-raised-buttons">按钮</a>用于将维度添加到大多数平面布局，并强调页面上的重要功能。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Examples">
	        <PrintCode code={raisedBntCode} />
          <div className="show-examples">
	          <p>RaisedButton 默认颜色, primary, secondary and and disabled.</p>
            <RaisedButton label="Default" style={style} />
            <RaisedButton label="Primary" primary={true} style={style} />
            <RaisedButton label="Secondary" secondary={true} style={style} />
            <RaisedButton label="Disabled" disabled={true} style={style} />
            <br />
            <br />
            <RaisedButton label="Full width" fullWidth={true} />
	        </div>
	      </ContainerPreCode>
        <ContainerPreCode title="Complex examples">
          <PrintCode code={complexBtnCode} />
          <div className="show-examples">
            <p>第一个示例使用<span className="code">input</span>作为子元素。 第二个例子有一个<span className="code">SVG Icon</span>，标签位于后面。 最后一个例子使用<span className="code">Font Icon</span>，并被包裹在一个锚标签中。</p>
            <RaisedButton
              label="Choose an Image"
              labelPosition="before"
              style={styles.button}
              containerElement="label"
            >
              <input type="file" style={styles.exampleImageInput} />
            </RaisedButton>
            <RaisedButton
              label="Label before"
              labelPosition="before"
              primary={true}
              icon={<ActionAndroid />}
              style={styles.button}
            />
            <RaisedButton
              href="https://github.com/callemall/material-ui"
              target="_blank"
              label="Github Link"
              secondary={true}
              style={styles.button}
              icon={<FontIcon className="muidocs-icon-custom-github" />}
            />
          </div>
        </ContainerPreCode>
        <ContainerPreCode title="Icon examples">
          <PrintCode code={iconBtnCode} />
          <div className="show-examples">
            <p>使用没有标签的图标的提升按钮的示例。 第一个示例使用SVG图标，并具有默认颜色。 第二个例子显示如何改变图标和背景颜色。 最后一个例子使用字体图标，并被包裹在一个锚标签中。</p>
            <RaisedButton
              icon={<ActionAndroid />}
              style={style}
            />
            <RaisedButton
              backgroundColor="#a4c639"
              icon={<ActionAndroid color={fullWhite} />}
              style={style}
            />
            <RaisedButton
              href="https://github.com/callemall/material-ui"
              target="_blank"
              secondary={true}
              icon={<FontIcon className="muidocs-icon-custom-github" />}
              style={style}
            />
          </div>
        </ContainerPreCode>
	      <h3>属性</h3>
	      <PropertiesList items={propertiesData} />
	     </div>);
  }
}

export default RaisedButtonPage;
