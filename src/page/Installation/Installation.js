import React from 'react';
import './Installation.css';
import { PrintCode } from '../../components/index.js';
const Installation = () => {
  const code = `import injectTapEventPlugin from 'react-tap-event-plugin';\n

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();`;
  return (<div className="installation">
    <PrintCode code={code} />
  </div>);
};

export default Installation;
