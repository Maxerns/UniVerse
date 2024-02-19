import './About.css';

function About() {
    return (
 <div className="project-background">
  <header className="about-header">
   <div className="slashed-about">
    <div className="top" title="ABOUT">
    <div className="content"></div>
  </div>
    <div className="bot" title="ABOUT">
    <div className="content"></div>
  </div>
  </div>
  
  <p className="about-desc">This is a prototype of an app i created in coherence of my university assignment called 'Bright Ideas'. Although it was a collective effort, I oversaw development, made the prototype, and served as the group leader. The assignment for "bright ideas" involved selecting a theme from a list of suggested themes and creating an entrepreneurial idea that addressed community with the intention of fostering greater involvement and in-person relationships. Given that our focus was community in student environments, I thought that since the world is becoming more digital and we are recently recovering from a pandemic, which would have affected people's social skills. 
  I came to the conclusion that a social media app designed with students in mind would be advantageous since it would include features that would encourage interaction and foster a sense of physical community. I've included links to the prototype and presentation, which go into more of the features.
  </p>

 <button className="powerpoint_button">
  <a className="powerpoint_buttonlink" href="https://maxerns.files.wordpress.com/2024/01/universe.pdf" target="_blank" rel="noopener noreferrer">Presentation</a>
 </button>

 <button className="figma_button">
   <a className="figma_buttonlink" href="https://www.figma.com/file/YsxtepCw603RNgM2kGygtX/UniVerse?type=design&node-id=0%3A1&mode=design&t=D1jZa1L0HewLbGSR-1" target="_blank" rel="noopener noreferrer">Figma</a>
 </button>


 {/* ----FOOTER SECTION---- */}
 <footer className="about-footer">
  <div className="footer-content">
    <p>2024 Universe. All Rights Reserved</p>
  </div>
 </footer>
</header>
</div>
        
    )
}

export default About;