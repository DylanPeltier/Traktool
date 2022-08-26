// Add secret button to HomePage that add words "Done Right. Cheap. On Time.Pick Two"

import React, { useState } from 'react';
import classes from './HomePage.module.scss';

const HomePage = () => {
	const [count, setCount] = React.useState(1);

	const onClick = () => {
		setCount(count + 1);
		console.log(count);

		if (count === 5) {
			document.getElementById("img").className = classes.imagetwo;
			setTimeout(() => {
				document.getElementById("img").className = classes.image;
			}, 15000);
			setCount(1);
		}
	}

	return <div className={classes.svg}>
			<div id='img' className={classes.image}></div>
			<div onClick={onClick} className={classes.secret}>
		</div>
	</div>;
};

export default HomePage;
