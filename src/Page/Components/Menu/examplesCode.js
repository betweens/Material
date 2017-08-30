import React from 'react';
const simpleExamplesCode= `import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

const MenuExampleSimple = () => (
  <div>
    <Paper style={style}>
      <Menu>
        <MenuItem primaryText="Maps" />
        <MenuItem primaryText="Books" />
        <MenuItem primaryText="Flights" />
        <MenuItem primaryText="Apps" />
      </Menu>
    </Paper>
    <Paper style={style}>
      <Menu>
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help &amp; feedback" />
        <MenuItem primaryText="Settings" />
        <MenuItem primaryText="Sign out" />
      </Menu>
    </Paper>
  </div>
);

export default MenuExampleSimple;`;
const disabledItemsCode = `import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

const MenuExampleDisable = () => (
  <div>
    <Paper style={style}>
      <Menu desktop={true}>
        <MenuItem primaryText="Back" />
        <MenuItem primaryText="Forward" disabled={true} />
        <Divider />
        <MenuItem primaryText="Recently closed" disabled={true} />
        <MenuItem primaryText="Google" disabled={true} />
        <MenuItem primaryText="YouTube" />
      </Menu>
    </Paper>
    <Paper style={style}>
      <Menu desktop={true}>
        <MenuItem primaryText="Undo" />
        <MenuItem primaryText="Redo" disabled={true} />
        <Divider />
        <MenuItem primaryText="Cut" disabled={true} />
        <MenuItem primaryText="Copy" disabled={true} />
        <MenuItem primaryText="Paste" />
      </Menu>
    </Paper>
  </div>
);

export default MenuExampleDisable;`;
const iconsCode = `import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

const MenuExampleIcons = () => (
  <div>
    <Paper style={style.paper}>
      <Menu>
        <MenuItem primaryText="Preview" leftIcon={<RemoveRedEye />} />
        <MenuItem primaryText="Share" leftIcon={<PersonAdd />} />
        <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />
        <Divider />
        <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
        <MenuItem primaryText="Download" leftIcon={<Download />} />
        <Divider />
        <MenuItem primaryText="Remove" leftIcon={<Delete />} />
      </Menu>
    </Paper>
    <Paper style={style.paper}>
      <Menu>
        <MenuItem primaryText="Clear Config" />
        <MenuItem primaryText="New Config" rightIcon={<PersonAdd />} />
        <MenuItem primaryText="Project" rightIcon={<FontIcon className="material-icons">settings</FontIcon>} />
        <MenuItem
          primaryText="Workspace"
          rightIcon={
            <FontIcon className="material-icons" style={{color: '#559'}}>settings</FontIcon>
          }
        />
        <MenuItem primaryText="Paragraph" rightIcon={<b style={style.rightIcon}>¶</b>} />
        <MenuItem primaryText="Section" rightIcon={<b style={style.rightIcon}>§</b>} />
      </Menu>
    </Paper>
  </div>
);

export default MenuExampleIcons;`;
const secondaryTextCode = `import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

const style = {
  display: 'inline-block',
  float: 'left',
  margin: '16px 32px 16px 0',
};

const MenuExampleSecondary = () => (
  <div>
    <Paper style={style}>
      <Menu desktop={true} width={256}>
        <MenuItem primaryText="Bold" secondaryText="&#8984;B" />
        <MenuItem primaryText="Italic" secondaryText="&#8984;I" />
        <MenuItem primaryText="Underline" secondaryText="&#8984;U" />
        <MenuItem primaryText="Strikethrough" secondaryText="Alt+Shift+5" />
        <MenuItem primaryText="Superscript" secondaryText="&#8984;." />
        <MenuItem primaryText="Subscript" secondaryText="&#8984;," />
        <Divider />
        <MenuItem primaryText="Paragraph styles" rightIcon={<ArrowDropRight />} />
        <MenuItem primaryText="Align" rightIcon={<ArrowDropRight />} />
        <MenuItem primaryText="Line spacing" rightIcon={<ArrowDropRight />} />
        <MenuItem primaryText="Numbered list" rightIcon={<ArrowDropRight />} />
        <MenuItem primaryText="List options" rightIcon={<ArrowDropRight />} />
        <Divider />
        <MenuItem primaryText="Clear formatting" secondaryText="&#8984;/" />
      </Menu>
    </Paper>
    <Paper style={style}>
      <Menu desktop={true} width={256}>
        <MenuItem primaryText="Open" secondaryText="Cmd + O" />
        <MenuItem primaryText="Paste in place" secondaryText="Shift + V" />
        <MenuItem primaryText="Research" secondaryText="Opt + Shift + Cmd + I" />
      </Menu>
    </Paper>
    <Paper style={style}>
      <Menu desktop={true} width={256}>
        <MenuItem primaryText="Open" secondaryText="&#8984;O" />
        <MenuItem primaryText="Paste in place" secondaryText="&#8679;&#8984;V" />
        <MenuItem primaryText="Research" secondaryText="&#8997;&#8679;&#8984;I" />
      </Menu>
    </Paper>
  </div>
);

export default MenuExampleSecondary;`;
const nestedMenusCode = `import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

const MenuExampleNested = () => (
  <div>
    <Paper style={style}>
      <Menu desktop={true} width={320}>
        <MenuItem primaryText="Single" insetChildren={true} />
        <MenuItem primaryText="1.15" insetChildren={true} />
        <MenuItem primaryText="Double" insetChildren={true} />
        <MenuItem
          primaryText="Custom: 1.2"
          checked={true}
          rightIcon={<ArrowDropRight />}
          menuItems={[
            <MenuItem
              primaryText="Show"
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <MenuItem primaryText="Show Level 2" />,
                <MenuItem primaryText="Grid lines" checked={true} />,
                <MenuItem primaryText="Page breaks" insetChildren={true} />,
                <MenuItem primaryText="Rules" checked={true} />,
              ]}
            />,
            <MenuItem primaryText="Grid lines" checked={true} />,
            <MenuItem primaryText="Page breaks" insetChildren={true} />,
            <MenuItem primaryText="Rules" checked={true} />,
          ]}
        />
        <Divider />
        <MenuItem primaryText="Add space before paragraph" />
        <MenuItem primaryText="Add space after paragraph" />
        <Divider />
        <MenuItem primaryText="Custom spacing..." />
      </Menu>
    </Paper>
  </div>
);

export default MenuExampleNested;`;

