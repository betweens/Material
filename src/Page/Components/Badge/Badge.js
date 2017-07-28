import React, { Component } from 'react';
import { 
	PrintCode, 
	FooterBanner, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import UploadIcon from 'material-ui/svg-icons/file/cloud-upload';
import FolderIcon from 'material-ui/svg-icons/file/folder-open';
// import './Badge.css';
 
class BadgePage extends Component {
 
  render() {
    const badgeCode = `import React from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

const BadgeExampleSimple = () => (
  <div>
    <Badge
      badgeContent={4}
      primary={true}
    >
      <NotificationsIcon />
    </Badge>
    <Badge
      badgeContent={10}
      secondary={true}
      badgeStyle={{top: 12, right: 12}}
    >
      <IconButton tooltip="Notifications">
        <NotificationsIcon />
      </IconButton>
    </Badge>
  </div>
);

export default BadgeExampleSimple;`;
    const FurtherCode = `import React from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import UploadIcon from 'material-ui/svg-icons/file/cloud-upload';
import FolderIcon from 'material-ui/svg-icons/file/folder-open';

const BadgeExampleContent = () => (
  <div>
    <Badge
      badgeContent={<IconButton tooltip="Backup"><UploadIcon /></IconButton>}
    >
      <FolderIcon />
    </Badge>
    <Badge
      badgeContent="&copy;"
      badgeStyle={{fontSize: 20}}
    >
      Company Name
    </Badge>
  </div>
);

export default BadgeExampleContent;`;
		const propertiesData = {
      title: ['Name', 'Type', 'Default', 'Description'],
      body:[[
      	'badgeContent *',
      	'node',
      	'',
      	'这是badge内呈现的内容。',
      ], [
      	'badgeStyle',
      	'object',
      	'',
      	'覆盖badge元素的内联样式。',
      ], [
      	'children',
      	'node',
      	'',
      	'badge将相对于此节点添加。',
      ], [
      	'className',
      	'string',
      	'',
      	'它的css类名称是根元素。',
      ], [
      	'primary',
      	'bool',
      	'false',
      	'如果为真，则badge将使用primary颜色的badge。',
      ], [
      	'secondary',
      	'bool',
      	'false',
      	'如果为真，badge将使用secondary的颜色。',
      ], [
      	'style',
      	'object',
      	'',
      	'覆盖根元素的内联样式。',
      ]]
		};
    return (<div>
	    <div className="markdown-body">
	      <h2>徽章</h2>
	      <p>这个组件在其子元素的右上角生成一个小徽章）。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode>
	        <PrintCode code={badgeCode} />
          <div className="show-examples">
	          <p>包含文本的徽章的两个示例，使用主要和次要颜色。 该徽章应用于其子元素 - 第一个示例的图标，以及第二个具有工具提示的<a href="http://www.material-ui.com/#/components/icon-button">Icon Button。</a></p>
	          <Badge
				      badgeContent={4}
				      primary={true}
				    >
				      <NotificationsIcon />
				    </Badge>
				    <Badge
				      badgeContent={10}
				      secondary={true}
				      badgeStyle={{top: 12, right: 12}}
				    >
				      <IconButton tooltip="Notifications">
				        <NotificationsIcon />
				      </IconButton>
				    </Badge>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Further examples">
	        <PrintCode code={FurtherCode} />
          <div className="show-examples">
	          <p>包含<a href="http://www.material-ui.com/#/components/icon-button">Icon Button。</a>和文本的徽章，应用于图标和文本。</p>
	          <Badge
				      badgeContent={<IconButton tooltip="Backup"><UploadIcon /></IconButton>}
				    >
				      <FolderIcon />
				    </Badge>
				    <Badge
				      badgeContent="&copy;"
				      badgeStyle={{fontSize: 20}}
				    >
				      Company Name
				    </Badge>
	        </div>
	      </ContainerPreCode>
	 
	      <h3>属性</h3>
	      <PropertiesList items={propertiesData} />
	      <p><small>* required property</small></p>
	     </div>
	    <FooterBanner />
  </div>);
  }
}

export default BadgePage;
