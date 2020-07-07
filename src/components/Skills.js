import HCJ from '../images/HCJ.jpg'
import Node from '../images/nodejs.jpeg'
import REACT from '../images/React.png'
import Python from '../images/python.png'
// import Team from '../images/team.png'
import Team from '../images/react-node.png'

export const skills = [
    { name:'HTML', icon:HCJ},
    { name:'CSS', icon:'fab fa-css3'},
    { name:'JAVASCRIPT', icon:'fab fa-js-square'},
    { name:'REACT', icon:REACT},
    { name:'JEST', icon:Python},
    { name:'NODE.JS', icon:Python},
    { name:'EXPRESS', icon:Python},
    { name:'KNEX', icon:Python},
    { name:'PYTHON', icon:Python},
    { name:'DJANGO', icon:Python},
    // { name:'', icon:Python},
    // { name:'', icon:Python},
  ]


export const projects = [
    {
        name:"Garden of Knowledge", 
        icon:Team, 
        stack:"Tech Stack:Refer to GitHub", 
        description:"A learning management system that is helping the underprivileged, currently the country of Bahrain, to learn English",
        github:"https://github.com/Lambda-School-Labs/speak-out-fe",
        githubBE:"https://github.com/Lambda-School-Labs/speak-out-be",
        live:"https://speak-out-bh.com"
    },
    {
        name:"Ride For Life", 
        icon:HCJ, 
        description:"Created the marketing page for an Uber/Lyft like app for pregnant woman in Uganda", 
        stack:"Tech Stack:HTML/CSS/Javascript", 
        github:"https://github.com/BW-Ride-for-Life/Marketing-Page", 
        live:"https://ride-for-life2019.netlify.app/" 
    },
    {
        name:"Construction Forms", 
        icon:HCJ, 
        description:"Construction forms built for Bryce Labs", 
        stack:"Tech Stack:HTML/CSS", 
        github:"https://github.com/AmmonMatthews/construction-forms", 
        live:"https://constforms19.netlify.app" 
    },
    {
        name:"Popular Movies",
        icon:REACT, 
        stack:"Tech Stack: React, Styled-components", 
        description:"A web application displaying the most recent popular movies.",github:"", 
        live:"https://pop-movies.netlify.app" 
    },
    {
        name:"Co-Make", 
        icon:Node, 
        stack:"Tech Stack:Node.js,Express,Knex", 
        description:"Created a backend for an application that allows you to input your voice in the problems that are solved by your community",
        github:"https://github.com/bw-comake3/backend", 
        live:"https://comake3.herokuapp.com/" 
    },
    {
        name:"Coming Soon",
        icon:Python, 
        stack:"", 
        description:"",
        github:"",
        live:"" 
    },
]