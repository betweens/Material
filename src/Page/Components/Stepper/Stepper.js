import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  horizontalLinearStepperCode,
  verticalLinearStepperCode,
  horizontalNonLinearStepperCode,
  verticalNonLinearStepperCode,
  granularControlCode,
  customIconCode,
  horizontalStepTransitionExampleCode,
  customStepConnectorCode,
  propertiesData1,
  propertiesData2,
  propertiesData3,
  propertiesData4,
  propertiesData5,
} from './examplesCode.js';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
  StepButton,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton'; 
import WarningIcon from 'material-ui/svg-icons/alert/warning';
import {red500} from 'material-ui/styles/colors';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';
class VerticalLinearStepper extends Component {
  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };
  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }
	render() {
		const {finished, stepIndex} = this.state;
	  return (<ContainerPreCode title="Vertical linear stepper">
	    <PrintCode code={verticalLinearStepperCode} />
	    <div className="show-examples">
	      <p>垂直steppers设计用于窄屏幕尺寸。 它们是移动设备的理想选择。</p>
	      <p>要使用垂直stepper与规范示例中所示的内容，您必须在&lt;Stepper&gt;中使用&lt;StepContent&lt;组件。</p>
	      <p><small>(The vertical stepper can also be used without &lt;StepContent&gt; to display a basic stepper.)</small></p>
	      <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Select campaign settings</StepLabel>
            <StepContent>
              <p>
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
              </p>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Create an ad group</StepLabel>
            <StepContent>
              <p>An ad group contains one or more ads which target a shared set of keywords.</p>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Create an ad</StepLabel>
            <StepContent>
              <p>
                Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.
              </p>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        )}
      </div>
	    </div>
	  </ContainerPreCode>)
	}
}
class HorizontalNonLinearStepper extends Component {
  state = {
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }
  render() {
    const {stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};
  	return (<ContainerPreCode title="Horizontal non-linear stepper">
      <PrintCode code={horizontalNonLinearStepperCode} />
      <div className="show-examples">
        <p>非线性steppers 允许用户在任何时刻输入多步骤流。</p>
        <p>此示例类似于常规的水平stepper，除了steps不再基于activeStep支路自动设置为disabled = {true}。</p>
        <p>我们在这里使用&lt;StepButton&gt;来演示可点击的step标签。</p>
        <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper linear={false} activeStep={stepIndex}>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Select campaign settings
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Create an ad group
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Create an ad
            </StepButton>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          <p>{this.getStepContent(stepIndex)}</p>
          <div style={{marginTop: 12}}>
            <FlatButton
              label="Back"
              disabled={stepIndex === 0}
              onClick={this.handlePrev}
              style={{marginRight: 12}}
            />
            <RaisedButton
              label="Next"
              disabled={stepIndex === 2}
              primary={true}
              onClick={this.handleNext}
            />
           </div>
          </div>
        </div>
      </div>
    </ContainerPreCode>)
  }
}
class VerticalNonLinearStepper extends Component {
  state = {
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };
  renderStepActions(step) {
    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label="Next"
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }
  render() {
  	const {stepIndex} = this.state;
  	return (<ContainerPreCode title="Vertical non-linear stepper">
      <PrintCode code={verticalNonLinearStepperCode} />
      <div className="show-examples">
        <p>一个基本的垂直非线性实现</p>  
        <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
        <Stepper
          activeStep={stepIndex}
          linear={false}
          orientation="vertical"
        >
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Select campaign settings
            </StepButton>
            <StepContent>
              <p>
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
              </p>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Create an ad group
            </StepButton>
            <StepContent>
              <p>An ad group contains one or more ads which target a shared set of keywords.</p>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Create an ad
            </StepButton>
            <StepContent>
              <p>
                Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.
              </p>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
      </div>
      </div>
    </ContainerPreCode>)
  }
}
class GranularControl extends Component {
  state = {
    stepIndex: null,
    visited: [],
  };

  componentWillMount() {
    const {stepIndex, visited} = this.state;
    this.setState({visited: visited.concat(stepIndex)});
  }

