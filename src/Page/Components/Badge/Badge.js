import React, { Component } from 'react';
import { 
	PrintCode, 
	FooterBanner, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
// import './Badge.css';
 
class Badge extends Component {
 
  render() {
 
 
		const propertiesData = {
      title: ['Name', 'Type', 'Default', 'Description'],
      body:[[
      	'children',
      	'node',
      	'',
      	'可以渲染一个自定义子元素在app bar里面',
      ]]
		};
    return (<div>
	    <div className="markdown-body">
	      <h2>导航条</h2>
	      <p><a href="https://www.google.com/design/spec/layout/structure.html#structure-app-bar">app bar</a>, 以前被称为Android操作栏,是一种特殊的工具栏，用于品牌、导航、搜索和操作。</p>
	      <ContainerPreCode>
	        <PrintCode code={"appBarCode"} />
          <div className="show-examples">
	          <p>AppBar的一个简单示例，右侧有一个图标。 默认情况下，左侧图标是导航菜单。</p>
	         
	        </div>
	      </ContainerPreCode>
	 
	      <h3>属性</h3>
	      <PropertiesList items={propertiesData} />
	     </div>
	    <FooterBanner />
  </div>);
  }
}

export default Badge;
