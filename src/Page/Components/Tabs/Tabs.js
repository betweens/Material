import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  simpleExampleCode,
  controlledExampleCode,
  swipeableExampleCode,
  iconExampleCode,
  iconAndTextExampleCode,
  propertiesData1,
  propertiesData2,
} from './examplesCode.js';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import SwipeableViews from 'react-swipeable-views';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
class SimpleExample extends Component {
	handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
  }
	render() {
		const styles = {
		  headline: {
		    fontSize: 24,
		    paddingTop: 16,
		    marginBottom: 12,
		    fontWeight: 400,
		  },
		};
		return (   <ContainerPreCode title="Simple Example">
      <PrintCode code={simpleExampleCode} />
      <div className="show-examples">
        <p>一个简单的<span className="code">Tabs</span>示例。 第三个选项卡演示了Tab的<span className="code">onActive</span>属性。</p>
        <Tabs>
			    <Tab label="Item One" >
			      <div>
			        <h2 style={styles.headline}>Tab One</h2>
			        <p>
			          This is an example tab.
			        </p>
			        <p>
			          You can put any sort of HTML or react component in here. It even keeps the component state!
			        </p>
			        <Slider name="slider0" defaultValue={0.5} />
			      </div>
			    </Tab>
			    <Tab label="Item Two" >
			      <div>
			        <h2 style={styles.headline}>Tab Two</h2>
			        <p>
			          This is another example tab.
			        </p>
			      </div>
			    </Tab>
			    <Tab
			      label="onActive"
			      data-route="/home"
			      onActive={this.handleActive}
			    >
			      <div>
			        <h2 style={styles.headline}>Tab Three</h2>
			        <p>
			          This is a third example tab.
			        </p>
			      </div>
			    </Tab>
			  </Tabs>
      </div>
    </ContainerPreCode>)
	}
}

class ControlledExample extends Component {
	constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

	render() {
		const styles = {
		  headline: {
		    fontSize: 24,
		    paddingTop: 16,
		    marginBottom: 12,
		    fontWeight: 400,
		  },
		};
		return (<ContainerPreCode title="Controlled Example">
      <PrintCode code={controlledExampleCode} />
      <div className="show-examples">
        <p>控制选项卡的一个例子。 所选选项卡通过父（示例）组件中的状态和回调来处理。</p>
			  <Tabs value={this.state.value} onChange={this.handleChange}>
	        <Tab label="Tab A" value="a">
	          <div>
	            <h2 style={styles.headline}>Controllable Tab A</h2>
	            <p>
	              Tabs are also controllable if you want to programmatically pass them their values.
	              This allows for more functionality in Tabs such as not
	              having any Tab selected or assigning them different values.
	            </p>
	          </div>
	        </Tab>
	        <Tab label="Tab B" value="b">
	          <div>
	            <h2 style={styles.headline}>Controllable Tab B</h2>
	            <p>
	              This is another example of a controllable tab. Remember, if you
	              use controllable Tabs, you need to give all of your tabs values or else
	              you wont be able to select them.
	            </p>
	          </div>
	        </Tab>
	      </Tabs>
      </div>
    </ContainerPreCode>)
	}
}
class SwipeableExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };
	render() {
		const styles = {
		  headline: {
		    fontSize: 24,
		    paddingTop: 16,
		    marginBottom: 12,
		    fontWeight: 400,
		  },
		  slide: {
		    padding: 10,
		  },
		};
		return (<ContainerPreCode title="Swipeable Example">
      <PrintCode code={swipeableExampleCode} />
      <div className="show-examples">
        <p>This example integrates the react-swipeable-views component with Tabs, animating the Tab transition, and allowing tabs to be swiped on touch devices.</p>
	      <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Tab One" value={0} />
          <Tab label="Tab Two" value={1} />
          <Tab label="Tab Three" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <h2 style={styles.headline}>Tabs with slide effect</h2>
            Swipe to see the next slide.<br />
          </div>
          <div style={styles.slide}>
            slide n°2
          </div>
          <div style={styles.slide}>
            slide n°3
          </div>
        </SwipeableViews>
      </div>
    </ContainerPreCode>)
	}
}
const IconExample = () => {
	return (<ContainerPreCode title="Icon Example">
    <PrintCode code={iconExampleCode} />
    <div className="show-examples">
      <p>An example of tabs with icon.</p>
		 <Tabs>
		    <Tab icon={<FontIcon className="muidocs-icon-action-home" />} />
		    <Tab icon={<ActionFlightTakeoff />} />
		    <Tab icon={<FontIcon className="material-icons">favorite</FontIcon>} />
		  </Tabs>
    </div>
   </ContainerPreCode>)
}

const IconAndTextExample = () => {
	return (<ContainerPreCode title="Icon And Text Example">
    <PrintCode code={iconAndTextExampleCode} />
    <div className="show-examples">
      <p>An example of tabs with icon and text.</p>
      <Tabs>
		    <Tab
		      icon={<FontIcon className="material-icons">phone</FontIcon>}
		      label="RECENTS"
		    />
		    <Tab
		      icon={<FontIcon className="material-icons">favorite</FontIcon>}
		      label="FAVORITES"
		    />
		    <Tab
		      icon={<MapsPersonPin />}
		      label="NEARBY"
		    />
		  </Tabs>
    </div>
   </ContainerPreCode>)
}


 
const TabPage = () => {
	return (<div>
    <h2>Tabs</h2>
    <p><a href="https://www.google.com/design/spec/components/tabs.html">Tabs</a>可轻松探索和切换应用的不同视图或功能方面，或浏览分类数据集。</p>
    <p>标签可以以两种不同的模式操作：受控和不受控制。</p>
    <ul>
     <li>如果没有值prop传递到Tabs和Tab组件，则不受控制的模式会自动执行。</li>
     <li>如果您想要可控制的选项卡，将值传递到Tab和Tab元素将允许您以编程方式调整选择的选项卡。</li>
    </ul>
    <h3>Examples</h3>
    <SimpleExample />
    <ControlledExample />
    <SwipeableExample />
    <IconExample />
    <IconAndTextExample />
    <h3>Tabs Properties</h3>
    <PropertiesList items={propertiesData1} />
    <p>Other properties (not documented) are applied to the root element.</p>
    <h3>Tab Properties</h3>
    <PropertiesList items={propertiesData2} />
    <p>Other properties (not documented) are applied to the root element.</p>
   </div>);
}

export default TabPage ;

