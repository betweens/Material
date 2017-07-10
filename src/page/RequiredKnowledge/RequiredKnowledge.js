import React, { Component } from 'react';
import './RequiredKnowledge.css';
class RequiredKnowledge extends Component {
	componentWillMount() {
		console.log(this);
	}
  render() {
    return (
      <div className="required-knowledge">
        所需知识
      </div>
    );
  }
}

export default RequiredKnowledge;
