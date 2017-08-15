const codeApp = `import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

const App = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);`;
const MyAwesomeReactComponent = `import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const MyAwesomeReactComponent = () => (
  <RaisedButton label="Default" />
);

export default MyAwesomeReactComponent;`;
const complex = "import RaisedButton from 'material-ui/RaisedButton';";
const simple = "import {RaisedButton} from 'material-ui';";
export {
  codeApp,
  MyAwesomeReactComponent,
  complex,
  simple,
}
