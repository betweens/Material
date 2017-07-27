import React, { Component } from 'react';
import './ContainerPreCode.css';

class ContainerPreCode extends Component {
	constructor(props) {
    super(props);
	}
	componentDidMount() {
	  window.PR.prettyPrint();
	}

	render() {
		const props  = this.props;
		return (<div className="container-pre-code">
			<div className="title">{props.title || 'Simple example'}</div>
	    {props.children}
		</div>);
	}
}

export default ContainerPreCode;
