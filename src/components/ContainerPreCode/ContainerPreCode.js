import React, { Component } from 'react';
import './ContainerPreCode.css';

class ContainerPreCode extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	open: false,
    }
    this.toggleOpen = this.toggleOpen.bind(this);
	}
	componentDidMount() {
	  window.PR.prettyPrint();
	}
	toggleOpen() {
		this.setState({
      open: !this.state.open
		});
	}

	render() {
		const props  = this.props;
		const showStyle = this.state.open ? 'auto' : 0;
		return (<div className="container-pre-code">
			<div className="title" onClick={this.toggleOpen}>{props.title || 'Simple example'}</div>
			<div  style={{ height: showStyle }} className="toggle-pannel">{props.children[0]}</div>
	    {props.children[1]}
		</div>);
	}
}

export default ContainerPreCode;
