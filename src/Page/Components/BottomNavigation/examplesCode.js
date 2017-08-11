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
export {
  btnNavCode,
  propertiesData1,
  propertiesData2,
}
