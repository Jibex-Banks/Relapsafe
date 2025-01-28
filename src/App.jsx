import { Menu, MessageCircleMoreIcon,ChevronUp, Globe, Link, Instagram, Facebook, ShieldClose, SidebarClose, X} from 'lucide-react';
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

        const handleSponsorButton = (event) =>{
          event.preventDefault();
          console.log("I am sending a sponsor enquiry message");
          try {
            const mailtoLink =`mailto:relapsafe@gmail.com?`;
            window,location.href = mailtoLink;            
            console.log("I am sending a sponsor enquiry message");
          } catch (error) {
            alert("Unable to open mail client. Please try again later.")
          }
        }
      
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

        const linkk = "http://localhost:5174/";
        const HandleLinkCopy =  function(e) {
          console.log("Hi I am handling link copy!!!!");
          navigator.clipboard.writeText(linkk).then(() => {
            alert("Link copied to clipboard successfully!!!")
          }).catch(() => {
            alert("Failed to copy link")
          })
        }

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

  function navSelect(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }

    const menus = document.querySelector(".sidebar");
    menus.style.display = "none";

  }

  function OpenSide() {
    const menus = document.querySelector(".sidebar");
    menus.style.display = "flex"
  }

  function CloseSide() {
    const menus = document.querySelector(".sidebar");
    menus.style.display = "none"
  }

  return(
    <>
    <div className="">
    <div className="Navbar">
    <a href="#Hero" onClick={smoothScroll}><div className="logo"><img src="src/images/RelapsafeLogo.png" alt="logo" className='logoimage'  /><h1>Relap<span style={{color:"#3d9970"}}>SAFE</span></h1></div></a>
      <ul className="navitems">
        <a href="#Hero" onClick={smoothScroll} ><li>Home</li></a>
        <a href="#Services" onClick={smoothScroll}><li>Services</li></a>
        <a href="#Gallery" onClick={smoothScroll}><li>Gallery</li></a>
        <a href="#About" onClick={smoothScroll}><li>About</li></a>
        <a href="#Contact" onClick={smoothScroll}><li>Contact</li></a>
      </ul>
      <li className='menu'><Menu style={{height:"35px",width:"35px"}} onClick={OpenSide}/></li>
    </div>
    <ul className="sidebar">
        <li><X style={{height:"35px",width:"35px",paddingTop:"10px",paddingLeft:"10px"}} onClick={CloseSide}/></li>
        <a href="#Hero" onClick={navSelect}><li>Home</li></a>
        <a href="#Services" onClick={navSelect}><li>Services</li></a>
        <a href="#Gallery" onClick={navSelect}><li>Gallery</li></a>
        <a href="#About" onClick={navSelect}><li>About</li></a>
        <a href="#Story" onClick={navSelect}><li>Story</li></a>
        <a href="#Sponsor" onClick={navSelect}><li>Sponsor</li></a>
        <a href="#Contact" onClick={navSelect}><li>Contact</li></a>

      </ul>
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
            <button type="submit" className='storyButton' style={{marginBottom:"20px",marginTop:"20px"}}>Share Your Story</button>
          </form>
          <p style={{ fontSize: "0.9rem", color: "gray", marginTop: "4em" }}>
          <strong>Disclaimer:</strong> Your story is completely anonymous and confidential. It will not be shared publicly or linked back to you. We value your privacy and appreciate your honesty in helping us build a supportive platform.</p>
      </div>
      </section>
      <section id='Sponsor'>
      <div className="container sponsorContainer">
        <div className="sponsorContents">
          <h1>Did You Know?</h1>
          <p>40%  of high-risk drug users in Nigeria reported wanting drug treatment but being unable to access it due to barriers like cost, stigma, and lack of available services despite their willingness to recover.</p>

          <h3>Join Us in Guiding Recovery and Fostering Renewal.
          By sponsoring the treatment of someone in need, you can become a beacon of hope in their journey to recovery.</h3>
          <button onClick={handleSponsorButton}><b>Email Us To Help</b></button>
        </div>
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