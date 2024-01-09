import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import axios from 'axios';
import ApiEndpoint from '../../ApiEndPoint/ApiEndPoint';
import IsLoading from '../../IsLoading/IsLoading';



function MyApointment() {

    const [PatientList,setPatientList] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    
    let current_user = sessionStorage.getItem('current_user');
    current_user = JSON.parse(current_user);

    const loadApointmentList = async () =>{
        try {
            let token = sessionStorage.getItem("token")
            let currentUser = sessionStorage.getItem("current_user");
            currentUser = JSON.parse(currentUser);
            // console.log(currentUser)
            if(currentUser.type === "doctor"){
                let response = await axios.get(ApiEndpoint.apointmentListDoctor,{
                    headers: {Authorization : `Bearer ${token}` }
                  })
                setPatientList(response.data.data)
                setIsLoading(false)
                // console.log(response.data.data)
            }else{
                let response = await axios.get(ApiEndpoint.apointmentListReception,{
                    headers: {Authorization : `Bearer ${token}` }
                  })
                setPatientList(response.data.data)
                setIsLoading(false)
                // console.log(response.data.data)
            }
        } catch (err) {
            console.log(err)
            setIsLoading(true)
        }
    }


    useEffect(() =>{
        loadApointmentList();
      },[])

      const deletePatient = async (patientID)=>{
        // window.alert("Clicked....")
        try {
            if(window.confirm("Are you sure !")){
                let token = sessionStorage.getItem("token");
                let response = await axios.delete(ApiEndpoint.deletePatient+patientID,{
                    headers:{Authorization : `Bearer ${token}`}
                })
                if(response.data.status){
                    let index = PatientList.findIndex((patient)=> patient.id === patientID)
                    PatientList.splice(index,1)
                    setPatientList([...PatientList])
                }
            }
        } catch (err) {
            console.log(err)
            
        }
      }
  return <>
   <Header/>
    {isLoading ? <IsLoading/> : PatientList?.filter((patient)=>patient.doctor_name===current_user.id).map((patient,index)=>
        <section className='book_section layout_padding' style={{marginBottom:"-125px ! importent"}}>
        <div class="container" style={{border: "0px solid black", padding: "25px", borderRadius: "10px", boxShadow: "lightgrey 0px 0px 15px"}}>
            <div class="row">
                <div class="col">
                    <div>
                        <h4>SHUBH <span>CLINIC</span></h4>
                        <div class="form-row">
                            <div class="form-group col-lg-3"><label>Patient Name :</label><b style={{textTransform:"capitalize"}}> {patient.name}</b></div>
                            <div class="form-group col-lg-3"><label>Gender :</label><b> {patient.sex}</b></div>
                            <div class="form-group col-lg-3"><label>Patient Age :</label><b> {patient.age}</b></div>
                        </div>
                        <hr />
                        <div class="form-row">
                            <div class="form-group col-lg-3"><label>Patient Contact :</label><b> {patient.phoneNumber}</b></div>
                            <div class="form-group col-lg-3"><label>Doctor ID:</label><b> {patient.doctor_name}</b></div>
                            <div class="form-group col-lg-3"><label>Address :</label><b> {patient.raddress}</b></div>
                            <div class="form-group col-lg-3"></div>
                        </div>
                        <hr />
                        <div class="form-row">
                            <div class="form-group col-lg-6"><label>Daignosis :</label><b> </b></div>
                            <div class="form-group col-lg-6">
                                <label>Appointment : </label><br />
                                <b>Date : {patient.appointmentdate}</b><br />
                                <b>Time : {patient.time}</b>
                            </div>
                        </div>
                        <div class="btn-box">
                            <hr/>
                            <hr/>
                            <div class="form-row">
                                <div class="form-group col-lg-3"><label>Receptionist ID :</label><b> {patient.address.id}</b></div>
                                <div class="form-group col-lg-3"><label>Receptionist Name : </label><b style={{textTransform:"capitalize"}}> {patient.address.name}</b></div>
                                <div class="form-group col-lg-3">
                                    <label><b>Contact</b></label><br />
                                    Phone Number : <b>{patient.address.phoneNumber}</b><br/>    
                                    <i>Email : <b>{patient.address.email}</b></i>
                                </div>
                                <div class="form-group col-lg-3"><label>Reception Address : </label><b style={{textTransform:"capitalize"}}> {patient.address.raddress}</b></div>
                            </div>
                            <hr />
                            <div class="form-row text-center">
                                <div class="form-group col-lg-4"><button class="btn btn-info">UPDATE</button></div>
                                <div class="form-group col-lg-4"></div>
                                <div class="form-group col-lg-4"><button class="btn btn-danger" onClick={()=>{deletePatient(patient.id)}}>DELETE</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )}
   <Footer/>
  </>
}

export default MyApointment