const propertiesData1 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'autoWidth',
    'bool',
    'true',
    '如果为true，菜单的宽度将根据其孩子的宽度自动设置，使用适当的keyline增量（桌面为64px，否则为56px）。',
  ], [
    'children',
    'node',
    '',
    '菜单的内容。 这通常用于传递MenuItem元素。',
  ], [
    'desktop',
    'bool',
    'false',
    '如果true，菜单项将使用紧凑的桌面样式呈现。',
  ], [
    'disableAutoFocus',
    'bool',
    'false',
    '如果为true，菜单将不会自动获取焦点。',
  ], [
    'initiallyKeyboardFocused',
    'bool',
    'false',
    'If true, the menu will be keyboard-focused initially.',
  ], [
    'listStyle',
    'object',
    '',
    '覆盖基础List元素的内联样式。',
  ], [
    'maxHeight',
    'number',
    'null',
    '菜单的最大高度（以像素为单位） 如果指定，菜单将是可滚动的，如果它比所提供的高度高。',
  ], [
    'menuItemStyle',
    'object',
    '',
    '覆盖menu-items的内联样式。',
  ], [
    'multiple',
    'bool',
    'false',
    '如果为true，则值必须为数组，菜单将支持多个选择。',
  ], [
    'multiple',
    'bool',
    'false',
    '如果为true，则值必须为数组，菜单将支持多个选择。',
  ], [
    'onChange',
    'function',
    '() => {}',
    <div>当菜单项的值不等于菜单的当前值时，回调函数触发。<br />
      Signature:<br />
      function(event: object, value: any) => void<br />
      event: TouchTap事件定位的菜单项。<br />
      value: 如果multiple为true，则菜单值数组将添加菜单项的值（如果尚未选择）或省略（如果已经选择）。 否则，菜单项的值。
    </div>,
  ], [
    'onEscKeyDown',
    'function',
    '() => {}',
    <div>当menu被focused并按下Esc键时，回调函数被触发。<br />
      Signature:<br />
      function(event: object) => void<br />
      event: keydown event targeting the menu.
    </div>,
  ], [
    'onItemTouchTap',
    'function',
    '() => {}',
    <div>当菜单项被touch-tapped时，回调功能被触发。<br />
      Signature:<br />
      function(event: object, menuItem: object, index: number) => void<br />
      event: TouchTap event targeting the menu item.<br />
      menuItem: The menu item.<br />
      index: The index of the menu item.
    </div>,
  ], [
    'onMenuItemFocusChange',
    'function',
    '() => {}',
    <div>当对MenuItem的焦点改变时，回调函数被触发。 如果两个不同的聚焦事件发生，将会出现一些“重复”更改，例如，如果MenuItem通过键盘聚焦，然后点击它。<br />
      Signature:<br />
      function(event: object, newFocusIndex: number) => void<br />
      event:  引发焦点变化的事件。 事件可以为null，因为焦点可以因非事件原因（例如prop更改）而改变。<br />
      newFocusIndex: 新聚焦的MenuItem的索引，如果焦点丢失，则为-1。
    </div>,
  ], [
    'selectedMenuItemStyle',
    'object',
    '',
    '覆盖所选菜单项的内联样式。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ], [
    'value',
    'any',
    '',
    '如果multiple为真，则选择菜单项的值的数组。 否则，选择菜单项的值。 如果提供，菜单将是受控组件。 该组件还支持valueLink。',
  ], [
    'valueLink',
    'object',
    '',
    "ValueLink for the menu's value.",
  ], [
    'width',
    'propTypes.stringOrNumber ',
    '',
    '菜单的宽度。 如果没有指定，菜单宽度将根据其孩子的宽度进行设置，使用适当的keyline增量（桌面为64px，否则为56px）。',
  ]]
};
const propertiesData2 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'anchorOrigin',
    'propTypes.origin',
    "{horizontal: 'right', vertical: 'top'} ",
    '嵌套MenuItem元素的弹出窗口的锚点位置。 选项：horizontal：[left，middle，right] vertical：[top，center，bottom]。',
  ], [
    'animation',
    'function',
    '',
    '覆盖所使用的默认动画组件。',
  ], [
    'checked',
    'bool',
    'false',
    '如果true，将显示一个左侧的复选框标记。',
  ], [
    'children',
    'node',
    '',
    '元素作为自子元素传递到底层的ListItem。',
  ], [
    'disabled',
    'bool',
    'false',
    '如果为true，菜单项将被禁用。',
  ], [
    'focusState',
    "enum: 'none' 'focused' 'keyboard-focused'",
    'none',
    '菜单项的焦点状态。 此prop用于设置底层ListItem的焦点状态。',
  ], [
    'innerDivStyle',
    'object',
    '',
    '覆盖内部div的内联样式。',
  ], [
    'insetChildren',
    'bool',
    'false',
    '如果true，children将缩进。 这只有当没有leftIcon时才需要。',
  ], [
    'leftIcon',
    'element',
    '',
    'SvgIcon或FontIcon将显示在左侧。',
  ], [
    'menuItems',
    'node',
    '',
    'MenuItem元素嵌套在菜单项中。',
  ], [
    'onClick',
    'function',
    '',
    <div>当菜单项被touch-tapped时，回调功能被触发。<br />
      Signature:<br />
      function(event: object) => void<br />
      event: TouchTap event targeting the menu item.
    </div>,
  ], [
    'primaryText',
    'node',
    '',
    '可用于在菜单项中呈现主文本。',
  ], [
    'rightIcon',
    'element',
    '',
    'SvgIcon或FontIcon将显示在右侧。',
  ], [
    'secondaryText',
    'node',
    '',
    '可用于在菜单项中呈现次要文字。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ], [
    'targetOrigin',
    'propTypes.origin',
    "{horizontal: 'left', vertical: 'top'}",
    '位于弹出窗口的嵌套的MenuItem元素将附加到锚的原点。 选项：horizontal：[left，middle，right] vertical：[top，center，bottom]。'
  ], [
    'value',
    'any',
    '',
    '菜单项的值。',
  ]]
}

export {
  simpleExamplesCode,
  disabledItemsCode,
  iconsCode,
  secondaryTextCode,
  nestedMenusCode,
  propertiesData1,
  propertiesData2,
}
