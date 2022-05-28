import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../styles/Slider.scss';
import image from '../assets/img.png';

const Slider = () => {

  const Thumbs = () => {
    return Array.from({ length: 5 }).map((item, index) => (
      <div className={"dot"} key={index}></div>
    ))
  }

  return ( 
    <Carousel renderThumbs={Thumbs} showThumbs={false} showArrows={false} showIndicators={true} showStatus={false} autoPlay={true} infiniteLoop={true}>
      <div>
        <img src={image} alt={'Onboarding One'} />
        <div>
          <h1>Welcome Aboard</h1>
          <p>Just a couple of clicks and we start</p>
        </div>
      </div>
      <div>
        <img src={image} alt={'Onboarding Two'}/>
        <div>
          <h1>Get Started</h1>
          <p>Just a couple of clicks and we start</p>
        </div>
      </div>
      <div>
        <img src={image} alt={'Onboarding Three'}/>
        <div>
          <h1>Welcome Aboard</h1>
          <p>Just a couple of clicks and we start</p>
        </div>
      </div>
    </Carousel>
   );
}
 
export default Slider;