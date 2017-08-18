import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  exampleChipsCode,
  exampleArrayCode,
  propertiesData,
} from './examplesCode.js';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';
// import './Badge.css';
 
class ChipPage extends Component {
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
  handleRequestDelete() {
	  alert('You clicked the delete button.');
	}

  handleTouchTap() {
	  alert('You clicked the Chip.');
	}
	handleRequestDeletea(key) {
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
        onRequestDelete={() => this.handleRequestDeletea(data.key)}
        style={this.styles.chip}
      >
        {data.label}
      </Chip>
    );
  }
  render() {
  	const styles = {
		  chip: {
		    margin: 4,
		  },
		  wrapper: {
		    display: 'flex',
		    flexWrap: 'wrap',
		  },
		};
    return (<div>
	      <h2>Chip</h2>
	      <p>这个组件在其子元素的右上角生成一个小徽章）。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Example Chips">
	        <PrintCode code={exampleChipsCode} />
          <div className="show-examples">
	          <p>Chips的例子，使用图像<a href="http://www.material-ui.com/#/components/font-icon">Avatar</a>，<a href="http://www.material-ui.com/#/components/font-icon">Font Icon</a> Avatar，<a href="http://www.material-ui.com/#/components/svg-icon">SVG Icon</a> Avatar，“Letter”（字符串）头像和自定义颜色。</p>
	          <p>定义了<span className="code">onRequestDelete</span>属性的Chips将显示一个删除图标。</p>
	          <div style={styles.wrapper}>
	            <Chip style={styles.chip}>Text Chip</Chip>
	            <Chip onRequestDelete={this.handleRequestDelete} onTouchTap={this.handleTouchTap} style={styles.chip}>Deletable Text Chip</Chip>
	            <Chip onTouchTap={this.handleTouchTap} style={styles.chip}><Avatar src="http://www.material-ui.com/images/uxceo-128.jpg" />Image Avatar Chip</Chip>
	            <Chip onRequestDelete={this.handleRequestDelete} onTouchTap={this.handleTouchTap} style={styles.chip}><Avatar src="http://www.material-ui.com/images/ok-128.jpg" />Deletable Avatar Chip</Chip>
	            <Chip onTouchTap={this.handleTouchTap} style={styles.chip}><Avatar icon={<FontIcon className="material-icons">perm_identity</FontIcon>} />FontIcon Avatar Chip</Chip>
	            <Chip onRequestDelete={this.handleRequestDelete} onTouchTap={this.handleTouchTap} style={styles.chip}><Avatar color="#444" icon={<SvgIconFace />} />SvgIcon Avatar Chip</Chip>
	            <Chip onTouchTap={this.handleTouchTap} style={styles.chip}><Avatar size={32}>A</Avatar>Text Avatar Chip</Chip>
	            <Chip backgroundColor={blue300} onRequestDelete={this.handleRequestDelete} onTouchTap={this.handleTouchTap} style={styles.chip} ><Avatar size={32} color={blue300} backgroundColor={indigo900}>MB</Avatar>Colored Chip</Chip>
            </div>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Example  array">
	        <PrintCode code={exampleArrayCode} />
          <div className="show-examples">
	          <p>从数组中渲染多个Chips的一个例子。 删除芯片会从阵列中删除它。 请注意，由于没有定义<span className="code">onTouchTap</span>属性，因此可以对Chip进行聚焦，但在点击或触摸时不会获得深度。</p>
	          <div style={this.styles.wrapper}>
			        {this.state.chipData.map(this.renderChip, this)}
			      </div>
	        </div>
	      </ContainerPreCode>
	      <h3>属性</h3>
	      <PropertiesList items={propertiesData} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	     </div>);
  }
}

export default ChipPage;
