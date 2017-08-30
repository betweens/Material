import React, { Component } from 'react';
import { 
	PrintCode, 
	ContainerPreCode,
	PropertiesList,
} from '../../../components'
import {
  iconMenuPositioningCode,
  controlledIconMenusCode,
  scrollableIconMenuCode,
  nestedIconMenusCode,
  propertiesData,
} from './examplesCode.js';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import RaisedButton from 'material-ui/RaisedButton';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Divider from 'material-ui/Divider';
import Download from 'material-ui/svg-icons/file/file-download';
// import './IconMenu.css';
 
class IconMenuPage extends Component {
	constructor(props) {
	 	super(props);
	 	this.state = {
	    valueSingle: '3',
	    valueMultiple: ['3', '5'],
	  };
	}
  
  handleChangeSingle(event, value) {
    this.setState({
      valueSingle: value,
    });
  };

  handleChangeMultiple(event, value) {
    this.setState({
      valueMultiple: value,
    });
  };

  handleOpenMenu() {
    this.setState({
      openMenu: true,
    });
  }

  handleOnRequestChange(value) {
    this.setState({
      openMenu: value,
    });
  }
  render() {
    return (<div>
	      <h2>Icon Menu</h2>
	      <p><a hrf="https://www.google.com/design/spec/components/menus.html#menus-usage">Icon Menus</a> 是从图标打开的菜单。 他们可以提供与图标相关的选项，并使用最小的空间。</p>
	      <h3>Examples</h3>
	      <ContainerPreCode title="Icon Menu Positioning">
	        <PrintCode code={iconMenuPositioningCode} />
          <div className="show-examples">
	          <p>简单的图标菜单显示了使用<span clasName="code">anchorOrigin</span>和<span clasName="code">targetOrigin</span>属性可能的一些布局。 </p>
	          <IconMenu
				      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
				      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
				      targetOrigin={{horizontal: 'left', vertical: 'top'}}
				    >
			      <MenuItem primaryText="Refresh" />
			      <MenuItem primaryText="Send feedback" />
			      <MenuItem primaryText="Settings" />
			      <MenuItem primaryText="Help" />
			      <MenuItem primaryText="Sign out" />
			    </IconMenu>
			    <IconMenu
			      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
			      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
			      targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
			    >
			      <MenuItem primaryText="Refresh" />
			      <MenuItem primaryText="Send feedback" />
			      <MenuItem primaryText="Settings" />
			      <MenuItem primaryText="Help" />
			      <MenuItem primaryText="Sign out" />
			    </IconMenu>
			    <IconMenu
			      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
			      anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
			      targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
			    >
			      <MenuItem primaryText="Refresh" />
			      <MenuItem primaryText="Send feedback" />
			      <MenuItem primaryText="Settings" />
			      <MenuItem primaryText="Help" />
			      <MenuItem primaryText="Sign out" />
			    </IconMenu>
			    <IconMenu
			      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
			      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
			      targetOrigin={{horizontal: 'right', vertical: 'top'}}
			    >
			      <MenuItem primaryText="Refresh" />
			      <MenuItem primaryText="Send feedback" />
			      <MenuItem primaryText="Settings" />
			      <MenuItem primaryText="Help" />
			      <MenuItem primaryText="Sign out" />
			    </IconMenu>
	        </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Controlled Icon Menus">
	        <PrintCode code={controlledIconMenusCode} />
          <div className="show-examples">
            <p>三个控制示例，第一个允许单个选择，第二个多个选择，第三个使用内部状态。</p>
             <IconMenu
			          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
			          onChange={this.handleChangeSingle}
			          value={this.state.valueSingle}
			        >
			          <MenuItem value="1" primaryText="Refresh" />
			          <MenuItem value="2" primaryText="Send feedback" />
			          <MenuItem value="3" primaryText="Settings" />
			          <MenuItem value="4" primaryText="Help" />
			          <MenuItem value="5" primaryText="Sign out" />
			        </IconMenu>
			        <IconMenu
			          iconButtonElement={<IconButton><ContentFilter /></IconButton>}
			          onChange={this.handleChangeMultiple}
			          value={this.state.valueMultiple}
			          multiple={true}
			        >
			          <MenuItem value="1" primaryText="Blu-ray" />
			          <MenuItem value="2" primaryText="Cassette" />
			          <MenuItem value="3" primaryText="CD" />
			          <MenuItem value="4" primaryText="DVD Audio" />
			          <MenuItem value="5" primaryText="Hybrid SACD" />
			          <MenuItem value="6" primaryText="Vinyl" />
			        </IconMenu>
			        <IconMenu
			          iconButtonElement={<IconButton><FileFileDownload /></IconButton>}
			          open={this.state.openMenu}
			          onRequestChange={this.handleOnRequestChange}
			        >
			          <MenuItem value="1" primaryText="Windows App" />
			          <MenuItem value="2" primaryText="Mac App" />
			          <MenuItem value="3" primaryText="Android App" />
			          <MenuItem value="4" primaryText="iOS App" />
			        </IconMenu>
			        <RaisedButton onClick={this.handleOpenMenu} label="Downloads" />
          </div>
	      </ContainerPreCode>
	      <ContainerPreCode title="Scrollable Icon Menu">
	        <PrintCode code={scrollableIconMenuCode} />
          <div className="show-examples">
	          <p><span clasName="code">maxHeight</span>属性限制菜单的高度，高于该高度可以滚动。</p>
	           <IconMenu
						    iconButtonElement={<IconButton><MapsPlace /></IconButton>}
						    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
						    targetOrigin={{horizontal: 'left', vertical: 'top'}}
						    maxHeight={272}
						  >
						    <MenuItem value="AL" primaryText="Alabama" />
						    <MenuItem value="AK" primaryText="Alaska" />
						    <MenuItem value="AZ" primaryText="Arizona" />
						    <MenuItem value="AR" primaryText="Arkansas" />
						    <MenuItem value="CA" primaryText="California" />
						    <MenuItem value="CO" primaryText="Colorado" />
						    <MenuItem value="CT" primaryText="Connecticut" />
						    <MenuItem value="DE" primaryText="Delaware" />
						    <MenuItem value="DC" primaryText="District Of Columbia" />
						    <MenuItem value="FL" primaryText="Florida" />
						    <MenuItem value="GA" primaryText="Georgia" />
						    <MenuItem value="HI" primaryText="Hawaii" />
						    <MenuItem value="ID" primaryText="Idaho" />
						    <MenuItem value="IL" primaryText="Illinois" />
						    <MenuItem value="IN" primaryText="Indiana" />
						    <MenuItem value="IA" primaryText="Iowa" />
						    <MenuItem value="KS" primaryText="Kansas" />
						    <MenuItem value="KY" primaryText="Kentucky" />
						    <MenuItem value="LA" primaryText="Louisiana" />
						    <MenuItem value="ME" primaryText="Maine" />
						    <MenuItem value="MD" primaryText="Maryland" />
						    <MenuItem value="MA" primaryText="Massachusetts" />
						    <MenuItem value="MI" primaryText="Michigan" />
						    <MenuItem value="MN" primaryText="Minnesota" />
						    <MenuItem value="MS" primaryText="Mississippi" />
						    <MenuItem value="MO" primaryText="Missouri" />
						    <MenuItem value="MT" primaryText="Montana" />
						    <MenuItem value="NE" primaryText="Nebraska" />
						    <MenuItem value="NV" primaryText="Nevada" />
						    <MenuItem value="NH" primaryText="New Hampshire" />
						    <MenuItem value="NJ" primaryText="New Jersey" />
						    <MenuItem value="NM" primaryText="New Mexico" />
						    <MenuItem value="NY" primaryText="New York" />
						    <MenuItem value="NC" primaryText="North Carolina" />
						    <MenuItem value="ND" primaryText="North Dakota" />
						    <MenuItem value="OH" primaryText="Ohio" />
						    <MenuItem value="OK" primaryText="Oklahoma" />
						    <MenuItem value="OR" primaryText="Oregon" />
						    <MenuItem value="PA" primaryText="Pennsylvania" />
						    <MenuItem value="RI" primaryText="Rhode Island" />
						    <MenuItem value="SC" primaryText="South Carolina" />
						    <MenuItem value="SD" primaryText="South Dakota" />
						    <MenuItem value="TN" primaryText="Tennessee" />
						    <MenuItem value="TX" primaryText="Texas" />
						    <MenuItem value="UT" primaryText="Utah" />
						    <MenuItem value="VT" primaryText="Vermont" />
						    <MenuItem value="VA" primaryText="Virginia" />
						    <MenuItem value="WA" primaryText="Washington" />
						    <MenuItem value="WV" primaryText="West Virginia" />
						    <MenuItem value="WI" primaryText="Wisconsin" />
						    <MenuItem value="WY" primaryText="Wyoming" />
						  </IconMenu>
	        </div>
	      </ContainerPreCode>
	       <ContainerPreCode title="nested Icon Menu">
	        <PrintCode code={nestedIconMenusCode} />
          <div className="show-examples">
            <p>IconMenu中嵌套菜单的示例。</p>
            <IconMenu
					    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
					    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
					    targetOrigin={{horizontal: 'left', vertical: 'top'}}
					  >
					    <MenuItem
					      primaryText="Copy & Paste"
					      rightIcon={<ArrowDropRight />}
					      menuItems={[
					        <MenuItem primaryText="Cut" />,
					        <MenuItem primaryText="Copy" />,
					        <Divider />,
					        <MenuItem primaryText="Paste" />,
					      ]}
					    />

					    <MenuItem
					      primaryText="Case Tools"
					      rightIcon={<ArrowDropRight />}
					      menuItems={[
					        <MenuItem primaryText="UPPERCASE" />,
					        <MenuItem primaryText="lowercase" />,
					        <MenuItem primaryText="CamelCase" />,
					        <MenuItem primaryText="Propercase" />,
					      ]}
					    />
					    <Divider />
					    <MenuItem primaryText="Download" leftIcon={<Download />} />
					    <Divider />
					    <MenuItem value="Del" primaryText="Delete" />

					  </IconMenu>
          </div>
         </ContainerPreCode>
	      <h3>属性</h3>
	      <PropertiesList items={propertiesData} />
	      <p>Other properties (not documented) are applied to the root element.</p>
	      <p><small>* required property</small></p>
	     </div>);
  }
}

export default IconMenuPage;
