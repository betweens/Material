import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components';
import {
  examplesCode,
  propertiesData,
} from './examplesCode.js';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
// import './FloatingActionButton.css';
 
class FloatingActionButtonPage extends Component {
 
  render() {
		const style = {
      marginRight: 20,
    };

    return (<div>
	      <h2>Floating Action Button</h2>
	      <p><a href="https://www.google.com/design/spec/components/buttons-floating-action-button.html">Floating Action Button</a>用于常用功能。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Examples">
	        <PrintCode code={examplesCode} />
          <div className="show-examples">
	          <p>Default size and <span className="code">mini</span>FABs, in primary (default), <span className="code">secondary</span> and <span className="code">disabled</span> colors.</p>
	          <FloatingActionButton style={style}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton mini={true} style={style}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton secondary={true} style={style}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton mini={true} secondary={true} style={style}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton disabled={true} style={style}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton mini={true} disabled={true} style={style}>
              <ContentAdd />
            </FloatingActionButton>
          </div>
	      </ContainerPreCode>
	      <h3>属性</h3>
	      <PropertiesList items={propertiesData} />
	     </div>);
  }
}

export default FloatingActionButtonPage;
