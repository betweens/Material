import React, { Component } from 'react';
import { 
	PrintCode, 
	FooterBanner, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
// import './FloatingActionButton.css';
 
class FloatingActionButtonPage extends Component {
 
  render() {
    const examplesCode = `import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginRight: 20,
};

/**
 * Default size and ｀mini｀ FABs, in primary (default), ｀secondary｀ and ｀disabled｀ colors.
 */
const FloatingActionButtonExampleSimple = () => (
  <div>
    <FloatingActionButton style={style}>
      <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton mini={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton secondary={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton mini={true} secondary={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton disabled={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton mini={true} disabled={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
  </div>
);

export default FloatingActionButtonExampleSimple;`;
		const style = {
      marginRight: 20,
    };
    const propertiesData = {
      title: ['Name', 'Type', 'Default', 'Description'],
      body:[[
      	'backgroundColor',
      	'string',
      	'',
      	'该值将覆盖按钮的默认背景颜色。 但是，它不会覆盖默认的禁用背景颜色。 这必须使用disabledColor属性单独设置。',
      ], [
        'children',
        'node',
        '',
        '这是浮动动作按钮中显示的内容; 例如，SVG图标。',
      ], [
        'className',
        'string',
        '',
        '根元素的css类名称。',
      ], [
        'disabled',
        'bool',
        'false',
        '如果设置为true，则禁用该按钮。',
      ], [
        'disabledColor',
        'string',
        '',
        '当该按钮被禁用时，此值将覆盖按钮的默认背景颜色。',
      ], [
        'href',
        'string',
        '',
        '点击按钮时，跳转的链接',
      ], [
        'iconClassName',
        'string',
        '',
        'FloatingActionButton中的图标是FontIcon组件。 该属性是要在按钮中显示的图标的类名。 添加一个iconClassName的替代方法是手动插入FontIcon组件或自定义SvgIcon组件或FloatingActionButton的子项。',
      ], [
        'iconStyle',
        'object',
        '',
        '这相当于iconClassName，除了它用于覆盖FontIcon组件的内联样式。',
      ], [
        'iconStyle',
        'object',
        '',
        '如果为true，该按钮将是一个小的FloatingActionButton',
      ], [
        'onTouchTap',
        'function',
        '',
        <div>触碰按钮时触发回调功能。<br />
          Signature:<br />
          function(event: object) => void<br />
          event: TouchTap事件定位按钮。
        </div>,
      ], [
        'secondary',
        'bool',
        '',
        '如果为true，该按钮将使用secondary button colors。',
      ], [
        'style',
        'object',
        '',
        '覆盖根元素的内联样式。',
      ], [
        'zDepth',
        'propTypes.zDepth',
        '2',
        '底层Paper组件的zDepth。',
      ]]
		};
    return (<div>
	    <div className="markdown-body">
	      <h2>Floating Action Button</h2>
	      <p><a href="https://www.google.com/design/spec/components/buttons-floating-action-button.html">Floating Action Button</a>用于常用功能。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Examples">
	        <PrintCode code={examplesCode} />
          <div className="show-examples">
	          <p>Default size and <span className="code">mini</span>FABs, in primary (default), <span className="code">secondary</span> and <span className="code">disabled</span> colors.</p>
	          <FloatingActionButton style={style}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton mini={true} style={style}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton secondary={true} style={style}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton mini={true} secondary={true} style={style}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton disabled={true} style={style}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton mini={true} disabled={true} style={style}>
              <ContentAdd />
            </FloatingActionButton>
          </div>
	      </ContainerPreCode>
	      <h3>属性</h3>
	      <PropertiesList items={propertiesData} />
	     </div>
	    <FooterBanner />
  </div>);
  }
}

export default FloatingActionButtonPage;
