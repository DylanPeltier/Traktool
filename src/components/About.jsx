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
					TRAK Tool & Machine was started in 1986, incorporated in 1988.  Originally located in Ron Bailey’s (founder) back yard, moved to our current location in 1987.  Die repair and maintenance for local automotive parts/stamping factories was its first niche, followed by new die building.  We have been known throughout Chatham-Kent for our custom machinery capabilities, which has led us to building dies, fixtures, and other custom machinery throughout Southern Ontario, US, Mexico and beyond.
					</p>
				</div>
				{/* <div className={classes.image}></div> */}
			</div>
		</div>
	);
};

export default About;
