import { PhoneCall,Mail, MapPinIcon} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';


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

      const [formData,setFormData]=useState(
        {
          firstname: '',
          lastname: '',
          email: '',
          phoneNumber:'',
          subject:'',
          message:'',
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
            const mailtoLink = `mailto:relapsafe@gmail.com?subject=${formData.subject}&body=Name: ${formData.firstname+formData.lastname} \nEmail: ${formData.email} \nPhoneNumber: ${formData.phoneNumber} \nMessage: ${formData.message}`;
            window.location.href = mailtoLink;
          } catch (error) {
            alert("Unable to open mail client. Please try again later.");
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

            <p><MapPinIcon style={{paddingRight:"10px"}}/>Plot 681, Cadastral Zone C, OO, Research & Institution Area, Airport Road, Jabi, Abuja 900108, Federal Capital Territory</p>
        </div>
        <div className="contactform">
          <form onSubmit={handleSubmit}>
            <div className="name" >
              <div className="first">
              <label htmlFor="firstName">FirstName</label>
              <input type="text" name="firstname" id="firstName" style={{outline:"none"}}  value={formData.firstname} onChange={handleChange} required />
              </div>
              <div className="second">
              <label htmlFor="lastName">LastName</label>
              <input type="text" name="lastname" id="lastname" style={{outline:"none"}} value={formData.lastname} onChange={handleChange} required />
              </div>
            </div>
            <div className="usercontact">
              <div className="first">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" style={{outline:"none"}} value={formData.email} onChange={handleChange} required />
              </div>
              <div className="second">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="tel" name="phoneNumber" id="phoneNumber" style={{outline:"none"}} value={formData.phoneNumber} onChange={handleChange} required />
              </div>
            </div>
            <div className="enq">
                <h3>Select Subject?</h3>
                <div className="options">
                <div className="rad">
  
                <input type="radio" name="subject" id="general" style={{accentColor:"#3d9970", cursor:"pointer"}} value="GENERAL INQUIRY" onChange={handleChange}  required />
                <label htmlFor="">General Inquiry</label>
                </div>
                <div className="rad">
  
                <input type="radio" name="subject" id="booking" style={{accentColor:"#3d9970", cursor:"pointer"}} value="BOOKING OUTREACH" onChange={handleChange}  required />
                <label htmlFor="">Booking Outreach</label>
                </div>
                <div className="rad">
  
                <input type="radio" name="subject" id="therapy" style={{accentColor:"#3d9970", cursor:"pointer"}} value="REQUESTING THERAPY" onChange={handleChange}  required />
                <label htmlFor="">Requesting Therapy</label>
                </div>
                <div className="rad">
  
                <input type="radio" name="subject" id="others"  style={{accentColor:"#3d9970", cursor:"pointer"}}value="OTHERS" onChange={handleChange}  required />
                <label htmlFor="">Others</label>
                </div>
                </div>
            </div>
            <div className="message">
                <label htmlFor="message">Message</label>
                <input type="text" name="message" id="" placeholder='Enter Message.' style={{outline:"none"}} value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
    );
}