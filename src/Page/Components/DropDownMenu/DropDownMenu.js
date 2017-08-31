import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  simpleExampleCode,
  openImmediateExampleCode,
  longExampleCode,
  labelExampleCode,
  propertiesData,
} from './examplesCode.js';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
// import './DropDownMenu.css';

const items = [];
for (let i = 0; i < 100; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}

class DropDownMenuPage extends Component {
 constructor(props) {
    super(props);
    this.state = {value: 1, value1: 1, value2: 1, value3: 1};
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
  }
  handleChange(event, index, value) {
  	this.setState({value});
  }
  handleChange1(event, index, value1) {
  	this.setState({value1});
  }
  handleChange2(event, index, value2) {
  	this.setState({value2});
  }
  handleChange3(event, index, value3) {
  	this.setState({value3});
  }
  render() {
  	const styles = {
		  customWidth: {
		    width: 200,
		  },
		};
    return (<div>
	      <h2>Drop Down Menu</h2>
	      <p><span className="code">DropDownMenu</span>组件是<a href="https://www.google.com/design/spec/components/menus.html#menus-usage">Textfield</a>下拉菜单的Material-UI实现。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Simple Example">
	        <PrintCode code={simpleExampleCode} />
          <div className="show-examples">
	          <p><span className="code">DropDownMenu</span>被实现为受控组件，当前选择通过<span className="code">value</span>属性设置.</p>
			      <DropDownMenu value={this.state.value} onChange={this.handleChange}>
		          <MenuItem value={1} primaryText="Never" />
		          <MenuItem value={2} primaryText="Every Night" />
		          <MenuItem value={3} primaryText="Weeknights" />
		          <MenuItem value={4} primaryText="Weekends" />
		          <MenuItem value={5} primaryText="Weekly" />
		        </DropDownMenu>
		        <br />
		        <DropDownMenu value={this.state.value} onChange={this.handleChange} style={styles.customWidth} autoWidth={false}>
		          <MenuItem value={1} primaryText="Custom width" />
		          <MenuItem value={2} primaryText="Every Night" />
		          <MenuItem value={3} primaryText="Weeknights" />
		          <MenuItem value={4} primaryText="Weekends" />
		          <MenuItem value={5} primaryText="Weekly" />
		        </DropDownMenu>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Open Immediate Example">
	        <PrintCode code={openImmediateExampleCode} />
          <div className="show-examples">
			      <p>随着<span className="code">openImmediately</span>属性设置，菜单将在mount上打开。</p>
			      <DropDownMenu value={this.state.value1} onChange={this.handleChange1} openImmediately={true}>
			        <MenuItem value={1} primaryText="Never" />
			        <MenuItem value={2} primaryText="Every Night" />
			        <MenuItem value={3} primaryText="Weeknights" />
			        <MenuItem value={4} primaryText="Weekends" />
			        <MenuItem value={5} primaryText="Weekly" />
			      </DropDownMenu>
	        </div>
	       </ContainerPreCode>
	       <ContainerPreCode title="Long Example">
	        <PrintCode code={longExampleCode} />
          <div className="show-examples">
			      <p>设置<span className="code">maxHeight</span>属性时，如果项目数量导致高度超过此限制，菜单将是可滚动的。</p>
			      <DropDownMenu maxHeight={300} value={this.state.value2} onChange={this.handleChange}>
				      {items}
				    </DropDownMenu>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Label Example">
	        <PrintCode code={labelExampleCode} />
          <div className="show-examples">
			      <p>使用标签应用于每个<span className="code">MenuItem</span>,<span className="code">DropDownMenu</span>显示所选项目的补充描述。</p>
		        <DropDownMenu value={this.state.value3} onChange={this.handleChange3}>
			        <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning" />
			        <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon" />
			        <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening" />
			        <MenuItem value={4} label="9 pm - 5 am" primaryText="Night" />
			      </DropDownMenu>
	        </div>
	      </ContainerPreCode>
	 
	      <h3>属性</h3>
	      <PropertiesList items={propertiesData} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	     </div>);
  }
}

export default DropDownMenuPage;
