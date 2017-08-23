import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  simpleExampleCode,
  complexExampleCode,
  onelineExampleCode,
  propertiesData1,
  propertiesData2,
} from './examplesCode.js';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
// import './Drawer.css';
 
class GridListPage extends Component {
	constructor(props) {
	 	super(props);
	 	this.state = {
	    open1: false,
	    open2: false,
	    open3: false,
	  }
	}
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
	      <h2>GridList</h2>
	      <p>简单的基于灵活框架的<a href="https://www.google.com/design/spec/components/grid-lists.html">网格</a>列表实现。 支持具有任意单元格大小的图块，但不能实现复杂的布局（仅限于弹性框限制）。</p>
 	      <h3>Examples</h3>
	      <ContainerPreCode title="Simple Example">
	        <PrintCode code={simpleExampleCode} />
          <div className="show-examples">
            <p>包含<a href="http://www.material-ui.com/#/components/subheader">Subheader</a>的可滚动<span className="code">GridList</span>的简单示例。</p>
	         <div style={styles.root}>
				    <GridList cellHeight={180} style={styles.gridList}>
				      <Subheader>December</Subheader>
				      {tilesData.map((tile) => (
				        <GridTile key={tile.img} title={tile.title} subtitle={<span>by <b>{tile.author}</b></span>} actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
				          <img src={tile.img} alt="1"/>
				        </GridTile>
				      ))}
				    </GridList>
				  </div>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Complex Example">
	        <PrintCode code={complexExampleCode} />
          <div className="show-examples">
	         <p>此示例演示 "featured" tiles，使用行和列的props来调整图块的大小。 tiles有一个定制的标题，位于顶部，并具有自定义渐变<span className="code">titleBackground</span>。</p>
	         <div style={styles.root}>
            <GridList cols={2} cellHeight={200} padding={1} style={styles.gridList}>
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
			        <img src={tile.img} alt="1"/>
			        </GridTile>
			      ))}
             </GridList>
            </div>
	        </div>
	      </ContainerPreCode>
	       <ContainerPreCode title="one line Example">
	        <PrintCode code={onelineExampleCode} />
          <div className="show-examples">
	         <p>此示例演示 "featured" tiles，使用行和列的props来调整图块的大小。 tiles有一个定制的标题，位于顶部，并具有自定义渐变<span className="code">titleBackground</span>。</p>
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
				          <img src={tile.img} alt="1"/>
				        </GridTile>
				      ))}
				    </GridList>
            </div>
	        </div>
	      </ContainerPreCode>
	      <h3>GridList Properties</h3>
	      <PropertiesList items={propertiesData1} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <h3>GridTile Properties</h3>
	      <PropertiesList items={propertiesData2} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	     </div>);
  }
}

export default GridListPage;
