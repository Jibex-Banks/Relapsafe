import { Menu, Users, Video,HeartHandshake, 
  Building2, } from 'lucide-react';
import './App.css'
import AboutUsSection from './Test';
export default function name() {
  const services = [
    {id:1,icon:Users,title:"Online Community",sentence:"Connect with peers and find support in our monitored online community",buttonName:"Join Community"},
    {id:2,icon:Video,title:"Virtual Therapy",sentence:"Access professional counseling from the comfort of your home",buttonName:"Schedule a Call"},
    {id:3,icon:HeartHandshake,title:"Community Outreach",sentence:"Educational programs and support services for local communities",buttonName:"Book Now"},
    {id:2,icon:Building2,title:"Rehabilitation Center",sentence:"Professional inpatient and outpatient rehabilitation services",buttonName:"Book Now"},
  ]
  return(
    <>
    <div className="">
    <div className="Navbar">
    <a href="#Hero"><div className="logo"><img src="src/images/RelapsafeLogo.png" alt="logo" className='logoimage'   /><h1>Relap<span style={{color:"#3d9970"}}>SAFE</span></h1></div></a>
      <ul className='navitems'>
        <a href="#"><li>Services</li></a>
        <a href="#"><li>Gallery</li></a>
        <a href="#"><li>About</li></a>
        <a href="#"><li>Contact</li></a>
      </ul>
      <div className='menubar'><Menu className="menu" /></div>
    </div>
    <section id="Hero">
      <div className="texts">
    <h2>Guiding Recovery & Fostering Renewal</h2>
    <p>We are dedicated to helping individuals in Nigeria overcome drug addiction. We connect people with therapy, rehab centers, and a compassionate support network. Our goal is to provide a safe space and resources to make recovery achievable and sustainable.</p>
    <button>Learn More</button>
    </div>
    <div className="heroImage">
      <img src="src/images/backgroundImage.png" alt="heroImage" className='heroImg'/>
    </div>
    </section>
    <section id='Services'>
      <h2>Our Services</h2>
      <div className="serviceContents">
        {services.map((service,id)=>(
      <div className="cont" key={id}>
        < service.icon className='icon'/>
        <h3>{service.title}</h3>
        <p>{service.sentence}</p>
        <a href=""><button>{service.buttonName}</button></a>
      </div>
      ))}
      </div>
    </section>
    <section id='Gallery'>
      <h2>Gallery</h2>
      <p>Every Image has a story to tell.</p>
    </section>
    <section id='About'>
      <h2>Helping overcome drug addiction</h2>
      <div className="line"></div>
      <div className="aboutHero">
        <div className="text">
          <p>We understand the challenges that come with addiction recovery in Nigeria,We're dedicated to bridging the gap between individuals and the resources they need, from therapy and rehab to a compassionate network that supports each step of the journey.</p>
          <br />
          <p> Our mission is to create a recovery path that's both accessible and empowering, providing a safe space for people to rebuild their lives with dignity and hope. We're here to redefine what recovery looks like one connection, one conversation, one step at a time.</p>
        </div>
        <div className="image"></div>
        <div className="aboutContent">

        </div>
      </div>
    </section>
    {/* <AboutUsSection/> */}
    </div>
    </>
  );
}