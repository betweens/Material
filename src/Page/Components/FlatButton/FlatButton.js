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
      	'Color of button when mouse is not hovering over it.',
      ], [
      	'children',
      	'node',
      	'',
      	'This is what will be displayed inside the button. If a label is specified, the text within the label prop will be displayed. Otherwise, the component will expect children which will then be displayed. (In our example, we are nesting an <input type="file" /> and a span that acts as our label to be displayed.) This only applies to flat and raised buttons.',
      ], [
      	'className',
      	'string',
      	'',
      	'The CSS class name of the root element.',
      ], [
      	'containerElement',
      	'union: string element',
      	'',
      	'The element to use as the container for the FlatButton. Either a string to use a DOM element or a ReactElement. This is useful for wrapping the FlatButton in a custom Link component. If a ReactElement is given, ensure that it passes all of its given props through to the underlying DOM element and renders its children prop for proper integration.',
      ], [
      	'disableTouchRipple',
      	'bool',
      	'',
      	'If true, the element‘s ripple effect will be disabled.',
      ], [
      	'disabled',
      	'bool',
      	'false',
      	'Disables the button if set to true.',
      ], [
      	'fullWidth',
      	'bool',
      	'false',
      	'If true, the button will take up the full width of its container.',
      ], [
      	'hoverColor',
      	'string',
      	'',
      	'Color of button when mouse hovers over.',
      ], [
        'href',
        'string',
        '',
        'The URL to link to when the button is clicked',
      ], [
        'icon',
        'string',
        '',
        'Use this property to display an icon.',
      ], [
        'label',
        'validateLabel',
        '',
        'Label for the button.',
      ], [
        'label',
        "enum: 'before' 'after' 'after'",
        '',
        'Place label before or after the passed children.',
      ], [
        'labelStyle',
        'object',
        '{}',
        'Override the inline-styles of the button”s label element.',
      ], [
        'onKeyboardFocus',
        'function',
        '() => {}',
        <div>Callback function fired when the element is focused or blurred by the keyboard.<br />
          Signature:<br />
          function(event: object, isKeyboardFocused: boolean) => void<br />
          event: focus or blur event targeting the element.<br />
          isKeyboardFocused: Indicates whether the element is focused.
        </div>,
      ], [
        'onTouchTap',
        'function',
        '() => {}',
        <div>Callback function fired when the button is touch-tapped.<br />
          Signature:<br />
          function(event: object) => void<br />
          event: TouchTap event targeting the button.
        </div>,
      ], [
        'primary',
        'bool',
        'false',
        'If true, colors button according to primaryTextColor from the Theme.',
      ], [
        'rippleColor',
        'string',
        'false',
        'Color for the ripple after button is clicked.',
      ], [
        'secondary',
        'string',
        'false',
        'If true, colors button according to secondaryTextColor from the theme. The primary prop has precendent if set to true.',
      ], [
        'style',
        'object',    
        '', 
        'Override the inline-styles of the root element.'
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
