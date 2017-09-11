import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  simpleExampleCode,
  controlledExampleCode,
  complexExampleCode,
  propertiesData1,
  propertiesData2,
  propertiesData3,
  propertiesData4,
  propertiesData5,
  propertiesData6,
  propertiesData7,
} from './examplesCode.js';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TableFooter,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
class SimpleExample extends Component {
  render() {
  	return (<ContainerPreCode title="Simple example">
      <PrintCode code={simpleExampleCode} />
      <div className="show-examples">
        <p>演示了<span className="code">Table</span>组件及其子组件的层次结构的简单表。</p>
        <Table>
			    <TableHeader>
			      <TableRow>
			        <TableHeaderColumn>ID</TableHeaderColumn>
			        <TableHeaderColumn>Name</TableHeaderColumn>
			        <TableHeaderColumn>Status</TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
			    <TableBody>
			      <TableRow>
			        <TableRowColumn>1</TableRowColumn>
			        <TableRowColumn>John Smith</TableRowColumn>
			        <TableRowColumn>Employed</TableRowColumn>
			      </TableRow>
			      <TableRow>
			        <TableRowColumn>2</TableRowColumn>
			        <TableRowColumn>Randal White</TableRowColumn>
			        <TableRowColumn>Unemployed</TableRowColumn>
			      </TableRow>
			      <TableRow>
			        <TableRowColumn>3</TableRowColumn>
			        <TableRowColumn>Stephanie Sanders</TableRowColumn>
			        <TableRowColumn>Employed</TableRowColumn>
			      </TableRow>
			      <TableRow>
			        <TableRowColumn>4</TableRowColumn>
			        <TableRowColumn>Steve Brown</TableRowColumn>
			        <TableRowColumn>Employed</TableRowColumn>
			      </TableRow>
			      <TableRow>
			        <TableRowColumn>5</TableRowColumn>
			        <TableRowColumn>Christopher Nolan</TableRowColumn>
			        <TableRowColumn>Unemployed</TableRowColumn>
			      </TableRow>
			    </TableBody>
			  </Table>
      </div>
    </ContainerPreCode>);
  }
}

class ControlledExample extends Component {
  state = {
    selected: [1],
  };

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };
  render() {
  	return (<ContainerPreCode title="Controlled example">
      <PrintCode code={controlledExampleCode} />
      <div className="show-examples">
        <p>默认值属性设置滑块的初始位置。 当不在起始位置时，滑块外观会发生变化。</p>
        <Table onRowSelection={this.handleRowSelection}>
	        <TableHeader>
	          <TableRow>
	            <TableHeaderColumn>ID</TableHeaderColumn>
	            <TableHeaderColumn>Name</TableHeaderColumn>
	            <TableHeaderColumn>Status</TableHeaderColumn>
	          </TableRow>
	        </TableHeader>
	        <TableBody>
	          <TableRow selected={this.isSelected(0)}>
	            <TableRowColumn>1</TableRowColumn>
	            <TableRowColumn>John Smith</TableRowColumn>
	            <TableRowColumn>Employed</TableRowColumn>
	          </TableRow>
	          <TableRow selected={this.isSelected(1)}>
	            <TableRowColumn>2</TableRowColumn>
	            <TableRowColumn>Randal White</TableRowColumn>
	            <TableRowColumn>Unemployed</TableRowColumn>
	          </TableRow>
	          <TableRow selected={this.isSelected(2)}>
	            <TableRowColumn>3</TableRowColumn>
	            <TableRowColumn>Stephanie Sanders</TableRowColumn>
	            <TableRowColumn>Employed</TableRowColumn>
	          </TableRow>
	          <TableRow selected={this.isSelected(3)}>
	            <TableRowColumn>4</TableRowColumn>
	            <TableRowColumn>Steve Brown</TableRowColumn>
	            <TableRowColumn>Employed</TableRowColumn>
	          </TableRow>
	        </TableBody>
	      </Table>
      </div>
    </ContainerPreCode>);
  }
}

