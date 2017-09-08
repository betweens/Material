import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  simpleUsageWithListCode,
  insetExampleCode,
  simpleUsageWithGridListCode,
  propertiesData,
} from './examplesCode.js';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ActionInfo from 'material-ui/svg-icons/action/info';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import {blue500, yellow600} from 'material-ui/styles/colors';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
class SubheaderPage extends Component {
 
  render() {
 const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

    return (<div>
	      <h2>Subheader</h2>
	      <p><a href="https://www.google.com/design/spec/components/subheaders.html">Subheader</a>是描述列表或网格列表的不同部分的特殊列表图块，通常与当前的过滤或排序标准相关。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Simple Usage with List">
	        <PrintCode code={simpleUsageWithListCode} />
          <div className="show-examples">
	          <p> <span className="code">Subheader</span>用于一个简单的列表。</p>
	          <div className="mobile-tear-sheet">
	            <List>
					      <Subheader>Recent chats</Subheader>
					      <ListItem
					        primaryText="Brendan Lim"
					        leftAvatar={<Avatar src="http://www.material-ui.com/images/ok-128.jpg" />}
					        rightIcon={<CommunicationChatBubble />}
					      />
					      <ListItem
					        primaryText="Eric Hoffman"
					        leftAvatar={<Avatar src="http://www.material-ui.com/images/kolage-128.jpg" />}
					        rightIcon={<CommunicationChatBubble />}
					      />
					      <ListItem
					        primaryText="Grace Ng"
					        leftAvatar={<Avatar src="http://www.material-ui.com/images/uxceo-128.jpg" />}
					        rightIcon={<CommunicationChatBubble />}
					      />
					      <ListItem
					        primaryText="Kerem Suer"
					        leftAvatar={<Avatar src="http://www.material-ui.com/images/kerem-128.jpg" />}
					        rightIcon={<CommunicationChatBubble />}
					      />
					      <ListItem
					        primaryText="Raquel Parrado"
					        leftAvatar={<Avatar src="http://www.material-ui.com/images/raquelromanp-128.jpg" />}
					        rightIcon={<CommunicationChatBubble />}
					      />
					    </List>
					    <Divider />
					    <List>
					      <Subheader>Previous chats</Subheader>
					      <ListItem
					        primaryText="Chelsea Otakan"
					        leftAvatar={<Avatar src="http://www.material-ui.com/images/chexee-128.jpg" />}
					      />
					      <ListItem
					        primaryText="James Anderson"
					        leftAvatar={<Avatar src="http://www.material-ui.com/images/jsa-128.jpg" />}
					      />
					    </List>
	          </div>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Inset Example">
	        <PrintCode code={insetExampleCode} />
          <div className="show-examples">
	          <p>列表中使用的Inset <span className="code">Subheader</span></p>
	          <div className="mobile-tear-sheet">
	            <List>
					      <Subheader inset={true}>Folders</Subheader>
					      <ListItem
					        leftAvatar={<Avatar icon={<FileFolder />} />}
					        rightIcon={<ActionInfo />}
					        primaryText="Photos"
					        secondaryText="Jan 9, 2014"
					      />
					      <ListItem
					        leftAvatar={<Avatar icon={<FileFolder />} />}
					        rightIcon={<ActionInfo />}
					        primaryText="Recipes"
					        secondaryText="Jan 17, 2014"
					      />
					      <ListItem
					        leftAvatar={<Avatar icon={<FileFolder />} />}
					        rightIcon={<ActionInfo />}
					        primaryText="Work"
					        secondaryText="Jan 28, 2014"
					      />
					    </List>
					    <Divider inset={true} />
					    <List>
					      <Subheader inset={true}>Files</Subheader>
					      <ListItem
					        leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
					        rightIcon={<ActionInfo />}
					        primaryText="Vacation itinerary"
					        secondaryText="Jan 20, 2014"
					      />
					      <ListItem
					        leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
					        rightIcon={<ActionInfo />}
					        primaryText="Kitchen remodel"
					        secondaryText="Jan 10, 2014"
					      />
    </List>
	          </div>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Simple Usage with GridList">
	        <PrintCode code={simpleUsageWithGridListCode} />
          <div className="show-examples">
	          <p>Subheader用于<a href="http://www.material-ui.com/#/components/grid-list">GridList</a>。</p>
	          <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList></div>
	        </div>
	      </ContainerPreCode>
	      <h3>Properties</h3>
	      <PropertiesList items={propertiesData} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	     </div>);
  }
}

export default SubheaderPage;

