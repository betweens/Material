// import React from 'react';
const formDividerCode = `import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
  marginLeft: 20,
};

const DividerExampleForm = () => (
  <Paper zDepth={2}>
    <TextField hintText="First name" style={style} underlineShow={false} />
    <Divider />
    <TextField hintText="Middle name" style={style} underlineShow={false} />
    <Divider />
    <TextField hintText="Last name" style={style} underlineShow={false} />
    <Divider />
    <TextField hintText="Email address" style={style} underlineShow={false} />
    <Divider />
  </Paper>
);

export default DividerExampleForm;`;
const insetDividerCode = `import React from 'react';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import MobileTearSheet from '../../../MobileTearSheet';

const DividerExampleList = () => (
  <MobileTearSheet height={250}>
    <List>
      <ListItem insetChildren={true} primaryText="Janet Perkins Bennet" />
      <ListItem insetChildren={true} primaryText="Peter Carlsson" />
    </List>
    <Divider inset={true} />
    <List>
      <ListItem insetChildren={true} primaryText="Aaron Bennet" />
      <ListItem insetChildren={true} primaryText="Abbey Christensen" />
    </List>
  </MobileTearSheet>
);

export default DividerExampleList;`;
const menuDividerCode = `import React from 'react';
import Divider from 'material-ui/Divider';
import {Menu, MenuItem} from 'material-ui/Menu';

const style = {
  // Without this, the menu overflows the CodeExample container.
  float: 'left',
};

const DividerExampleMenu = () => (
  <Menu desktop={true} style={style}>
    <MenuItem primaryText="Settings" />
    <MenuItem primaryText="Help & feedback" />
    <Divider />
    <MenuItem primaryText="Sign out" />
  </Menu>
);

export default DividerExampleMenu;`;
const propertiesData = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'inset',
    'string',
    '',
    '如果为true，则Divider将缩进。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ]]
};
export {
  formDividerCode,
  insetDividerCode,
  menuDividerCode,
  propertiesData,
}
