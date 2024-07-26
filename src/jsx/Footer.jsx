import '../css/Footer.css'


function Footer() {

  return (
    <div className="main-body bg-black" id="footSection">
        <div className="first-div">
            <div className="img bg-cover">

            </div>
        </div>
        <div className="second-div">
            <div className="contact-us">
              Contact Us
            </div>
            <div className="phone">
              <span>Phone</span> <br /> 123-456-789
            </div>
            <div className="email">
            <span>Email</span> <br /> apihub@gmail.com
            </div>
        </div>
    </div>
  )
}

export default Footer
