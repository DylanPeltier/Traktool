import classes from './Gallery.module.scss';

import React from 'react';

const Gallery = () => {
	return (
		<div className={classes.gallery_container}>
			<div className={classes.gallery_container_title}>
				<h1>some of our work</h1>
			</div>
			<div className={classes.gallery_container_imgs_container}>
				<div className="gallery_container_imgs_container_frame">
					<img src="../imgs/storefront.jpg" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Gallery;
