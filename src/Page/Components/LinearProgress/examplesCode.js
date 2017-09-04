const indeterminateProgressCode = `import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const LinearProgressExampleSimple = () => (
  <LinearProgress mode="indeterminate" />
);

export default LinearProgressExampleSimple;`;
const determinateProgressCode = `import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

export default class LinearProgressExampleDeterminate extends React.Component {

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
      <LinearProgress mode="determinate" value={this.state.completed} />
    );
  }
}`;
const propertiesData = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'color',
    'string',
    '',
    'The color of the progress bar, defaults to primary color of theme.',
  ], [
    'max',
    'number',
    '100',
    'The max value of progress, only works in determinate mode.',
  ], [
    'min',
    'number',
    '0',
    'The min value of progress, only works in determinate mode.',
  ], [
    'mode',
    "enum: 'determinate' 'indeterminate' 'indeterminate'",
    'indeterminate',
    'The mode of show your progress, indeterminate for when there is no value for progress.',
  ], [
    'style',
    'object',
    'indeterminate',
    'Override the inline-styles of the root element.',
  ], [
    'value',
    'number',
    '0',
    'The value of progress, only works in determinate mode.',
  ]]
};
export {
	indeterminateProgressCode,
	determinateProgressCode,
  propertiesData,
}
