import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  simpleDialogCode,
  modalDialogCode,
  styledDialogCode,
  nestedDialogsCode,
  scrollableDialogCode,
  alertDialogCode,
  propertiesData,
} from './examplesCode.js';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
// import './Dialog.css';
 
class DialogPage extends Component {
	constructor(props) {
	 	super(props);
	 	this.state = {
	    open1: false,
      open2: false,
      open3: false,
      open4: false,
      open5: false,
      open6: false,
	  }
	  this.handleOpen1 = this.handleOpen1.bind(this);
	  this.handleClose1 = this.handleClose1.bind(this);
	  this.handleOpen2 = this.handleOpen2.bind(this);
	  this.handleClose2 = this.handleClose2.bind(this);
	  this.handleOpen3 = this.handleOpen3.bind(this);
	  this.handleClose3 = this.handleClose3.bind(this);
	  this.handleOpen4 = this.handleOpen4.bind(this);
	  this.handleClose4 = this.handleClose4.bind(this);
	  this.handleOpen5 = this.handleOpen5.bind(this);
	  this.handleClose5 = this.handleClose5.bind(this);
	  this.handleOpen6 = this.handleOpen6.bind(this);
	  this.handleClose6 = this.handleClose6.bind(this);
	}
	handleOpen1() {
	  this.setState({open1: true});
	};

  handleClose1() {
    this.setState({open1: false});
  };
  handleOpen2() {
	  this.setState({open2: true});
	};

  handleClose2() {
    this.setState({open2: false});
  };
  handleOpen3() {
	  this.setState({open3: true});
	};

  handleClose3() {
    this.setState({open3: false});
  };
  handleOpen4() {
	  this.setState({open4: true});
	};

  handleClose4() {
    this.setState({open4: false});
  };

  handleOpen5() {
	  this.setState({open5: true});
	};

  handleClose5() {
    this.setState({open5: false});
  }

  handleOpen6() {
	  this.setState({open6: true});
	};

  handleClose6() {
    this.setState({open6: false});
  }
  render() {
  	const actions1 = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose1}/>,
      <FlatButton label="Submit" primary={true} keyboardFocused={true} onClick={this.handleClose1} />,
    ];
    const actions2 = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose2}/>,
      <FlatButton label="Submit" primary={true} keyboardFocused={true} onClick={this.handleClose2} />,
    ];
    const actions3 = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose3}/>,
      <FlatButton label="Submit" primary={true} keyboardFocused={true} onClick={this.handleClose3} />,
    ];
    const actions4 = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose4}/>,
      <FlatButton label="Submit" primary={true} keyboardFocused={true} onClick={this.handleClose4} />,
    ];
    const actions5 = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose5}/>,
      <FlatButton label="Submit" primary={true} keyboardFocused={true} onClick={this.handleClose5} />,
    ];
    const actions6 = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose6}/>,
      <FlatButton label="Submit" primary={true} keyboardFocused={true} onClick={this.handleClose6} />,
    ];
    const customContentStyle = {
		  width: '100%',
		  maxWidth: 'none',
		};
		const styles = {
		  radioButton: {
		    marginTop: 16,
		  },
		};
	 const radios = [];
    for (let i = 0; i < 30; i++) {
      radios.push(
        <RadioButton
          key={i}
          value={`value${i + 1}`}
          label={`Option ${i + 1}`}
          style={styles.radioButton}
        />
      );
    }
    return (<div>
	      <h2>Dialog</h2>
	      <p><a href="https://www.google.com/design/spec/components/dialogs.html">Dialogs</a>包含专注于特定任务的文本和UI控件。 它们向用户通知关键信息，要求用户作出决定或涉及多个任务。</p>
	      <p>Dialog只能是受控组件。 您必须提供open prop并处理<span className="code">onRequestClose</span>才能使用此组件。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Simple Dialog">
	        <PrintCode code={simpleDialogCode} />
          <div className="show-examples">
	          <p>Dialog带动作按钮。 该操作以React对象数组的形式传递，在此示例中为<a href="http://www.material-ui.com/#/components/flat-button">FlatButtons</a>。</p>
	          <p>您还可以通过点击dialog外部或“Esc”键关闭此dialog。</p>
	          <RaisedButton label="Dialog" onClick={this.handleOpen1} />
	          <Dialog title="Dialog With Actions" actions={actions1} modal={false} open={this.state.open1} onRequestClose={this.handleClose1}>The actions in this window were passed in as an array of React objects.</Dialog>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Modal dialog">
	        <PrintCode code={modalDialogCode} />
          <div className="show-examples">
	          <p>只能通过选择其中一个动作来关闭模式dialog。</p>
	           <RaisedButton label="Modal Dialog" onClick={this.handleOpen2} />
             <Dialog title="Dialog With Actions" actions={actions2} modal={true} open={this.state.open2}>Only actions can close this dialog.</Dialog>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Styled Dialog">
	        <PrintCode code={styledDialogCode} />
          <div className="show-examples">
	          <p>dialog宽度已设置为通过<span className="code">contentStyle</span>属性占据浏览器的全部宽度。</p>
	           <RaisedButton label="Dialog With Custom Width" onClick={this.handleOpen3} />
             <Dialog title="Dialog With Custom Width" actions={actions3} modal={true} contentStyle={customContentStyle} open={this.state.open3}>This dialog spans the entire width of the screen.</Dialog>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Nested Dialogs">
	        <PrintCode code={nestedDialogsCode} />
          <div className="show-examples">
	          <p>对话框可以嵌套。 此示例从对话框中打开日期选择器。</p>
	            <RaisedButton label="Dialog With Date Picker" onClick={this.handleOpen4} />
              <Dialog title="Dialog With Date Picker" actions={actions4} modal={false} open={this.state.open4} onRequestClose={this.handleClose4} >Open a Date Picker dialog from within a dialog.<DatePicker hintText="Date Picker" /></Dialog>
	          </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Scrollable Dialogs">
	        <PrintCode code={scrollableDialogCode} />
          <div className="show-examples">
	          <p>对话框内容可以滚动。</p>
	           <RaisedButton label="Scrollable Dialog" onClick={this.handleOpen5} />
             <Dialog title="Scrollable Dialog" actions={actions5} modal={false} open={this.state.open5} onRequestClose={this.handleClose5} autoScrollBodyContent={true}>
             <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">{radios}</RadioButtonGroup>
          </Dialog>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Alert Dialogs">
	        <PrintCode code={alertDialogCode} />
          <div className="show-examples">
	          <p>警报是紧急中断，需要确认，通知用户有关情况。</p>
	          <RaisedButton label="Alert" onClick={this.handleOpen6} />
            <Dialog actions={actions6} modal={false}  open={this.state.open6} onRequestClose={this.handleClose6}>Discard draft?</Dialog>
	        </div>
	      </ContainerPreCode>
	      <h3>属性</h3>
	      <PropertiesList items={propertiesData} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <p><small>* required property</small></p>
	     </div>);
  }
}

export default DialogPage;
