const simpleExampleCode = `import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(·A tab with this route property $ {tab.props['data-route']} was activated.·);
}

const TabsExampleSimple = () => (
  <Tabs>
    <Tab label="Item One" >
      <div>
        <h2 style={styles.headline}>Tab One</h2>
        <p>
          This is an example tab.
        </p>
        <p>
          You can put any sort of HTML or react component in here. It even keeps the component state!
        </p>
        <Slider name="slider0" defaultValue={0.5} />
      </div>
    </Tab>
    <Tab label="Item Two" >
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab
      label="onActive"
      data-route="/home"
      onActive={handleActive}
    >
      <div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
);

export default TabsExampleSimple;`;
const controlledExampleCode = `import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class TabsExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Tab A" value="a">
          <div>
            <h2 style={styles.headline}>Controllable Tab A</h2>
            <p>
              Tabs are also controllable if you want to programmatically pass them their values.
              This allows for more functionality in Tabs such as not
              having any Tab selected or assigning them different values.
            </p>
          </div>
        </Tab>
        <Tab label="Tab B" value="b">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}`;
const swipeableExampleCode = `import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Tab One" value={0} />
          <Tab label="Tab Two" value={1} />
          <Tab label="Tab Three" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <h2 style={styles.headline}>Tabs with slide effect</h2>
            Swipe to see the next slide.<br />
          </div>
          <div style={styles.slide}>
            slide n°2
          </div>
          <div style={styles.slide}>
            slide n°3
          </div>
        </SwipeableViews>
      </div>
    );
  }
}`;
const iconExampleCode = `import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

const TabsExampleIcon = () => (
  <Tabs>
    <Tab icon={<FontIcon className="muidocs-icon-action-home" />} />
    <Tab icon={<ActionFlightTakeoff />} />
    <Tab icon={<FontIcon className="material-icons">favorite</FontIcon>} />
  </Tabs>
);

export default TabsExampleIcon;`;
const iconAndTextExampleCode = `import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

const TabsExampleIconText = () => (
  <Tabs>
    <Tab
      icon={<FontIcon className="material-icons">phone</FontIcon>}
      label="RECENTS"
    />
    <Tab
      icon={<FontIcon className="material-icons">favorite</FontIcon>}
      label="FAVORITES"
    />
    <Tab
      icon={<MapsPersonPin />}
      label="NEARBY"
    />
  </Tabs>
);

export default TabsExampleIconText;`;
const propertiesData1 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'children',
    'node',
    '',
    'Should be used to pass Tab components.',
  ], [
    'className',
    'string',
    '',
    '根元素的css类名称。',
  ], [
    'contentContainerClassName',
    'string',
    '',
    '内容容器的css类名称。',
  ], [
    'contentContainerStyle',
    'object',
    '',
    '覆盖内容容器的内联样式。',
  ], [
    'initialSelectedIndex',
    'number',
    '0',
    '指定初始可见标签索引。 如果initialSelectedIndex已设置但大于指定选项卡的总数，那么initialSelectedIndex将恢复为默认值。 如果将initialSelectedIndex设置为任何负值，则不会选择任何标签。',
  ], [
    'inkBarStyle',
    'object',
    '',
    '覆盖InkBar的内联样式。',
  ], [
    'onChange',
    'function',
    '() => {}',
    '当所选值变化时调用。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ], [
    'tabItemContainerStyle',
    'object',
    '',
    '覆盖tab-labels容器的内联样式。',
  ], [
    'tabTemplate',
    'function',
    '',
    '覆盖用于包装每个选项卡元素的内容的默认选项卡模板。',
  ], [
    'tabTemplateStyle',
    'object',
    '',
    '覆盖tab模板的内联样式。',
  ], [
    'value',
    'any',
    '',
    '使选项卡可控制，并选择其值与此prop匹配的选项卡。',
  ]]
};
const propertiesData2 = {
  title: ['Name', 'Type', 'Default', 'Description'],
  body:[[
    'buttonStyle',
    'object',
    '',
    '覆盖按钮元素的内联样式。',
  ], [
    'className',
    'string',
    '',
    '根元素的css类名称。',
  ], [
    'Icon',
    'node',
    '',
    '设置选项卡的图标，可以传递FontIcon或SvgIcon元素。',
  ], [
    'label',
    'node',
    '',
    '将选项卡项的文本值设置为指定的字符串。',
  ], [
    'onActive',
    'function',
    '',
    '当活动标签通过触摸或点击更改时触发。 当活动标签更改时，使用此事件指定任何功能。 例如，当第三个选项卡变为活动状态时，我们正在使用它来路由到家。 该功能将始终接收活动选项卡作为第一个参数。',
  ], [
    'label',
    'node',
    '',
    '将选项卡项的文本值设置为指定的字符串。',
  ], [
    'style',
    'object',
    '',
    '覆盖根元素的内联样式。',
  ], [
    'value',
    'any',
    '',
    '如果将值传递给Tabs组件，则此值也是必需的。 它为选项卡分配一个值，以便它可以通过Tabs进行选择。',
  ]]
};
export {
  simpleExampleCode,
  controlledExampleCode,
  swipeableExampleCode,
  iconExampleCode,
  iconAndTextExampleCode,
  propertiesData1,
  propertiesData2,
}
