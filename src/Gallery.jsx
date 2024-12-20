
import { useInView } from 'react-intersection-observer';

export default function Gallery() {
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

      const images = [
        {id:1, img:"src/images/outreachimg1.jpeg"},
        {id:2, img:"src/images/outreachimg2.jpeg"},
        {id:3, img:"src/images/outreachimg3.png"},
        {id:4, img:"src/images/outreachimg6.jpeg"}
      ]
    return(
        <section id='Gallery'>
      <h2>Gallery</h2>
      <p>Browse through our collection of images from past outreaches</p>
      <div className="images">
      {images.map((image,id)=>(
        <div className="image cont" key={id} style={{backgroundImage: `url(${image.img})`,backgroundSize: 'cover', backgroundPosition: 'center'}}/>
    ))}
      </div>
    </section>
    );
}