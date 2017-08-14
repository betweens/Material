import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  defaultCode,
  dataSourcesCode,
  filterCode,
  controlledCode,
  propertiesData,
} from './examplesCode.js';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
// import './AutoComplete.css';
 
class AutoCompletePage extends Component {
	state = {
    dataSource: [],
    searchText: '',
  }
  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  }
  handleUpdateInputControlled = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  }

  handleNewRequest = () => {
    this.setState({
      searchText: '',
    });
  }
  render() {
    
		const dataSource1 = [
		  {
		    text: 'text-value1',
		    value: (
		      <MenuItem
		        primaryText="text-value1"
		        secondaryText="&#9786;"
		      />
		    ),
		  },
		  {
		    text: 'text-value2',
		    value: (
		      <MenuItem
		        primaryText="text-value2"
		        secondaryText="&#9786;"
		      />
		    ),
		  },
		];
		const dataSource2 = ['12345', '23456', '34567'];
		const dataSource3 = [
		  {textKey: 'Some Text', valueKey: 'someFirstValue'},
		  {textKey: 'Some Text', valueKey: 'someSecondValue'},
		];
		const dataSourceConfig = {
		  text: 'textKey',
		  value: 'valueKey',
		};
		const colors = [
		  'Red',
		  'Orange',
		  'Yellow',
		  'Green',
		  'Blue',
		  'Purple',
		  'Black',
		  'White',
		];

		const fruit = [
		  'Apple', 'Apricot', 'Avocado',
		  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
		  'Boysenberry', 'Blood Orange',
		  'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
		  'Coconut', 'Cranberry', 'Clementine',
		  'Damson', 'Date', 'Dragonfruit', 'Durian',
		  'Elderberry',
		  'Feijoa', 'Fig',
		  'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
		  'Honeydew', 'Huckleberry',
		  'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
		  'Kiwi fruit', 'Kumquat',
		  'Lemon', 'Lime', 'Loquat', 'Lychee',
		  'Nectarine',
		  'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
		  'Olive', 'Orange',
		  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
		  'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
		  'Quince',
		  'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
		  'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
		  'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
		  'Ugli fruit',
		  'Watermelon',
		];
	  const menuProps = {
		  desktop: true,
		  disableAutoFocus: true,
		};
    return (<div>
	      <h2>自动补全</h2>
	      <p><a href="https://www.google.com/design/spec/components/text-fields.html#text-fields-auto-complete-text-field">自动补全</a>是常规文本字段的扩展，可以动态自动完成输入。 它可以采用不同的自动补全过滤器，并使用菜单来显示建议。</p>
	      <h3>例子</h3>
	      <ContainerPreCode>
	        <PrintCode code={defaultCode} />
	        <div className="show-examples">
	          <p>该输入用于创建<span className="code">dataSource</span>，因此输入始终匹配三个条目。</p>
	          <AutoComplete
		          hintText="Type anything"
		          dataSource={this.state.dataSource}
		          onUpdateInput={this.handleUpdateInput}
		        />
		        <AutoComplete
		          hintText="Type anything"
		          dataSource={this.state.dataSource}
		          onUpdateInput={this.handleUpdateInput}
		          floatingLabelText="Full width"
		          fullWidth={true}
		        />
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Data sources">
	        <PrintCode code={dataSourcesCode} />
	        <div className="show-examples">
	          <p>第一个示例在其数据源中的<span className="code">MenuItems</span>显示数据输入。 第二个例子使用数组数组作为其<span className="code">dataSource</span>，并对焦点进行更新。 两个示例都禁用了过滤器。</p>
	          <AutoComplete
				      hintText="text-value data"
				      filter={AutoComplete.noFilter}
				      dataSource={dataSource1}
				    /><br />
				    <AutoComplete
				      floatingLabelText="showAllItems"
				      filter={AutoComplete.noFilter}
				      openOnFocus={true}
				      dataSource={dataSource2}
				    /><br />
				    <AutoComplete
				      floatingLabelText="Same text, different values"
				      filter={AutoComplete.noFilter}
				      openOnFocus={true}
				      dataSource={dataSource3}
				      dataSourceConfig={dataSourceConfig}
				    />
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Data sources">
	        <PrintCode code={filterCode} />
	        <div className="show-examples">
	          <p>两个过滤的例子。 第一个使用<span className="code">caseInsensitiveFilter</span>，第二个使用<span className="code">fuzzyFilter</span>，并限制使用<span className="code">maxSearchResults</span>属性显示的结果数。</p>
	          <AutoComplete
				      floatingLabelText="Type 'r', case insensitive"
				      filter={AutoComplete.caseInsensitiveFilter}
				      dataSource={colors}
				    />
				    <br />
				    <AutoComplete
				      floatingLabelText="Type 'peah', fuzzy search"
				      filter={AutoComplete.fuzzyFilter}
				      dataSource={fruit}
				      maxSearchResults={5}
				    />
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Controlled example">
	        <PrintCode code={controlledCode} />
	        <div className="show-examples">
 	          <p><span className="code">自动补全</span>搜索文本可以实现为受控值，其中<span className="code">searchText</span>由父组件中的状态处理。 该值将重新设置为<span className="code">onNewRequest</span>回调。</p>
	          <AutoComplete
		          hintText="Type 'r', case insensitive"
		          searchText={this.state.searchText}
		          onUpdateInput={this.handleUpdateInputControlled}
		          onNewRequest={this.handleNewRequest}
		          dataSource={colors}
		          filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
		          openOnFocus={true}
		        />
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="MenuProps example">
	        <PrintCode code={controlledCode} />
	        <div className="show-examples">
	          <p>提供工具进入菜单组件。</p>
	          <AutoComplete
		          hintText="Type anything"
		          dataSource={colors}
		          menuProps={menuProps}
		        />
	        </div>
	      </ContainerPreCode>
	      <PropertiesList items={propertiesData} />
	      <p>其他属性（未记录）应用于根元素。</p>
	      <p><small>* required property</small></p>
	    </div>);
  }
}

export default AutoCompletePage;
