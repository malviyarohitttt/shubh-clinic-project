import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Contact() {
  return <>
  <Header/>
  <section className="contact_section layout_padding-bottom mt-5">
    <div className="container">
      <div className="heading_container">
        <h2>
          Get In Touch
        </h2>
      </div>
      <div className="row">
        <div className="col-md-7">
          <div className="form_container">
            <form action="">
              <div>
                <input type="text" placeholder="Full Name" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div>
                <input type="text" className="message-box" placeholder="Message" />
              </div>
              <div className="btn_box">
                <button>
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-5">
          <div className="img-box">
            <img src="images/contact-img.jpg" alt="Photograph" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  </>
}

export default Contact
