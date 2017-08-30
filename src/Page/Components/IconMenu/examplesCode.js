import React from 'react';
const iconMenuPositioningCode = `import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

/**
 * Simple Icon Menus demonstrating some of the layouts possible using the ·anchorOrigin·
 * ·targetOrigin· properties.
 */
const IconMenuExampleSimple = () => (
  <div>
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Send feedback" />
      <MenuItem primaryText="Settings" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
    >
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Send feedback" />
      <MenuItem primaryText="Settings" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
    >
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Send feedback" />
      <MenuItem primaryText="Settings" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Send feedback" />
      <MenuItem primaryText="Settings" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>
  </div>
);

export default IconMenuExampleSimple;`;
const controlledIconMenusCode = `import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';

/**
 * Three controlled examples, the first allowing a single selection, the second multiple selections,
 * the third using internal state.
 */
export default class IconMenuExampleControlled extends Component {
  state = {
    valueSingle: '3',
    valueMultiple: ['3', '5'],
  };

  handleChangeSingle = (event, value) => {
    this.setState({
      valueSingle: value,
    });
  };

  handleChangeMultiple = (event, value) => {
    this.setState({
      valueMultiple: value,
    });
  };

  handleOpenMenu = () => {
    this.setState({
      openMenu: true,
    });
  }

  handleOnRequestChange = (value) => {
    this.setState({
      openMenu: value,
    });
  }

  render() {
    return (
      <div>
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          onChange={this.handleChangeSingle}
          value={this.state.valueSingle}
        >
          <MenuItem value="1" primaryText="Refresh" />
          <MenuItem value="2" primaryText="Send feedback" />
          <MenuItem value="3" primaryText="Settings" />
          <MenuItem value="4" primaryText="Help" />
          <MenuItem value="5" primaryText="Sign out" />
        </IconMenu>
        <IconMenu
          iconButtonElement={<IconButton><ContentFilter /></IconButton>}
          onChange={this.handleChangeMultiple}
          value={this.state.valueMultiple}
          multiple={true}
        >
          <MenuItem value="1" primaryText="Blu-ray" />
          <MenuItem value="2" primaryText="Cassette" />
          <MenuItem value="3" primaryText="CD" />
          <MenuItem value="4" primaryText="DVD Audio" />
          <MenuItem value="5" primaryText="Hybrid SACD" />
          <MenuItem value="6" primaryText="Vinyl" />
        </IconMenu>
        <IconMenu
          iconButtonElement={<IconButton><FileFileDownload /></IconButton>}
          open={this.state.openMenu}
          onRequestChange={this.handleOnRequestChange}
        >
          <MenuItem value="1" primaryText="Windows App" />
          <MenuItem value="2" primaryText="Mac App" />
          <MenuItem value="3" primaryText="Android App" />
          <MenuItem value="4" primaryText="iOS App" />
        </IconMenu>
        <RaisedButton onClick={this.handleOpenMenu} label="Downloads" />
      </div>
    );
  }
}`;
const scrollableIconMenuCode = `import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MapsPlace from 'material-ui/svg-icons/maps/place';

/**
 * The ·maxHeight· property limits the height of the menu, above which it will be scrollable.
 */
const IconMenuExampleScrollable = () => (
  <IconMenu
    iconButtonElement={<IconButton><MapsPlace /></IconButton>}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
    maxHeight={272}
  >
    <MenuItem value="AL" primaryText="Alabama" />
    <MenuItem value="AK" primaryText="Alaska" />
    <MenuItem value="AZ" primaryText="Arizona" />
    <MenuItem value="AR" primaryText="Arkansas" />
    <MenuItem value="CA" primaryText="California" />
    <MenuItem value="CO" primaryText="Colorado" />
    <MenuItem value="CT" primaryText="Connecticut" />
    <MenuItem value="DE" primaryText="Delaware" />
    <MenuItem value="DC" primaryText="District Of Columbia" />
    <MenuItem value="FL" primaryText="Florida" />
    <MenuItem value="GA" primaryText="Georgia" />
    <MenuItem value="HI" primaryText="Hawaii" />
    <MenuItem value="ID" primaryText="Idaho" />
    <MenuItem value="IL" primaryText="Illinois" />
    <MenuItem value="IN" primaryText="Indiana" />
    <MenuItem value="IA" primaryText="Iowa" />
    <MenuItem value="KS" primaryText="Kansas" />
    <MenuItem value="KY" primaryText="Kentucky" />
    <MenuItem value="LA" primaryText="Louisiana" />
    <MenuItem value="ME" primaryText="Maine" />
    <MenuItem value="MD" primaryText="Maryland" />
    <MenuItem value="MA" primaryText="Massachusetts" />
    <MenuItem value="MI" primaryText="Michigan" />
    <MenuItem value="MN" primaryText="Minnesota" />
    <MenuItem value="MS" primaryText="Mississippi" />
    <MenuItem value="MO" primaryText="Missouri" />
    <MenuItem value="MT" primaryText="Montana" />
    <MenuItem value="NE" primaryText="Nebraska" />
    <MenuItem value="NV" primaryText="Nevada" />
    <MenuItem value="NH" primaryText="New Hampshire" />
    <MenuItem value="NJ" primaryText="New Jersey" />
    <MenuItem value="NM" primaryText="New Mexico" />
    <MenuItem value="NY" primaryText="New York" />
    <MenuItem value="NC" primaryText="North Carolina" />
    <MenuItem value="ND" primaryText="North Dakota" />
    <MenuItem value="OH" primaryText="Ohio" />
    <MenuItem value="OK" primaryText="Oklahoma" />
    <MenuItem value="OR" primaryText="Oregon" />
    <MenuItem value="PA" primaryText="Pennsylvania" />
    <MenuItem value="RI" primaryText="Rhode Island" />
    <MenuItem value="SC" primaryText="South Carolina" />
    <MenuItem value="SD" primaryText="South Dakota" />
    <MenuItem value="TN" primaryText="Tennessee" />
    <MenuItem value="TX" primaryText="Texas" />
    <MenuItem value="UT" primaryText="Utah" />
    <MenuItem value="VT" primaryText="Vermont" />
    <MenuItem value="VA" primaryText="Virginia" />
    <MenuItem value="WA" primaryText="Washington" />
    <MenuItem value="WV" primaryText="West Virginia" />
    <MenuItem value="WI" primaryText="Wisconsin" />
    <MenuItem value="WY" primaryText="Wyoming" />
  </IconMenu>
);

export default IconMenuExampleScrollable;`;
const nestedIconMenusCode = `import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Download from 'material-ui/svg-icons/file/file-download';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

/**
 * Example of nested menus within an IconMenu.
 */
const IconMenuExampleNested = () => (
  <IconMenu
    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
  >
    <MenuItem
      primaryText="Copy & Paste"
      rightIcon={<ArrowDropRight />}
      menuItems={[
        <MenuItem primaryText="Cut" />,
        <MenuItem primaryText="Copy" />,
        <Divider />,
        <MenuItem primaryText="Paste" />,
      ]}
    />

    <MenuItem
      primaryText="Case Tools"
      rightIcon={<ArrowDropRight />}
      menuItems={[
        <MenuItem primaryText="UPPERCASE" />,
        <MenuItem primaryText="lowercase" />,
        <MenuItem primaryText="CamelCase" />,
        <MenuItem primaryText="Propercase" />,
      ]}
    />
    <Divider />
    <MenuItem primaryText="Download" leftIcon={<Download />} />
    <Divider />
    <MenuItem value="Del" primaryText="Delete" />

  </IconMenu>
);

export default IconMenuExampleNested;`;
const propertiesData = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'anchorOrigin',
    'propTypes.origin',
    "{ vertical: 'top', horizontal: 'left',}",
    '这是菜单targetOrigin将附加的图标上的一点。 选项：vertical：[top，center，bottom] horizontal：[left，middle，right]。',
  ], [
    'animated',
    'bool',
    'true',
    '如果为true，Popover将被添加到DOM时应用转换。',
  ], [
    'animation',
    'function',
    'true',
    '覆盖所使用的默认动画组件。',
  ], [
    'children',
    'node',
    '',
    '应该用来传递MenuItem组件',
  ], [
    'className',
    'string',
    '',
    '根元素的CSS类名称。',
  ], [
    'iconButtonElement *',
    'element',
    '',
    '这是要渲染的IconButton。 此按钮将打开菜单。',
  ], [
    'iconStyle',
    'object',
    '',
    '覆盖底层图标元素的内联样式。',
  ], [
    'listStyle',
    'object',
    '',
    '覆盖基础List元素的内联样式',
  ], [
    'menuStyle',
    'object',
    '',
    '覆盖menu元素的内联样式。',
  ], [
    'multiple',
    'bool',
    'true',
    '如果为true，则该值可以是数组，并允许菜单为多选。',
  ], [
    'onClick',
    'function',
    ' () => {}',
    <div>当IconButton元素被触摸点击时，回调函数触发。<br />

      Signature:<br />
      function(event: object) => void<br />
      event: TouchTap event targeting the IconButton element.
    </div>,
  ], [
    'onItemTouchTap',
    'function',
    ' () => {}',
    <div>当通过触摸点击选择菜单项时，回调功能被触发。<br />

      Signature:<br />
      <span className="code">function(event: object, child: object) => void</span><br />
      event: TouchTap event targeting the selected menu item element.
      child: The selected element.
    </div>,
  ], [
    'onKeyboardFocus',
    'function',
    ' () => {}',
    <div>当IconButton元素被键盘聚焦或失去焦点时，回调函数触发。<br />

      Signature:<br />
      <span className="code">function(event: object, keyboardFocused: boolean) => void</span><br />
      event: focus or blur event targeting the IconButton element.<br />
      keyboardFocused: If true, the IconButton element is focused.
    </div>,
  ], [
    'onRequestChange',
    'function',
    ' () => {}',
    <div>要求更改菜单的打开状态时触发回调功能。<br />

      Signature:<br />
      <span className="code">function(open: boolean, reason: string) => void</span><br />
      open: If true, the menu was requested to be opened.<br />
      reason: 开放或关闭请求的原因。 可能的值是打开请求的“键盘”和“iconTap” 'enter'，'escape'，'itemTap'和'clickAway'用于关闭请求。
    </div>,
  ], [
    'open',
    'bool',
    'null',
    '如果为true，则会打开IconMenu。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ], [
    'targetOrigin',
    'propTypes.origin',
    "{ vertical: 'top', horizontal: 'left',}",
    '这是菜单上的点，它将粘贴到菜单原点。 选项：vertical：[top，center，bottom] horizontal：[left，middle，right]。',
  ], [
    'touchTapCloseDelay',
    'number',
    "200",
    '设置点击项目之前关闭菜单的延迟（以毫秒为单位）。 如果设置为0，则自动关闭功能将被禁用。',
  ], [
    'useLayerForClickAway',
    'bool',
    "false",
    '如果为true，则popover将呈现在不可见层之上，这将阻止对基础元素的点击。',
  ]]
};
export {
  iconMenuPositioningCode,
  controlledIconMenusCode,
  scrollableIconMenuCode,
  nestedIconMenusCode,
  propertiesData,
}
