import React from 'react';
const examplesCode = `import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class CheckboxExampleSimple extends React.Component {
  state = {
    checked: false,
  }

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  render() {
    return (
      <div style={styles.block}>
        <Checkbox
          label="Simple"
          style={styles.checkbox}
        />
        <Checkbox
          label="Simple with controlled value"
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          style={styles.checkbox}
        />
        <Checkbox
          checkedIcon={<ActionFavorite />}
          uncheckedIcon={<ActionFavoriteBorder />}
          label="Custom icon"
          style={styles.checkbox}
        />
        <Checkbox
          checkedIcon={<Visibility />}
          uncheckedIcon={<VisibilityOff />}
          label="Custom icon of different shapes"
          style={styles.checkbox}
        />
        <Checkbox
          label="Disabled unchecked"
          disabled={true}
          style={styles.checkbox}
        />
        <Checkbox
          label="Disabled checked"
          checked={true}
          disabled={true}
          style={styles.checkbox}
        />
        <Checkbox
          label="Label on the left"
          labelPosition="left"
          style={styles.checkbox}
        />
      </div>
    );
  }
}

export default CheckboxExampleSimple;`;

const propertiesData = {
      title: ['Name', 'Type', 'Default', 'Description'],
      body:[[
        'checked',
        'bool',
        '',
        'Checkbox是否选中',
      ], [
        'checkedIcon',
        'element',
        '',
        'SvgIcon用于检查状态。 这有助于创建图标切换。',
      ], [
        'defaultChecked',
        'bool',
        '',
        '我们的复选框组件的默认状态。 警告：这不能与检查结合使用。 决定使用受控或不受控制的输入元素，并移除其中一个道具。 更多信息：https://fb.me/react-controlled-components',
      ], [
        'disabled',
        'bool',
        'false',
        'Disabled if true.',
      ], [
        'iconStyle',
        'Object',
        '',
        '覆盖图标元素的内联样式。',
      ], [
        'inputStyle',
        'Object',
        '',
        '覆盖输入元素的内联样式。',
      ], [
        'labelPosition',
        "enum: 'left' 'right'",
        'right',
        '标签将放置在复选框旁边。',
      ], [
        'labelStyle',
        'object',
        '',
        '覆盖Checkbox元素标签的内联样式。',
      ], [
        'onCheck',
        'function',
        '',
        <div>勾选复选框时触发的回调函数。<br />

          Signature:<br />
          <span className="code">function(event: object, isInputChecked: boolean) => void</span><br />
          event: change event targeting the underlying checkbox input.<br />
          isInputChecked: The checked value of the underlying checkbox input.
        </div>,
      ], [
        'style',
        'object',
        '',
        '覆盖根元素的内联样式。',
      ], [
        'uncheckedIcon',
        'element',
        '',
        'SvgIcon用于未经检查的状态。 这有助于创建图标切换。',
      ], [
        'valueLink',
        'object',
        '',
        'ValueLink在使用受控复选框时。',
      ]]
    };
export {
  examplesCode,
  propertiesData,
}
