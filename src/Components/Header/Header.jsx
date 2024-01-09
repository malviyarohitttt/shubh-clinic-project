import React from 'react'
import { Link, useNavigate }  from 'react-router-dom'
import IsLoggedin from '../Authorization/IsLoggedin'



function Header() {
  const navigate = useNavigate();

  const SignOut = ()=>{
    sessionStorage.clear();
    navigate("/")
  }

  let currentUser = sessionStorage.getItem("current_user")
  currentUser = JSON.parse(currentUser)
  
  return <>
  <div className="hero_area">
      <header className="header_section">
      {/* <div className="header_top">
        <div className="container">
          <div className="contact_nav">
            <a href="">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call : +01 123455678990
              </span>
            </a>
            <a href="">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>
                Email : demo@gmail.com
              </span>
            </a>
            <a href="">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                Location
              </span>
            </a>
          </div>
        </div>
      </div> */}
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            {IsLoggedin() && currentUser.type === "doctor" 
            ? 
            <>
           <Link className="navbar-brand" to='/dashboard/profile' >
              <h3 style={{ color:"#3787e6",fontSize:"35px",fontWeight:"bolder"}}>Shubh Clinic</h3>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex mr-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <Link to="/dashboard/add-reception" className="nav-link">Add Recptionist</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/dashboard/receptionlist" className="nav-link">Recptionist List</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/apointment-list-my">My Appointment</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/apointment-list">All Appointment</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/dashboard/profile" className="nav-link">Profile</Link>
                  </li>
                </ul>
              </div>
              <div className="quote_btn-container">
                <a className='btn btn-danger text-white'>
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span onClick={SignOut} >
                    Sign Out
                  </span>
                </a>
                </div>
              </div> 
            </> 
            : IsLoggedin() && currentUser.type === "reception" 
            ? 
            <>
            <Link className="navbar-brand" to='/dashboard/profile' >
               <h3 style={{ color:"#3787e6",fontSize:"35px",fontWeight:"bolder"}}>Shubh Clinic</h3>
             </Link>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className=""> </span>
             </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <div className="d-flex mr-auto flex-column flex-lg-row align-items-center">
                 <ul className="navbar-nav  ">
                   <li className="nav-item active">
                     <Link className="nav-link" to="/dashboard/add-apointment">Add Apointment </Link>
                   </li>
                   <li className="nav-item">
                     <Link className="nav-link" to="/dashboard/apointment-list"> Apointment List</Link>
                   </li>
                   <li className="nav-item">
                    <Link to="/dashboard/profile" className="nav-link">Profile</Link>
                  </li>
                 </ul>
               </div>
               <div className="quote_btn-container">
                <a className='btn btn-danger text-white'>
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span onClick={SignOut} >
                    Sign Out
                  </span>
                </a>
                </div>
              </div> 
             </>
            : 
            <>
            <Link className="navbar-brand" to='/' >
               <h3 style={{ color:"#3787e6",fontSize:"35px",fontWeight:"bolder"}}>Shubh Clinic</h3>
             </Link>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className=""> </span>
             </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <div className="d-flex mr-auto flex-column flex-lg-row align-items-center">
                 <ul className="navbar-nav  ">
                   <li className="nav-item active">
                     <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
                   </li>
                   <li className="nav-item">
                     <Link className="nav-link" to='/about'> About</Link>
                   </li>
                   <li className="nav-item">
                     <Link className="nav-link" to='/treatment'>Treatment</Link>
                   </li>
                   <li className="nav-item">
                     <Link className="nav-link" to='/doctor'>Doctors</Link>
                   </li>
                   <li className="nav-item">
                     <Link className="nav-link" to='/contact'>Contact Us</Link>
                   </li>
                 </ul>
               </div>
               <div className="quote_btn-container">
                 <Link to='/signin' className='btn btn-danger'>
                   <i className="fa fa-user" aria-hidden="true"></i>
                   <span>
                     SignIn
                   </span>
                 </Link>
                 <Link to='/signup' className='btn btn-danger'>
                   <i className="fa fa-user" aria-hidden="true"></i>
                   <span>
                     SignUp
                   </span>
                 </Link>
               </div>
             </div>
             </>
            }
          </nav>
        </div>
      </div>
    </header>
    </div>
  </>
}

export default Header


