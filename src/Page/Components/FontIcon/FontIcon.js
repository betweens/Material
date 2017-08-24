import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  customIconFontCode,
	publicIconFontCode,
  propertiesData,
} from './examplesCode.js';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200, yellow500} from 'material-ui/styles/colors';
// import './FontIcon.css';
class FontIconPage extends Component {
	constructor(props) {
	 	super(props);
	 	this.state = {
	    open1: false,
	  }
	}

  render() {
		const iconStyles = {
		  marginRight: 24,
		};
    return (<div>
	      <h2>Font Icon</h2>
 	      <p>该组件将渲染您项目中包含的任何样式表中定义的任何<a href="https://www.google.com/design/spec/style/icons.html#icons-system-icons">icon</a>。 您可以使用像<a href="https://icomoon.io/">IcoMoon</a>这样的网站来生成自定义的字体文件，也可以使用项目中包含的<a href="https://design.google.com/icons/">material icon</a>或<a href="http://fontawesome.io/">Font Awesome</a>等预制字体，或者从公共<a href="https://en.wikipedia.org/wiki/Content_delivery_network">内容传送网络</a>提供。</p>
	      <p>请参阅<a href="http://google.github.io/material-design-icons/#icon-font-for-the-web">本文</a>以了解如何使用项目中任何上述网站的字体图标。</p>
	      <p>要使用<span className="code">FontIcon</span>,请将图标样式表添加到您的项目中，并引用<span className="code">className</span>中图标的类。 如果图标字体支持连字，请引用<span className="code">className</span>中的字体，并将图标名称放在<span className="code">FontIcon</span>标签中。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Custom Icon Font">
	        <PrintCode code={customIconFontCode} />
          <div className="show-examples">
	          <p>此示例使用自定义字体（不是<span className="code">Material-UI</span>的一部分）。 <span className="code">className</span>定义了特定的图标。 第三个例子定义了一个<span className="code">hoverColor</span>。</p>
	          <FontIcon className="muidocs-icon-action-home" style={iconStyles} />
						<FontIcon className="muidocs-icon-action-home" style={iconStyles} color={blue500}/>
						<FontIcon className="muidocs-icon-action-home" style={iconStyles} color={red500} hoverColor={greenA200}/>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Public Icon Font">
	        <PrintCode code={publicIconFontCode} />
          <div className="show-examples">
            <p>此示例使用文档站点索引页面的head中引用的<span className="code">Material icons font</span>， <span className="code">className</span>定义字体，<span className="code">IconFont</span>标签内容定义了特定的图标。</p>
	          <FontIcon className="material-icons" style={iconStyles}>home</FontIcon>
				    <FontIcon className="material-icons" style={iconStyles} color={red500}>flight_takeoff</FontIcon>
				    <FontIcon className="material-icons" style={iconStyles} color={yellow500}>cloud_download</FontIcon>
				    <FontIcon className="material-icons" style={iconStyles} color={blue500}>videogame_asset</FontIcon>
	        </div>
	      </ContainerPreCode>
	      <h3>属性</h3>
	      <PropertiesList items={propertiesData} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	     </div>);
  }
}

export default FontIconPage;
