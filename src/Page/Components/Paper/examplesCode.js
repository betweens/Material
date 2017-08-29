const simpleCode = `import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const PaperExampleSimple = () => (
  <div>
    <Paper style={style} zDepth={1} />
    <Paper style={style} zDepth={2} />
    <Paper style={style} zDepth={3} />
    <Paper style={style} zDepth={4} />
    <Paper style={style} zDepth={5} />
  </div>
);

export default PaperExampleSimple;`;
const nonRoundedCornersCode = `import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const PaperExampleRounded = () => (
  <div>
    <Paper style={style} zDepth={1} rounded={false} />
    <Paper style={style} zDepth={2} rounded={false} />
    <Paper style={style} zDepth={3} rounded={false} />
    <Paper style={style} zDepth={4} rounded={false} />
    <Paper style={style} zDepth={5} rounded={false} />
  </div>
);

export default PaperExampleRounded;`;
const circularPaperCode = `import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const PaperExampleCircle = () => (
  <div>
    <Paper style={style} zDepth={1} circle={true} />
    <Paper style={style} zDepth={2} circle={true} />
    <Paper style={style} zDepth={3} circle={true} />
    <Paper style={style} zDepth={4} circle={true} />
    <Paper style={style} zDepth={5} circle={true} />
  </div>
);

export default PaperExampleCircle;`;
const propertiesData = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'children',
    'node',
    '',
    '传入paper元素内部的节点',
  ], [
    'circle',
    'bool',
    'false',
    '设置为true以生成圆形纸容器。',
  ], [
    'rounded',
    'bool',
    'true',
    '默认情况下，纸张容器将具有边框半径。 将其设置为false可生成具有尖角的容器。',
  ], [
    'style',
    'object',
    'true',
    '覆盖根元素的内连样式',
  ], [
    'transitionEnabled',
    'object',
    'true',
    '设置为false以禁用Paper元素的CSS转换。',
  ], [
    'zDepth',
    'propTypes.zDepth',
    '1',
    '该数字表示Paper shadow的zDepth。',
  ]]
};
export {
  simpleCode,
  nonRoundedCornersCode,
  circularPaperCode,
  propertiesData,
}
