import React from 'react';
import './PrintCode.css';
const PrintCode = (props) => <pre className="prettyprint lang-js">{props.code || 'empty'}</pre>;

export default PrintCode;
