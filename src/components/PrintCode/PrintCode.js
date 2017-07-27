import React, { Component } from 'react';
import './PrintCode.css';

class PrintCode extends Component {
	constructor(props) {
    super(props);
	}
	componentDidMount() {
	  window.PR.prettyPrint();
	}

	render() {
		const props  = this.props;
		return <pre className="prettyprint lang-js">{props.code || 'empty'}</pre>;
	}
}

export default PrintCode;
