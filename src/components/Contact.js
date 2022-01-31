import React from "react";
import { FiMail, FiPhoneCall } from 'react-icons/fi';

const Contact = () => {
    return(
        <section id='contact' data-cy="contact-section">
            <h2>Contactame</h2>
            <div className='contact-info'>
				<div className='info-container'>
					<FiPhoneCall className='info-icon' />
					<h3 className='info-name'>Teléfono</h3>
					<p className='info'>261-335-2786</p>
				</div>
				<div className='info-container'>
					<FiMail className='info-icon' />
					<h3 className='info-name'>E-mail</h3>
					<p className='info'>pablofretes.balzarelli@gmail.com</p>
				</div>
			</div>
        </section>
    );
};

export default Contact;