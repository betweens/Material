import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  customSVGiconCode,
	materialIconsCode,
  propertiesData,
} from './examplesCode.js';
import {blue500, red500, greenA200, yellow500} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';

// import './SvgIcon.css';
const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);
class SvgIconPage extends Component {
/*	constructor(props) {
	 	super(props);
	 	this.state = {
	    open1: false,
	  }
	}
*/
  render() {
		const iconStyles = {
		  marginRight: 24,
		};
    return (<div>
	      <h2>SVG Icon</h2>
 	      <p><span className="code">SvgIcon</span>组件将SVG <span className="code">path</span>元素作为其子节点，并将其转换为显示路径的React组件，并允许将图标设置为样式并响应鼠标事件。</p>
	      <p>生成的图标可以按原样使用，也可以作为其他使用图标的Material-UI组件（如<a href="http://www.material-ui.com/#/components/icon-button">Icon Button.</a>）作为子代使用</p>
 	      <h3>Material icons</h3>
        <p>为方便起见，Material icons中可以使用完整的Google<a href="https://design.google.com/icons/">Material icons</a>作为预先构建的SVG图标组件。 每个图标路径已经被<span className="code">SvgIcon</span>包装，并且可以直接导入并作为React组件使用。 提供的任何属性都传递给<span className="code">SvgIcon</span>。</p>
 	      <p>每个Material icons组件的导入路径包括类别和图标名称，空格用虚线表示。 例如，要使用<a href="https://design.google.com/icons/#ic_3d_rotation">3d旋转</a>图标组件，请导入<span className="code">material-ui/svg-icons/action/3d-rotation</span>。</p>
 	      <h3>Examples</h3>
	      <ContainerPreCode title="Custom SVG Icon">
	        <PrintCode code={customSVGiconCode} />
          <div className="show-examples">
	          <p>此示例使用自定义svg图标。 第三个例子定义了一个<span className="code">hoverColor</span>。</p>
	          <HomeIcon style={iconStyles} />
				    <HomeIcon style={iconStyles} color={blue500} />
				    <HomeIcon style={iconStyles} color={red500} hoverColor={greenA200} />
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Material Icon">
	        <PrintCode code={materialIconsCode} />
          <div className="show-examples">
	          <p>此示例演示如何使用包含的<i>Material icon</i>组件。</p>
					  <ActionHome style={iconStyles} />
				    <ActionFlightTakeoff style={iconStyles} color={red500} />
				    <FileCloudDownload style={iconStyles} color={yellow500} />
				    <HardwareVideogameAsset style={iconStyles} color={blue500} />
	        </div>
	      </ContainerPreCode>
	      <h3>属性</h3>
	      <PropertiesList items={propertiesData} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	     </div>);
  }
}

export default SvgIconPage;
