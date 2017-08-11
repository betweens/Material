const examplesCode = `import React from 'react';
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

const style = {margin: 5};

/**
 * Examples of ｀Avatar｀ using an image, [Font Icon](/#/components/font-icon), [SVG Icon](/#/components/svg-icon)
 * and "Letter" (string), with and without custom colors at the default size (｀40dp｀) and an alternate size (｀30dp｀).
 */
const AvatarExampleSimple = () => (
  <List>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar src="images/uxceo-128.jpg" />
      }
    >
      Image Avatar
    </ListItem>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar
          src="images/uxceo-128.jpg"
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
);

export default AvatarExampleSimple;`;
const propertiesData = {
      title: ['Name', 'Type', 'Default', 'Description'],
      body:[[
        'backgroundColor',
        'string',
        '',
        '头像的backgroundColor。 不适用于图像头像。',
      ], [
        'children',
        'node',
        '',
        '可以使用，例如，在头像内呈现一个字母。',
      ], [
        'className',
        'string',
        '',
        '根div或img元素的css类名。',
      ], [
        'color',
        'string',
        '',
        '图标或字母颜色。',
      ], [
        'icon',
        'element',
        '',
        '这是在头像中使用的SvgIcon或FontIcon。',
      ], [
        'size',
        'number',
        '40',
        '这是头像的大小，以像素为单位。',
      ], [
        'src',
        'string',
        '',
        '如果传入，该组件将呈现一个img元素。 否则，将渲染一个div。',
      ], [
        'style',
        'object',
        '',
        '覆盖根元素的内联样式。',
      ]]
    };
export {
  examplesCode,
  propertiesData,
}
