import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  SimpleExampleCode,
  FurtherExamples,
  sizeExamples,
  TooltipExamples,
  TouchExample,
  propertiesData,
} from './examplesCode.js';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionGrade from 'material-ui/svg-icons/action/grade';
// import './IconButton.css';
 
class IconButtonPage extends Component {
 
  render() {
    const styles = {
      smallIcon: {
        width: 36,
        height: 36,
      },
      mediumIcon: {
        width: 48,
        height: 48,
      },
      largeIcon: {
        width: 60,
        height: 60,
      },
      small: {
        width: 72,
        height: 72,
        padding: 16,
      },
      medium: {
        width: 96,
        height: 96,
        padding: 24,
      },
      large: {
        width: 120,
        height: 120,
        padding: 30,
      },
    };
    return (<div>
	      <h2>Icon Button</h2>
	      <p><a href="https://www.google.com/design/spec/components/buttons.html#buttons-toggle-buttons">Icon Button</a>图标周围生成按钮元素。 此外，焦点样式将发生在选项卡上，但不会在点击。 有三种方法来添加图标：</p>
        <ul>
          <li>1.对于图标字体样式表:将prop <span className="code">iconClassName</span>设置为您图标的类名。 某些图标字体支持连字，允许将图标指定为字符串。 请参阅本文以了解有关在项目中包含字体图标的更多信息。</li>
          <li>2.对于SVG图标：插入SVG组件作为图标按钮的子元素。</li>
          <li>3.替代方案：您还可以插入<a hef="http://www.material-ui.com/#/components/font-icon">FontIcon</a>组件作为IconButton的子元素。 这与处理方法1中的iconClassName prop类似。</li>
        </ul>
        <h3>Examples</h3>
	      <ContainerPreCode title="Simple example">
	        <PrintCode code={SimpleExampleCode} />
          <div className="show-examples">
            <IconButton iconClassName="muidocs-icon-custom-github" />
            <IconButton iconClassName="muidocs-icon-custom-github" disabled={true} />
            <p>使用<span className="code">iconClassName</span>属性指定的图标的图标按钮，以及禁用的示例。</p>
 	        </div>

	      </ContainerPreCode>
        <ContainerPreCode title="Further example">
          <PrintCode code={FurtherExamples} />
          <div className="show-examples">
            <IconButton tooltip="Font Icon"><FontIcon className="muidocs-icon-action-home" /></IconButton>
            <IconButton tooltip="SVG Icon"><ActionHome /></IconButton>
            <IconButton iconClassName="material-icons" tooltip="Ligature">home</IconButton>
          </div>
          <p>使用嵌套<a href="http://www.material-ui.com/#/components/font-icon">Icon Font</a>的图标按钮，嵌套S<a href="http://www.material-ui.com/#/components/svg-icon">SVG Font</a>和 icon font 连字。</p>
        </ContainerPreCode>
        <ContainerPreCode title="Size example">
          <PrintCode code={sizeExamples} />
          <div className="show-examples">
            <IconButton><ActionHome /></IconButton>
            <IconButton iconStyle={styles.smallIcon} style={styles.small}><ActionHome /></IconButton>
            <IconButton iconStyle={styles.mediumIcon} style={styles.medium}><ActionHome /> </IconButton>
            <IconButton iconStyle={styles.largeIcon} style={styles.large}><ActionHome /></IconButton>
            <p>不同尺寸的Icon Font的示例。</p>
          </div>
        </ContainerPreCode>
        <ContainerPreCode title="Tooltip example">
          <PrintCode code={TooltipExamples} />
          <div className="show-examples">
            <IconButton iconClassName="muidocs-icon-custom-github" tooltip="bottom-right" tooltipPosition="bottom-right"/>
            <IconButton iconClassName="muidocs-icon-custom-github" tooltip="bottom-center" tooltipPosition="bottom-center"/>
            <IconButton iconClassName="muidocs-icon-custom-github" tooltip="bottom-left" tooltipPosition="bottom-left"/>
            <IconButton iconClassName="muidocs-icon-custom-github" tooltip="top-right" tooltipPosition="top-right"/>
            <IconButton iconClassName="muidocs-icon-custom-github" tooltip="top-center" tooltipPosition="top-center"/>
            <IconButton iconClassName="muidocs-icon-custom-github" tooltip="top-left" tooltipPosition="top-left"/>
            <p>显示<span className="code">tooltip</span>为位置</p>
          </div>
        </ContainerPreCode>
        <ContainerPreCode title="Touch example">
          <PrintCode code={TouchExample} />
          <div className="show-examples">
            <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right"><ActionGrade /></IconButton>
            <IconButton tooltip="bottom-center" touch={true} tooltipPosition="bottom-center"><ActionGrade /></IconButton>
            <IconButton tooltip="bottom-left" touch={true} tooltipPosition="bottom-left"><ActionGrade /></IconButton>
            <IconButton tooltip="top-right" touch={true} tooltipPosition="top-right"><ActionGrade /></IconButton>
            <IconButton tooltip="top-center" touch={true} tooltipPosition="top-center"><ActionGrade /></IconButton>
            <IconButton tooltip="top-left" touch={true} tooltipPosition="top-left"><ActionGrade /></IconButton>
            <p><span className="code">touch</span>属性调整工具提示大小，以便更好地了解移动设备。</p>
          </div>
        </ContainerPreCode>
	      <h3>属性</h3>
	      <PropertiesList items={propertiesData} />
	     </div>);
  }
}

export default IconButtonPage;
