import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  indeterminateProgressCode,
  determinateProgressCode,
  propertiesData,
} from './examplesCode.js';
import CircularProgress from 'material-ui/CircularProgress';
// import './CircularProgress.css';
 
class CircularProgressPage extends Component {
   constructor(props) {
    super(props);

    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }
  render() {
    return (<div>
	      <h2>Circular Progress</h2>
	      <p><a href="https://www.google.com/design/spec/components/progress-activity.html#progress-activity-types-of-indicators">Circular Progress</a>将旋转以显示任务的进度，或者等待任务完成。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Indeterminate Progress">
	        <PrintCode code={indeterminateProgressCode} />
          <div className="show-examples">
	          <p>默认情况下，指示符持续动画。</p>
	          <CircularProgress />
				    <CircularProgress size={60} thickness={7} />
				    <CircularProgress size={80} thickness={5} />
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Determinate Progress">
	        <PrintCode code={determinateProgressCode} />
          <div className="show-examples">
	          <p>在确定模式下，指标调整以显示完成百分比，作为值的比值：max-min。</p>
	             <CircularProgress
			          mode="determinate"
			          value={this.state.completed}
			        />
			        <CircularProgress
			          mode="determinate"
			          value={this.state.completed}
			          size={60}
			          thickness={7}
			        />
			        <CircularProgress
			          mode="determinate"
			          value={this.state.completed}
			          size={80}
			          thickness={5}
			        />
	        </div>
	      </ContainerPreCode>
	      <h3>Properties</h3>
	      <PropertiesList items={propertiesData} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	     </div>);
  }
}

export default CircularProgressPage;
