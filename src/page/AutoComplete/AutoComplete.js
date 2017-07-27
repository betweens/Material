import React, { Component } from 'react';
import { 
	PrintCode, 
	FooterBanner, 
	ContainerPreCode,
	PropertiesList,
} from '../../components'

// import './AutoComplete.css';
 
class AutoComplete extends Component {
 
  render() {
 
    const styles = {
		  title: {
		    cursor: 'pointer',
		  },
		};
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
	      <h2>自动补全</h2>
	      <p><a href="https://www.google.com/design/spec/components/text-fields.html#text-fields-auto-complete-text-field">自动补全</a>是常规文本字段的扩展，可以动态自动完成输入。 它可以采用不同的自动补全过滤器，并使用菜单来显示建议。</p>
	    </div>
      <FooterBanner />
  </div>);
  }
}

export default AutoComplete;
