import React from "react";
import './Work.css'
import Aiesecphoto from "./aiesecphoto.jpg"

export default function Work(){
    return (
        <div className="work" id="Work">
            <Title/>
            <Content/>
            <WorkMobile/>
        </div>
    )
}

export function WorkMobile(){
    return (
        <div className="work--mobile">
            <div className="work--mobile--title">Work experience</div>
            <ul>
                <li><div>2022</div><h >Self-learning Front-end Web Developer and work as interpreter freelancer</h></li>
                <li><div>2020</div><h >Secretary Division (Project Coordinator Team) Vice Manager in UHMGROUP, a Hospitality managing and consulting agency</h></li>
                <li><div>2018</div><h >Secretary to General Director cum Project coordinator in UHMGROUP</h></li>
                <li><div>2016</div><h >Interpreting freelancer </h></li>
                <li><div>2015</div><h >Vice President of External Relations (Business Development) of AIESEC in Danang| a branch of AIESEC in Vietnam</h></li>
                <li><div>2014</div><h >Organizing Committee President of MASK Project of AIESEC in Danang</h></li>
            </ul>
            <div className="note">For detailed, please read in PC version</div>
        </div>
    )
}
export function Title(){
    return (
        <div className="title work--hidden">
            <p className="title--year">20</p>
            <p className="title--header">Work Experience Timeline</p>
        </div>
    )
}
export function Content(){
    return(
        <div className="content work--hidden">
            <Jobzero/>
            <Uhmone/>
            <Uhmtwo/>
            <Freelance/>
            <Aiesec/>
            <Aiesectwo/>
            
        </div>
    )
}
export function Jobzero(){
    return(
        <div className="jobzero">
            <p className="jobzero--number">22</p>
            <h className="jobzero--job">Self-learning Front-end Web Developer and work as interpreter freelancer</h>
        </div>
    )
}
export function Uhmone(){
    return(
        <div className="uhmone">
            <p className="uhmone--numberzero">20</p>
            <div className="uhmone--jobtwo">
                <h className="uhmone--jobtwo--title">Secretary Division (Project Coordinator Team) Vice Manager in UHMGROUP, a Hospitality managing and consulting agency</h>
                <p className="indent">Head of Secretary team, incharge of building, training, planning and managing Secretary team to manage all projects of the company (clients, masterplans, risk management, …)</p>
                <p className="indent">Being the account manager (project coordinator) for big projects</p>
                <p className="indent">Being in quality and internal control board to ensure project quality, customer satisfaction, staff high and effective performance</p>
                <p className="indent">Consulting, assisting and reporting to Director Board and Project Directors about all project related problems, company development and culture</p>
                <p className="indent">Together with all departments to build, execute, review and evaluate yearly, quarterly company plans</p>
                <p className="indent">Temporarily managing Human Resources Department (recruiting, building procedures, data system, HR evaluation and development…)</p>
            </div>
        </div>
    )
}
export function Uhmtwo(){
    return(
        <div className="uhmtwo">
            <p className="uhmtwo--number">18</p>
            <div className="uhmtwo--job">
                <h className="uhmtwo--title">Secretary to General Director cum Project coordinator in UHMGROUP</h>
                <p className="indent">Working as a liaison between clients and project team, between General Director and other departments in the company, representing project team to clients</p>
                <p className="indent">Building and supporting Project Manager to manage project plans to ensure timeline and quality of all products</p>
                <p className="indent">Checking and consulting General Director in all aspects of the company</p>
                <p className="indent">Assisting and supporting all other departments to ensure product quality and customer satisfaction</p>
                <p className="indent">Taking part in company Event and Culture board and Internal Control board to build and develop company culture</p>
                <p className="indent">Building and Executing company strategic plans and risk management plans</p>
            </div>
        </div>
    )
}
export function Freelance (){
    return(
        <div className="freelance">
            <p className="freelance--number">16</p>
            <div className="freelance--job">
                <h className="freelance--title">Interpreting freelancer </h>
                <p className="indent">Interpreting freelancer for Pacific Partnership 17, 18 (in medications), SsangYong IT company in ABG5 in Danang, UNICEF in Vietnam and Education consulting agencies.</p>
            </div>
        </div>
    )
}
export function Aiesec(){
    return(
        <div className="aiesec">
            <p className="aiesec--number">15</p>
            <div className="aiesec--job">
                <h className="aiesec--title">Vice President of External Relations (Business Development) of AIESEC in Danang| a branch of AIESEC in Vietnam</h>
                <p className="indent">Head of External Relations Department, incharge of finding, taking care of and engaging partners for social projects of AIESEC in Danang, building relationships with companies and running one of AIESEC internship exchange programs in other countries.</p>
                <p className="indent">Managing and training 23 members, running AIESEC Career Day 2016. Sales cash equivalence results: more than 60 million VND</p>
                <p className="indent">Facilitator for Active Citizen Conference, Regional Conference, Leaders’ conference of AIESEC in Danang</p>
            </div>
        </div>
    )
}
export function Aiesectwo(){
    return(
        <div className="aiesectwo">
            <p className="aiesectwo--number">14</p>
            <div className="aiesectwo--content">
                <h className="aiesectwo--title">Organizing Committee President of MASK Project of AIESEC in Danang</h>
                <p className="indent aiesectwo--job">Organizing the MASK project with 30 attendees from high schools and universities in Danang, 2 international students (one from Germany, one from Egypt) with 3 workshops, 1 2day-1night camp, 2 learning events in English</p>
                <Aiesecphotoone/>
            </div>
        </div>
    )
}
export function Aiesecphotoone(){
    return(
        <div className="aiesecphotoone">
            <img src={Aiesecphoto} alt="anhaiesec" classname="aiesecphoto"/>
        </div>
    )
}