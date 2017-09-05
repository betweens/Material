import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  simpleExamplesCode,
  disabledExamplesCode,
  steppedExampleCode,
  controlledExamplesCode,
  alternativeAxisExamplesCode,
  customScaleCode,
  propertiesData,
} from './examplesCode.js';
import Slider from 'material-ui/Slider';
// import './Slider.css';
const min = 0;
const max = Math.pow(10, 6);
const power = 12;

function transform(value) {
  return Math.round((Math.exp(power * value / max) - 1) / (Math.exp(power) - 1) * max);
}

function reverse(value) {
  return (1 / power) * Math.log(((Math.exp(power) - 1) * value / max) + 1) * max;
}
class SliderPage extends Component {
  state = {
    firstSlider: 0.5,
    secondSlider: 50,
    slider: Math.pow(10, 4),
  };

  handleSlider = (event, value) => {
    this.setState({slider: transform(value)});
  };
  handleFirstSlider = (event, value) => {
    this.setState({firstSlider: value});
  };

  handleSecondSlider = (event, value) => {
    this.setState({secondSlider: value});
  };
  render() {
  	const styles = {
		  root: {
		    display: 'flex',
		    height: 124,
		    flexDirection: 'row',
		    justifyContent: 'space-around',
		  },
		};
    return (<div>
	      <h2>Slider</h2>
	      <p><a href="https://www.google.com/design/spec/components/sliders.html">Slider</a>是用户输入范围内的值的界面。 滑块可以是连续的或离散的，并且可以被启用或禁用。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Simple Examples">
	        <PrintCode code={simpleExamplesCode} />
          <div className="show-examples">
	          <p>默认值属性设置滑块的初始位置。 当不在起始位置时，滑块外观会发生变化。</p>
	          <Slider />
				    <Slider defaultValue={0.5} />
				    <Slider defaultValue={1} />
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Disabled Examples">
	        <PrintCode code={disabledExamplesCode} />
          <div className="show-examples">
					  <Slider disabled={true} />
				    <Slider disabled={true} value={0.5} />
				    <Slider disabled={true} value={1} />
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Stepped Examples">
	        <PrintCode code={steppedExampleCode} />
          <div className="show-examples">
            <p>默认情况下，滑块是连续的。 step属性导致滑块以离散的增量移动。</p>
					  <Slider step={0.10} value={0.5} />
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Controlled Examples">
	        <PrintCode code={controlledExamplesCode} />
          <div className="show-examples">
            <p>滑块可以设置最小和最大值，并且可以通过onChange事件触发的值参数获取该值。</p>
					  <Slider value={this.state.firstSlider} onChange={this.handleFirstSlider} />
		        <p>
		          <span>{'The value of this slider is: '}</span>
		          <span>{this.state.firstSlider}</span>
		          <span>{' from a range of 0 to 1 inclusive'}</span>
		        </p>
		        <Slider
		          min={0}
		          max={100}
		          step={1}
		          value={this.state.secondSlider}
		          onChange={this.handleSecondSlider}
		        />
		        <p>
		          <span>{'The value of this slider is: '}</span>
		          <span>{this.state.secondSlider}</span>
		          <span>{' from a range of 0 to 100 inclusive'}</span>
		        </p>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Alternative Axis Examples">
	        <PrintCode code={alternativeAxisExamplesCode} />
          <div className="show-examples">
            <p>滑块的方向可以使用轴支撑反转和旋转。</p>
					  <div style={styles.root}>
					    <Slider style={{height: 100}} axis="y" defaultValue={0.5} />
					    <Slider style={{width: 200}} axis="x-reverse" />
					    <Slider style={{height: 100}} axis="y-reverse" defaultValue={1} />
					  </div>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Custom Scale">
	        <PrintCode code={customScaleCode} />
          <div className="show-examples">
            <p>你可能会发现自己需要一个自定义的比例。 以下是如何实现<a href="https://simple.wikipedia.org/wiki/Logarithmic_scale">对数刻度</a>。</p>
					  <Slider
		          min={min}
		          max={max}
		          step={max / 100}
		          value={reverse(this.state.slider)}
		          onChange={this.handleSlider}
		        />
		        <p>
		          <span>{'The value of this slider is: '}</span>
		          <span>{this.state.slider}</span>
		        </p>
	        </div>
	      </ContainerPreCode>
	      <h3>Properties</h3>
	      <PropertiesList items={propertiesData} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	     </div>);
  }
}

export default SliderPage;
