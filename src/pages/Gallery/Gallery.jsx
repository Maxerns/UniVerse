import './Gallery.css';
// import mockup1 from '../../assets/mockup1.png';
// import mockup2 from '../../assets/mockup2.png'; 
// import mockup3 from '../../assets/mockup3.png';
import ImageSlider from '../../components/ImageSlider/ImageSlider';


function Gallery() {
    const images = [
        require('../../assets/mockup1.png'),
        require('../../assets/mockup2.png'),
        require('../../assets/mockup3.png'),
        require('../../assets/IDCardsMockup.png'),
        require('../../assets/tapemockup.png'),
        require('../../assets/UniverseTextPng.png'),

      ];

    
    return (
      <div className="project-background">
        <header className="Gallery-header"> 
        <div className="slashed-gallery">
    <div className="top" title="GALLERY">
      <div className="content"></div>
    </div>
    <div className="bot" title="GALLERY">
      <div className="content"></div>
    </div>
  </div>
        <ImageSlider images={images} />
        </header>
      </div>
        




    );
}


export default Gallery;