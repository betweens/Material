import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
 	readyCode,
	loadingCode,
  propertiesData,
} from './examplesCode.js';
import RefreshIndicator from 'material-ui/RefreshIndicator';
// import './RefreshIndicator.css';
class RefreshIndicatorPage extends Component {
 
  render() {
  	const style = {
		  container: {
		    position: 'relative',
		  },
		  refresh: {
		    display: 'inline-block',
		    position: 'relative',
		  },
		};
    return (<div>
	      <h2>Refresh Indicator</h2>
	      <p>显示项目正在加载时使用<a href="https://www.google.com/design/spec/components/progress-activity.html#">刷新指示器</a>。 它从界面保持隐藏，直到状态栏改为<span className="code">loading</span>或<span className="code">ready</span>。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Ready">
	        <PrintCode code={readyCode} />
          <div className="show-examples">
            <p>就绪状态可以用于响应拉动刷新动作，百分比跟踪“拉”的深度。 size属性确定图标大小（以像素为单位），颜色属性的颜色（百分比100除外），当颜色切换到辅助颜色时。</p>
		        <div style={style.container}>
					    <RefreshIndicator
					      percentage={30}
					      size={40}
					      left={10}
					      top={0}
					      status="ready"
					      style={style.refresh}
					    />
					    <RefreshIndicator
					      percentage={60}
					      size={50}
					      left={65}
					      top={0}
					      status="ready"
					      style={style.refresh}
					    />
					    <RefreshIndicator
					      percentage={80}
					      size={60}
					      left={120}
					      top={0}
					      color="red"
					      status="ready"
					      style={style.refresh}
					    />
					    <RefreshIndicator
					      percentage={100}
					      size={70}
					      left={175}
					      top={0}
					      color="red" // Overridden by percentage={100}
					      status="ready"
					      style={style.refresh}
					    />
					  </div>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Loading">
	        <PrintCode code={loadingCode} />
          <div className="show-examples">
            <p>加载状态显示一个不确定的指示器，用于在内容加载时使用。 loadingColor支架可用于设置指示器颜色，默认为辅助颜色。</p>
            <div style={style.container}>
					    <RefreshIndicator
					      size={40}
					      left={10}
					      top={0}
					      status="loading"
					      style={style.refresh}
					    />
					    <RefreshIndicator
					      size={50}
					      left={70}
					      top={0}
					      loadingColor="#FF9800"
					      status="loading"
					      style={style.refresh}
					    />
					  </div>
          </div>
	      </ContainerPreCode>
	      <h3>Properties</h3>
	      <PropertiesList items={propertiesData} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <p><small>* required properties</small></p>
	     </div>);
  }
}

export default RefreshIndicatorPage;
