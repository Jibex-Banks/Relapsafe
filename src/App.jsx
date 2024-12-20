import { Menu, MessageCircleMoreIcon,ChevronUp} from 'lucide-react';
import './App.css'
import AboutUsSection from './Test';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Service from './Services';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
export default function name() {

  const { ref: heroRef, inView: isHeroVisible } = useInView({
    threshold: 0.1, 
  });

  const [formData,setFormData]=useState(
          {
            story:'',
          }
        );
      
        const handleChange = (event)=>{
          setFormData({
            ...formData,
            [event.target.name]: event.target.value,
            
          })
        };
      
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(formData);
            try {
              const mailtoLink = `mailto:relapsafe@gmail.com?subject=Story&body= ${formData.story}`;
              window.location.href = mailtoLink;
            } catch (error) {
              alert("Unable to open mail client. Please try again later.");
            }     
        };

  // Smooth scroll function
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

  return(
    <>
    <div className="">
    <div className="Navbar">
    <a href="#Hero" onClick={smoothScroll}><div className="logo"><img src="src/images/RelapsafeLogo.png" alt="logo" className='logoimage'   /><h1>Relap<span style={{color:"#3d9970"}}>SAFE</span></h1></div></a>
      <ul className="navitems">
        <a href="#Hero" onClick={smoothScroll}><li>Home</li></a>
        <a href="#Services" onClick={smoothScroll}><li>Services</li></a>
        <a href="#Gallery" onClick={smoothScroll}><li>Gallery</li></a>
        <a href="#About" onClick={smoothScroll}><li>About</li></a>
        <a href="#Contact" onClick={smoothScroll}><li>Contact</li></a>
      </ul>
      <div id='menubar'><Menu className="menu" /></div>
    </div>
    <section id="Hero" ref={heroRef}>
      <div className="texts">
    <h2>Guiding Recovery & Fostering Renewal</h2>
    <p>We are dedicated to helping individuals in Nigeria overcome drug addiction. We connect people with therapy, rehab centers, and a compassionate support network. Our goal is to provide a safe space and resources to make recovery achievable and sustainable.</p>
    <a href='#About' onClick={smoothScroll}><button >Join us today<MessageCircleMoreIcon style={{paddingLeft:"5px"}}/></button></a>
    </div>
    <div className="heroImage">
      <img src="src/images/backgroundImage.png" alt="heroImage" className='heroImg'/>
    </div>
    </section>
    <Service/>
    <Gallery/>
    <About/>
    <section id='Story'>
      <div className="container storyContainer">
      <h2 style={{textAlign:"center"}}>Your Story</h2>
      <p>We would love to hear your story. Understanding the reasons that led you to start using drugs helps us improve our platform and provide better support to help you and  others overcome addiction.</p>
      <form onSubmit={handleSubmit} className="Story">
            <div >
                <textarea type="text" name="story" className="story" id="" placeholder='Please enter your story here.....' style={{outline:"none"}} value={formData.story} onChange={handleChange} required />
            </div>
            <button type="submit" className='storyButton'>Share Your Story</button>
          </form>
      </div>
      </section>
    <Contact/> 
    {!isHeroVisible && (
      <a href="#Hero" onClick={smoothScroll}>
        <div className="topBox">
          <ChevronUp style={{width:"40px", height:"40px"}}/>
        </div>
      </a>
    )}
    <footer>
          &copy; {new Date().getFullYear()} RelapSAFE. All rights reserved.
      </footer>
    </div>
    </>
  );
}