import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return <>
    <footer className="footer_section">
      <section className="info_section " style={{marginTop:"100px"}}>
        <div className="container">
          <div className="info_top">
            <div className="info_logo">
              <Link to='/dashboard/profile'>
                {/* <img src="images/logo.png" alt="Photograph" /> */}
                <h3 style={{ color:"#3787e6",fontSize:"35px",fontWeight:"bolder"}}>Shubh Clinic</h3>
              </Link>
            </div>
            <div className="info_form">
              <form action="">
                <input type="email" placeholder="Your email" />
                <button>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="info_bottom layout_padding2">
            <div className="row info_main_row">
              <div className="col-md-6 col-lg-3">
                <h5>
                  Address
                </h5>
                <div className="info_contact">
                  <Link>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>
                      Location
                    </span>
                  </Link>
                  <Link>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>
                      Call +01 1234567890
                    </span>
                  </Link>
                  <Link>
                    <i className="fa fa-envelope"></i>
                    <span>
                      demo@gmail.com
                    </span>
                  </Link>
                </div>
                <div className="social_box">
                  <Link>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </Link>
                  <Link>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </Link>
                  <Link>
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </Link>
                  <Link>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="info_links">
                  <h5>
                    Useful link
                  </h5>
                  <div className="info_links_menu">
                    <Link className="active">
                      Home
                    </Link>
                    <Link>
                      About
                    </Link>
                    <Link>
                      Treatment
                    </Link>
                    <Link>
                      Doctors
                    </Link>
                    <Link>
                      Testimonial
                    </Link>
                    <Link>
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="info_post">
                  <h5>
                    LATEST POSTS
                  </h5>
                  <div className="post_box">
                    <div className="img-box">
                      <img src="images/post1.jpg" alt="Photograph" />
                    </div>
                    <p>
                      Normal
                      distribution
                    </p>
                  </div>
                  <div className="post_box">
                    <div className="img-box">
                      <img src="images/post2.jpg" alt="Photograph" />
                    </div>
                    <p>
                      Normal
                      distribution
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="info_post">
                  <h5>
                    News
                  </h5>
                  <div className="post_box">
                    <div className="img-box">
                      <img src="images/post3.jpg" alt="Photograph" />
                    </div>
                    <p>
                      Normal
                      distribution
                    </p>
                  </div>
                  <div className="post_box">
                    <div className="img-box">
                      <img src="images/post4.png" alt="Photograph" />
                    </div>
                    <p>
                      Normal
                      distribution
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  </>
}

export default Footer
