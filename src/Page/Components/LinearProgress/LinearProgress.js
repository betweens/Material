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
import LinearProgress from 'material-ui/LinearProgress';
// import './LinearProgress.css';
class LinearProgressPage extends Component {
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
	      <h2>Linear Progress</h2>
	      <p><a href="https://www.google.com/design/spec/components/progress-activity.html#progress-activity-types-of-indicators">线性进度条</a>填充0％至100％以显示任务的进度。 它还将动画显示有一个任务等待完成。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Indeterminate Progress">
	        <PrintCode code={indeterminateProgressCode} />
          <div className="show-examples">
			      <p>默认情况下，指示符持续动画。</p>
		        <LinearProgress mode="indeterminate" />
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Determinate Progress">
	        <PrintCode code={determinateProgressCode} />
          <div className="show-examples">
			      <p>在确定模式下，指标调整以显示完成百分比，作为值的比值：max-min。</p>
		        <LinearProgress mode="determinate" value={this.state.completed} />
	        </div>
	      </ContainerPreCode>
	      <h3>属性</h3>
	      <PropertiesList items={propertiesData} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	     </div>);
  }
}

export default LinearProgressPage;
