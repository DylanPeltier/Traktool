import React from 'react';
import classes from './About.module.scss';

const About = () => {
	return (
		<div className={classes.whole}>
			<div className={classes.text}>
				<div className={classes.title_text}>
					<h1>about us</h1>
				</div>
				<div className={classes.para}>
					<p>
						Through our knowledgeable and experienced staff, TRAK strives to
						deliver to our customers the best possible solution at a low cost
						with great attention to quality and durability.
					</p>
				</div>
				{/* <div className={classes.image}></div> */}
			</div>
		</div>
	);
};

export default About;
