import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import { examplesCode, propertiesData } from './examplesCode.js';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';
// import './Avatar.css';
 
class AvatarPage extends Component {
 
  render() {
    const style = {margin: 5};	
    return (<div>
	      <h2>Avatar</h2>
	      <p>Avatar 可用于表示人物或物体。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Examples">
	        <PrintCode code={examplesCode} />
          <div className="show-examples">
	          <p>使用<span className="code">Avatar</span>的图像的示例，<a href="http://www.material-ui.com/#/components/font-icon">Font Icon</a>，<a href="http://www.material-ui.com/#/components/svg-icon">SVG Icon</a>和“Letter”（字符串），具有和不具有默认大小（<span className="code">40dp</span>）的自定义颜色和备用大小（<span className="code">430dp</span>）。</p>
	          <List>
					    <ListItem
					      disabled={true}
					      leftAvatar={
					        <Avatar src="http://www.material-ui.com/images/uxceo-128.jpg" />
					      }
					    >
					      Image Avatar
					    </ListItem>
					    <ListItem
					      disabled={true}
					      leftAvatar={
					        <Avatar
					          src="http://www.material-ui.com/images/uxceo-128.jpg"
					          size={30}
					          style={style}
					        />
					      }
					    >
					      Image Avatar with custom size
					    </ListItem>
					    <ListItem
					      disabled={true}
					      leftAvatar={
					        <Avatar icon={<FontIcon className="muidocs-icon-communication-voicemail" />} />
					      }
					    >
					      FontIcon Avatar
					    </ListItem>
					    <ListItem
					      disabled={true}
					      leftAvatar={
					        <Avatar
					          icon={<FontIcon className="muidocs-icon-communication-voicemail" />}
					          color={blue300}
					          backgroundColor={indigo900}
					          size={30}
					          style={style}
					        />
					      }
					    >
					      FontIcon Avatar with custom colors and size
					    </ListItem>
					    <ListItem
					      disabled={true}
					      leftAvatar={
					        <Avatar icon={<FileFolder />} />
					      }
					    >
					      SvgIcon Avatar
					    </ListItem>
					    <ListItem
					      disabled={true}
					      leftAvatar={
					        <Avatar
					          icon={<FileFolder />}
					          color={orange200}
					          backgroundColor={pink400}
					          size={30}
					          style={style}
					        />
					      }
					    >
					      SvgIcon Avatar with custom colors and size
					    </ListItem>
					    <ListItem
					      disabled={true}
					      leftAvatar={<Avatar>A</Avatar>}
					    >
					      Letter Avatar
					    </ListItem>
					    <ListItem
					      disabled={true}
					      leftAvatar={
					        <Avatar
					          color={deepOrange300}
					          backgroundColor={purple500}
					          size={30}
					          style={style}
					        >
					          A
					        </Avatar>
					      }
					    >
					      Letter Avatar with custom colors and size
					    </ListItem>
					  </List>
	        </div>
	      </ContainerPreCode>
	      <h3>属性</h3>
	      <PropertiesList items={propertiesData} />
	     </div>);
  }
}

export default AvatarPage;
