import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  dockedExampleCode,
  undockedExampleCode,
  openSecondaryExampleCode,
  propertiesData,
} from './examplesCode.js';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
// import './Drawer.css';
 
class DrawerPage extends Component {
	constructor(props) {
	 	super(props);
	 	this.state = {
	    open1: false,
	    open2: false,
	    open3: false,
	  }
	  this.handleToggle1 = this.handleToggle1.bind(this);
	  this.handleToggle2 = this.handleToggle2.bind(this);
	  this.handleToggle3 = this.handleToggle3.bind(this);
	  this.handleClose2 = this.handleClose2.bind(this);
	}
	handleToggle1() {
		this.setState({open1: !this.state.open1});
	}
	handleToggle2() {
		this.setState({open2: !this.state.open2});
	}
	handleToggle3() {
		this.setState({open3: !this.state.open3});
	}
	handleClose2() {
    this.setState({open2: false})
	}
  render() {
 
    return (<div>
	      <h2>Dialog</h2>
	      <p><a href="https://www.google.com/design/spec/patterns/navigation-drawer.html">Drawer</a>从侧面滑入。 这是Google应用中常见的模式，并且遵循列表的键盘和指标。</p>
	      <p>没有不受控制的模式的例子，因为不能控制的Drawer只能通过滑动来打开。 该文档站点具有不受控制的Drawer。 在触摸设备上从左侧滑动即可查看。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Docked Example">
	        <PrintCode code={dockedExampleCode} />
          <div className="show-examples">
            <p>一个简单的控制<span className="code">Drawer</span>。Drawer默认停靠，保持打开状态，除非通过 open prop来关闭。</p>
            <RaisedButton label="Toggle Drawer" onClick={this.handleToggle1}/>
		        <Drawer open={this.state.open1}>
		          <MenuItem>Menu Item</MenuItem>
		          <MenuItem>Menu Item 2</MenuItem>
		        </Drawer>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Undocked Example">
	        <PrintCode code={undockedExampleCode} />
          <div className="show-examples">
            <p>具有自定义宽度的独立控制<span className="code">Drawer</span>。可以通过单击覆盖层或按Esc键取消Drawer</p>
            <RaisedButton label="Open Drawer" onClick={this.handleToggle2} />
            <Drawer docked={false} width={200} open={this.state.open2} onRequestChange={(open) => this.setState({open2: open})}>
		          <MenuItem onClick={this.handleClose2}>Menu Item</MenuItem>
		          <MenuItem onClick={this.handleClose2}>Menu Item 2</MenuItem>
		        </Drawer>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Open secondary Example">
	        <PrintCode code={openSecondaryExampleCode} />
          <div className="show-examples">
            <p> he<span className="code"> openSecondary </span>prop allows the Drawer to open on the opposite side.</p>
            <RaisedButton label="Toggle Drawer" onClick={this.handleToggle3}/>
            <Drawer width={200} openSecondary={true} open={this.state.open3} ><AppBar title="AppBar" /></Drawer>
	        </div>
	      </ContainerPreCode>
	      <h3>属性</h3>
	      <PropertiesList items={propertiesData} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	     </div>);
  }
}

export default DrawerPage;
