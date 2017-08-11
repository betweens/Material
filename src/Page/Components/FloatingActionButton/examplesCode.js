import React from 'react';
const examplesCode = `import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginRight: 20,
};

/**
 * Default size and ｀mini｀ FABs, in primary (default), ｀secondary｀ and ｀disabled｀ colors.
 */
const FloatingActionButtonExampleSimple = () => (
  <div>
    <FloatingActionButton style={style}>
      <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton mini={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton secondary={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton mini={true} secondary={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton disabled={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton mini={true} disabled={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
  </div>
);

export default FloatingActionButtonExampleSimple;`;
const propertiesData = {
      title: ['Name', 'Type', 'Default', 'Description'],
      body:[[
        'backgroundColor',
        'string',
        '',
        '当鼠标悬停在其上时，按钮的颜色。',
      ], [
        'children',
        'node',
        '',
        '这是按钮内将显示的内容。 如果指定了标签，将显示标签内的文字。 否则，组件将期望将显示的子元素。 （在我们的示例中，我们正在嵌套一个<input type =“file”/>和作为我们的标签显示的跨度。）这仅适用于平面和凸起的按钮。',
      ], [
        'className',
        'string',
        '',
        '根元素的CSS类名称。',
      ], [
        'containerElement',
        'union: string element',
        '',
        '用作FlatButton的容器的元素。 使用DOM元素或ReactElement的字符串。 这对于将FlatButton包装在自定义链接组件中很有用。 如果给出了一个ReactElement，请确保它将所有给定的props传递到基础的DOM元素，并使其子进程正确集成。',
      ], [
        'disableTouchRipple',
        'bool',
        'false',
        '如果为true，则元素的纹波效果将被禁用。',
      ], [
        'disabled',
        'bool',
        'false',
        '如果为true，该按钮将被禁用。',
      ], [
        'fullWidth',
        'bool',
        'false',
        '如果为true, 该按钮将占据其容器的全部宽度。',
      ], [
        'hoverColor',
        'string',
        '',
        '鼠标悬停时按钮的颜色。',
      ], [
        'href',
        'string',
        '',
        '当按钮被点击时要链接的URL',
      ], [
        'icon',
        'string',
        '',
        '使用此属性显示图标。',
      ], [
        'label',
        'validateLabel',
        '',
        '标签的按钮。',
      ], [
        'label',
        "enum: 'before' 'after' 'after'",
        '',
        '在通过的子元素之前或之后放置标签。',
      ], [
        'labelStyle',
        'object',
        '{}',
        '覆盖按钮的标签元素的内联样式。',
      ], [
        'onKeyboardFocus',
        'function',
        '() => {}',
        <div>当元素被键盘聚焦或失焦时，回调功能被触发。<br />
          Signature:<br />
          function(event: object, isKeyboardFocused: boolean) => void<br />
          event: 针对元素的聚焦或失焦时事件。<br />
          isKeyboardFocused: 指示元素是否聚焦。
        </div>,
      ], [
        'onTouchTap',
        'function',
        '() => {}',
        <div>触摸按钮时触发回调功能。<br />
          Signature:<br />
          function(event: object) => void<br />
          event: TouchTap事件定位按钮。
        </div>,
      ], [
        'primary',
        'bool',
        'false',
        '如果为true，则颜色按照主题的primaryTextColor按钮。',
      ], [
        'rippleColor',
        'string',
        'false',
        '单击按钮后，纹波的颜色。',
      ], [
        'secondary',
        'string',
        'false',
        '如果是true，颜色按钮按照secondaryTextColor从主题。 The primary prop has precendent if set to true.',
      ], [
        'style',
        'object',    
        '', 
        '覆盖根元素的内联样式。'
      ]]
    };
export {
  examplesCode,
  propertiesData,
}
