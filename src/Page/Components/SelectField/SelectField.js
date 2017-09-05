import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  simpleExamplesCode,
  nullableSelectCode,
  longExampleCode,
  labelExampleCode,
  floatingLabelExampleCode,
  errorTextExampleCode,
  multipleSelectionExampleCode,
  selectionRendererExampleCode,
  propertiesData,
} from './examplesCode.js';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
// import './Badge.css';
 	const persons = [
		  {value: 0, name: 'Oliver Hansen'},
		  {value: 1, name: 'Van Henry'},
		  {value: 2, name: 'April Tucker'},
		  {value: 3, name: 'Ralph Hubbard'},
		  {value: 4, name: 'Omar Alexander'},
		  {value: 5, name: 'Carlos Abbott'},
		  {value: 6, name: 'Miriam Wagner'},
		  {value: 7, name: 'Bradley Wilkerson'},
		  {value: 8, name: 'Virginia Andrews'},
		  {value: 9, name: 'Kelly Snyder'},
		]; 
class SelectFieldPage extends Component {
  state = {
    value1: 1,
    value2: null,
    value3: 10,
    value4: 1,
    value5: null,
    value6: null,
    values1: [],
    values2: [],
  };

  handleChange1 = (event, index, value1) => this.setState({value1});
  handleChange2 = (event, index, value2) => this.setState({value2});
  handleChange3 = (event, index, value3) => {
    this.setState({value3});
  };
  handleChange4 = (event, index, value4) => this.setState({value4});
  handleChange5 = (event, index, value5) => this.setState({value5});
  handleChange6 = (event, index, value6) => this.setState({value6});
  handleChange7 = (event, index, values1) => this.setState({values1});
  handleChange8 = (event, index, values2) => this.setState({values2});
  menuItems(values) {
    const names = [
		  'Oliver Hansen',
		  'Van Henry',
		  'April Tucker',
		  'Ralph Hubbard',
		  'Omar Alexander',
		  'Carlos Abbott',
		  'Miriam Wagner',
		  'Bradley Wilkerson',
		  'Virginia Andrews',
		  'Kelly Snyder',
		];
    return names.map((name) => (
      <MenuItem
        key={name}
        insetChildren={true}
        checked={values && values.indexOf(name) > -1}
        value={name}
        primaryText={name}
      />
    ));
  }
   

  selectionRenderer = (values) => {
    switch (values.length) {
      case 0:
        return '';
      case 1:
        return persons[values[0]].name;
      default:
        return `${values.length} names selected`;
    }
  }

