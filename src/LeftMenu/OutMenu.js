import React from 'react';
import {
  Link
} from 'react-router-dom'
import { ListItem } from 'material-ui/List';
import Menudata from './MenuData.js';

const ResultMenu = (data) => {
  const temp = data.map((value, index) => {
	  if (value.childItem) {
	    return <ListItem key={`title-${index}`}  initiallyOpen={value.label === "Components"} primaryText={value.explain} primaryTogglesNestedList={true} nestedItems={ResultMenu(value.childItem)}/>	
	  } else {
	    return <ListItem key={`path-${index}`} className="a-block" children={<Link key={index} to={value.path}>{value.explain}</Link>} primaryTogglesNestedList={true} />	
	  }
	});
	return temp;
}
export default  ResultMenu(Menudata);
