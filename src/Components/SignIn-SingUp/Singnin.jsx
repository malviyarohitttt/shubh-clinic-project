import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import axios from 'axios';
import ApiEndPoint from '../ApiEndPoint/ApiEndPoint';
import Loading from '../IsLoading/Loading';

function Singnin() {

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [msg,setMsg] = useState();
  const [loading,setLoading] = useState(false);

  const navigate = useNavigate()
  
  const doctorSingnin= async (event)=>{
    event.preventDefault();
    try {
      setLoading(true);
      let response = await axios.post(ApiEndPoint.doctorSignIn,{email,password})
      // console.log(response.data.type)
      if(response.data.status){
        setLoading(false);
        let currentUser = response.data.data.user;
        delete currentUser.password;
        currentUser.type = response.data.data.userType;
        sessionStorage.setItem("current_user", JSON.stringify(currentUser));
        sessionStorage.setItem("token",response.data.data.token);
        navigate("/dashboard/profile")
      }
      else{
        setLoading(true);
        setMsg(response.data.msg)
      }
    } 
    catch (err) {
      setLoading(false);
      console.log(err)
      console.log(err.message)
      setMsg(err.message+"!")
      // console.log("Hello Rohit")
    }
  }
  return <>
  <Header/>
  <section className="book_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col">
          <form onSubmit={doctorSingnin}>
            <h4>
              Sign <span>In</span>
            </h4>
            <div className="form-row ">
              <div className="form-group col-lg-4">
                <label htmlFor="inputEmail">Email</label>
                <input onChange={(event)=>setEmail(event.target.value)} type="email" className="form-control" id="inputEmail" placeholder="Enter Your Email" />
              </div>
              <div className="form-group col-lg-4">
                <label htmlFor="inputPassword">Password</label>
                <input onChange={(event)=>setPassword(event.target.value)} type="password" className="form-control" id="inputPassword" placeholder="Enter Your Password" />
              </div>
            </div>
            <div className="btn-box">
              <button className='btn btn-denger' type="submit">Submit Now</button>
              {/* <small><b style={{textTransform:"capitalize",color:"red"}}>{msg}</b></small> */}
              {loading ? <Loading/> : <small><b style={{textTransform:"capitalize",color:"red"}}>{msg}</b></small>}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  </>
}

export default Singnin
