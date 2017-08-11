import React, { Component } from 'react';
import { 
	PrintCode, 
	FooterBanner, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  flatButtonCode,
  complexButtonCode,
  IconBtnCode,
  propertiesData,
} from './examplesCode.js';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {fullWhite} from 'material-ui/styles/colors';
// import './FlatButton.css';
 
class FlatButtonPage extends Component {
 
  render() {
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
