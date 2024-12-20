import {UserCog,Laptop, HeartHandshake, Handshake, } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function About() {
    const smoothScroll = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      };

      const abouts = [
        {id:1,icon:HeartHandshake,title:"Healing Together",sentence:"We are a community focused network, united in the journeyy of healing and recovery"},
        {id:2,icon:Handshake,title:"Local Support",sentence:"Everyone deserves a path to recovery; our resources are accessible to all, without discrimination."},
        {id:3,icon:UserCog,title:"Personalized Support",sentence:"Tailored care for  every individual, ensiuring a recorvery plan that trully fit your needs"},
        {id:4,icon:Laptop,title:"Leveraging Technology",sentence:"To empower recovery, and making therapy and support services easily accessible to you"}
    ]  
    return(
        <section id='About'>
      <h2 className='abouthead'>About Us</h2>
      <h2>Helping overcome drug addiction</h2>
      <div className="line"></div>
      <div className="aboutHero">
        <div className="text">
          <p>We understand the challenges that come with addiction recovery in Nigeria,We're dedicated to bridging the gap between individuals and the resources they need, from therapy and rehab to a compassionate network that supports each step of the journey.</p>
          <br />
          <p> Our mission is to create a recovery path that's both accessible and empowering, providing a safe space for people to rebuild their lives with dignity and hope. We're here to redefine what recovery looks like one connection, one conversation, one step at a time.</p>
        </div>
        <div className="image"></div>
        </div>
          <h2 style={{marginTop:"2em",marginBottom:"1.5em"}}>How do we help?</h2>
          <div className="aboutContents">
        {abouts.map((about,id)=>(
      <div className="cont" key={id}>
        < about.icon className='icon'/>
        <h3>{about.title}</h3>
        <p>{about.sentence}</p>
      </div>
      ))}
      </div>
    </section>
    );
}