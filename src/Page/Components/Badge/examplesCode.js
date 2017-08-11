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
export {
  badgeCode,
  FurtherCode,
  propertiesData,
}
