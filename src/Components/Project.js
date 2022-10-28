import React from 'react';
import './Project.css'
import { GiOwl } from "react-icons/gi";

export default function Project (){
    return (
        <div className='project'>
            <div className='project--title'>MY PROJECTS</div>
            <div className='cards--container'>
                <Cards projectname ='Restaurant' projectdes='A restaurant e-commerce website'/>
                <Cards projectname='Coming soon' projectdes='A website for listening music online'/>
                <Cards projectname='Coming soon' projectdes='A task management web like Trello'/>
            </div>
        </div>
    )
}
export function Cards (props){
    return (
        <div className='cards'>
            <GiOwl className='cards--logo'/>
            <div className='cards--content'>
                <h className='cards--title'>{props.projectname}</h>
                <p className='cards--des'>{props.projectdes}</p>
                <button className='cards--btn'>SEE MORE...</button>
            </div>
        </div>
    )
}