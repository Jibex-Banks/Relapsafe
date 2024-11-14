import { Menu, Users, Video,HeartHandshake, 
  Building2, } from 'lucide-react';
import './App.css'
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
        <a href="#"><li>RehabCenters</li></a>
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
    </div>
    </>
  );
}