import React, { useEffect, useState } from 'react';

import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import classes from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [size, setSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const handleResize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (size.width > 768 && menuOpen) {
			setMenuOpen(false);
		}
	}, [size.width, menuOpen]);

	const menuToggleHandler = () => {
		setMenuOpen((p) => !p);
	};

	return (
		<header className={classes.header}>
			<div className={classes.header__content}>
				<Link to="/" className={classes.header__content__logo}>
					<div className={classes.traklogo}>
						<img src="./../imgs/traklogo.png" alt="" />
					</div>
				</Link>
				<nav
					className={`${classes.header__content__nav} ${
						menuOpen && size.width < 768 ? classes.isMenu : ''
					}`}
				>
					<ul>
						<li>
							<Link to="/about-us" onClick={menuToggleHandler}>
								About us
							</Link>
						</li>
						<li>
							<Link to="/contact-us" onClick={menuToggleHandler}>
								Contact us
							</Link>
						</li>
						<li>
							<Link to="/gallery" onClick={menuToggleHandler}>
								Gallery
							</Link>
						</li>
					</ul>
				</nav>
				<div className={classes.header__content__toggle}>
					{!menuOpen ? (
						<BiMenuAltRight onClick={menuToggleHandler} />
					) : (
						<AiOutlineClose onClick={menuToggleHandler} />
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
