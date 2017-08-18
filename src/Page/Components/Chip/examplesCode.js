import React from 'react';
const exampleChipsCode = `import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

function handleRequestDelete() {
  alert('You clicked the delete button.');
}

function handleTouchTap() {
  alert('You clicked the Chip.');
}

/**
 * Examples of Chips, using an image [Avatar](/#/components/font-icon), [Font Icon](/#/components/font-icon) Avatar,
 * [SVG Icon](/#/components/svg-icon) Avatar, "Letter" (string) Avatar, and with custom colors.
 *
 * Chips with the ｀onRequestDelete｀ property defined will display a delete icon.
 */
export default class ChipExampleSimple extends React.Component {

  render() {
    return (
      <div style={styles.wrapper}>

        <Chip
          style={styles.chip}
        >
          Text Chip
        </Chip>

        <Chip
          onRequestDelete={handleRequestDelete}
          onTouchTap={handleTouchTap}
          style={styles.chip}
        >
          Deletable Text Chip
        </Chip>

        <Chip
          onTouchTap={handleTouchTap}
          style={styles.chip}
        >
          <Avatar src="images/uxceo-128.jpg" />
          Image Avatar Chip
        </Chip>

        <Chip
          onRequestDelete={handleRequestDelete}
          onTouchTap={handleTouchTap}
          style={styles.chip}
        >
          <Avatar src="images/ok-128.jpg" />
          Deletable Avatar Chip
        </Chip>

        <Chip
          onTouchTap={handleTouchTap}
          style={styles.chip}
        >
          <Avatar icon={<FontIcon className="material-icons">perm_identity</FontIcon>} />
          FontIcon Avatar Chip
        </Chip>

        <Chip
          onRequestDelete={handleRequestDelete}
          onTouchTap={handleTouchTap}
          style={styles.chip}
        >
          <Avatar color="#444" icon={<SvgIconFace />} />
          SvgIcon Avatar Chip
        </Chip>

        <Chip onTouchTap={handleTouchTap} style={styles.chip}>
          <Avatar size={32}>A</Avatar>
          Text Avatar Chip
        </Chip>

        <Chip
          backgroundColor={blue300}
          onRequestDelete={handleRequestDelete}
          onTouchTap={handleTouchTap}
          style={styles.chip}
        >
          <Avatar size={32} color={blue300} backgroundColor={indigo900}>
            MB
          </Avatar>
          Colored Chip
        </Chip>
      </div>
    );
  }
}`;
const exampleArrayCode = `import React from 'react';
import Chip from 'material-ui/Chip';

/**
 * An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array.
 * Note that since no ｀onTouchTap｀ property is defined, the Chip can be focused, but does not gain depth
 * while clicked or touched.
 */
export default class ChipExampleArray extends React.Component {

  constructor(props) {
    super(props);
    this.state = {chipData: [
      {key: 0, label: 'Angular'},
      {key: 1, label: 'JQuery'},
      {key: 2, label: 'Polymer'},
      {key: 3, label: 'ReactJS'},
    ]};
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
  }

  handleRequestDelete = (key) => {
    if (key === 3) {
      alert('Why would you want to delete React?! :)');
      return;
    }

    this.chipData = this.state.chipData;
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
  };

  renderChip(data) {
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.handleRequestDelete(data.key)}
        style={this.styles.chip}
      >
        {data.label}
      </Chip>
    );
  }

  render() {
    return (
      <div style={this.styles.wrapper}>
        {this.state.chipData.map(this.renderChip, this)}
      </div>
    );
  }
}`;
const propertiesData = {
      title: ['Name', 'Type', 'Default', 'Description'],
      body:[[
        'backgroundColor',
        'string',
        '',
        '覆盖chip的背景颜色。',
      ], [
        'children',
        'node',
        '',
        '用于在Chip中渲染元素。',
      ], [
        'className',
        'node',
        '',
        'CSS类根元素的名称。',
      ], [
        'containerElement',
        'union:string element',
        'div',
        '用作Chip的容器的元素。 使用DOM元素或ReactElement的字符串。',
      ], [
        'deleteIconStyle',
        'object',
        '',
        '覆盖删除图标的内联样式。',
      ], [
        'labelColor',
        'string',
        '',
        '覆盖label的颜色。',
      ], [
        'labelStyle',
        'string',
        '',
        '覆盖label的内联样式。',
      ], [
        'onRequestDelete',
        'function',
        '',
        <div>单击删除icon时，回调函数触发。 如果设置，将显示删除icon<br />
          Signature:
          function(event: object) => void<br />
          event: touchTap事件定位元素。
        </div>,
      ], [
        'onTouchTap',
        'function',
        '',
        <div>当Chip元素被触碰时，回调函数被触发。<br />
          Signature:
          function(event: object) => void<br />
          event: TouchTap事件定位元素。
        </div>,
      ], [
        'style',
        'object',
        '',
        '覆盖根元素的内联样式。',
      ]]
    };
export {
  exampleChipsCode,
  exampleArrayCode,
  propertiesData,
}
