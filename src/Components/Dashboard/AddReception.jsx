import axios from 'axios';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ApiEndPoint from '../ApiEndPoint/ApiEndPoint';
import { useState } from 'react';

function AddReception() {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [phoneNumber,setPhoneNumber] = useState();
    const [raddress,setRAddress] = useState();
    const [msg,setMsg] = useState();

    const AddReception = async (event)=>{
        event.preventDefault();
        let token = sessionStorage.getItem('token');
        let response = await axios.post(ApiEndPoint.addReception,{name,phoneNumber,email,password,raddress},{
            headers: {Authorization : `Bearer ${token}` }
          })
        setMsg(response.data.msg)
        console.log(response.data)
    }
  return <>
  <Header/>
  <section className="book_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col">
          <form onSubmit={AddReception}>
            <h4>
              Add <span>Reception</span>
            </h4>
            <div className="form-row ">
              <div className="form-group col-lg-4">
                <label htmlFor="name">Name</label>
                <input onChange={(event)=>setName(event.target.value)} type="text" className="form-control" id="name" placeholder="Enter Your Name" />
              </div>
              <div className="form-group col-lg-4">
                <label htmlFor="pNumber">Phone Number</label>
                <input onChange={(event)=>setPhoneNumber(event.target.value)} type="number" className="form-control" id="pNumber" placeholder="Enter Your Number" />
              </div>
              <div className="form-group col-lg-4">
                <label htmlFor="email">Email</label>
                <input onChange={(event)=>setEmail(event.target.value)} type="email" className="form-control" id="email" placeholder="Enter Your Email" />
              </div>
              <div className="form-group col-lg-4">
                <label htmlFor="password">Password</label>
                <input onChange={(event)=>setPassword(event.target.value)} type="password" className="form-control" id="password" placeholder="Enter Your Password" />
              </div>
              <div className="form-group col-lg-4">
                <label htmlFor="address">Address</label>
                <input onChange={(event)=>setRAddress(event.target.value)} type="text" className="form-control" id="address" placeholder="Enter Your Address" />
              </div>
            </div>
            <div className="btn-box">
              <button className='btn btn-denger' type="submit">Add</button><br/><br/>
              <small><b>{msg}</b></small>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <Footer/>  </>
}

export default AddReception
