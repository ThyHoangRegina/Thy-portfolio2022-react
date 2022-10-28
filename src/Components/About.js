import React from "react";
import './About.css'
import Aboutpic from './anhchinh.jpg'
import { VscQuote } from "react-icons/vsc";
import { GiRead } from "react-icons/gi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faClapperboard, faMusic, faPalette } from '@fortawesome/free-solid-svg-icons'


export default function About (){
    return(
        <div className="about" id="About">
            <div className="about--left">
                <Abouttitle/>
                <Aboutpicture/>
            </div>
            <Aboutcontent/>
        </div>
    )
}
export function Abouttitle (){
    return (
            <h className="about--title">ABOUT ME</h>
 
    )
}
export function Aboutpicture (){
    return(
        <div className="aboutpicture">
            <img src={Aboutpic} alt="anh" className="aboutpic"/>
        </div>
    )
}
export function Aboutcontent (){
    return (
        <div className="aboutcontent">
            <div className="motto--container">
                <p className="motto">Motto</p>
                <div className="motto--content--container mobile">
                    <VscQuote className="quote"/>
                    <p className="motto--content">I am always doing what I cannot do yet, in order to learn how to do it.</p>
                    <p className="motto--credit">Vincent van Gogh</p>
                </div>
            </div>
            <div className="education--container">
                <p className="education">Education</p>
                <div className="education--content mobile">
                    <h>Bachelor of English study</h>
                    <p>Danang University of Foreign Languages</p>
                    <p className="education--degree">Degree classification: Very good</p>
                    <p className="education--gpa">GPA: 3.52/4</p>
                </div>
            </div>
            <div className="language--container">
                <h className="language--title">Language</h>
                <div className="language--content--container mobile">
                    <p className="language--content">English: Fluent</p>
                    <span className="language--score">IELTS score: 7.5</span>
                    <p>Chinese: Basic</p>
                </div>
            </div>
            <div className="language--container">
                <p className="hobbies--title">Hobbies</p>
                <div className="hobbies mobile">
                    <GiRead className="read hobby"/>
                    <FontAwesomeIcon icon={faPalette} className="draw hobby"/>
                    <FontAwesomeIcon icon={faBriefcase} className="travel hobby" />
                    <FontAwesomeIcon icon={faMusic} className="dance hobby"/>
                    <FontAwesomeIcon icon={faClapperboard} className="movie hobby" />
                </div>
            </div>
        </div>
    )
}