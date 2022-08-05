import React, { useRef } from 'react';
import classes from './Contact.module.scss';
import emailjs from '@emailjs/browser';
import { FaPhoneSquare } from 'react-icons/fa';

const Contact = () => {
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
		<div className={classes.masscon}>
			<div className={classes.contact_container}>
				<div className={classes.form_container}>
					<h3>message</h3>
					<div className={classes.form_container_phone}>
						<i>
							{' '}
							<FaPhoneSquare />
						</i>
						<p>519 674 0709 </p>
					</div>
					<form
						action=""
						ref={form}
						className={classes.contact_form}
						onSubmit={sendEmail}
					>
						<input
							type="text"
							name="from_name"
							placeholder="Your name..."
							required
						/>
						<input
							type="email"
							name="user_email"
							placeholder="Your email..."
							required
						/>
						<textarea
							name="message"
							id=""
							cols="30"
							rows="10"
							placeholder="What would you like to say..."
							required
						></textarea>
						<div className={classes.submitbutton}>
							<input type="submit" value="Send" class="send-button" />
						</div>
					</form>
				</div>
				<div className={classes.map}>
					<iframe
						title="gmap"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.7486855082607!2d-81.88100114839041!3d42.43308397907971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882fe8107c880d0b%3A0x3c8e961f42d329ed!2sTRAK%20Tool%20%26%20Machine%20Inc!5e0!3m2!1sen!2sca!4v1658986123456!5m2!1sen!2sca"
						allowfullscreen=""
						loading="lazy"
                        style={{ width: '100%', height: '100%', border: 'none' }}
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default Contact;
