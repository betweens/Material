import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  btnNavCode,
  propertiesData1,
  propertiesData2,
} from './examplesCode.js';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
 
// import './BottomNavigation.css';
 
class BottomNavigationPage extends Component {
  state = {
    selectedIndex: 0,
  };
  select = (index) => this.setState({selectedIndex: index});
  render() {
		const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
    const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
    const nearbyIcon = <IconLocationOn />;
    return (<div>
	      <h2>底部导航</h2>
	      <p><a href="https://www.google.com/design/spec/components/bottom-navigation.html#bottom-navigation-behavior">底部导航</a>是用于导航的特殊工具栏。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode>
	        <PrintCode code={btnNavCode} />
          <div className="show-examples">
	          <p><span className="code">BottomNavigation</span>的一个简单例子，提供三个标签和图标。 所选择的<span className="code">BottomNavigationItem</span>由应用程序状态（例如，通过URL）确定。</p>
	           <Paper zDepth={1}>
              <BottomNavigation selectedIndex={this.state.selectedIndex}>
                <BottomNavigationItem
                  label="Recents"
                  icon={recentsIcon}
                  onTouchTap={() => this.select(0)}
                />
                <BottomNavigationItem
                  label="Favorites"
                  icon={favoritesIcon}
                  onTouchTap={() => this.select(1)}
                />
                <BottomNavigationItem
                  label="Nearby"
                  icon={nearbyIcon}
                  onTouchTap={() => this.select(2)}
                />
              </BottomNavigation>
            </Paper>
	        </div>
	      </ContainerPreCode>
	      <h3>BottomNavigation 属性</h3>
	      <PropertiesList items={propertiesData1} />
        <p style={{marginTop: '20px'}}>其他属性（未记录）应用于根元素。</p>
        <h3>BottomNavigationItem 属性</h3>
        <PropertiesList items={propertiesData2} />
        <p style={{marginTop: '20px'}}>其他属性（未记录）应用于根元素。</p>
	     </div>);
  }
}

export default BottomNavigationPage;
