import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Menudata from './MenuData.js';

const getValue = (object) => {
  console.log(object); 
}
const ResultMenu = (data) => {
  const temp = data.map((value, index) => {
	  if (value.childItem) {
	    return <ListItem key={index}  initiallyOpen={value.label === "Components"} primaryText={value.explain} primaryTogglesNestedList={true} nestedItems={ResultMenu(value.childItem)}/>	
	  } else {
	    return <ListItem key={index} onTouchTap={() => { getValue(value.path)}} primaryText={value.explain} primaryTogglesNestedList={true} />	
	  }
	});
	return temp;
}
export default  ResultMenu(Menudata);
