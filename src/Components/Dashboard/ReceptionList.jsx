import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import axios from 'axios';
import ApiEndPoint from '../ApiEndPoint/ApiEndPoint';
import './Recptionlist.css'
import IsLoading from '../IsLoading/IsLoading';

function Recptionlist() {

  const [receptionlist,setReceptionList] = useState([]);
  const [isLoading,setIsLoading] = useState(true);


  const loadReceptionlist = async ()=>{
    try {
      let token = sessionStorage.getItem("token");
      let response = await axios.get(ApiEndPoint.getReception,{
        headers: {Authorization : `Bearer ${token}` }
      })
      // console.log(response.data.data)
      setReceptionList(response.data.data)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() =>{
    loadReceptionlist();
  },[])

  const deleteReception = async (receptionId)=>{
    try {

      if (window.confirm("Are you sure you want to delete !")) {
        let token = sessionStorage.getItem("token");
        let response = await axios.put(
          ApiEndPoint.deleteReception + receptionId,{},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        let index = receptionlist.findIndex(
          (reception) => reception.id === receptionId
        );
        receptionlist.splice(index, 1);

        setReceptionList([...receptionlist]);
        // console.log(receptionlist);
      }
    } 
    catch (err) {
      console.log(err)
    }
    
  }
  
  return (
    <>
      <Header />
      {isLoading 
      ? 
      <IsLoading/> 
      : 
      <div className="container-fluid mt-2" style={{padding:"0 50px"}}>
      <table className="table">
        <thead className='tableHead'>
          <tr>
            <th>S No.</th>
            <th>Id</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Password</th>
            <th>Address</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {receptionlist?.map((reception, index) => 
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{reception.id}</td>
              <td>{reception.name}</td>
              <td><b>{reception.phoneNumber}</b><br/><i>{reception.email}</i></td>
              <td>{reception.password}</td>
              <td>{reception.raddress}</td>
              <td>
                <button onClick={()=>deleteReception(reception.id)} className="btn btn-dark">Delete</button>
                <button className="btn btn-dark ml-1">Edit</button>

              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
      }

    </>
  );
}

export default Recptionlist
