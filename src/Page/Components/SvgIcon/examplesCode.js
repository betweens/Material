// import React from 'react';
const customSVGiconCode = `import React from 'react';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';

const iconStyles = {
  marginRight: 24,
};

const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

const SvgIconExampleSimple = () => (
  <div>
    <HomeIcon style={iconStyles} />
    <HomeIcon style={iconStyles} color={blue500} />
    <HomeIcon style={iconStyles} color={red500} hoverColor={greenA200} />
  </div>
);

export default SvgIconExampleSimple;`;
const materialIconsCode = `import React from 'react';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

const iconStyles = {
  marginRight: 24,
};

const SvgIconExampleIcons = () => (
  <div>
    <ActionHome style={iconStyles} />
    <ActionFlightTakeoff style={iconStyles} color={red500} />
    <FileCloudDownload style={iconStyles} color={yellow500} />
    <HardwareVideogameAsset style={iconStyles} color={blue500} />
  </div>
);

export default SvgIconExampleIcons;`;
const propertiesData = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'children',
    'node',
    '',
    '这是字体图标的字体颜色。 如果未指定，该组件将默认为muiTheme.palette.textColor。',
  ], [
    'color',
    'string',
    '',
    '这是svg图标的填充颜色。 如果未指定，该组件将默认为muiTheme.palette.textColor。',
  ], [
    'hoverColor',
    'string',
    '',
    '当鼠标悬停在图标上时图标的颜色。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ], [
    'viewBox',
    'string',
    "'0 0 24 24'",
    '允许您重新定义在svg元素内没有单位的坐标。 例如，如果SVG元素是500（宽）乘以200（高），并且您传递viewBox =“0 0 50 20”，这意味着svg内的坐标将从左上角（0,0） 到右下（50,20），每个单位将值10px。',
  ]]
};
export {
	customSVGiconCode,
	materialIconsCode,
  propertiesData,
}
