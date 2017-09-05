import React from 'react';
const examplesCode = `import React from 'react';
import Toggle from 'material-ui/Toggle';

const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },
  labelStyle: {
    color: 'red',
  },
};

const ToggleExampleSimple = () => (
  <div style={styles.block}>
    <Toggle
      label="Simple"
      style={styles.toggle}
    />
    <Toggle
      label="Toggled by default"
      defaultToggled={true}
      style={styles.toggle}
    />
    <Toggle
      label="Disabled"
      disabled={true}
      style={styles.toggle}
    />
    <Toggle
      label="Label on the right"
      labelPosition="right"
      style={styles.toggle}
    />
    <Toggle
      label="Styling"
      thumbStyle={styles.thumbOff}
      trackStyle={styles.trackOff}
      thumbSwitchedStyle={styles.thumbSwitched}
      trackSwitchedStyle={styles.trackSwitched}
      labelStyle={styles.labelStyle}
    />
  </div>
);

export default ToggleExampleSimple;`;
const propertiesData = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'defaultToggled',
    'bool',
    'false',
    '确定Toggle最初是否打开。 警告：这不能与切换结合使用。 决定使用受控或不受控制的输入元素，并移除其中一个道具。 更多信息：https：//fb.me/react-controlled-components',
  ], [
    'disabled',
    'bool',
    'false',
    '如果为true，将禁用toggle。',
  ], [
    'elementStyle',
    'object',
    '',
    '覆盖Toggle元素的内联样式。',
  ], [
    'iconStyle',
    'object',
    '',
    '覆盖Icon元素的内联样式。',
  ], [
    'inputStyle',
    'object',
    '',
    '覆盖输入元素的内联样式。',
  ], [
    'label',
    'node',
    '',
    '标签用于切换。',
  ], [
    'labelPosition',
    "enum: 'left' 'right'",
    'left',
    '标签将放置在切换旁边。',
  ], [
    'labelStyle',
    'object',
    '',
    '覆盖Toggle元素标签的内联样式。',
  ], [
    'onToggle',
    'function',
    '',
    <div>当切换开关切换时触发的回调功能。<br />
      Signature:<br />
      function(event: object, isInputChecked: bool) => void<br />
      event: Change event targeting the toggle.<br />
      isInputChecked: The new value of the toggle.
    </div>,
  ], [
    'rippleStyle',
    'object',
    '',
    '颠覆风格的波纹。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ], [
    'thumbStyle',
    'object',
    '',
    '代替缩略图。',
  ], [
    'thumbSwitchedStyle',
    'object',
    '',
    '覆盖缩略图的内联样式。',
  ], [
    'toggled',
    'bool',
    '',
    '如果设置为true，则切换。',
  ], [
    'trackStyle',
    'object',
    '',
    'Override style for track.',
  ], [
    'trackSwitchedStyle',
    'object',
    '',
    'Override the inline styles for track when the toggle switch is toggled on.',
  ], [
    'valueLink',
    'object',
    '',
    'ValueLink prop for when using controlled toggle.',
  ]]
};
export {
  examplesCode,
  propertiesData,
}
