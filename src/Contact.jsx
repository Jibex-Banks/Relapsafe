import { PhoneCall,Mail, MapPinIcon, MessageCircleMoreIcon, Instagram, Linkedin, Twitter} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import axios from 'axios';


export default function Contact() {
    const { ref: heroRef, inView: isHeroVisible } = useInView({
        threshold: 0.1, 
      });

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

      const [firstname, setFirstname] = useState("");
      const [lastname, setLastname] = useState("");
      const [email, setEmail] = useState("");
      const [phoneNumber, setPhoneNumber] = useState("");
      const [subject, setSubject] = useState("");
      const [message, setMessage] = useState("");

    
      const handleSubmit = (event) => {
          event.preventDefault();
          try {
            var cont = document.querySelector(".contactStatus");
            const result = axios.post('https://relapsafe-api.vercel.app/contact',{firstname, lastname,email,phoneNumber,subject,message});
            cont.textContent = "Sent Successfully!"
            cont.style.color = "rgba(4, 225, 4, 0.527)"
            setTimeout(() => {
              cont.textContent = "";
            }, 3000);
            setFirstname("");
            setLastname("");
            setEmail("");
            setPhoneNumber("");
            setSubject("");
            setMessage("");
          } catch(error) {
            cont.textContent ="Please Try Again";
            cont.style.color = "red";
            setTimeout(() => {
              cont.textContent = "";
              }, 3000);
          }   
      };
      
    return(
        <section id='Contact'>
      <div className="container">
        <div className="contactInfo">
          <h3 style={{marginBottom:0,fontWeight:"600"}}>Contact Information</h3>
          <p style={{marginTop:0,}}>We'll Love to hear from you</p>
            <p><a href="tel:+2347039964934"><PhoneCall style={{paddingRight:"10px"}}/> 
            <span style={{textDecoration:"underline"}}>+234 703 9964 934</span></a></p>

            <p><a href="mailto:relapsafe@gmail.com"><Mail style={{paddingRight:"10px"}}/> <span style={{textDecoration:"underline"}}>relapsafe@gmail.com</span></a></p>

            <p style={{width:"80%",margin:"auto"}}><MapPinIcon style={{paddingRight:"10px"}}/>Plot 681, Cadastral Zone C, OO, Research & Institution Area, Airport Road, Jabi, Abuja 900108, Federal Capital Territory</p>

          <h3 style={{marginBottom:"30px",marginTop:"40px",fontWeight:"600"}}>Socials</h3>
          <div className="socialAccounts">
            <a href="https://x.com/relapsafe?s=11&t=NxBf7EtzSvnJMyBNkwVE5A" target='_blank'><Twitter style={{width:'30px',height:'30px'}}/></a>
            <a href="https://www.instagram.com/relapsafe_support?igsh=MWYybnNqdXc4cHRmZw%3D%3D&utm_source=qr" target='_blank'><Instagram style={{width:'30px',height:'30px'}}/>
            </a>
            <a href="https://www.linkedin.com/company/relapsafe/" target='_blank'><Linkedin style={{width:'30px',height:'30px'}}/></a>
          </div>
        </div>
        
        <div className="contactform">
          <form onSubmit={handleSubmit}>
            <div className="name" >
              <div className="first">
              <label htmlFor="firstName">FirstName</label>
              <input type="text" name="firstname" id="firstName" style={{outline:"none"}}  value={firstname} onChange={(e)=> setFirstname(e.target.value)} required autoComplete='on'/>
              </div>
              <div className="second">
              <label htmlFor="lastname">LastName</label>
              <input type="text" name="lastname" id="lastname" style={{outline:"none"}} value={lastname} onChange={(e)=> setLastname(e.target.value)} required autoComplete='on'/>
              </div>
            </div>
            <div className="usercontact">
              <div className="first">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" style={{outline:"none"}} value={email} onChange={(e)=> setEmail(e.target.value)} required  autoComplete='on'/>
              </div>
              <div className="second">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="tel" name="phoneNumber" id="phoneNumber" style={{outline:"none"}} value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} required  autoComplete='on'/>
              </div>
            </div>
            <div className="enq">
                <h3>Select Subject?</h3>
                <div className="options">
                <div className="rad">
  
                <input type="radio" name="subject" id="general" style={{accentColor:"#3d9970", cursor:"pointer"}} value="GENERAL INQUIRY" onChange={(e)=> setSubject(e.target.value)}  required />
                <label htmlFor="general">General Inquiry</label>
                </div>
                <div className="rad">

                <input type="radio" name="subject" id="booking" style={{accentColor:"#3d9970", cursor:"pointer"}} value="BOOKING OUTREACH" onChange={(e)=> setSubject(e.target.value)}  required />
                <label htmlFor="booking">Booking Outreach</label>
                </div>
                <div className="rad">
  
                <input type="radio" name="subject" id="therapy" style={{accentColor:"#3d9970", cursor:"pointer"}} value="REQUESTING THERAPY" onChange={(e)=> setSubject(e.target.value)}  required />
                <label htmlFor="therapy">Requesting Therapy</label>
                </div>
                <div className="rad">
  
                <input type="radio" name="subject" id="others"  style={{accentColor:"#3d9970", cursor:"pointer"}}value="OTHERS" onChange={(e)=> setSubject(e.target.value)}  required />
                <label htmlFor="others">Others</label>
                </div>
                </div>
            </div>
            <div className="message">
                <label htmlFor="message">Message</label>
                <input type="text" name="message" id="message" placeholder='Enter Message.' style={{outline:"none"}} value={message} onChange={(e)=> setMessage(e.target.value)} required />
            </div>
            <p className='contactStatus'></p>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
    );
}