  componentWillUpdate(nextProps, nextState) {
    const {stepIndex, visited} = nextState;
    if (visited.indexOf(stepIndex) === -1) {
      this.setState({visited: visited.concat(stepIndex)});
    }
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'Click a step to get started.';
    }
  }
	getStyles = () => {
	  return {
	    root: {
	      width: '100%',
	      maxWidth: 700,
	      margin: 'auto',
	    },
	    content: {
	      margin: '0 16px',
	    },
	    actions: {
	      marginTop: 12,
	    },
	    backButton: {
	      marginRight: 12,
	    },
	  };
	};
  render() {
  	const {stepIndex, visited} = this.state;
    const styles = this.getStyles();
  	return (<ContainerPreCode title="Granular control">
      <PrintCode code={granularControlCode} />
      <div className="show-examples">
        <p>这与水平非线性示例类似，除了通过单独props手动控制&lt;Step&gt;组件。</p>
        <p>通过此功能（如下所示）实现的增强功能是，一旦用户满足应用程序的所需条件（在这种情况下，一旦访问过step），steps将永久标记为完成。</p>
        <div style={styles.root}>
        <p>
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              this.setState({stepIndex: null, visited: []});
            }}
          >
            Click here
          </a> to reset the example.
        </p>
        <Stepper linear={false}>
          <Step completed={visited.indexOf(0) !== -1} active={stepIndex === 0}>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Select campaign settings
            </StepButton>
          </Step>
          <Step completed={visited.indexOf(1) !== -1} active={stepIndex === 1}>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Create an ad group
            </StepButton>
          </Step>
          <Step completed={visited.indexOf(2) !== -1} active={stepIndex === 2}>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Create an ad
            </StepButton>
          </Step>
        </Stepper>
        <div style={styles.content}>
          <p>{this.getStepContent(stepIndex)}</p>
          {stepIndex !== null && (
            <div style={styles.actions}>
              <FlatButton
                label="Back"
                disabled={stepIndex === 0}
                onClick={this.handlePrev}
                style={styles.backButton}
              />
              <RaisedButton
                label="Next"
                primary={true}
                onClick={this.handleNext}
              />
            </div>
          )}
        </div>
      </div>
      </div>
    </ContainerPreCode>)
  }
}
class CustomIcon extends Component {
  state = {
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }
  render() {
  	return (<ContainerPreCode title="Custom icon">
      <PrintCode code={customIconCode} />
      <div className="show-examples">
        <p>自定义图标可用于创建不同的视觉状态。</p>
        <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper linear={false}>
          <Step completed={false}>
            <StepLabel>
              Select campaign settings
            </StepLabel>
          </Step>
          <Step completed={false}>
            <StepLabel
              icon={<WarningIcon color={red500} />}
              style={{color: red500}}
            >
              Create an ad group
            </StepLabel>
          </Step>
          <Step completed={false}>
            <StepLabel>
              Create an ad
            </StepLabel>
          </Step>
        </Stepper>
      </div>
      </div>
    </ContainerPreCode>)
  }
}
class HorizontalStepTransition extends Component {
  state = {
    loading: false,
    finished: false,
    stepIndex: 0,
  };

  dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
      }));
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex - 1,
      }));
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <p>
            Select campaign settings. Campaign settings can include your budget, network, bidding
            options and adjustments, location targeting, campaign end date, and other settings that
            affect an entire campaign.
          </p>
        );
      case 1:
        return (
          <div>
            <TextField style={{marginTop: 0}} floatingLabelText="Ad group name" />
            <p>
              Ad group status is different than the statuses for campaigns, ads, and keywords, though the
              statuses can affect each other. Ad groups are contained within a campaign, and each campaign can
              have one or more ad groups. Within each ad group are ads, keywords, and bids.
            </p>
            <p>Something something whatever cool</p>
          </div>
        );
      case 2:
        return (
          <p>
            Try out different ad text to see what brings in the most customers, and learn how to
            enhance your ads using features like ad extensions. If you run into any problems with your
            ads, find out how to tell if they're running and how to resolve approval issues.
          </p>
        );
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', overflow: 'hidden'};

    if (finished) {
      return (
        <div style={contentStyle}>
          <p>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        </div>
      );
    }

    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={{marginTop: 24, marginBottom: 12}}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onClick={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label={stepIndex === 2 ? 'Finish' : 'Next'}
            primary={true}
            onClick={this.handleNext}
          />
        </div>
      </div>
    );
  }
  render() {
    const {loading, stepIndex} = this.state;
  	return (<ContainerPreCode title="Horizontal linear stepper">
      <PrintCode code={horizontalStepTransitionExampleCode} />
      <div className="show-examples">
        <p>一个使用steps之间过渡的一个例子</p>
         <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Select campaign settings</StepLabel>
          </Step>
          <Step>
            <StepLabel>Create an ad group</StepLabel>
          </Step>
          <Step>
            <StepLabel>Create an ad</StepLabel>
          </Step>
        </Stepper>
        <ExpandTransition loading={loading} open={true}>
          {this.renderContent()}
        </ExpandTransition>
      </div>
      </div>
    </ContainerPreCode>)
  }
}

