import React from 'react';
const simpleExampleCode = `import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class PopoverExampleSimple extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
          onClick={this.handleTouchTap}
          label="Click me"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover>
      </div>
    );
  }
}`;
const animationCode = `import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class PopoverExampleAnimation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
          onClick={this.handleTouchTap}
          label="Click me"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover>
      </div>
    );
  }
}`;
const anchorPlaygroundCode = `import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import RadioButton from 'material-ui/RadioButton';
import Popover from 'material-ui/Popover/Popover';
import {Menu, MenuItem} from 'material-ui/Menu';

const styles = {
  h3: {
    marginTop: 20,
    fontWeight: 400,
  },
  block: {
    display: 'flex',
  },
  block2: {
    margin: 10,
  },
  pre: {
    overflow: 'hidden', // Fix a scrolling issue on iOS.
  },
};

export default class PopoverExampleConfigurable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      anchorOrigin: {
        horizontal: 'left',
        vertical: 'bottom',
      },
      targetOrigin: {
        horizontal: 'left',
        vertical: 'top',
      },
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  setAnchor = (positionElement, position) => {
    const {anchorOrigin} = this.state;
    anchorOrigin[positionElement] = position;

    this.setState({
      anchorOrigin: anchorOrigin,
    });
  };

  setTarget = (positionElement, position) => {
    const {targetOrigin} = this.state;
    targetOrigin[positionElement] = position;

    this.setState({
      targetOrigin: targetOrigin,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
          onClick={this.handleTouchTap}
          label="Click me"
        />
        <h3 style={styles.h3}>Current Settings</h3>
        <pre style={styles.pre}>
          anchorOrigin: {JSON.stringify(this.state.anchorOrigin)}
          <br />
          targetOrigin: {JSON.stringify(this.state.targetOrigin)}
        </pre>
        <h3 style={styles.h3}>Position Options</h3>
        <p>Use the settings below to toggle the positioning of the popovers above</p>
        <h3 style={styles.h3}>Anchor Origin</h3>
        <div style={styles.block}>
          <div style={styles.block2}>
            <span>Vertical</span>
            <RadioButton
              onClick={this.setAnchor.bind(this, 'vertical', 'top')}
              label="Top" checked={this.state.anchorOrigin.vertical === 'top'}
            />
            <RadioButton
              onClick={this.setAnchor.bind(this, 'vertical', 'center')}
              label="Center" checked={this.state.anchorOrigin.vertical === 'center'}
            />
            <RadioButton
              onClick={this.setAnchor.bind(this, 'vertical', 'bottom')}
              label="Bottom" checked={this.state.anchorOrigin.vertical === 'bottom'}
            />
          </div>
          <div style={styles.block2}>
            <span>Horizontal</span>
            <RadioButton
              onClick={this.setAnchor.bind(this, 'horizontal', 'left')}
              label="Left" checked={this.state.anchorOrigin.horizontal === 'left'}
            />
            <RadioButton
              onClick={this.setAnchor.bind(this, 'horizontal', 'middle')}
              label="Middle" checked={this.state.anchorOrigin.horizontal === 'middle'}
            />
            <RadioButton
              onClick={this.setAnchor.bind(this, 'horizontal', 'right')}
              label="Right" checked={this.state.anchorOrigin.horizontal === 'right'}
            />
          </div>
        </div>
        <h3 style={styles.h3}>Target Origin</h3>
        <div style={styles.block}>
          <div style={styles.block2}>
            <span>Vertical</span>
            <RadioButton
              onClick={this.setTarget.bind(this, 'vertical', 'top')}
              label="Top" checked={this.state.targetOrigin.vertical === 'top'}
            />
            <RadioButton
              onClick={this.setTarget.bind(this, 'vertical', 'center')}
              label="Center" checked={this.state.targetOrigin.vertical === 'center'}
            />
            <RadioButton
              onClick={this.setTarget.bind(this, 'vertical', 'bottom')}
              label="Bottom" checked={this.state.targetOrigin.vertical === 'bottom'}
            />
          </div>
          <div style={styles.block2}>
            <span>Horizontal</span>
            <RadioButton
              onClick={this.setTarget.bind(this, 'horizontal', 'left')}
              label="Left" checked={this.state.targetOrigin.horizontal === 'left'}
            />
            <RadioButton
              onClick={this.setTarget.bind(this, 'horizontal', 'middle')}
              label="Middle" checked={this.state.targetOrigin.horizontal === 'middle'}
            />
            <RadioButton
              onClick={this.setTarget.bind(this, 'horizontal', 'right')}
              label="Right" checked={this.state.targetOrigin.horizontal === 'right'}
            />
          </div>
        </div>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={this.state.anchorOrigin}
          targetOrigin={this.state.targetOrigin}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover>
      </div>
    );
  }
}`;

const propertiesData = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'anchorEl',
    'object',
    '',
    '这是用于设置popover位置的DOM元素。',
  ], [
    'anchorOrigin',
    'propTypes.origin',
    "{ vertical: 'bottom', horizontal: 'left',}",
    '这是popiv的targetOrigin将附加的锚点。 选项：vertical：[top，center，bottom] horizontal：[left，middle，right]。',
  ], [
    'animated',
    'bool',
    'true',
    '如果为true，popover将在DOM添加后过度转换。',
  ], [
    'animation',
    'function',
    '',
    '覆盖所使用的默认动画组件。',
  ], [
    'autoCloseWhenOffScreen',
    'bool',
    'true',
    '如果为true，当锚点从屏幕上滚动时，弹出窗口将隐藏。',
  ], [
    'canAutoPosition',
    'bool',
    'true',
    '如果是true，popover（潜在地）将忽略targetOrigin和anchorOrigin使其适合屏幕，这对于移动设备是有用的。',
  ], [
    'children',
    'node',
    'true',
    'popover的内容。',
  ], [
    'className',
    'string',
    '',
    '根元素的CSS类名称。',
  ], [
    'onRequestClose',
    'function',
    '() => {}',
    <div>当请求关闭popover时，回调函数被触发。<br />

      Signature:<br />
      <span className="code">function(reason: string) => void</span><br />
      reason: 关闭请求的原因。 可能的值是“clickAway”和“offScreen”。
    </div>,
  ], [
    'open',
    'bool',
    'false',
    '如果为true，则popover是可见的。',
  ], [
    'scrollableContainer',
    'union: object string',
    "'window'",
    '表示父可滚动容器。 它可以是像window这样的元素或字符串。',
  ], [
    'style',
    'object',
    '{ overflowY:"auto",}',
    '覆盖根元素的内联样式。',
  ], [
    'targetOrigin',
    'propTypes.origin',
    " { vertical: 'top', horizontal: 'left',}",
    '这是关于锚点起点的popover的一点。 选项：vertical：[top，center，bottom] horizontal：[left，middle，right]。',
  ], [
    'useLayerForClickAway',
    'bool',
    'true',
    '如果为true，则popover将呈现在不可见层之上，这将阻止对底层元素的点击，并触发onRequestClose（“clickAway”）调用。',
  ], [
    'zDepth',
    'propTypes.zDepth',
    '1',
    'The zDepth of the popover.',
  ]]
};
export {
  simpleExampleCode,
  animationCode,
  anchorPlaygroundCode,
  propertiesData,
}
