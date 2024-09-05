import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import edtimg from "../images/edit.png";
import delimg from "../images/delete.png"
import { useNavigate } from "react-router-dom";

const Update=()=>{
    const [mydata, setMydata]=useState([]);

    const myNav= useNavigate();

    const loadData=()=>{
     let url="http://localhost:3000/student";
     axios.get(url).then((res)=>{
        setMydata(res.data)
     })
    }
    useEffect(()=>{
        loadData();
    }, [])
    const myDel=(myid)=>{
        let url=`http://localhost:3000/student/${myid}`;
        axios.delete(url).then((res)=>{
            alert("Record Deleted!!!");
            loadData();
        })
    }


    const myEdit=(myid)=>{
       
      myNav(`/myedit/${myid}`)    // /myedit/101 
       
    }

  const ans=mydata.map((key)=>{
       return(
        <>
           <tr>
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.fees}</td>
            <td> 

           
             



          <a href="#">
          <img src={delimg}  width="30" height="30"  onClick={()=>{myDel(key.id)}} />
          </a>
          <a href="#">
              <img src={edtimg}  width="30" height="30" onClick={()=>{myEdit(key.id)}} />
            </a>
            </td>
           </tr>
        </>
       )
  })
    return(
        <>
         <h1>Update data</h1>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Rollno</th>
          <th>Student Name</th>
          <th>City</th>
          <th>Total Fees</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
            {ans}
        </tbody>
        </Table>
         </>
    )
}

export default Update;