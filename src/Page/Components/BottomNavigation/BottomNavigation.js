import React, { Component } from 'react';
import { 
	PrintCode, 
	FooterBanner, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
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
    const btnNavCode = `import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of ｀BottomNavigation｀, with three labels and icons
 * provided. The selected ｀BottomNavigationItem｀ is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
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
    );
  }
}

export default BottomNavigationExampleSimple;`;
		const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
    const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
    const nearbyIcon = <IconLocationOn />;
    const propertiesData1 = {
      title: ['Name', 'Type', 'Default', 'Description'],
      body:[[
      	'children',
      	'node',
      	'',
      	'BottomNavigationItems用于填充元素。',
      ], [
        'selectedIndex',
        'number',
        '',
        '前所选导航项目的索引。',
      ]]
		};
    const propertiesData2 = {
      title: ['Name', 'Type', 'Default', 'Description'],
      body:[[
        'icon',
        'node',
        '',
        '设置代表该项目的视图的图标。',
      ], [
        'label',
        'node',
        '',
        '设置描述该项目的视图的标签',
      ]]
    };
    return (<div>
	    <div className="markdown-body">
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
	     </div>
	    <FooterBanner />
  </div>);
  }
}

export default BottomNavigationPage;
