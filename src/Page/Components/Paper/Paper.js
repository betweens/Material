import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  simpleCode,
  nonRoundedCornersCode,
  circularPaperCode,
  propertiesData,
} from './examplesCode.js';
import Paper from 'material-ui/Paper';
// import './Paper.css';
 
class PaperPage extends Component {
 
  render() {
		const style = {
		  height: 100,
		  width: 100,
		  margin: 20,
		  textAlign: 'center',
		  display: 'inline-block',
		};
    return (<div>
	      <h2>Paper</h2>
	      <p><a href="https://www.google.com/design/spec/layout/principles.html#principles-how-paper-works">Paper</a>元素是可以给页面深度感的基本容器。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Simple Code">
	        <PrintCode code={simpleCode} />
          <div className="show-examples">
	          <p>显示z<span className="code">Depth</span>范围的纸张示例。</p>
				    <Paper style={style} zDepth={1} />
				    <Paper style={style} zDepth={2} />
				    <Paper style={style} zDepth={3} />
				    <Paper style={style} zDepth={4} />
				    <Paper style={style} zDepth={5} />
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Non-rounded Corners Code">
	        <PrintCode code={nonRoundedCornersCode} />
          <div className="show-examples">
	          <p>默认情况下角落圆角。 将<span className="code">rounded</span>属性设置为false为方角。</p>
				    <Paper style={style} zDepth={1} rounded={false} />
				    <Paper style={style} zDepth={2} rounded={false} />
				    <Paper style={style} zDepth={3} rounded={false} />
				    <Paper style={style} zDepth={4} rounded={false} />
				    <Paper style={style} zDepth={5} rounded={false} />
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Circular Paper Code">
	        <PrintCode code={circularPaperCode} />
          <div className="show-examples">
	          <p>为圆形纸设置圆形属性。</p>
				    <Paper style={style} zDepth={1} circle={true} />
				    <Paper style={style} zDepth={2} circle={true} />
				    <Paper style={style} zDepth={3} circle={true} />
				    <Paper style={style} zDepth={4} circle={true} />
				    <Paper style={style} zDepth={5} circle={true} />
	        </div>
	      </ContainerPreCode>
	      <h3>属性</h3>
	      <PropertiesList items={propertiesData} />
	      <p><small>* required property</small></p>
	     </div>);
  }
}

export default PaperPage;
