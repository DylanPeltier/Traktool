import React from 'react';
import classes from './HomePage.module.scss';

const HomePage = () => {
	return (
		<div className={classes.middletext}>
			<div className={classes.toptext}>
				<h2>
					{' '}
					<span class={classes.h2green}> you </span> need it
				</h2>
			</div>
			<div className={classes.bottomtext}>
				<h1>
					{' '}
					<span class={classes.h1orange}> we </span> make it
				</h1>
			</div>
		</div>
	);
};

export default HomePage;
