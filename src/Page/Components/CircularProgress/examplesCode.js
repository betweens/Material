const indeterminateProgressCode = `import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const CircularProgressExampleSimple = () => (
  <div>
    <CircularProgress />
    <CircularProgress size={60} thickness={7} />
    <CircularProgress size={80} thickness={5} />
  </div>
);

export default CircularProgressExampleSimple;`;
const determinateProgressCode = `import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

export default class CircularProgressExampleDeterminate extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

  render() {
    return (
      <div>
        <CircularProgress
          mode="determinate"
          value={this.state.completed}
        />
        <CircularProgress
          mode="determinate"
          value={this.state.completed}
          size={60}
          thickness={7}
        />
        <CircularProgress
          mode="determinate"
          value={this.state.completed}
          size={80}
          thickness={5}
        />
      </div>
    );
  }
}`;
const propertiesData = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'color',
    'string',
    '',
    "覆盖progress's的颜色。",
  ], [
    'innerStyle',
    'object',
    '',
    "内包裹div的样式",
  ], [
    'max',
    'number',
    '100',
    "progress的最大值仅适用于确定模式。",
  ], [
    'min',
    'number',
    '0',
    "progress的最小值仅在确定模式下工作。",
  ], [
    'mode',
    "enum: 'determinate' 'indeterminate'",
    'determinate',
    "显示您的进度的模式，不确定何时没有进展的价值。",
  ], [
    'size',
    'number',
    'determinate',
    "progress的直径（以像素为单位）。",
  ], [
    'style',
    'object',
    '',
    "覆盖根元素的内联样式。",
  ], [
    'thickness',
    'number',
    '3.5',
    "笔画宽度（以像素为单位）",
  ], [
    'value',
    'number',
    '0',
    "进度值只能在确定模式下工作。",
  ]]
};
export {
  indeterminateProgressCode,
  determinateProgressCode,
  propertiesData,
}