class CustomStepConnector extends Component {
  constructor(props) {
    super(props);

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  state = {
    stepIndex: 0,
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <p>
            {'For each ad campaign that you create, you can control how much you\'re willing to ' +
            'spend on clicks and conversions, which networks and geographical locations you want ' +
            'your ads to show on, and more.'}
          </p>
        );

      case 1:
        return (
          <p>
            {'An ad group contains one or more ads which target a shared set of keywords.'}
          </p>
        );

      case 2:
        return (
          <p>
            {'Try out different ad text to see what brings in the most customers, and learn ' +
            'how to enhance your ads using features like ad extensions. If you run into any ' +
            'problems with your ads, find out how to tell if they\'re running and how to ' +
            'resolve approval issues.'}
          </p>
        );
    }
  }

  handleNext() {
    const {stepIndex} = this.state;

    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  }

  handlePrev() {
    const {stepIndex} = this.state;

    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }
  render() {
  	const {stepIndex} = this.state;
  	return (<ContainerPreCode title="Custom step connector">
      <PrintCode code={customStepConnectorCode} />
      <div className="show-examples">
        <p>通过将元素传递给连接器prop可以指定您自己的step连接器。 如果要卸下连接器，请将null传递给连接器prop。</p>
        <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} connector={<ArrowForwardIcon />}>
          <Step>
            <StepLabel>Select campaign settings</StepLabel>
          </Step>

          <Step>
            <StepLabel>Create an ad group</StepLabel>
          </Step>

          <Step>
            <StepLabel>Create an ad</StepLabel>
          </Step>
        </Stepper>

        {this.getStepContent(stepIndex)}

        <div style={{marginTop: 24, marginBottom: 12}}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onClick={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label={stepIndex === 2 ? 'Finish' : 'Next'}
            primary={true}
            onClick={this.handleNext}
          />
        </div>
      </div>
      </div>
    </ContainerPreCode>)
  }
}

class StepperPage extends Component {
  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };
  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }
  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};
    return (<div>
	      <h2>Stepper</h2>
	      <p><a href="https://www.google.com/design/spec/components/steppers.html">stepper</a>是用户显示编号步骤或导航的界面。 它只是提供视图，而不是处理逻辑（当步骤处于活动状态或步骤完成时，或如何移动到下一步）。</p>
	      <h2>Basic Usage</h2>
	      <p>可以通过将当前步骤索引（基于零）传递为activeStep参数来控制&lt;Stepper&gt;。 &lt;Stepper&gt;使用方向prop设置方向。 以下是水平和垂直步进器的基本实现。</p>
	      <p><strong>Note:</strong>在线性示例中，我们使用&lt;StepLabel&gt;来显示图标和标题。 但是在其他类型的Stepper（或其他情况）中，您可能希望使用&lt;StepButton&gt;组件来使您的步骤可点击。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Horizontal linear stepper">
	        <PrintCode code={horizontalLinearStepperCode} />
          <div className="show-examples">
	          <p>当一个step的内容取决于较早的step时，水平steppers是理想的。 避免在横向steppers中使用长的名称。</p>
	          <p>线性steppers要求用户完成一个步骤，以便继续前进。</p>
			        <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
				        <Stepper activeStep={stepIndex}>
				          <Step>
				            <StepLabel>Select campaign settings</StepLabel>
				          </Step>
				          <Step>
				            <StepLabel>Create an ad group</StepLabel>
				          </Step>
				          <Step>
				            <StepLabel>Create an ad</StepLabel>
				          </Step>
				        </Stepper>
				        <div style={contentStyle}>
				          {finished ? (
				            <p>
				              <a
				                href="#"
				                onClick={(event) => {
				                  event.preventDefault();
				                  this.setState({stepIndex: 0, finished: false});
				                }}
				              >
				                Click here
				              </a> to reset the example.
				            </p>
				          ) : (
				            <div>
				              <p>{this.getStepContent(stepIndex)}</p>
				              <div style={{marginTop: 12}}>
				                <FlatButton
				                  label="Back"
				                  disabled={stepIndex === 0}
				                  onClick={this.handlePrev}
				                  style={{marginRight: 12}}
				                />
				                <RaisedButton
				                  label={stepIndex === 2 ? 'Finish' : 'Next'}
				                  primary={true}
				                  onClick={this.handleNext}
				                />
				              </div>
				            </div>
				          )}
				        </div>
			      </div>
	        </div>
	      </ContainerPreCode>
        <VerticalLinearStepper />
        <HorizontalNonLinearStepper />
        <VerticalNonLinearStepper />
        <h2>高级用法</h2>
        <p>也可以通过直接与&lt;Stepper&gt;内的&lt;Step&gt;组件进行接口来控制&lt;Stepper&gt;。 这些单独的props也与activeStep prop兼容，如果在组件上找到，它将优先。</p>
	      <p>如果需要，您也可以将完全自定义的组件放置在&lt;Step&gt;中，并且将与其他&lt;Step&gt;子项通过相同的props。</p>
	      <p>这些功能允许各种使用场景,你可随心所欲的使用</p>
	      <GranularControl />
	      <CustomIcon />
	      <HorizontalStepTransition />
	      <CustomStepConnector />
	      <h3>Stepper properties</h3>
	      <PropertiesList items={propertiesData1} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <h3>Step properties</h3>
	      <PropertiesList items={propertiesData2} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <h3>StepLabel properties</h3>
	      <PropertiesList items={propertiesData3} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <h3>StepButton properties</h3>
	      <PropertiesList items={propertiesData4} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <h3>StepContent properties</h3>
	      <PropertiesList items={propertiesData5} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	     </div>);
  }
}

export default StepperPage;

