import classes from './Gallery.module.scss';
import React from 'react';
import Slider from './Slider/Slider';

const Gallery = () => {
	return (
		<div className={classes.container}>
			<div className={classes.title}>
				<h1>Our Work</h1>
			</div>
			<Slider />
		</div>
	);
};

export default Gallery;
