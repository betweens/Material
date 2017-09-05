import React from 'react';
const simpleExamplesCode = `import React from 'react';
import Slider from 'material-ui/Slider';

/**
 * The ·defaultValue· property sets the initial position of the slider.
 * The slider appearance changes when not at the starting position.
 */
const SliderExampleSimple = () => (
  <div>
    <Slider />
    <Slider defaultValue={0.5} />
    <Slider defaultValue={1} />
  </div>
);

export default SliderExampleSimple;`;
const disabledExamplesCode = `import React from 'react';
import Slider from 'material-ui/Slider';

const SliderExampleDisabled = () => (
  <div>
    <Slider disabled={true} />
    <Slider disabled={true} value={0.5} />
    <Slider disabled={true} value={1} />
  </div>
);

export default SliderExampleDisabled;`;
const steppedExampleCode = `import React from 'react';
import Slider from 'material-ui/Slider';

/**
 * By default, the slider is continuous.
 * The ·step· property causes the slider to move in discrete increments.
 */
const SliderExampleStep = () => (
  <Slider step={0.10} value={0.5} />
);

export default SliderExampleStep;`;
const controlledExamplesCode = `import React, {Component} from 'react';
import Slider from 'material-ui/Slider';

/**
 * The slider bar can have a set minimum and maximum, and the value can be
 * obtained through the value parameter fired on an onChange event.
 */
export default class SliderExampleControlled extends Component {
  state = {
    firstSlider: 0.5,
    secondSlider: 50,
  };

  handleFirstSlider = (event, value) => {
    this.setState({firstSlider: value});
  };

  handleSecondSlider = (event, value) => {
    this.setState({secondSlider: value});
  };

  render() {
    return (
      <div>
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
    );
  }
}`;
const alternativeAxisExamplesCode = `import React from 'react';
import Slider from 'material-ui/Slider';

const styles = {
  root: {
    display: 'flex',
    height: 124,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
};

/**
 * The orientation of the slider can be reversed and rotated using the ·axis· prop.
 */
const SliderExampleAxis = () => (
  <div style={styles.root}>
    <Slider style={{height: 100}} axis="y" defaultValue={0.5} />
    <Slider style={{width: 200}} axis="x-reverse" />
    <Slider style={{height: 100}} axis="y-reverse" defaultValue={1} />
  </div>
);

export default SliderExampleAxis;`;
const customScaleCode = `import React, {Component} from 'react';
import Slider from 'material-ui/Slider';

const min = 0;
const max = Math.pow(10, 6);
const power = 12;

function transform(value) {
  return Math.round((Math.exp(power * value / max) - 1) / (Math.exp(power) - 1) * max);
}

function reverse(value) {
  return (1 / power) * Math.log(((Math.exp(power) - 1) * value / max) + 1) * max;
}

/**
 * You may find yourself needing a custom scale.
 * Here is how you would implement a [logarithmic scale](https://simple.wikipedia.org/wiki/Logarithmic_scale).
 */
export default class SliderExampleCustomScale extends Component {
  state = {
    slider: Math.pow(10, 4),
  };

  handleSlider = (event, value) => {
    this.setState({slider: transform(value)});
  };

  render() {
    return (
      <div>
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
    );
  }
}`;
const propertiesData = {
      title: ['Name', 'Type', 'Default', 'Description'],
      body:[[
        'axis',
        "enum: 'x' 'x-reverse' 'y' 'y-reverse'",
        'x',
        '滑块滑动的轴。',
      ], [
        'defaultValue',
        'valueInRangePropType',
        '',
        '滑块的默认值。',
      ], [
        'disableFocusRipple',
        'bool',
        'false',
        '如果设置为true，则禁用焦点纹波。',
      ], [
        'disabled',
        'bool',
        'false',
        '如果为true，则滑块将不会互动。',
      ], [
        'max',
        'minMaxPropType',
        '1',
        '滑块可以从0到1的缩放比例滑动到最大值。 不能等于最小。',
      ], [
        'min',
        'minMaxPropType',
        '0',
        '滑块可以从0到1的缩放比例滑动到最小值。 不能等于最大',
      ], [
        'name',
        'string',
        '',
        '滑块的名称。 像输入元素的name属性一样。',
      ], [
        'onChange',
        'function',
        '',
        <div>当滑块的值更改时触发的回调函数。<br />
          Signature:<br />
          <span className="code">function(event: object, newValue: number) => void</span><br />
          event: KeyDown事件定位滑块。<br />
          newValue: 滑块的最新值。
        </div>,
      ], [
        'onDragStart',
        'function',
        '',
        <div>当滑块开始移动时触发的回调函数。<br />
          Signature:<br />
          <span className="code">function(event: object) => void</span><br />
          event: MouseDown or TouchStart event targeting the slider.
        </div>,
      ], [
        'onDragStop',
        'function',
        '',
        <div>当滑块停止移动时触发的回调函数。<br />
          Signature:<br />
          <span className="code">function(event: object) => void</span><br />
          event:  MouseEnd or TouchEnd event targeting the slider.
        </div>,
      ], [
        'required',
        'bool',
        'true',
        '滑块是否需要一种形式。',
      ], [
        'sliderStyle',
        'object',
        '',
        '覆盖内部滑块元素的内联样式。',
      ], [
        'step',
        'number',
        '0.01',
        '滑块可以逐步浏览值的颗粒度。',
      ], [
        'style',
        'object',
        '{}',
        '覆盖根元素的内联样式',
      ], [
        'value',
        'valueInRangePropType',
        '',
        '滑块的值。',
      ]]
    };
export {
  simpleExamplesCode,
  disabledExamplesCode,
  steppedExampleCode,
  controlledExamplesCode,
  alternativeAxisExamplesCode,
  customScaleCode,
  propertiesData,
}

 
 
 




