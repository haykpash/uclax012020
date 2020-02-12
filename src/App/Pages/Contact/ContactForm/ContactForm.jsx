import React, { useRef, useState } from 'react';
import './ContactForm.scss';
import { emailCheck } from '../../../common/utilities.js';

const ContactForm = () => {
       // State
    const [emailIsValid, updateEmailIsValid] = useState(true);

    // refs :: Giving React 's Virtual DOM accsess to the Phisycal DOM elements on the page
    const emailRef = useRef();
    const messageRef = useRef();

    const handleClick = () => {
        console.log('You click me');
    }

        const validateEmail = () => {
            const emailValue = emailRef.current.value;
            console.log('validating email', emailRef.current.value); 
             
            if (emailValue.length > 3 && !emailCheck(emailValue)) {
                updateEmailIsValid(false);
            } else {
                updateEmailIsValid(true);
            }            
    }

    return (
    <div className={ 'ContactForm' } >
        <div className="form-group">
            <div className="left">
                <label className="email">Email</label>
            </div>
            <div className="right">
                <input 
                    className={ emailIsValid ? '':'invalid' }
                    ref={ emailRef } 
                    id="email" 
                    placeholder="email@somedomain.com" 
                    onChange={ validateEmail }
                />
            </div>
        </div>
        <div className="form-group">
            <div className="left">
                <label htmlFor="left">Message</label> 
            </div>
            <div className="right">
                <textarea ref={ messageRef } id="message" placeholder="your mesage goes here..." />
            </div>
        </div>
        <div className="form-group">
            <div className="left" />
            <div className="right">
                <button
                    onClick={ handleClick }
                   >Send Email</button>
            </div>
        </div>     
    </div>
    );
}

export default ContactForm;