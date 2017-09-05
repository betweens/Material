import React from 'react';
const examplesCode = `import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

const RadioButtonExampleSimple = () => (
  <div>
    <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
      <RadioButton
        value="light"
        label="Simple"
        style={styles.radioButton}
      />
      <RadioButton
        value="not_light"
        label="Selected by default"
        style={styles.radioButton}
      />
      <RadioButton
        value="ludicrous"
        label="Custom icon"
        checkedIcon={<ActionFavorite style={{color: '#F44336'}} />}
        uncheckedIcon={<ActionFavoriteBorder />}
        style={styles.radioButton}
      />
    </RadioButtonGroup>
    <RadioButtonGroup name="shipName" defaultSelected="community">
      <RadioButton
        value="enterprise"
        label="Disabled unchecked"
        disabled={true}
        style={styles.radioButton}
      />
      <RadioButton
        value="community"
        label="Disabled checked"
        disabled={true}
        style={styles.radioButton}
      />
    </RadioButtonGroup>
    <RadioButtonGroup name="notRight" labelPosition="left" style={styles.block}>
      <RadioButton
        value="reverse"
        label="Label on the left"
        style={styles.radioButton}
      />
    </RadioButtonGroup>
  </div>
);

export default RadioButtonExampleSimple;`;

const propertiesData1 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'checkedIcon',
    'element',
    '',
    '选中单选按钮时显示的图标元素。',
  ], [
    'disabled',
    'bool',
    'false',
    '如果为true，则单选按钮被禁用。',
  ], [
    'iconStyle',
    'object',
    '',
    '覆盖图标元素的内联样式。',
  ], [
    'inputStyle',
    'object',
    '',
    '覆盖输入元素的内联样式。',
  ], [
    'labelStyle',
    'object',
    '',
    '覆盖标签元素的内联样式。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ], [
    'uncheckedIcon',
    'element',
    '',
    '未选中单选按钮时显示的图标元素。',
  ], [
    'value',
    'any',
    '',
    '单选按钮的值。',
  ]]
};
const propertiesData2 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'checkedIcon',
    'element',
    '',
    '选中单选按钮时显示的图标元素。',
  ], [
    'className',
    'string',
    '',
    '根元素的CSS类名称。',
  ], [
    'defaultSelected',
    'any',
    '',
    '默认选择的单选按钮的value属性。 这取决于RadioButton元素检查的属性。',
  ], [
    'labelPosition',
    "enum: 'left' 'right'",
    '',
    '标签将放置在所有子元素单选按钮的位置。 这取决于RadioButton元素的labelPosition属性。',
  ], [
    'onChange',
    'function',
    '',
    <div>Callback function that is fired when a radio button has been checked.<br />
      Signature:<br />
      function(event: object, value: undefined) => void<br />
      event: change event targeting the selected radio button.<br />
      value: The value of the selected radio button. 
    </div>,
  ], [
    'name *',
    'string',
    '',
    'he name that will be applied to all child radio buttons.',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ], [
    'valueSelected',
    'any',
    '',
    ' The value of the currently selected radio button.',  
  ]]
};
export {
  examplesCode,
  propertiesData1,
  propertiesData2,
}
