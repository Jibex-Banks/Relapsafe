import { Menu, MessageCircleMoreIcon,ChevronUp} from 'lucide-react';
import './App.css'
import AboutUsSection from './Test';
import { useInView } from 'react-intersection-observer';
import Service from './Services';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
export default function name() {

  const { ref: heroRef, inView: isHeroVisible } = useInView({
    threshold: 0.1, 
  });

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