import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  simpleListCode,
  chatListCode,
  contactListCode,
  folderListCode,
  nestedListCode,
  settingsListCode,
  phoneListCode,
  messagesListCode,
  selectableListCode,
  propertiesData1,
  propertiesData2,
} from './examplesCode.js';
// import MobileTearSheet from '../../../MobileTearSheet';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import {pinkA200, transparent, yellow600, blue500, indigo500, grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import Toggle from 'material-ui/Toggle';
import Checkbox from 'material-ui/Checkbox';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import './List.css';
let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);


class ListPage extends Component {
	constructor(props) {
	 	super(props);
	 	this.state = {
	    open: false,
	  }
	  this.handleToggle = this.handleToggle.bind(this);
	  this.handleNestedListToggle = this.handleNestedListToggle.bind(this);
	}

  handleToggle() {
    this.setState({
      open: !this.state.open,
    });
  };

  handleNestedListToggle(item) {
    this.setState({
      open: item.state.open,
    });
  };

  render() {
  	const styles = {
		  root: {
		    display: 'flex',
		    flexWrap: 'wrap',
		  },
		};
		const iconButtonElement = (
		  <IconButton
		    touch={true}
		    tooltip="more"
		    tooltipPosition="bottom-left"
		  >
		    <MoreVertIcon color={grey400} />
		  </IconButton>
		);

		const rightIconMenu = (
		  <IconMenu iconButtonElement={iconButtonElement}>
		    <MenuItem>Reply</MenuItem>
		    <MenuItem>Forward</MenuItem>
		    <MenuItem>Delete</MenuItem>
		  </IconMenu>
		);
    return (<div>
	      <h2>List</h2>
 	      <p><a href="https://www.google.com/design/spec/components/lists.html#">Lists</a>用于垂直呈现多个项目作为单个连续元素。 它们可以配置为许多用途，如联系人列表，嵌套列表等。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Simple List">
	        <PrintCode code={simpleListCode} />
          <div className="show-examples">
	          <p>一个简单的<span className="code">List</span>，左，右<a href="http://www.material-ui.com/#/components/svg-icon">SVG icons</a>。</p>
	          <div className="mobile-tear-sheet">
	            <List>
					      <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
					      <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
					      <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
					      <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
					      <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
					    </List>
					    <Divider />
					    <List>
					      <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
					      <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
					      <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
					      <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
					    </List>
	          </div>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Chat List">
	        <PrintCode code={chatListCode} />
          <div className="show-examples">
	          <p>一个包含Image <a href="http://www.material-ui.com/#/components/avatar">Avatars</a>和<a href="http://www.material-ui.com/#/components/subheader">Subheader</a>的聊天列表。</p>
	          <div className="mobile-tear-sheet">
	           <List>
					      <Subheader>Recent chats</Subheader>
					      <ListItem
					        primaryText="Brendan Lim"
					        leftAvatar={<Avatar src="http://www.material-ui.com/images/ok-128.jpg" />}
					        rightIcon={<CommunicationChatBubble />}
					      />
					      <ListItem
					        primaryText="Eric Hoffman"
					        leftAvatar={<Avatar src="http://www.material-ui.com/images/kolage-128.jpg" />}
					        rightIcon={<CommunicationChatBubble />}
					      />
					      <ListItem
					        primaryText="Grace Ng"
					        leftAvatar={<Avatar src="http://www.material-ui.com/images/uxceo-128.jpg" />}
					        rightIcon={<CommunicationChatBubble />}
					      />
					      <ListItem
					        primaryText="Kerem Suer"
					        leftAvatar={<Avatar src="http://www.material-ui.com/images/kerem-128.jpg" />}
					        rightIcon={<CommunicationChatBubble />}
					      />
					      <ListItem
					        primaryText="Raquel Parrado"
					        leftAvatar={<Avatar src="http://www.material-ui.com/images/raquelromanp-128.jpg" />}
					        rightIcon={<CommunicationChatBubble />}
					      />
					    </List>
					    <Divider />
					    <List>
					      <Subheader>Previous chats</Subheader>
					      <ListItem
					        primaryText="Chelsea Otakan"
					        leftAvatar={<Avatar src="http://www.material-ui.com/images/chexee-128.jpg" />}
					      />
					      <ListItem
					        primaryText="James Anderson"
					        leftAvatar={<Avatar src="http://www.material-ui.com/images/jsa-128.jpg" />}
					      />
              </List>
	          </div>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Contact List">
	        <PrintCode code={contactListCode} />
          <div className="show-examples">
	          <p>类似于聊天列表示例，但是具有用于区段标注的文字<a href="http://www.material-ui.com/#/components/avatar">Avatar</a>（带透明背景）和插入分隔符。</p>
	          <div className="mobile-tear-sheet">
	           <List>
					      <ListItem
					        primaryText="Chelsea Otakan"
					        leftIcon={<ActionGrade color={pinkA200} />}
					        rightAvatar={<Avatar src="http://www.material-ui.com/images/chexee-128.jpg" />}
					      />
					      <ListItem
					        primaryText="Eric Hoffman"
					        insetChildren={true}
					        rightAvatar={<Avatar src="http://www.material-ui.com/images/kolage-128.jpg" />}
					      />
					      <ListItem
					        primaryText="James Anderson"
					        insetChildren={true}
					        rightAvatar={<Avatar src="http://www.material-ui.com/images/jsa-128.jpg" />}
					      />
					      <ListItem
					        primaryText="Kerem Suer"
					        insetChildren={true}
					        rightAvatar={<Avatar src="http://www.material-ui.com/images/kerem-128.jpg" />}
					      />
					    </List>
					    <Divider inset={true} />
					    <List>
					      <ListItem
					        primaryText="Adelle Charles"
					        leftAvatar={
					          <Avatar
					            color={pinkA200} backgroundColor={transparent}
					            style={{left: 8}}
					          >
					            A
					          </Avatar>
					        }
					        rightAvatar={<Avatar src="http://www.material-ui.com/images/adellecharles-128.jpg" />}
					      />
					      <ListItem
					        primaryText="Adham Dannaway"
					        insetChildren={true}
					        rightAvatar={<Avatar src="http://www.material-ui.com/images/adhamdannaway-128.jpg" />}
					      />
					      <ListItem
					        primaryText="Allison Grayce"
					        insetChildren={true}
					        rightAvatar={<Avatar src="http://www.material-ui.com/images/allisongrayce-128.jpg" />}
					      />
					      <ListItem
					        primaryText="Angel Ceballos"
					        insetChildren={true}
					        rightAvatar={<Avatar src="http://www.material-ui.com/images/angelceballos-128.jpg" />}
					      />
					    </List>
	          </div>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Folder List">
	        <PrintCode code={folderListCode} />
          <div className="show-examples">
	          <div className="mobile-tear-sheet">
	           <List>
					      <Subheader inset={true}>Folders</Subheader>
					      <ListItem
					        leftAvatar={<Avatar icon={<FileFolder />} />}
					        rightIcon={<ActionInfo />}
					        primaryText="Photos"
					        secondaryText="Jan 9, 2014"
					      />
					      <ListItem
					        leftAvatar={<Avatar icon={<FileFolder />} />}
					        rightIcon={<ActionInfo />}
					        primaryText="Recipes"
					        secondaryText="Jan 17, 2014"
					      />
					      <ListItem
					        leftAvatar={<Avatar icon={<FileFolder />} />}
					        rightIcon={<ActionInfo />}
					        primaryText="Work"
					        secondaryText="Jan 28, 2014"
					      />
					    </List>
					    <Divider inset={true} />
					    <List>
					      <Subheader inset={true}>Files</Subheader>
					      <ListItem
					        leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
					        rightIcon={<ActionInfo />}
					        primaryText="Vacation itinerary"
					        secondaryText="Jan 20, 2014"
					      />
					      <ListItem
					        leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
					        rightIcon={<ActionInfo />}
					        primaryText="Kitchen remodel"
					        secondaryText="Jan 10, 2014"
					      />
					    </List>
	          </div>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Nested List">
	        <PrintCode code={nestedListCode} />
          <div className="show-examples">
	          <p>此示例介绍了ListItem <span className="code">nestedItems</span>属性。 “已发邮件”被禁用。</p>
	          <Toggle toggled={this.state.open} onToggle={this.handleToggle} labelPosition="right" label="This toggle controls the expanded state of the submenu item."/>
            <br />
	          <div className="mobile-tear-sheet">
	          <List>
		            <Subheader>Nested List Items</Subheader>
		            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
		            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
		            <ListItem
		              primaryText="Inbox"
		              leftIcon={<ContentInbox />}
		              initiallyOpen={true}
		              primaryTogglesNestedList={true}
		              nestedItems={[
		                <ListItem
		                  key={1}
		                  primaryText="Starred"
		                  leftIcon={<ActionGrade />}
		                />,
		                <ListItem
		                  key={2}
		                  primaryText="Sent Mail"
		                  leftIcon={<ContentSend />}
		                  disabled={true}
		                  nestedItems={[
		                    <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
		                  ]}
		                />,
		                <ListItem
		                  key={3}
		                  primaryText="Inbox"
		                  leftIcon={<ContentInbox />}
		                  open={this.state.open}
		                  onNestedListToggle={this.handleNestedListToggle}
		                  nestedItems={[
		                    <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
		                  ]}
		                />,
		              ]}
		            />
		          </List>
	          </div>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Settings List">
	        <PrintCode code={settingsListCode} />
          <div className="show-examples">
	          <p>ListItem支持<a href="http://www.material-ui.com/#/components/checkbox">Checkbox</a>和<a href="http://www.material-ui.com/#/components/toggle">Toggle</a>开关。</p>
	           <div style={styles.root}>
	            <div className="mobile-tear-sheet">
	             <List>
					        <Subheader>General</Subheader>
					        <ListItem
					          primaryText="Profile photo"
					          secondaryText="Change your Google+ profile photo"
					        />
					        <ListItem
					          primaryText="Show your status"
					          secondaryText="Your status is visible to everyone you use with"
					        />
					      </List>
					      <Divider />
					      <List>
					        <Subheader>Hangout Notifications</Subheader>
					        <ListItem
					          leftCheckbox={<Checkbox />}
					          primaryText="Notifications"
					          secondaryText="Allow notifications"
					        />
					        <ListItem
					          leftCheckbox={<Checkbox />}
					          primaryText="Sounds"
					          secondaryText="Hangouts message"
					        />
					        <ListItem
					          leftCheckbox={<Checkbox />}
					          primaryText="Video sounds"
					          secondaryText="Hangouts video call"
					        />
					      </List>
	            </div>
	            <div className="mobile-tear-sheet">
	              <List>
					        <ListItem
					          primaryText="When calls and notifications arrive"
					          secondaryText="Always interrupt"
					        />
					      </List>
					      <Divider />
					      <List>
					        <Subheader>Priority Interruptions</Subheader>
					        <ListItem primaryText="Events and reminders" rightToggle={<Toggle />} />
					        <ListItem primaryText="Calls" rightToggle={<Toggle />} />
					        <ListItem primaryText="Messages" rightToggle={<Toggle />} />
					      </List>
					      <Divider />
					      <List>
					        <Subheader>Hangout Notifications</Subheader>
					        <ListItem primaryText="Notifications" leftCheckbox={<Checkbox />} />
					        <ListItem primaryText="Sounds" leftCheckbox={<Checkbox />} />
					        <ListItem primaryText="Video sounds" leftCheckbox={<Checkbox />} />
					      </List>
	            </div>
	          </div>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Phone List">
	        <PrintCode code={phoneListCode} />
          <div className="show-examples">
	          <p>一个简单的<span className="code">List</span>，左，右<a href="http://www.material-ui.com/#/components/svg-icon">SVG icons</a>。</p>
	          <div className="mobile-tear-sheet">
	            <List>
					      <ListItem
					        leftIcon={<CommunicationCall color={indigo500} />}
					        rightIcon={<CommunicationChatBubble />}
					        primaryText="(650) 555 - 1234"
					        secondaryText="Mobile"
					      />
					      <ListItem
					        insetChildren={true}
					        rightIcon={<CommunicationChatBubble />}
					        primaryText="(323) 555 - 6789"
					        secondaryText="Work"
					      />
					    </List>
					    <Divider inset={true} />
					    <List>
					      <ListItem
					        leftIcon={<CommunicationEmail color={indigo500} />}
					        primaryText="aliconnors@example.com"
					        secondaryText="Personal"
					      />
					      <ListItem
					        insetChildren={true}
					        primaryText="ali_connors@example.com"
					        secondaryText="Work"
					      />
					    </List>
	          </div>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Messages List">
	        <PrintCode code={messagesListCode} />
          <div className="show-examples">
            <p>显示格式化二级文本的两个示例 第二个例子演示了一个带有<span className="code">tooltip</span>的<a href="http://www.material-ui.com/#/components/icon-button">IconButton</a>。</p>
	          <div className="mobile-tear-sheet">
	           <List>
				        <Subheader>Today</Subheader>
				        <ListItem
				          leftAvatar={<Avatar src="http://www.material-ui.com/images/ok-128.jpg" />}
				          primaryText="Brunch this weekend?"
				          secondaryText={
				            <p>
				              <span style={{color: darkBlack}}>Brendan Lim</span> --
				              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
				            </p>
				          }
				          secondaryTextLines={2}
				        />
				        <Divider inset={true} />
				        <ListItem
				          leftAvatar={<Avatar src="http://www.material-ui.com/images/kolage-128.jpg" />}
				          primaryText={
				            <p>Summer BBQ&nbsp;&nbsp;<span style={{color: lightBlack}}>4</span></p>
				          }
				          secondaryText={
				            <p>
				              <span style={{color: darkBlack}}>to me, Scott, Jennifer</span> --
				              Wish I could come, but I&apos;m out of town this weekend.
				            </p>
				          }
				          secondaryTextLines={2}
				        />
				        <Divider inset={true} />
				        <ListItem
				          leftAvatar={<Avatar src="http://www.material-ui.com/images/uxceo-128.jpg" />}
				          primaryText="Oui oui"
				          secondaryText={
				            <p>
				              <span style={{color: darkBlack}}>Grace Ng</span> --
				              Do you have Paris recommendations? Have you ever been?
				            </p>
				          }
				          secondaryTextLines={2}
				        />
				        <Divider inset={true} />
				        <ListItem
				          leftAvatar={<Avatar src="http://www.material-ui.com/images/kerem-128.jpg" />}
				          primaryText="Birdthday gift"
				          secondaryText={
				            <p>
				              <span style={{color: darkBlack}}>Kerem Suer</span> --
				              Do you have any ideas what we can get Heidi for her birthday? How about a pony?
				            </p>
				          }
				          secondaryTextLines={2}
				        />
				        <Divider inset={true} />
				        <ListItem
				          leftAvatar={<Avatar src="http://www.material-ui.com/images/raquelromanp-128.jpg" />}
				          primaryText="Recipe to try"
				          secondaryText={
				            <p>
				              <span style={{color: darkBlack}}>Raquel Parrado</span> --
				              We should eat this: grated squash. Corn and tomatillo tacos.
				            </p>
				          }
				          secondaryTextLines={2}
				        />
				      </List>
	          </div>
	          <div className="mobile-tear-sheet">
	          <List>
			        <Subheader>Today</Subheader>
			        <ListItem
			          leftAvatar={<Avatar src="http://www.material-ui.com/images/ok-128.jpg" />}
			          rightIconButton={rightIconMenu}
			          primaryText="Brendan Lim"
			          secondaryText={
			            <p>
			              <span style={{color: darkBlack}}>Brunch this weekend?</span><br />
			              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
			            </p>
			          }
			          secondaryTextLines={2}
			        />
			        <Divider inset={true} />
			        <ListItem
			          leftAvatar={<Avatar src="http://www.material-ui.com/images/kolage-128.jpg" />}
			          rightIconButton={rightIconMenu}
			          primaryText="me, Scott, Jennifer"
			          secondaryText={
			            <p>
			              <span style={{color: darkBlack}}>Summer BBQ</span><br />
			              Wish I could come, but I&apos;m out of town this weekend.
			            </p>
			          }
			          secondaryTextLines={2}
			        />
			        <Divider inset={true} />
			        <ListItem
			          leftAvatar={<Avatar src="http://www.material-ui.com/images/uxceo-128.jpg" />}
			          rightIconButton={rightIconMenu}
			          primaryText="Grace Ng"
			          secondaryText={
			            <p>
			              <span style={{color: darkBlack}}>Oui oui</span><br />
			              Do you have any Paris recs? Have you ever been?
			            </p>
			          }
			          secondaryTextLines={2}
			        />
			        <Divider inset={true} />
			        <ListItem
			          leftAvatar={<Avatar src="http://www.material-ui.com/images/kerem-128.jpg" />}
			          rightIconButton={rightIconMenu}
			          primaryText="Kerem Suer"
			          secondaryText={
			            <p>
			              <span style={{color: darkBlack}}>Birthday gift</span><br />
			              Do you have any ideas what we can get Heidi for her birthday? How about a pony?
			            </p>
			          }
			          secondaryTextLines={2}
			        />
			        <Divider inset={true} />
			        <ListItem
			          leftAvatar={<Avatar src="http://www.material-ui.com/images/raquelromanp-128.jpg" />}
			          rightIconButton={rightIconMenu}
			          primaryText="Raquel Parrado"
			          secondaryText={
			            <p>
			              <span style={{color: darkBlack}}>Recipe to try</span><br />
			              We should eat this: grated squash. Corn and tomatillo tacos.
			            </p>
			          }
			          secondaryTextLines={2}
			        />
			      </List>
	          </div>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Selectable List">
	        <PrintCode code={selectableListCode} />
          <div className="show-examples">
            <p>可选列表包装在一级组件中的列表。</p>
            <div className="mobile-tear-sheet">
              <SelectableList defaultValue={3}>
					      <Subheader>Selectable Contacts</Subheader>
					      <ListItem
					        value={1}
					        primaryText="Brendan Lim"
					        leftAvatar={<Avatar src="http://www.material-ui.com/images/ok-128.jpg" />}
					        nestedItems={[
					          <ListItem
					            value={2}
					            primaryText="Grace Ng"
					            leftAvatar={<Avatar src="http://www.material-ui.com/images/uxceo-128.jpg" />}
					          />,
					        ]}
					      />
					      <ListItem
					        value={3}
					        primaryText="Kerem Suer"
					        leftAvatar={<Avatar src="http://www.material-ui.com/images/kerem-128.jpg" />}
					      />
					      <ListItem
					        value={4}
					        primaryText="Eric Hoffman"
					        leftAvatar={<Avatar src="http://www.material-ui.com/images/kolage-128.jpg" />}
					      />
					      <ListItem
					        value={5}
					        primaryText="Raquel Parrado"
					        leftAvatar={<Avatar src="http://www.material-ui.com/images/raquelromanp-128.jpg" />}
					      />
					    </SelectableList>
            </div>
          </div>
         </ContainerPreCode>
         <h3>List Properties</h3>
	      <PropertiesList items={propertiesData1} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <h3>ListItem Properties</h3>
	      <PropertiesList items={propertiesData2} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	     </div>);
  }
}

export default ListPage;
