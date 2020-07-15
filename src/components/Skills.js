import HCJ from '../images/HCJ.jpg'
import Node from '../images/nodejs.jpeg'
import REACT from '../images/React.png'
import Python from '../images/python.png'
// import Team from '../images/team.png'
// import Team from '../images/react-node.png'

import Garden from '../images/gofk.png'
import Ride from '../images/rideforlife.png'
import Const from '../images/const-form.png'
import VR from '../images/vr.png'

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
        icon:Garden, 
        stack:"Tech Stack:Refer to GitHub", 
        description:"A learning management system that is helping the underprivileged, currently the country of Bahrain, to learn English",
        contributionOne: "-Refactored the codebase from an F to a C in codeclimate.com's maintainability score using react-hook-form and validation techniques",
        contributionTwo:"-Designed and created the Marketing and Landing pages for website",
        contributionThree: "-Deployed the front end with AWS Amplify and Backend with Heroku",
        github:"https://github.com/Lambda-School-Labs/speak-out-fe",
        githubBE:"https://github.com/Lambda-School-Labs/speak-out-be",
        live:"https://speak-out-bh.com"
    },
    {
        name:"VR Funding Platform",
        icon:VR, 
        stack:"Tech Stack: React, React Spring, Node.js, Express.js, Knex.js", 
        description:"A web application where virtual reality business owners can connect with investors",
        contributionOne:"-Led and organized a team of 5 in a one week sprint",
        contributionTwo:"-Developed the REST API endpoints for the CRUD functionality",
        contributionThree:"-Created the authentication for the front end and maded sure it worked",
        github:"", 
        live:"https://vr-funding.now.sh/" 
    },
    {
        name:"Co-Make", 
        icon:Node, 
        stack:"Tech Stack:Node.js,Express,Knex", 
        description:"Created a backend for an application that allows you to input your voice in the problems that are solved by your community",
        contributionOne:"-Created a RESTful API",
        contributionTwo:"-Developed the database using PostgreSQL, Express and Knex",
        github:"https://github.com/bw-comake3/backend", 
        live:"https://comake3.herokuapp.com/" 
    },
    {
        name:"Ride For Life", 
        icon:Ride, 
        description:"An Uber/Lyft like app for pregnant women in Uganda", 
        stack:"Tech Stack:HTML/CSS/Javascript", 
        contributionOne:"-Designed the landing page",
        contributionTwo:"-Created the landing page",
        github:"https://github.com/BW-Ride-for-Life/Marketing-Page", 
        live:"https://ride-for-life2019.netlify.app/" 
    },
    {
        name:"Construction Forms", 
        icon:Const, 
        description:"Construction forms built for Bryce Labs", 
        stack:"Tech Stack:HTML/CSS", 
        contributionOne:"-Built out the forms using vanilla HTML and CSS",
        contributionTwo:"",
        github:"https://github.com/AmmonMatthews/construction-forms", 
        live:"https://constforms19.netlify.app" 
    },
    {
        name:"Coming Soon",
        icon:Python, 
        stack:"", 
        description:"",
        contributionOne:"",
        contributionTwo:"",
        github:"",
        live:"" 
    },
]