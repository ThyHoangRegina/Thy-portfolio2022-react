import React from 'react';
import './Contact.css';
import anhcontact from './anhcontact.jpg';
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact (){
    return (
        <div className='contact' id='Contact'>
            <div className='left'>
                <Contacttitle/>
                <Contactimage/>
            </div>
            <div className='right'>
                <Contactmethod/>
                <Contactmessage/>
            </div>
        </div>
    )
}
export function Contacttitle (){
    return(
        <div className='contacttitle'>
            <p>Contact</p>
        </div>
    )
}
export function Contactimage (){
    return(
        <div className='contactimage'>
            <img src={anhcontact} alt='Anh contact'/>
        </div>
    )
}
export function Contactmethod(){
    return(
        <div className='contactmethod'>
            <div className='contact--email contact--container'>
                <HiOutlineMail className='icon--mail'/>
                <h>Email</h>
                <a href='mailto:thyhoangdev@gmail.com' target="_blank">thyhoangdev@gmail.com</a>
            </div>
            <div className='contact--phone contact--container'>
                <HiPhone className='icon--phone'/>
                <h>Phone</h>
                <p className='small-font'>(+84)905802734</p>
            </div>
        </div>
    )
}
export function Contactmessage(){
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7itsaev', 'template_3sqi11s', form.current, 'yPCxxju6zTe8nr3OI')

    e.target.reset();
    
  };
    return(
        <div className='contactmessage'>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your name' required></input>
                <input type="email" name='email' placeholder='Your email' required></input>
                <textarea name='message' rows="4" placeholder='Your message...' required></textarea>
                <button type='sunmit' className='btn--message'>Send Message</button>
            </form>
        </div>
    )
}