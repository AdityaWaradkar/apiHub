import '../css/FirstSection.css'
import { Link as ScrollLink } from 'react-scroll';

function FirstSection() {

  return (
    <div className='first-section'>
        <div className="text-first-section">
            <div className="api-hub-name">
                API Hub 
            </div>
            <div className="tag-line">
               Unlock the <br />​Power of APIs <br />​with Ease and <br />​Efficiency
            </div>

            {/* Button to scroll on the explore page */}
            <div className="explore" >
                <ScrollLink 
                     to="midSection" 
                     smooth={true} 
                     duration={500} 
                    className="explore-button"
                 >
                     <button>Explore</button>
                </ScrollLink>
            </div>

            {/* Button to scroll on the contact us page */}
            <div className="contact" >
               <ScrollLink 
                 to="footSection" 
                 smooth={true} 
                 duration={500} 
                 className="contact-button"
               >
                  <button>Contact Us</button>
               </ScrollLink>
            </div>
            
        </div>
        <div className="image-first-section ">
            <div className="img bg-[url('/src/assets/images/front-section-image.png')]"></div>
        </div>
    </div>
  )
}

export default FirstSection
