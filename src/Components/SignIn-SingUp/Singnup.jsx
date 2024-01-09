import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Loading from '../IsLoading/Loading'
import ApiEndPoint from '../ApiEndPoint/ApiEndPoint'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Singnup() {

  const [name,setName] = useState();
  const [phoneNumber,setPhoneNumber] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [msg,setMsg] = useState();
  const [loading,setLoading] = useState(false);


  const navigate = useNavigate();

  const saveDoctor = async (event)=>{
    event.preventDefault();
    try {
      setLoading(true);
      let response = await axios.post(ApiEndPoint.doctorSignUp,{name,phoneNumber,email,password});
      setLoading(false);
      console.log(response.data)
      navigate("/signin")
    } 
    catch (err) {
      console.log(err)
      setLoading(false);
      setMsg(err.message+"!")
     }
  }
  return <>
  <Header/>
    <section className="book_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col">
          <form onSubmit={saveDoctor}> 
            <h4>
              Sign <span>Up</span>
            </h4>
            <div className="form-row ">
              <div className="form-group col-lg-4">
                <label htmlFor="inputName">Name </label>
                <input onChange={(event)=>setName(event.target.value)} type="text" className="form-control" id="inputName" placeholder="Enter Your Name" />
              </div>
              <div className="form-group col-lg-4">
                <label htmlFor="inputPhone">Phone Number</label>
                <input onChange={(event)=>setPhoneNumber(event.target.value)} type="number" className="form-control" id="inputPhone" placeholder="Enter Your Number" />
              </div>
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
              <button type="submit" className="btn ">Submit Now</button><br/>
              {loading ? <Loading/> : <small><b style={{textTransform:"capitalize",color:"red"}}>{msg}</b></small>}
              {/* <Loading/> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  </>
}

export default Singnup
