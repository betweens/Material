import React from 'react';
const SimpleExampleCode = `import React from 'react';
import IconButton from 'material-ui/IconButton';

const IconButtonExampleSimple = () => (
  <div>
    <IconButton iconClassName="muidocs-icon-custom-github" />
    <IconButton iconClassName="muidocs-icon-custom-github" disabled={true} />
  </div>
);

export default IconButtonExampleSimple;`;
const FurtherExamples = `import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const IconButtonExampleComplex = () => (
  <div>
    <IconButton tooltip="Font Icon">
      <FontIcon className="muidocs-icon-action-home" />
    </IconButton>

    <IconButton tooltip="SVG Icon">
      <ActionHome />
    </IconButton>

    <IconButton
      iconClassName="material-icons"
      tooltip="Ligature"
    >
      home
    </IconButton>
  </div>
);

export default IconButtonExampleComplex;`;
const sizeExamples = `iimport React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const styles = {
  smallIcon: {
    width: 36,
    height: 36,
  },
  mediumIcon: {
    width: 48,
    height: 48,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
};

const IconButtonExampleSize = () => (
  <div>
    <IconButton>
      <ActionHome />
    </IconButton>

    <IconButton
      iconStyle={styles.smallIcon}
      style={styles.small}
    >
      <ActionHome />
    </IconButton>

    <IconButton
      iconStyle={styles.mediumIcon}
      style={styles.medium}
    >
      <ActionHome />
    </IconButton>

    <IconButton
      iconStyle={styles.largeIcon}
      style={styles.large}
    >
      <ActionHome />
    </IconButton>
  </div>
);

export default IconButtonExampleSize;`;
const TooltipExamples = `import React from 'react';
import IconButton from 'material-ui/IconButton';

const IconButtonExampleTooltip = () => (
  <div>
    <IconButton
      iconClassName="muidocs-icon-custom-github" tooltip="bottom-right"
      tooltipPosition="bottom-right"
    />
    <IconButton
      iconClassName="muidocs-icon-custom-github" tooltip="bottom-center"
      tooltipPosition="bottom-center"
    />
    <IconButton
      iconClassName="muidocs-icon-custom-github" tooltip="bottom-left"
      tooltipPosition="bottom-left"
    />
    <IconButton
      iconClassName="muidocs-icon-custom-github" tooltip="top-right"
      tooltipPosition="top-right"
    />
    <IconButton
      iconClassName="muidocs-icon-custom-github" tooltip="top-center"
      tooltipPosition="top-center"
    />
    <IconButton
      iconClassName="muidocs-icon-custom-github" tooltip="top-left"
      tooltipPosition="top-left"
    />
  </div>
);

export default IconButtonExampleTooltip;`;
const TouchExample = `import React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';

const IconButtonExampleTouch = () => (
  <div>
    <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right">
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="bottom-center" touch={true} tooltipPosition="bottom-center">
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="bottom-left" touch={true} tooltipPosition="bottom-left">
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="top-right" touch={true} tooltipPosition="top-right">
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="top-center" touch={true} tooltipPosition="top-center">
      <ActionGrade />
    </IconButton>
    <IconButton tooltip="top-left" touch={true} tooltipPosition="top-left">
      <ActionGrade />
    </IconButton>
  </div>
);

export default IconButtonExampleTouch;`;
const propertiesData = {
      title: ['Name', 'Type', 'Default', 'Description'],
      body:[[
        'children',
        'node',
        '',
        '可以使用FontIcon元素作为按钮的图标。',
      ], [
        'className',
        'string',
        '',
        '根元素的CSS类名称。',
      ], [
        'disableTouchRipple',
        'bool',
        'false',
        '如果为true, 元素的纹波效应将被禁用。',
      ], [
        'disabled',
        'bool',
        'false',
        '如果为true, 元素将被禁用。',
      ], [
        'hoveredStyle',
        'object',
        '',
        '当组件被悬停时，覆盖根元素的内联样式。',
      ], [
        'href',
        'string',
        '',
        '当点击按钮时，跳转的链接',
      ], [
        'iconClassName',
        'string',
        '',
        '图标的CSS类名称。 用于设置带有样式表的图标。',
      ], [
        'iconStyle',
        'object',
        '{}',
        '覆盖图标元素的内联样式。 注意：您可以在此对象中将StringHoverColor指定为String。',
      ], [
        'onKeyboardFocus',
        'function',
        '() => {}',
        <div>当元素被键盘聚焦或失焦时，回调功能被触发。<br />
          Signature:<br />
          function(event: object, isKeyboardFocused: boolean) => void<br />
          event: 针对元素的聚焦或失焦时事件。<br />
          keyboardFocused: 指示元素是否聚焦。
        </div>,
      ], [
        'onTouchTap',
        'function',
        '() => {}',
        <div>当元素触碰按钮时触发回调功能。<br />
          Signature:<br />
          function(event: object) => void<br />
          event: TouchTap事件定位按钮。
        </div>,
      ], [
        'style',
        'object',
        '{}',
        '覆盖根元素的内联样式。',
      ], [
        'tooltip',
        'node',
        '',
        '要提供给元素工具提示的文本。',
      ], [
        'tooltipPosition',
        ' propTypes.cornersAndCenter',
        'bottom-center',
        '分别是元素工具提示的垂直和水平位置。可能的值是: "bottom-center", "top-center", "bottom-right", "top-right", "bottom-left", and "top-left".',
      ], [
        'tooltipStyles',
        'object',
        '',
        '覆盖工具提示元素的内联样式。',
      ], [
        'touch',
        'bool',
        'false',
        '如果为true，增加工具提示元素的大小。 有助于提高移动设备上的工具提示可读性。',
      ]]
    };
export {
  SimpleExampleCode,
  FurtherExamples,
  sizeExamples,
  TooltipExamples,
  TouchExample,
  propertiesData,
}
