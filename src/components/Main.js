import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/ammon.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import {skills, projects} from '../components/Skills.js'


class Main extends React.Component {
  
 
  
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )


    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <div className="about">
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            I am a progammer who loves to create and collaborate on cutting edge technology. If you have an idea, contact me and lets make something great!
          </p>
          </div>
          <div className="contact-info">
          <ul className="icons">
            <li>
              <a
                href="https://linkedin.com/in/hamatthews"
                target="_blank"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/ammon.matthews.7" target="_blank" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AmmonMatthews"
                target="_blank"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
            <div class="contact-info_list">
              <h4>Contact Info</h4>
              <ul class="contact-info">
                <li>208-850-7829</li>
                <li>ammonmatthews@gmail.com</li>
                <li>Boise, Idaho</li>
              </ul>
            </div>  
          </div>
          {close}
        </article>

        <article
          id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <div className="skills-loop ">
          {skills.map(item => {

            return(

                <div className='skills-container'>
                  {/* <div>
                    <img className="skill-img" src={item.icon} alt={`picture of ${item.name}`} />
                  </div> */}
                  <h3>{item.name}</h3> 
                  
                </div>
            )
          })}
          </div>   
          
          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <div className="projects-loop ">
          {projects.map(item => {

            return(
                <div className='projects-container'>
                  <div>
                    <img className="projects-img" src={item.icon} alt={`picture of ${item.name}`} />
                  </div>
                  <h3>{item.name}</h3> 
                  <p>{item.description}</p>
                  <p>{item.stack}</p>
                  <a className="button" href={item.github} target="_blank">GitHub</a>
                  <a className="button" href={item.live} target="_blank">Live Demo</a>
                </div>
            )
          })}
          </div>   
          <p></p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="https://getform.io/f/d697659e-d986-48d9-937a-a720c00dc669">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://linkedin.com/in/hamatthews"
                target="_blank"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/ammon.matthews.7" target="_blank"  className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AmmonMatthews"
                target="_blank"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