  menuItems8 = (persons) => {
    return persons.map((person) => (
      <MenuItem
        key={person.value}
        insetChildren={true}
        checked={this.state.values2.indexOf(person.value) > -1}
        value={person.value}
        primaryText={person.name}
      />
    ));
  }
  render() {
  	const styles = {
		  customWidth: {
		    width: 150,
		  },
		};
		const items = [];
		for (let i = 0; i < 100; i++ ) {
		  items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
		}
		const items5 = [
		  <MenuItem key={1} value={1} primaryText="Never" />,
		  <MenuItem key={2} value={2} primaryText="Every Night" />,
		  <MenuItem key={3} value={3} primaryText="Weeknights" />,
		  <MenuItem key={4} value={4} primaryText="Weekends" />,
		  <MenuItem key={5} value={5} primaryText="Weekly" />,
		];
		const {value6, values1} = this.state;
    const night = value6 === 2 || value6 === 3;
    return (<div>
	      <h2>Select Field</h2>
	      <p>要了解有关<span className="code">SelectField</span>的更多信息，请访问<a href="https://www.google.com/design/spec/components/menus.html#menus-usage">此处</a>的规范。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Simple Examples">
	        <PrintCode code={simpleExamplesCode} />
          <div className="show-examples">
	          <p><span className="code">SelectField</span>实现为受控组件，通过<span className="code">value</span>属性设置当前选择。 可以使用禁用的属性禁用<span className="code">SelectField</span>。</p>
		        <SelectField
	          floatingLabelText="Frequency"
	          value={this.state.value1}
	          onChange={this.handleChange1}
	        >
	          <MenuItem value={1} primaryText="Never" />
	          <MenuItem value={2} primaryText="Every Night" />
	          <MenuItem value={3} primaryText="Weeknights" />
	          <MenuItem value={4} primaryText="Weekends" />
	          <MenuItem value={5} primaryText="Weekly" />
	        </SelectField>
	        <br />
	        <SelectField floatingLabelText="Frequency" value={1} disabled={true}>
	          <MenuItem value={1} primaryText="Disabled" />
	          <MenuItem value={2} primaryText="Every Night" />
	        </SelectField>
	        <br />
	        <SelectField
	          floatingLabelText="Frequency"
	          value={this.state.value1}
	          onChange={this.handleChange1}
	          style={styles.customWidth}
	        >
	          <MenuItem value={1} primaryText="Custom width" />
	          <MenuItem value={2} primaryText="Every Night" />
	          <MenuItem value={3} primaryText="Weeknights" />
	          <MenuItem value={4} primaryText="Weekends" />
	          <MenuItem value={5} primaryText="Weekly" />
	        </SelectField>
	        <br />
	        <SelectField
	          floatingLabelText="Frequency"
	          value={this.state.value1}
	          onChange={this.handleChange1}
	          autoWidth={true}
	        >
	          <MenuItem value={1} primaryText="Auto width" />
	          <MenuItem value={2} primaryText="Every Night" />
	          <MenuItem value={3} primaryText="Weeknights" />
	          <MenuItem value={4} primaryText="Weekends" />
	          <MenuItem value={5} primaryText="Weekly" />
	        </SelectField>
	        </div>
	      </ContainerPreCode>
				<ContainerPreCode title="Nullable select">
				  <PrintCode code={nullableSelectCode} />
			    <div className="show-examples">
			      <p><span className="code">SelectField</span>也可以为空。 在这种情况下，只需指定一个没有文本和空值的<span className="code">MenuItem</span>。 例如，对于布尔值：</p>
				    <SelectField
	          floatingLabelText="Ready?"
	          value={this.state.value2}
	          onChange={this.handleChange2}
	        >
	          <MenuItem value={null} primaryText="" />
	          <MenuItem value={false} primaryText="No" />
	          <MenuItem value={true} primaryText="Yes" />
	        </SelectField>
			    </div>
				</ContainerPreCode>
				<ContainerPreCode title="Long Example">
				  <PrintCode code={longExampleCode} />
			    <div className="show-examples">
			      <p>设置最大高度属性时，如果项目数量导致高度超过此限制，则选择字段将可滚动。</p>
				    <SelectField
			        value={this.state.value3}
			        onChange={this.handleChange3}
			        maxHeight={200}
			      >
			        {items}
			      </SelectField>
			    </div>
				</ContainerPreCode>
				<ContainerPreCode title="Label Example">
				  <PrintCode code={labelExampleCode} />
			    <div className="show-examples">
			      <p>使用标签应用于每个<span className="code">MenuItem</span>，<span className="code">SelectField</span>显示所选项目的补充描述。</p>
					  <SelectField value={this.state.value4} onChange={this.handleChange4}>
			        <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning" />
			        <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon" />
			        <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening" />
			        <MenuItem value={4} label="9 pm - 5 am" primaryText="Night" />
			      </SelectField>
			    </div>
				</ContainerPreCode>
				<ContainerPreCode title="Floating Label Example">
				  <PrintCode code={floatingLabelExampleCode} />
			    <div className="show-examples">
					  <p><span className="code">SelectField</span>支持带有<span className="code">floatLabelText</span>属性的浮动标签。 这可以使用<span className="code">floatingLabelFixed</span>属性固定到位，并且可以使用<span className="code">floatingLabelText</span>属性进行自定义。</p>
			       <SelectField
		          value={this.state.value5}
		          onChange={this.handleChange5}
		          floatingLabelText="Floating Label Text"
		        >
		          {items5}
		        </SelectField>
		        <br />
		        <SelectField
		          value={this.state.value5}
		          onChange={this.handleChange5}
		          floatingLabelText="Floating Label Text"
		          floatingLabelFixed={true}
		          hintText="Hint text"
		        >
		          {items5}
		        </SelectField>
		        <br />
		        <SelectField
		          value={this.state.value5}
		          onChange={this.handleChange5}
		          floatingLabelText="Styled Floating Label Text"
		          floatingLabelStyle={{color: 'red'}}
		        >
		          {items5}
		        </SelectField>
			    </div>
				</ContainerPreCode>
				<ContainerPreCode title="ErrorText Example">
				  <PrintCode code={errorTextExampleCode} />
			    <div className="show-examples">
					  <p><span className="code">errorText</span>属性在选择字段下方显示错误消息。 这可以使用<span className="code">errorStyle</span>属性进行自定义。</p>
			      <SelectField
		          value={value6}
		          onChange={this.handleChange6}
		          errorText={!night && 'Should be Night'}
		        >
		          {items5}
		        </SelectField>
		        <br />
		        <SelectField
		          value={value6}
		          onChange={this.handleChange6}
		          errorText={night && 'Should not be Night (Custom error style)'}
		          errorStyle={{color: 'orange'}}
		        >
		          {items5}
		        </SelectField>
			    </div>
				</ContainerPreCode>
				<ContainerPreCode title="Multiple Selection Example">
				  <PrintCode code={multipleSelectionExampleCode} />
			    <div className="show-examples">
			      <p><span className="code">SelectField</span>可以处理多个选择。 它启用了多个属性。</p>
					  <SelectField
			        multiple={true}
			        hintText="Select a name"
			        value={values1}
			        onChange={this.handleChange7}
			      >
			        {this.menuItems(values1)}
			      </SelectField>
			    </div>
				</ContainerPreCode>
				<ContainerPreCode title="Selection Renderer Example">
				  <PrintCode code={selectionRendererExampleCode} />
			    <div className="show-examples">
			      <p>可以通过提供<span className="code">selectionRenderer</span>来定制所选项目的呈现。</p>
					  <SelectField
        multiple={true}
        hintText="Select a name"
        value={this.state.values2}
        onChange={this.handleChange8}
        selectionRenderer={this.selectionRenderer}
      >
        {this.menuItems8(persons)}
      </SelectField>
			    </div>
				</ContainerPreCode>
	      <h3>Properties</h3>
	      <PropertiesList items={propertiesData} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	     </div>);
  }
}

export default SelectFieldPage;
