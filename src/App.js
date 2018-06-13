import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import resume from './resume.json';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Educations from './components/Educations';
import Languages from './components/Languages';

class App extends Component {
  render() {
    return (
           <div className="wrapper">
        <div className="sidebar-wrapper">
            <div className="profile-container">
                <img className="profile" src={resume.image} alt="" />
                <h1 className="name">{resume.name}</h1>
                <h3 className="tagline">{resume.developerType}</h3>
            </div>
            
            <div className="contact-container container-block">
                <ul className="list-unstyled contact-list">
                    <li className="email"><i className="fa fa-envelope"></i><a href="mailto: yourname@email.com">{resume.email}</a></li>
                    <li className="phone"><i className="fa fa-phone"></i><a href="tel:0123 456 789">{resume.phone}</a></li>
                    <li className="website"><i className="fa fa-globe"></i><a href="http://themes.3rdwavemedia.com/website-templates/free-responsive-website-template-for-developers/" target="_blank">{resume.website}</a></li>
                    <li className="linkedin"><i className="fa fa-linkedin"></i><a href="#" target="_blank">{resume.linkedIn}</a></li>
                    <li className="github"><i className="fa fa-github"></i><a href="#" target="_blank">{resume.github}</a></li>
                </ul>
            </div>
            <div className="education-container container-block">
                <h2 className="container-block-title">Education</h2>
               {resume.education.map((item,i) =>{
                return( <Educations  item={item}/>);
               })
             }
            </div>
            
            <div className="languages-container container-block">
                <h2 className="container-block-title">Languages</h2>
                <ul className="list-unstyled interests-list">
                 {resume.language.map((item,i) =>{
                  return( <Languages item={item}/>);
                 })
               }
                </ul>
            </div>         
            <div className="interests-container container-block">
                <h2 className="container-block-title">Interests</h2>
                <ul className="list-unstyled interests-list">

                {resume.interests.map((item,i)=>{
                  return(<li key={i}>{item}</li>);
                })
              }
                </ul>
            </div>         
        </div>
        
        <div className="main-wrapper">
            
            <section className="section summary-section">
                <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
                <div className="summary">
                    <p>{resume.carrerProfile}</p>
                </div>       </section>       
            <section className="section experiences-section">
                <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>
                
                {resume.experience.map((item,i)=>{
                  return(
                       <Experience  title={item.title}  period={item.period} company={item.company} details={item.details} />
                  );
  
                })
                  
              }
            </section>       
            <section className="section projects-section">
                <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
                <div className="intro">
                    <p>Theses are major projects On which i have performed by logical and technichal skills.</p>
                </div>    
                
                {resume.projects.map((item,i)=>{
                   return(
                    <Projects name={item.name} url={item.url} details={item.url}/>
                   );
                })
              }    
            </section>       
            <section className="skills-section section">
                <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
                <div className="skillset">        
                
                  {resume.skills.map((item,i) =>{
                    return(<Skills item={item}/>);
                  })
                }
                    
                </div>  
            </section>
            
        </div> </div>
    );
  }
}

export default App;
