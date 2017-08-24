// import React from 'react';
const customIconFontCode = `import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

const iconStyles = {
  marginRight: 24,
};

const FontIconExampleSimple = () => (
  <div>
    <FontIcon
      className="muidocs-icon-action-home"
      style={iconStyles}
    />

    <FontIcon
      className="muidocs-icon-action-home"
      style={iconStyles}
      color={blue500}
    />

    <FontIcon
      className="muidocs-icon-action-home"
      style={iconStyles}
      color={red500}
      hoverColor={greenA200}
    />
  </div>
);

export default FontIconExampleSimple;`;
const publicIconFontCode = `import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

const iconStyles = {
  marginRight: 24,
};

const FontIconExampleIcons = () => (
  <div>
    <FontIcon className="material-icons" style={iconStyles}>home</FontIcon>
    <FontIcon className="material-icons" style={iconStyles} color={red500}>flight_takeoff</FontIcon>
    <FontIcon className="material-icons" style={iconStyles} color={yellow500}>cloud_download</FontIcon>
    <FontIcon className="material-icons" style={iconStyles} color={blue500}>videogame_asset</FontIcon>
  </div>
);

export default FontIconExampleIcons;`;
const propertiesData = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'color',
    'string',
    '',
    '这是字体图标的字体颜色。 如果未指定，该组件将默认为muiTheme.palette.textColor。',
  ], [
    'hoverColor',
    'string',
    '',
    '当鼠标悬停在图标上时图标显示的颜色。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ]]
};
export {
	customIconFontCode,
	publicIconFontCode,
  propertiesData,
}
