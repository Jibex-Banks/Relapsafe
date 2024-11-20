import { Menu, Users, Video,HeartHandshake, 
  Building2,
  Heart,
  Handshake,
  Users2,
  Brain,
  PhoneCall,
  Mail,
  MessageCircleIcon,
  MessageCircleMoreIcon,
  MapPinIcon, } from 'lucide-react';
import './App.css'
import AboutUsSection from './Test';
import { useState } from 'react';
export default function name() {
  const services = [
    {id:1,icon:Users,title:"Online Community",sentence:"Connect with peers and find support in our monitored online community",buttonName:"Join Community"},
    {id:2,icon:Video,title:"Virtual Therapy",sentence:"Access professional counseling from the comfort of your home",buttonName:"Schedule a Call",link:"https://forms.gle/mb2RUihJPStipayb6"},
    {id:3,icon:HeartHandshake,title:"Community Outreach",sentence:"Educational programs and support services for local communities",buttonName:"Book Now",link:"https://forms.gle/zXTi3Nt15VMeEtTi7"},
    {id:4,icon:Building2,title:"Rehabilitation Center",sentence:"Professional inpatient and outpatient rehabilitation services",buttonName:"Book Now",link:"https://forms.gle/mb2RUihJPStipayb6"}
  ]
  
  const abouts = [
      {id:1,icon:Heart,title:"Compassionate Care",sentence:"We approach every individual with understanding and empathy"},
    {id:2,icon:Handshake,title:"Local Support",sentence:"Focused on addressing addiction recovery needs in Nigeria"},
    {id:3,icon:Users,title:"Community Building",sentence:"Creating networks of support for sustainable recovery"},
    {id:4,icon:Brain,title:"Holistic Approach",sentence:"Professional inpatient and outpatient rehabilitation services"}
  ]

  const images = [
    {id:1, img:"src/images/outreachimg1.jpeg"},
    {id:2, img:"src/images/outreachimg2.jpeg"},
    {id:3, img:"src/images/outreachimg3.png"},
    {id:4, img:"src/images/outreachimg6.jpeg"}
  ]

  
  return(
    <>
    <div className="">
    <div className="Navbar">
    <a href="#Hero"><div className="logo"><img src="src/images/RelapsafeLogo.png" alt="logo" className='logoimage'   /><h1>Relap<span style={{color:"#3d9970"}}>SAFE</span></h1></div></a>
      <ul className='navitems'>
        <a href="#Services"><li>Services</li></a>
        <a href="#Gallery"><li>Gallery</li></a>
        <a href="#About"><li>About</li></a>
        <a href="#Contact"><li>Contact</li></a>
      </ul>
      <div className='menubar'><Menu className="menu" /></div>
    </div>
    <section id="Hero">
      <div className="texts">
    <h2>Guiding Recovery & Fostering Renewal</h2>
    <p>We are dedicated to helping individuals in Nigeria overcome drug addiction. We connect people with therapy, rehab centers, and a compassionate support network. Our goal is to provide a safe space and resources to make recovery achievable and sustainable.</p>
    <a href='#About'><button>Join us today <MessageCircleMoreIcon style={{paddingLeft:"5px"}}/></button></a>
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
        <a href={service.link} target='_blank'><button>{service.buttonName}</button></a>
      </div>
      ))}
      </div>
    </section>
    <section id='Gallery'>
      <h2>Gallery</h2>
      <p>Every Image has a story to tell.</p>
      <div className="images">
      {images.map((image,id)=>(
        <div className="image cont" key={id} style={{backgroundImage: `url(${image.img})`,backgroundSize: 'cover', backgroundPosition: 'center'}}/>
    ))}
      </div>
    </section>
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
          <h2 style={{textDecoration:"underline green",marginTop:"2em",marginBottom:"1.5em"}}>How do we help?</h2>
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
    <section id='Contact'>
      <div className="container">
        <div className="contactInfo">
          <h3 style={{marginBottom:0,fontWeight:"600"}}>Contact Information</h3>
          <p style={{marginTop:0,}}>We'll Love to hear from you</p>
            <p><a href="tel:+2347039964934"><PhoneCall style={{paddingRight:"10px"}}/> 
            <span style={{textDecoration:"underline"}}>+234 703 9964 934</span></a></p>

            <p><a href="mailto:relapsafe@gmail.com"><Mail style={{paddingRight:"10px"}}/> <span style={{textDecoration:"underline"}}>relapsafe@gmail.com</span></a></p>

            <p><MapPinIcon style={{paddingRight:"10px"}}/>Plot 681, Cadastral Zone C, OO, Research & Institution Area, Airport Road, Jabi, Abuja 900108, Federal Capital Territory</p>
        </div>
        <div className="contactform">
          <form action="submit" method="get">
            <div className="name">
              <div className="first">
              <label htmlFor="firstName">FirstName</label>
              <input type="text" name="firstName" id="firstName" style={{outline:"none"}} />
              </div>
              <div className="second">
              <label htmlFor="lastName">LastName</label>
              <input type="text" name="lastName" id="lastName" style={{outline:"none"}}/>
              </div>
            </div>
            <div className="usercontact">
              <div className="first">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" style={{outline:"none"}}/>
              </div>
              <div className="second">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="tel" name="phoneNumber" id="phoneNumber" style={{outline:"none"}}/>
              </div>
            </div>
            <div className="enq">
                <h3>Select Subject?</h3>
                <div className="options">
                <div className="rad">
                <input type="radio" name="subject" id="sub" />
                <label htmlFor="">General Inquiry</label>
                </div>
                <div className="rad">
                <input type="radio" name="subject" id="sub" />
                <label htmlFor="">Booking Outreach</label>
                </div>
                <div className="rad">
                <input type="radio" name="subject" id="sub" />
                <label htmlFor="">Requesting Therapy</label>
                </div>
                <div className="rad">
                <input type="radio" name="subject" id="sub" />
                <label htmlFor="">Others</label>
                </div>
                </div>
            </div>
            <div className="message">
                <label htmlFor="message">Message</label>
                <input type="text" name="message" id="" placeholder='Enter Message.' style={{outline:"none"}}/>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
    <footer>
          &copy; {new Date().getFullYear()} RelapSAFE. All rights reserved.
      </footer>
    </div>
    </>
  );
}