class ComplexExample extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: true,
    height: '300px',
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };
  render() {
  	const styles = {
		  propContainer: {
		    width: 200,
		    overflow: 'hidden',
		    margin: '20px auto 0',
		  },
		  propToggleHeader: {
		    margin: '20px auto 10px',
		  },
		};

		const tableData = [
		  {
		    name: 'John Smith',
		    status: 'Employed',
		  },
		  {
		    name: 'Randal White',
		    status: 'Unemployed',
		  },
		  {
		    name: 'Stephanie Sanders',
		    status: 'Employed',
		  },
		  {
		    name: 'Steve Brown',
		    status: 'Employed',
		  },
		  {
		    name: 'Joyce Whitten',
		    status: 'Employed',
		  },
		  {
		    name: 'Samuel Roberts',
		    status: 'Employed',
		  },
		  {
		    name: 'Adam Moore',
		    status: 'Employed',
		  },
		];
  	return (<ContainerPreCode title="Complex example">
      <PrintCode code={complexExampleCode} />
      <div className="show-examples">
        <p>一个更复杂的例子，允许设置表的高度，并且键布尔属性被切换。</p>
          <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                Super Header
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
            <TableRow>
              <TableRowColumn>ID</TableRowColumn>
              <TableRowColumn>Name</TableRowColumn>
              <TableRowColumn>Status</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                Super Footer
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>

        <div style={styles.propContainer}>
          <h3>Table Properties</h3>
          <TextField
            floatingLabelText="Table Body Height"
            defaultValue={this.state.height}
            onChange={this.handleChange}
          />
          <Toggle
            name="fixedHeader"
            label="Fixed Header"
            onToggle={this.handleToggle}
            defaultToggled={this.state.fixedHeader}
          />
          <Toggle
            name="fixedFooter"
            label="Fixed Footer"
            onToggle={this.handleToggle}
            defaultToggled={this.state.fixedFooter}
          />
          <Toggle
            name="selectable"
            label="Selectable"
            onToggle={this.handleToggle}
            defaultToggled={this.state.selectable}
          />
          <Toggle
            name="multiSelectable"
            label="Multi-Selectable"
            onToggle={this.handleToggle}
            defaultToggled={this.state.multiSelectable}
          />
          <Toggle
            name="enableSelectAll"
            label="Enable Select All"
            onToggle={this.handleToggle}
            defaultToggled={this.state.enableSelectAll}
          />
          <h3 style={styles.propToggleHeader}>TableBody Properties</h3>
          <Toggle
            name="deselectOnClickaway"
            label="Deselect On Clickaway"
            onToggle={this.handleToggle}
            defaultToggled={this.state.deselectOnClickaway}
          />
          <Toggle
            name="stripedRows"
            label="Stripe Rows"
            onToggle={this.handleToggle}
            defaultToggled={this.state.stripedRows}
          />
          <Toggle
            name="showRowHover"
            label="Show Row Hover"
            onToggle={this.handleToggle}
            defaultToggled={this.state.showRowHover}
          />
          <h3 style={styles.propToggleHeader}>Multiple Properties</h3>
          <Toggle
            name="showCheckboxes"
            label="Show Checkboxes"
            onToggle={this.handleToggle}
            defaultToggled={this.state.showCheckboxes}
          />
        </div>
      </div>
    </ContainerPreCode>);
  }
}

class TablePage extends Component {
 
  render() {
    return (<div>
	      <h2>Table</h2>
	      <p><a href="https://www.google.com/design/spec/components/data-tables.html">Tables</a>用于显示数据并进行组织。</p>
	      <h3>Examples</h3>
	      <SimpleExample />
	      <ControlledExample />
	      <ComplexExample />
	      <h3>Table Properties</h3>
	      <PropertiesList items={propertiesData1} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <h3>TableRow Properties</h3>
	      <PropertiesList items={propertiesData2} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <h3>TableRowColumn Properties</h3>
	      <PropertiesList items={propertiesData3} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <h3>TableHeader Properties</h3>
	      <PropertiesList items={propertiesData4} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <h3>TableHeaderColumn Properties</h3>
	      <PropertiesList items={propertiesData5} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <h3>TableBody Properties</h3>
	      <PropertiesList items={propertiesData6} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <h3>TableFooter Properties</h3>
	      <PropertiesList items={propertiesData7} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	     </div>);
  }
}

export default TablePage;

