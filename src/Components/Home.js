import React from 'react'
import { GiOwl, GiHamburgerMenu } from "react-icons/gi";
import { GrDocumentPdf } from "react-icons/gr";
import background from './hero_photo.jpg';
import { FiMenu, FiX } from "react-icons/fi";
import './Home.css'
import CV from './FE-dev-fresher-thy-hoang.pdf';
import { useState } from 'react';

export default function Home (){
    return (
        <div className='home' style={{
            backgroundImage:`url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
            }}>
            <Navbar />
            <Intro/>
        </div>
            
       
    )
}

export function Hambar(){
    return(
        <div className='hambar'>
            <GiHamburgerMenu className='ham--icon'/>
            <FiX className='ham--icon ham--off'/>
        </div>
    )
}
export function Navbar (){
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className='navbar'>
            <GiOwl className='owl'/>
            <div className='hambar'>
                <GiHamburgerMenu className={isOpen ? 'ham--icon' : 'ham--icon ham--off'} onClick={()=>setIsOpen(!isOpen)}/>
                <FiX className={isOpen ? 'ham--icon ham--off' : 'ham--icon'}onClick={()=>setIsOpen(!isOpen)}/>
            </div>
            <ul className= {isOpen ? 'navbar--ul ham--move' :'navbar--ul '}>
                <li><a href='#Home'>Home</a></li>
                <li><a href='#About'>About</a></li>
                <li><a href='#Work'>Work</a></li>
                <li><a href='#Skills'>Skills</a></li>
                <li><a href='#Contact'> <Contactbutton/></a></li>
            </ul>
        </div>
    )
}



export function Intro(){
    return (
        <div className='intro'>
            <p className='intro--1'>Welcome! My name is</p>
            <p className='intro--2'><strong>THY HOANG</strong></p>
            <p className='intro--3 intro--1'>A Front-end Web Developer looking for a chance to cooperate with awesome people with same values, striving for excellence, being innovative and living diversity</p>
            <div>
                <button className='btn__download'><GrDocumentPdf/> <a href={CV} download="FE fresher Thyhoang CV">Download CV</a></button>

            </div>
        
        </div>
    )
}
export function Contactbutton(){
    return (
        <div className='contactbutton'>
            <p>Contact</p>
        </div>
    )
}

