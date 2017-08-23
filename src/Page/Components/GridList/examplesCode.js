 
const simpleExampleCode = `import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * A simple example of a scrollable ｀GridList｀ containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
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
    </GridList>
  </div>
);

export default GridListExampleSimple;`;
const complexExampleCode = `import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
    featured: true,
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
    featured: true,
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * This example demonstrates "featured" tiles, using the ｀rows｀ and ｀cols｀ props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient ｀titleBackground｀.
 */
const GridListExampleComplex = () => (
  <div style={styles.root}>
    <GridList
      cols={2}
      cellHeight={200}
      padding={1}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleComplex;`;
const onelineExampleCode = `import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const tilesData = [
  {
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const GridListExampleSingleLine = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSingleLine;`;
const propertiesData1 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'cellHeight',
    'union: number [object Object]',
    '',
    '一个单元格高度的px数。 如果要让子元素确定高度，可以设置“自动”。',
  ], [
    'children',
    'node',
    '',
    '元素将在网格列表中。',
  ], [
    'cols',
    'number',
    '2',
    '列数。',
  ], [
    'padding',
    'number',
    '4',
    '项目之间的填充/间距的px数。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ]]
};
const propertiesData2 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'actionIcon',
    'element',
    '180',
    '用作辅助动作目标的IconButton元素（主动作目标是图块本身）。',
  ], [
    'actionPosition',
    "enum: 'left' 'right'",
    'right',
    'Position of secondary action IconButton.',
  ], [
    'children',
    'node',
    '',
    '理论上你可以将任何节点作为子元素传递，但是主要的用例是传递一个img，在这种情况下，GridTile会将图像“覆盖”可用空间（类似于background-size：cover或object-fit：cover）。',
  ], [
    'cols',
    'number',
    '1',
    'Width of the tile in number of grid cells.',
  ], [
    'containerElement',
    'union: string element',
    'div',
    '用作tile根元素的标签名称的字符串，或ReactElement。 当您具有例如导航链接（知道您的路线）的自定义实现，并且希望将其用作主平铺动作时，这很有用。 如果您通过一个ReactElement，请确保它通过所有props，接受样式覆盖并呈现它的子元素。',
  ], [
    'rows',
    'number',
    '1',
    'Height of the tile in number of grid cells.',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ], [
    'subtitle',
    'string',
    '',
    '作为副标题的字符串或元素（支持文本）。',
  ], [
    'subtitleStyle',
    'object',
    '',
    '覆盖subtitle元素的内联样式。',
  ], [
    'title',
    'node',
    '',
    '要显示在tile上的标题。',
  ], [
    'titleBackground',
    'node',
    'rgba(0, 0, 0, 0.4)',
    '用于标题栏背景的样式。 用于设置自定义渐变',
  ], [
    'titlePosition',
    "enum: 'top' 'bottom'",
    'bottom',
    '标题栏（标题容器，subtitle和action icon）的位置。',
  ], [
    'titleStyle',
    'object',
    '',
    '覆盖标题元素的内联样式。',
  ]]
};
export {
  simpleExampleCode,
  complexExampleCode,
  onelineExampleCode,
  propertiesData1,
  propertiesData2,
}
