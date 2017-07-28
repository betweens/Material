import React, { Component } from 'react';
import { 
	PrintCode, 
	FooterBanner, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
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
    const defaultCode = `import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

/**
 * The input is used to create the ｀dataSource｀, so the input always matches three entries.
 */
export default class AutoCompleteExampleSimple extends Component {
  state = {
    dataSource: [],
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
      <div>
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
    );
  }
}`;
    const dataSourcesCode =`import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';

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

/**
 * The first example has ｀MenuItem｀s in its data source that display on data entry.
 * The second example uses an array of values as its ｀dataSource｀, and updates on focus.
 * Both examples have filtering disabled.
 */
const AutoCompleteExampleDataSource = () => (
  <div>
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
);

export default AutoCompleteExampleDataSource;`;
    const filterCode = `import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

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

/**
 * Two examples of filtering. The first uses ｀caseInsensitiveFilter｀, the second uses ｀fuzzyFilter｀,
 * and limits the number of results displayed using the ｀maxSearchResults｀ property.
 */
const AutoCompleteExampleFilters = () => (
  <div>
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
);

export default AutoCompleteExampleFilters;`;
    const controlledCode = `import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

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

/**
 * ｀AutoComplete｀ search text can be implemented as a controlled value,
 * where ｀searchText｀ is handled by state in the parent component.
 * This value is reset with the ｀onNewRequest｀ callback.
 */
export default class AutoCompleteExampleControlled extends Component {
  state = {
    searchText: '',
  };

  handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  };

  handleNewRequest = () => {
    this.setState({
      searchText: '',
    });
  };

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Type 'r', case insensitive"
          searchText={this.state.searchText}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          dataSource={colors}
          filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
          openOnFocus={true}
        />
      </div>
    );
  }
}`;
    const menuPropsCode = `import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

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

const menuProps = {
  desktop: true,
  disableAutoFocus: true,
};

/**
 * Provide props to be passed into the Menu component.
 */
export default class AutoCompleteExampleMenuProps extends Component {
  render() {
    return (
      <div>
        <AutoComplete
          hintText="Type anything"
          dataSource={colors}
          menuProps={menuProps}
        />
      </div>
    );
  }
}`;
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
		const propertiesData = {
      title: ['Name', 'Type', 'Default', 'Description'],
      body:[[
      	'anchorOrigin',
      	'propTypes.origin',
      	"{ vertical: 'bottom', horizontal: 'left',}",
      	'自动完成的锚点位置。',
      ], [
      	'animated',
      	'bool',
      	"true",
      	'如果为true，则自动完成将被切换为动画。',
      ], [
      	'animation',
      	'function',
      	'',
      	'覆盖所使用的默认动画组件。',
      ], [
      	'dataSource *',
      	'array',
      	'',
      	'用于填充列表的字符串或节点数组。',
      ], [
      	'dataSourceConfig',
      	'object',
      	"{ text: 'text', value: 'value',}",
      	'配置对象列表dataSource。',
      ], [
      	'disableFocusRipple',
      	'bool',
      	"true",
      	'如果为真，则禁用焦点波动。',
      ], [
      	'errorStyle',
      	'object',
      	"",
      	'覆盖错误的风格工具。',
      ], [
      	'errorText',
      	'node',
      	"",
      	'要显示的错误内容。',
      ], [
      	'filter',
      	'function',
      	"(searchText, key) => searchText !== '' && key.indexOf(searchText) !== -1",
      	<div>回调函数用于过滤自动补全。<br />
          Signature:
					function(searchText: string, key: string) => boolean<br />
					searchText: 要在dataSource内搜索的文本.<br />
					key:dataSource元素或该元素的text属性，如果它不是字符串.<br />
					returns (boolean):true表示当输入为searchText时，自动完成列表将包含键。
      	</div>,
      ], [
      	'floatingLabelText',
      	'node',
      	"",
      	'用于添加浮动标签元素的内容。',
      ], [
      	'fullWidth',
      	'bool',
      	"false",
      	'如果为true，则该字段接收属性宽度：100％。',
      ], [
      	'hintText',
      	'node',
      	"",
      	'要显示的提示内容。',
      ], [
      	'listStyle',
      	'object',
      	"",
      	'覆盖样式列表。',
      ], [
      	'maxSearchResults',
      	'number',
      	"",
      	'要显示的搜索结果的最大数量。 默认情况下，它显示与过滤器匹配的所有项目。',
      ], [
      	'menuCloseDelay',
      	'number',
      	"",
      	'延迟关闭菜单的时间。',
      ], [
      	'menuProps',
      	'object',
      	"",
      	'props被传递到菜单。',
      ], [
      	'menuStyle',
      	'object',
      	"",
      	'覆盖这个菜单的样式',
      ], [
      	'onClose',
      	'function',
      	"",
      	'当菜单关闭时，回调函数触发。',
      ], [
      	'onNewRequest',
      	'function',
      	"() => {}",
      	<div>在TextField中按下列表项时触发的回调函数或输入<br />
					Signature:
					function(chosenRequest: string, index: number) => void
					chosenRequest: 文本字段输入值，如果在文本字段中按下输入，或者所选择的相应列表项的文本值。
					index: 所选列表项的dataSource中的索引，如果在TextField中被按下，则返回-1。
      	</div>,
      ], [
      	'onUpdateInput',
      	'function',
      	"() => {}",
      	<div>当用户更新<span className="code">TextField</span>时触发的回调函数。<br />
					searchText: auto-complete的searchText值。<br />
					dataSource: 自动完成的dataSource数组。<br />
					params: 附加信息链接更新。
      	</div>,
      ], [
      	'open',
      	'bool',
      	"false",
      	'如果为真，自动完成菜单将打开。',
      ], [
      	'popoverProps',
      	'object',
      	"false",
      	'props被传递给popover。',
      ], [
      	'searchText',
      	'string',
      	"",
      	'文本被输入到自动填充。',
      ], [
      	'style',
      	'object',
      	"",
      	'覆盖根元素的内联样式。',
      ], [
      	'targetOrigin',
      	'propTypes.origin	',
      	"{ vertical: 'top', horizontal: 'left',}",
      	'起源于目标的位置。',
      ], [
      	'textFieldStyle',
      	'object',
      	"{ vertical: 'top', horizontal: 'left',}",
      	'覆盖AutoComplete的TextField元素的内联样式。',
      ]]
		};
    return (<div>
	    <div className="markdown-body">
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
	    </div>
      <FooterBanner />
  </div>);
  }
}

export default AutoCompletePage;
