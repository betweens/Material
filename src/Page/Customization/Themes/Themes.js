import React from 'react';
import { PrintCode } from '../../../components';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import FlatButton from 'material-ui/FlatButton';

import RaisedButton from 'material-ui/RaisedButton';
// import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/stars';
// import {fullWhite} from 'material-ui/styles/colors';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {
  themesCode,
  customizingTheme,
  usingCustomTheme,
  defaultsTheme,
} from './examplesCode.js';
// import './Themes.css';
function handleActive(tab) {
 // alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
 //window.custom && window.custom();
 console.log(tab);
}
/*function handleChange(value) {
  console.log(value);
}*/
const Themes = () => {
  const btnStle = {
    marginTop: '10px',
    minHeight: '24px',
    textAlign: 'center',
  }
  const checkboxStyle = {
    marginTop: '16px',
    whiteSpace: 'nowrap',
    width: 'auto',
  }
  const TextStyle = {
    width: '100%',
    textAlign: 'left',
  }

  return (<div className="themes">
      <h2>主题</h2>
      <h3>例如:</h3>
      <div className="border-code">
        <Tabs>
          <Tab label="Light Theme (Default)" > </Tab>
          <Tab label="Dark Theme" onActive={handleActive}></Tab>
        </Tabs>
        <div className="flex-hrz">
          <div className="flex-full">
            <div style={btnStle}><FloatingActionButton disabled={true}> <ActionAndroid /> </FloatingActionButton></div>
            <div style={btnStle}><RaisedButton style={btnStle} label="Primary" primary={true} /></div>
            <div style={btnStle}><RaisedButton style={btnStle} label="Secondary" secondary={true}  /></div>
            <div style={btnStle}><RaisedButton style={btnStle} label="Disabled" disabled={true} /></div>
            <div style={btnStle}><RaisedButton style={btnStle} label="Default" /></div>
          </div>
          <div className="flex-full">
            <Checkbox style={checkboxStyle} label="checkbox" disabled={false} />
            <Checkbox style={checkboxStyle} label="checkbox" disabled={true} />
            <RadioButtonGroup style={checkboxStyle} name="shipSpeed" defaultSelected="usd">
               <RadioButton value="usd" label="USD" />
               <RadioButton value="euro" label="Euro"/>
               <RadioButton value="mxn" label="MXN" disabled={true} />
            </RadioButtonGroup>
            <Toggle style={checkboxStyle} label="Toggle" defaultToggled={false} />
            <Toggle style={checkboxStyle} label="Toggle" defaultToggled={true} disabled={true} />
          </div>
          <div className="flex-full">
            <TextField hintText="TextField" style={btnStle} />
            <DatePicker hintText="Landscape Dialog" mode="landscape" style={TextStyle} />
            <DropDownMenu value={1} onChange={this.handleChange} openImmediately={false} style={TextStyle} >
              <MenuItem value={1} primaryText="Never" />
              <MenuItem value={2} primaryText="Every Night" />
              <MenuItem value={3} primaryText="Weeknights" />
              <MenuItem value={4} primaryText="Weekends" />
              <MenuItem value={5} primaryText="Weekly" />
            </DropDownMenu>
          </div>
        </div>
        <Slider name="slider0" defaultValue={0.5} style={{ padding: '20px 50px'}}/>
        <div className="flex-hrz" style={{  margin: '20px 0'}}>
          <div className="flex-full" style={{ textAlign: 'center'}}><FlatButton label="Default" /></div>
          <div className="flex-full" style={{ textAlign: 'center'}}><FlatButton label="Default" /></div>
          <div className="flex-full" style={{ textAlign: 'center'}}><FlatButton label="Default" /></div>
        </div>
      </div>
      <h3>预定义主题</h3>
      <p>我们用Material-UI有两个基础主题：浅色和黑暗。 它们位于<a href="https://github.com/callemall/material-ui/blob/master/src/styles/baseThemes/">material-ui/styles/baseThemes/</a>下。 自定义主题可以类似地定义。 <a href="https://github.com/callemall/material-ui/blob/master/src/styles/baseThemes/lightBaseTheme.js">lightBaseTheme</a>是默认的，所以除了使用<span className="code">MuiThemeProvider</span>之外，您不需要执行任何操作即可使用它。 对于<a href="https://github.com/callemall/material-ui/blob/master/src/styles/baseThemes/darkBaseTheme.js">darkBaseTheme</a>，您可以使用此代码段：</p>
      <PrintCode code={themesCode} />
      <h3>怎么运行的</h3>
      <p>为了实现上述示例中可以看到的可定制级别，<span className="code">Material-UI</span>正在使用一个名为<span className="code">muiTheme</span>的单个JS对象。 默认情况下，此<span className="code">muiTheme</span>对象基于<a href="https://github.com/callemall/material-ui/blob/master/src/styles/baseThemes/lightBaseTheme.js">lightBaseTheme</a>。</p>
      <h3>The muiTheme object contains the following keys:</h3>
      <ul>
        <li><span className="code">spacing</span>: 可以用来改变组件的间距。</li>
        <li><span className="code">fontFamily</span>: 可用于更改默认字体系列。</li>
        <li><span className="code">palette</span>: 可以用来改变组件的颜色。</li>
        <li><span className="code">zIndex</span>: 可以用来改变每个组件的层级。</li>
        <li><span className="code">isRtl</span>: 可用于启用从右到左的模式</li>
        <li>每个组件还有一个键，以便您可以单独自定义它们：
          <ul>
            <li>appBar</li>
            <li>avatar</li>
            <li>......</li>
          </ul>
        </li>
      </ul>
      <h3>自定义主题</h3>
      <p>要自定义<span className="code">muiTheme</span>您必须使用<span className="code">getMuiTheme()</span>来计算一个有效的<span className="code">muiTheme</span>对象，并提供一个包含您要自定义的私有对象。 然后，您可以使用<span className="code">{`<MuiThemeProvider />`}</span>将其提供给组件。</p>
      <PrintCode code={customizingTheme} />
      <p>在内部，Material-UI组件使用React的上下文功能来实现主题。 事实上，上下文对于像主题这样的概念来说是非常方便的，这些概念通常以分级方式实现。 但是，应该将其视为<strong>实施细节</strong>。</p>
      <h3>在您的自定义组件上使用muiTheme</h3>
      <p>在某些情况下，要保持界面一致，您想要访问<span className="code">MuiThemeProvider</span>组件提供的muiTheme变量。 为此，我们公开了一个高阶组件:<span className="code">muiThemeable</span>。 这是一个例子:</p>
      <PrintCode code={usingCustomTheme} />
      <h3>API</h3>
      <p>以下列出的项目是与Material-UI主题如何工作相关的所有内容。</p>
      <p><span className="code">getMuiTheme(muiTheme)</span></p>
      <p>此功能需要在<span className="code">muitheme</span>,它将使用这个参数来计算并返回一个增强<span className="code">muitheme</span>.</p>
      <p>请记住，对主题对象的任何更改都必须作为另一个调用此函数显示。 <strong>不要直接</strong>突变主题，因为任何组件将不会反映出效果，直到另一个渲染被触发为该组件，使您的应用程序处于不稳定状态。</p>
      <p>要查看可以覆盖的值，请使<a href="https://github.com/callemall/material-ui/blob/master/src/styles/getMuiTheme.js">source</a>。<span className="code">lightBaseTheme</span>对象看起来像这样（这些是默认值）:</p>
      <PrintCode code={defaultsTheme} />
      <p><span className="code">{`<MuiThemeProvider>`}</span></p>
      <p>该组件将主题作为属性，并将其传递给上下文。 这最好应该在你的组件树的根目录下。 第一个例子演示了它的用法。</p>
      <p><span className="code">muiThemeable()</span></p>
      <p>这个更高阶的组件包装另一个组件以提供一个muiTheme属性。 传入您的组件，它将返回包装的组件。</p>
     </div>);
};

export default Themes;
