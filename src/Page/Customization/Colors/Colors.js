import React from 'react';
import './Colors.css';
import { colors } from 'material-ui/styles';
const Styles = () => {
  const li = [];
  let i = 0;
  let value = null;
  for (value in colors) {
    li.push(<li key={i++} style={{'backgroundColor': colors[value]}}>{colors[value]}</li>);
  }
  return (<div>
      <h2>UI调色板</h2>
      <p>我们为UI调色板中使用的<a href="https://www.google.com/design/spec/style/color.html#color-ui-color-palette">每种颜色</a>创建了JavaScript变量。 它们在<a href="https://github.com/callemall/material-ui/blob/master/src/styles/colors.js">styles/colors.js</a>中。</p>
      <ol>{li}</ol>
     </div>);
};

export default Styles;
