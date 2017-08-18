import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  cardComponentsExampleCode,
  expandableExampleCode,
  controlledExampleCode,
  propertiesData1,
  propertiesData2,
  propertiesData3,
  propertiesData4,
  propertiesData5,
  propertiesData6,
} from './examplesCode.js';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
// import './Card.css';
 
class CardPage extends Component {
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
    return (<div>
	      <h2>Card</h2>
	      <p><a href="https://www.google.com/design/spec/components/cards.html">Card</a>是一张纸片，它有独特的相关数据 作为更详细信息的入口点。 例如，一张卡片可以包含一张照片，文本和关于单个主题的链接。</p>
	      <p>Card有恒定的宽度和可变的高度。 最大高度仅限于平台上可用空间的高度，但可以临时展开（例如，显示注释字段）。 <span className="code">card</span>不会翻转以显示背面的信息。可以控制卡扩展（使用展开和<span className="code">onExpandChange</span>属性）或不受控制（使用<span className="code">initialExpanded</span>属性）。 使用可扩展属性来控制元素是否对展开做出反应。 在<span className="code">CardTitle</span>或<span className="code">CardHeader</span>上使用<span className="code">actAsExpander</span>让他们有一个扩展器按钮。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode>
	        <PrintCode code={cardComponentsExampleCode} />
          <div className="show-examples">
	          <p>包含每个卡组件的卡：<span className="code">CardHeader</span>（带头像），<span className="code">CardMedia</span>（带覆盖），<span className="code">CardTitle</span>，<span className="code">CardText</span>和<span className="code">CardActions</span>。</p>
					  <Card>
					    <CardHeader title="URL Avatar" subtitle="Subtitle" avatar="http://www.material-ui.com/images/jsa-128.jpg"/>
					    <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}><img src="http://www.material-ui.com/images/nature-600-337.jpg" alt="" /></CardMedia>
					    <CardTitle title="Card title" subtitle="Card subtitle" />
					    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</CardText>
					    <CardActions><FlatButton label="Action1" /><FlatButton label="Action2" />
					    </CardActions>
					  </Card>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Expandable example">
	        <PrintCode code={expandableExampleCode} />
          <div className="show-examples">
					  <p>带<span className="code">CardHeader</span>，<span className="code">CardText</span>和<span className="code">CardActions</span>的可扩展卡。 使用图标展开卡片。</p>
					  <Card>
					    <CardHeader title="Without Avatar" subtitle="Subtitle" actAsExpander={true} showExpandableButton={true}/>
					    <CardActions><FlatButton label="Action1" /><FlatButton label="Action2" /></CardActions>
					    <CardText expandable={true}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</CardText>
				    </Card>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Expandable example">
	        <PrintCode code={expandableExampleCode} />
          <div className="show-examples">
					  <p>控扩展的<span className="code">Card</span>。 使用图标，切换或按钮来控制Card的扩展状态。</p>
					   <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
				        <CardHeader
				          title="URL Avatar"
				          subtitle="Subtitle"
				          avatar="http://www.material-ui.com/images/ok-128.jpg"
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
				          <img src="http://www.material-ui.com/images/nature-600-337.jpg" alt="" />
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
	        </div>
	      </ContainerPreCode>
	      <h3>Card properties</h3>
	      <PropertiesList items={propertiesData1} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <h3>CardActions properties</h3>
	      <PropertiesList items={propertiesData2} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <h3>CardHeader properties</h3>
	      <PropertiesList items={propertiesData3} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <h3>CardMedia properties</h3>
	      <PropertiesList items={propertiesData4} />
	      <p>Other properties (not documented) are applied to the root element.</p>
        <h3>CardText properties</h3>
	      <PropertiesList items={propertiesData5} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <h3>CardTitle properties</h3>
	      <PropertiesList items={propertiesData6} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	     </div>);
  }
}

export default CardPage;
