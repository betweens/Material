import React from 'react';
const cardComponentsExampleCode = `import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleWithAvatar = () => (
  <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="images/jsa-128.jpg"
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="images/nature-600-337.jpg" alt="" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);

export default CardExampleWithAvatar;`;
const expandableExampleCode= `import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleExpandable = () => (
  <Card>
    <CardHeader
      title="Without Avatar"
      subtitle="Subtitle"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
    <CardText expandable={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
);

export default CardExampleExpandable;`;
const controlledExampleCode =  `import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

export default class CardExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
          avatar="images/ok-128.jpg"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label="This toggle controls the expanded state of the component."
          />
        </CardText>
        <CardMedia
          expandable={true}
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src="images/nature-600-337.jpg" alt="" />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label="Expand" onTouchTap={this.handleExpand} />
          <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
        </CardActions>
      </Card>
    );
  }
}`;
const propertiesData1 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'children',
    'node',
    '',
    '这是badge内呈现的内容。',
  ], [
    'containerStyle',
    'object',
    '',
    '覆盖容器元素的内联样式。',
  ], [
    'expandable',
    'bool',
    'false',
    '如果为true, 它的卡片组件是可扩展的。 可以在Card组件的任何子元素上设置。',
  ], [
    'expanded',
    'bool',
    'null',
    '这张卡是否可以扩展. 如果为true 或者 false 组件可控。 如果为 null，组件不受控。',
  ], [
    'initiallyExpanded',
    'bool',
    'null',
    '这张卡是否初始化可扩展',
  ], [
    'onExpandChange',
    'function',
    '',
    <div>当卡的可扩展状态发生变化时，回调功能被触发。<br />
      Signature:<br />
      function(newExpandedState: boolean) => void<br />
      newExpandedState:代表卡片的新扩展状态。
    </div>,
  ], [
    'showExpandableButton',
    'bool',
    '',
    '如果为true，该卡组件将包括一个按钮来扩展卡。 CardTitle，CardHeader和CardActions实现了showExpandableButton。 Card的任何子组件都可以实现showExpandableButton，或将该属性转发到支持它的子组件。',
  ], [
    'showExpandableButton',
    'bool',
    '',
    '复写根元素的内连元素样式',
  ]]
};
const propertiesData2 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'actAsExpander',
    'bool',
    '',
    '如果为true，点击此卡片组件可扩展卡片。',
  ], [
    'children',
    'node',
    '',
    '可用于在Card Action中渲染元素。',
  ], [
    'expandable',
    'bool',
    '',
    '如果为true, 这个卡片组件是可扩展的。',
  ], [
    'showExpandableButton',
    'bool',
    '',
    '如果为true，该卡组件将包括一个扩展卡的按钮。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ]]
};
const propertiesData3 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'actAsExpander',
    'bool',
    '',
    '如果为true，点击此卡片组件可扩展卡片。',
  ], [
    'avatar',
    'node',
    '',
    '这是要显示在卡片头上的头像元素。 如果头像是头像或其他元素，则会呈现。 如果头像是字符串，它将被用作头像的图像src。',
  ], [
    'children',
    'node',
    '',
    '可用于在Card Header内部呈现元素。',
  ], [
    'closeIcon',
    'node',
    '',
    '如果您不喜欢默认的可扩展关闭图标，可以用于传递closeIcon。',
  ], [
    'expandable',
    'bool',
    '',
    '如果为true, 这个卡片组件是可扩展的。',
  ], [
    'iconStyle',
    'object',
    '',
    '覆盖 Icon Button的iconStyle样式。',
  ], [
    'openIcon',
    'node',
    '',
    '如果您不喜欢默认的可扩展打开图标，可以用于传递openIcon。',
  ], [
    'showExpandableButton',
    'bool',
    '',
    '如果为true，该卡片组件将包括一个扩展卡片的按钮。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ], [
    'subtitle',
    'node',
    '',
    '可用于在卡片头中呈现文案。',
  ], [
    'subtitleColor',
    'string',
    '',
    '覆盖subtitle的颜色',
  ], [
    'subtitleStyle',
    'object',
    '',
    '覆盖subtitle的内连样式',
  ], [
    'textStyle',
    'object',
    '',
    '覆盖文本的内联样式。',
  ], [
    'title',
    'node',
    '',
    '可用于在卡片头中呈现标题。',
  ], [
    'titleColor',
    'string',
    '',
    '覆盖标题的标题颜色。',
  ], [
    'titleStyle',
    'object',
    '',
    '覆盖标题的内连样式',
  ]]
};
const propertiesData4 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'actAsExpander',
    'bool',
    '',
    '如果为true，点击此卡片组件可扩展卡片。',
  ], [
    'children',
    'node',
    '',
    '可用于在Card Media中呈现元素。',
  ], [
    'expandable',
    'bool',
    '',
    '可用于在Card Media中呈现元素。',
  ], [
    'mediaStyle',
    'object',
    '',
    '覆盖Card Media的内连样式',
  ], [
    'overlay',
    'node',
    '',
    '可用于在Card Media中渲染覆盖层元素。',
  ], [
    'overlayContainerStyle',
    'object',
    '',
    '覆盖overlay容器的内联样式。',
  ], [
    'overlayContentStyle',
    'object',
    '',
    '覆盖overlay内容的内联样式。',
  ], [
    'overlayStyle',
    'object',
    '',
    '覆盖overlay元素的内联样式。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ]]
};
const propertiesData5 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'actAsExpander',
    'bool',
    '',
    '如果为true，点击此卡片组件可扩展卡片。',
  ], [
    'children',
    'node',
    '',
    '可用于在Card Text中渲染元素。',
  ], [
    'color',
    'string',
    '',
    '覆盖CardText的颜色.',
  ], [
    'expandable',
    'bool',
    '',
    '如果为true，点击此卡片组件可扩展卡片。.',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ]]
};
const propertiesData6 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'actAsExpander',
    'bool',
    '',
    '如果为true，点击此卡片组件可扩展卡片。',
  ], [
    'children',
    'node',
    '',
    '可用于在Card Text中渲染元素。',
  ], [
    'closeIcon',
    'node',
    '',
    '如果您不喜欢默认的可扩展关闭图标，可以用于传递closeIcon。',
  ], [
    'expandable',
    'bool',
    '',
    '如果为true，此卡片组件可扩展卡片。',
  ], [
    'showExpandableButton',
    'bool',
    '',
    '如果为true，该卡组件将包括一个扩展卡的按钮。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ], [
    'subtitle',
    'node',
    '',
    '可用于在卡片标题中呈现副标题。',
  ], [
    'subtitleColor',
    'string',
    '',
    '覆盖subtitle的颜色.',
  ], [
    'subtitleStyle',
    'object',
    '',
    '覆盖subtitle的内联样式。',
  ], [
    'title',
    'node',
    '',
    '可用于在Card Title中呈现标题。',
  ], [
    'titleColor',
    'string',
    '',
    '覆盖titile颜色。',
  ], [
    'titleStyle',
    'object',
    '',
    '覆盖title的内联样式。',
  ]]
};
export {
  cardComponentsExampleCode,
  expandableExampleCode,
  controlledExampleCode,
  propertiesData1,
  propertiesData2,
  propertiesData3,
  propertiesData4,
  propertiesData5,
  propertiesData6,
}
