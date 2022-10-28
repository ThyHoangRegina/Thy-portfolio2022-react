import React from 'react';
import './Skills.css'
import { SiTailwindcss } from "react-icons/si";
import {IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaReact, FaCss3Alt } from "react-icons/fa";
export default function Skills (){
    return (
        <div className='skills' id='Skills'>
            <Skilltitle/>
            <Skillicon/>
            <Skillbar/>
        </div>
    )
}

export function Skilltitle (){
    return(
        <div className='skilltitle'>
            <p>Skills</p>
        </div>
    )
}
export function Skillicon (){
    return(
        <div className='skillicon'>
            <div className='html'>
                <FaHtml5 className='skill--icon'/>
            </div>
            <div className='css'>
                <FaCss3Alt className='skill--icon'/>
            </div>
            <div className='js'>
                <IoLogoJavascript className='skill--icon'/>
            </div>
            <div className='react'>
                <FaReact className='skill--icon'/>
            </div>
            <div className='tailwind'>
                <SiTailwindcss className='skill--icon'/>
            </div>
        </div>
    )
}
export function Skillbar(){
    return(
        <div className='skillbar'>
            <div>
                <div className='one--title'>Leadership &Teamwork</div>
                <div className='container one--container'>
                    <span className='runbar one--runbar'></span>
                </div>
            </div>
            <div>
                <p className='one--title'>Project Management</p>
                <div className='container two--container'>
                    <span className='runbar two--runbar'></span>
                </div>
            </div>
            <div>
                <p className='one--title'>HR Management</p>
                <div className='container three--container'>
                    <span className='runbar three--runbar'></span>
                </div>
            </div>
            <div>
                <p className='one--title'>Problem Solving</p>
                <div className='container four--container'>
                    <span className='runbar four--runbar'></span>
                </div>
            </div>
            <div>
                <p className='one--title'>Fast Learning</p>
                <div className='container five--container'>
                    <span className='runbar five--runbar'></span>
                </div>
            </div>
        </div>
    )
}