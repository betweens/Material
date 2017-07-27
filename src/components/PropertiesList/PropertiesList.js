import React from 'react';
 
// import './PropertiesList.css';

const PropertiesList = (props) => {
	const { title, body } = props.items;
	const headerRow = title.map((val ,index) => {
		return <th key={index}>{val}</th>;
	})
	const bodyRow = body.map((result ,j) => {
		const bodyList = result.map((val, i) => {
			return <td key={`td-${i}`}>{val}</td>;
		})
		return <tr key={j}>{bodyList}</tr>;
	})
  return (<table>
    <thead><tr>{headerRow}</tr></thead>
    <tbody>{bodyRow}</tbody>
  </table>)
}
export default PropertiesList;
