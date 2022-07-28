import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import classes from './ContactUs.module.scss';

export const ContactUs = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_4qgvhue',
				'template_e7luihz',
				form.current,
				'vD32iZkP7_mejxcCI',
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				},
			);
	};

	return (
		<div className={classes.form}>
			<form ref={form} onSubmit={sendEmail}>
				<div className={classes.label}>
					<label>Name</label>
				</div>
				<div className={classes.input}>
					<input type="text" name="user_name" />
				</div>
				<div className={classes.label}>
					<label>Email</label>
				</div>
				<div className={classes.input}>
					<input type="email" name="user_email" />
				</div>
				<div className={classes.label}>
					<label>Message</label>
				</div>
				<div className={classes.input}>
					<textarea name="message" />
				</div>
				<div className={classes.submit}>
					<input type="submit" value="Send" />
				</div>
			</form>
		</div>
	);
};

export default ContactUs;
