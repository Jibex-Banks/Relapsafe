import {  Users, Video,HeartHandshake,Building, Building2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';




export default function Service(){
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

  // Intersection Observer for Services section
  const { ref: servicesRef, inView: isServicesVisible } = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });

  const services = [
    {id:1,icon:Users,title:"Online Community",sentence:"Connect with peers and find support in our monitored online community",buttonName:"Join Community"},
    {id:2,icon:Video,title:"Virtual Therapy",sentence:"Access professional counseling from the comfort of your home",buttonName:"Schedule a Call",link:"https://forms.gle/mb2RUihJPStipayb6"},
    {id:3,icon:HeartHandshake,title:"Community Outreach",sentence:"Educational programs and support services for local communities",buttonName:"Book Now",link:"https://forms.gle/zXTi3Nt15VMeEtTi7"},
    {id:4,icon:Building2,title:"Rehabilitation Center",sentence:"Professional inpatient and outpatient rehabilitation services",buttonName:"Book Now",link:"https://forms.gle/mb2RUihJPStipayb6"}
  ]
    return(
        <section 
      id='Services' 
      ref={servicesRef}
      className={`services-section ${isServicesVisible ? 'services-visible' : ''}`}
    >
      <h2>Our Services</h2>
      <div 
        className={`serviceContents ${isServicesVisible ? 'services-content-visible' : ''}`}
      >
        {services.map((service,id)=>(
          <div 
            className={`cont service-item ${isServicesVisible ? 'service-item-visible' : ''}`} 
            key={id} 
            style={{
              transitionDelay: `${id * 400}ms`
            }}
          >
            < service.icon className='icon'/>
            <h3>{service.title}</h3>
            <p>{service.sentence}</p>
            <a href={service.link} target='_blank'>
              <button>{service.buttonName}</button>
            </a>
          </div>
        ))}
      </div>
    </section>
    );
}