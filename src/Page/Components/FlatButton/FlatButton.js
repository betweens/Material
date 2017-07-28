import React, { Component } from 'react';
import { 
	PrintCode, 
	FooterBanner, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {fullWhite} from 'material-ui/styles/colors';
// import './FlatButton.css';
 
class FlatButtonPage extends Component {
 
  render() {
    const flatButtonCode = `import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const FlatButtonExampleSimple = () => (
  <div>
    <FlatButton label="Default" />
    <FlatButton label="Primary" primary={true} />
    <FlatButton label="Secondary" secondary={true} />
    <FlatButton label="Disabled" disabled={true} />
    <br />
    <br />
    <FlatButton label="Full width" fullWidth={true} />
  </div>
);

export default FlatButtonExampleSimple;`;
    const complexButtonCode = `import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';

const styles = {
  uploadButton: {
    verticalAlign: 'middle',
  },
  uploadInput: {
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

const FlatButtonExampleComplex = () => (
  <div>
    <FlatButton
      label="Choose an Image"
      labelPosition="before"
      style={styles.uploadButton}
      containerElement="label"
    >
      <input type="file" style={styles.uploadInput} />
    </FlatButton>
    <FlatButton
      label="Label before"
      labelPosition="before"
      primary={true}
      icon={<ActionAndroid />}
    />
    <FlatButton
      href="https://github.com/callemall/material-ui"
      target="_blank"
      label="GitHub Link"
      secondary={true}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
    />
  </div>
);

export default FlatButtonExampleComplex;`;
    const IconBtnCode = `import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {fullWhite} from 'material-ui/styles/colors';

const style = {
  margin: 12,
};

const FlatButtonExampleIcon = () => (
  <div>
    <FlatButton
      icon={<ActionAndroid />}
      style={style}
    />
    <FlatButton
      backgroundColor="#a4c639"
      hoverColor="#8AA62F"
      icon={<ActionAndroid color={fullWhite} />}
      style={style}
    />
    <FlatButton
      href="https://github.com/callemall/material-ui"
      target="_blank"
      secondary={true}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
      style={style}
    />
  </div>
);

export default FlatButtonExampleIcon;`;
    const styles = {
      uploadButton: {
        verticalAlign: 'middle',
      },
      uploadInput: {
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
    const style ={
      margin: 12,
    }
		const propertiesData = {
      title: ['Name', 'Type', 'Default', 'Description'],
      body:[[
      	'backgroundColor',
      	'string',
      	'',
      	'当鼠标悬停在其上时，按钮的颜色。',
      ], [
      	'children',
      	'node',
        '',
      	'这是按钮内将显示的内容。 如果指定了标签，将显示标签内的文字。 否则，组件将期望将显示的子元素。 （在我们的示例中，我们正在嵌套一个<input type =“file”/>和作为我们的标签显示的跨度。）这仅适用于平面和凸起的按钮。',
      ], [
      	'className',
      	'string',
      	'',
      	'根元素的CSS类名称。',
      ], [
      	'containerElement',
      	'union: string element',
      	'',
      	'用作FlatButton的容器的元素。 使用DOM元素或ReactElement的字符串。 这对于将FlatButton包装在自定义链接组件中很有用。 如果给出了一个ReactElement，请确保它将所有给定的props传递到基础的DOM元素，并使其子进程正确集成。',
      ], [
      	'disableTouchRipple',
      	'bool',
      	'false',
      	'如果为true，则元素的纹波效果将被禁用。',
      ], [
      	'disabled',
      	'bool',
      	'false',
      	'如果为true，该按钮将被禁用。',
      ], [
      	'fullWidth',
      	'bool',
      	'false',
      	'如果为true, 该按钮将占据其容器的全部宽度。',
      ], [
      	'hoverColor',
      	'string',
      	'',
      	'鼠标悬停时按钮的颜色。',
      ], [
        'href',
        'string',
        '',
        '当按钮被点击时要链接的URL',
      ], [
        'icon',
        'string',
        '',
        '使用此属性显示图标。',
      ], [
        'label',
        'validateLabel',
        '',
        '标签的按钮。',
      ], [
        'label',
        "enum: 'before' 'after' 'after'",
        '',
        '在通过的子元素之前或之后放置标签。',
      ], [
        'labelStyle',
        'object',
        '{}',
        '覆盖按钮的标签元素的内联样式。',
      ], [
        'onKeyboardFocus',
        'function',
        '() => {}',
        <div>当元素被键盘聚焦或失焦时，回调功能被触发。<br />
          Signature:<br />
          function(event: object, isKeyboardFocused: boolean) => void<br />
          event: 针对元素的聚焦或失焦时事件。<br />
          isKeyboardFocused: 指示元素是否聚焦。
        </div>,
      ], [
        'onTouchTap',
        'function',
        '() => {}',
        <div>触摸按钮时触发回调功能。<br />
          Signature:<br />
          function(event: object) => void<br />
          event: TouchTap事件定位按钮。
        </div>,
      ], [
        'primary',
        'bool',
        'false',
        '如果为true，则颜色按照主题的primaryTextColor按钮。',
      ], [
        'rippleColor',
        'string',
        'false',
        '单击按钮后，纹波的颜色。',
      ], [
        'secondary',
        'string',
        'false',
        '如果是true，颜色按钮按照secondaryTextColor从主题。 The primary prop has precendent if set to true.',
      ], [
        'style',
        'object',    
        '', 
        '覆盖根元素的内联样式。'
      ]]
		};
    return (<div>
	    <div className="markdown-body">
	      <h2>Flat Button</h2>
	      <p><a href="https://www.google.com/design/spec/components/buttons.html#buttons-flat-raised-buttons">Flat Button</a>用于一般功能，并减少屏幕上的分层数量，使其更易于阅读。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Examples">
	        <PrintCode code={flatButtonCode} />
          <div className="show-examples">
	          <p>FlatButton具有默认颜色，primary, secondary 和 disabled。</p>
            <FlatButton label="Default" />
            <FlatButton label="Primary" primary={true} />
            <FlatButton label="Secondary" secondary={true} />
            <FlatButton label="Disabled" disabled={true} />
            <br />
            <br />
            <FlatButton label="Full width" fullWidth={true} />
 	        </div>
	      </ContainerPreCode>
        <ContainerPreCode title="Complex examples">
          <PrintCode code={complexButtonCode} />
          <div className="show-examples">
            <p>第一个示例使用<span className="code">input</span>作为子元素。 第二个例子有一个<span className="code">SVG Icon</span>，标签位于后面。 最后一个例子使用<span className="code">Font Icon</span>，并被包裹在一个锚标签中。</p>
             <FlatButton
              label="Choose an Image"
              labelPosition="before"
              style={styles.uploadButton}
              containerElement="label"
            >
              <input type="file" style={styles.uploadInput} />
            </FlatButton>
            <FlatButton
              label="Label before"
              labelPosition="before"
              primary={true}
              icon={<ActionAndroid />}
            />
            <FlatButton
              href="https://github.com/callemall/material-ui"
              target="_blank"
              label="GitHub Link"
              secondary={true}
              icon={<FontIcon className="muidocs-icon-custom-github" />}
            />
          </div>
        </ContainerPreCode>
        <ContainerPreCode title="Icon examples">
          <PrintCode code={IconBtnCode} />
          <div className="show-examples">
            <p>使用没有标签的图标的平面按钮示例。 第一个示例使用SVG图标，并具有默认颜色。 第二个例子显示如何改变图标和背景颜色。 最后一个例子使用字体图标，并被包裹在一个锚标签中。</p>
            <FlatButton
              icon={<ActionAndroid />}
              style={style}
            />
            <FlatButton
              backgroundColor="#a4c639"
              hoverColor="#8AA62F"
              icon={<ActionAndroid color={fullWhite} />}
              style={style}
            />
            <FlatButton
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

export default FlatButtonPage;
