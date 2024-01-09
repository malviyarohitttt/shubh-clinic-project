import React, { useState } from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import axios from 'axios';
import ApiEndPoint from '../../ApiEndPoint/ApiEndPoint';

function AddApointment() {

    const [name,setName] = useState();
    const [sex,setSex] = useState();
    const [age,setAge] = useState();
    const [phoneNumber,setPhoneNumber] = useState();
    const [appointmentdate,setAppointmentdate] = useState();
    const [time,setTime] = useState();
    const [msg,setMsg] = useState();
    // console.log(name)
    // console.log(sex)
    // console.log(age)
    // console.log(phoneNumber)
    // console.log(date)
    // console.log(time)

    const addApointment = async (event)=>{
        event.preventDefault();
        try {
            let token = sessionStorage.getItem('token');
            let response = await axios.post(ApiEndPoint.addApointment,{name,sex,age,phoneNumber,appointmentdate,time},{
                headers:{
                    Authorization: 'Bearer ' + token
                }
            })
            if(response.data.status){
                setMsg(response.data.msg)
            }else{
                setMsg(response.data.msg)
            }
        } catch (err) {
            console.log(err)
        }
    }
  return <>
  <Header/>
  <section className="book_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col">
          <form onSubmit={addApointment}>
            <h4>
              ADD<span>APOINTMENT</span>
            </h4>
            <div className="form-row ">
              <div className="form-group col-lg-4">
                <label htmlFor="name">Name</label>
                <input onChange={(event)=>{setName(event.target.value)}} type="text" className="form-control" id="name" placeholder="Enter Your Name"/>
              </div>
              <div className="form-group col-lg-4">
                <label htmlFor="phonenumber">Phone Number</label>
                <input onChange={(event)=>{setPhoneNumber(event.target.value)}} type="number" className="form-control" id="phonenumber" placeholder="Enter Your Phone Number"/>
              </div>
              <div className="form-group col-lg-4">
                <label htmlFor="age">Age</label>
                <input onChange={(event)=>{setAge(event.target.value)}} type="number" className="form-control" id="age" placeholder="Enter Your Age"/>
              </div>
              <div className="form-group col-lg-4">
                <label htmlFor="gender">Gender</label>
                {/* <input type="text" className="form-control" id="gender" placeholder="Enter Your Gender"/> */}
                <select onChange={(event)=>{setSex(event.target.value)}} name="gender" id="gender" className="form-control">
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
              </div>
              <div className="form-group col-lg-4">
                <label htmlFor="date">Date</label>
                <input onChange={(event)=>{setAppointmentdate(event.target.value)}} type="date" className="form-control" id="date"/>
              </div>
              <div className="form-group col-lg-4">
                <label htmlFor="time">Time</label>
                <input onChange={(event)=>{setTime(event.target.value)}} type="time" className="form-control" id="time"/>
              </div>
            </div>
            <div className="btn-box">
              <button className='btn btn-denger' type="submit">ADD</button><br/><br/>
              <small><b style={{textTransform:"capitalize"}}>{msg}</b></small>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  </>
}

export default AddApointment
