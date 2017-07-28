import React, { Component } from 'react';
import { 
	PrintCode, 
	FooterBanner, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import {fullWhite} from 'material-ui/styles/colors';
// import './RaisedButton.css';
 
class RaisedButtonPage extends Component {
 
  render() {
    const raisedBntCode = `import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const RaisedButtonExampleSimple = () => (
  <div>
    <RaisedButton label="Default" style={style} />
    <RaisedButton label="Primary" primary={true} style={style} />
    <RaisedButton label="Secondary" secondary={true} style={style} />
    <RaisedButton label="Disabled" disabled={true} style={style} />
    <br />
    <br />
    <RaisedButton label="Full width" fullWidth={true} />
  </div>
);

export default RaisedButtonExampleSimple;`;
    const complexBtnCode = `import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';

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

const RaisedButtonExampleComplex = () => (
  <div>
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
);

export default RaisedButtonExampleComplex;`;
   const iconBtnCode = `import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';

const style = {
  margin: 12,
};

const RaisedButtonExampleIcon = () => (
  <div>
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
);

export default RaisedButtonExampleIcon;`;
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
    const propertiesData = {
      title: ['Name', 'Type', 'Default', 'Description'],
      body:[[
      	'backgroundColor',
      	'string',
      	'',
      	'头像的backgroundColor。 不适用于图像头像。',
      ], [
      	'children',
      	'node',
      	'',
      	'可以使用，例如，在头像内呈现一个字母。',
      ], [
      	'className',
      	'string',
      	'',
      	'根div或img元素的css类名。',
      ], [
      	'color',
      	'string',
      	'',
      	'图标或字母颜色。',
      ], [
      	'icon',
      	'element',
      	'',
      	'这是在头像中使用的SvgIcon或FontIcon。',
      ], [
      	'size',
      	'number',
      	'40',
      	'这是头像的大小，以像素为单位。',
      ], [
      	'src',
      	'string',
      	'',
      	'如果传入，该组件将呈现一个img元素。 否则，将渲染一个div。',
      ], [
      	'style',
      	'object',
      	'',
      	'覆盖根元素的内联样式。',
      ]]
		};
    return (<div>
	    <div className="markdown-body">
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
	     </div>
	    <FooterBanner />            
  </div>);
  }
}

export default RaisedButtonPage;
