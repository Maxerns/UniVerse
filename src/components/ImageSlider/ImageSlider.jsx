import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';
import CustomNextArrow from '../Arrows/RightArrow';
import CustomPrevArrow from '../Arrows/LeftArrow';

const ImageSlider = ({images}) => 
{
    const settings = 
    {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, 
        arrows: false,
        pauseOnHover: true,
        nextArrow:<CustomNextArrow/>,
        prevArrow:<CustomPrevArrow/>,
    };

    return (
        <div className="slider-container">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="slider-item">
                <img src={image} alt={`Slide ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
      );
    };
    
    export default ImageSlider;
