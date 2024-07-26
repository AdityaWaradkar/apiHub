import '../css/MidSection.css'
import FrontPageCards from '../components/FrontPageCards.jsx';
import icon1 from '../assets/images/documentation_img.svg'
import icon2 from '../assets/images/integration_assistance_icon.svg'
import icon3 from '../assets/images/use_cases_icon.svg'


function MidSection() {

  

  const cardData = [
    { icon: icon1, title: 'API Documentation', content: 'You can also use this space for other ​purposes where the information is best ​presented as mere teasers to other ​individualised pages.' },
    { icon: icon2, title: 'Integration Assistance', content: 'Need help integrating an API? Our team ​offers personalized support to guide you ​through implementing best practices, ​ensuring a smooth integration ​experience.' },
    { icon: icon3 ,title: 'Use Cases and Examples', content: 'Discover practical applications of various ​APIs through real-world examples and ​use cases, helping you see how to ​implement them effectively in your ​projects.' },
  ];

 
  return (
    <div className='mid-section' id='midSection'>
        <div className="main-div">
            <div className="our-services">
               Our Services
            </div>
            <div className="services-text">
                We provide comprehensive API documentation to guide you through using popular ​APIs, personalized integration assistance to help you implement them smoothly, ​and real-world use cases and examples to demonstrate practical applications.
            </div>

            {/* Use of component re-usability */}
            <div className="card-container">
                {cardData.map((card, index) => (
                <FrontPageCards key={index} icon={card.icon} title={card.title} content={card.content} />
                ))}
            </div>

        </div>
    </div>
  )
}

export default MidSection