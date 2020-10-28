import React from 'react';
/*scroll ce se koristiti kao dijete*/

const Scroll = (props) => {
	return (
		<div style={{ 	overflow: 'scroll', 
						border: '5px solid black', 
						height: '800px' }}>
			{props.children}
		</div>
	);
};

export default Scroll;