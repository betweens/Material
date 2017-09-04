const readyCode = `import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const RefreshIndicatorExampleSimple = () => (
  <div style={style.container}>
    <RefreshIndicator
      percentage={30}
      size={40}
      left={10}
      top={0}
      status="ready"
      style={style.refresh}
    />
    <RefreshIndicator
      percentage={60}
      size={50}
      left={65}
      top={0}
      status="ready"
      style={style.refresh}
    />
    <RefreshIndicator
      percentage={80}
      size={60}
      left={120}
      top={0}
      color="red"
      status="ready"
      style={style.refresh}
    />
    <RefreshIndicator
      percentage={100}
      size={70}
      left={175}
      top={0}
      color="red" // Overridden by percentage={100}
      status="ready"
      style={style.refresh}
    />
  </div>
);

export default RefreshIndicatorExampleSimple;`;
const loadingCode = `import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const RefreshIndicatorExampleLoading = () => (
  <div style={style.container}>
    <RefreshIndicator
      size={40}
      left={10}
      top={0}
      status="loading"
      style={style.refresh}
    />
    <RefreshIndicator
      size={50}
      left={70}
      top={0}
      loadingColor="#FF9800"
      status="loading"
      style={style.refresh}
    />
  </div>
);

export default RefreshIndicatorExampleLoading;`;
const propertiesData = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'color',
    'string',
    '',
    '当状态为“就绪”时，覆盖主题的指示符颜色，其百分比小于100。',
  ], [
    'left *',
    'number',
    '',
    '指示器的绝对左侧位置以像素为单位。',
  ], [
    'loadingColor',
    'string',
    '',
    '当状态为“加载”或百分比为100时，覆盖该指标的主题颜色。',
  ], [
    'percentage',
    'number',
    '0',
    '获取数据的确认进度。 最大值为100。',
  ], [
    'size',
    'number',
    '40',
    'Size in pixels.',
  ], [
    'status',
    "enum: 'ready' 'loading' 'hide'",
    'hide',
    '指示灯的显示状态。 如果状态为“就绪”，则指示灯将显示就绪状态箭头。 如果状态为“装载”，将显示装载进度指示。 如果状态为“隐藏”，则指示灯将被隐藏。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ], [
    'top *',
    'object',
    '',
    '指标的绝对顶部位置（以像素为单位）。',
  ]]
};
export {
	readyCode,
	loadingCode,
  propertiesData,
}
