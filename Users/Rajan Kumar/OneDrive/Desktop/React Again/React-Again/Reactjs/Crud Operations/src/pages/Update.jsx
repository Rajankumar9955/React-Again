import axios from "axios";
import {useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import delimg from "../images/del.png";
import edtimg from "../images/upd.jpg";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Update=()=>{
    const [std,setStd]=useState([])
    
    const loaddata=()=>{
        const url="http://localhost:3000/student";
        axios.get(url).then((res)=>{
            console.log(res.data)
            setStd(res.data);
        })
    }

    const navigate=useNavigate();
    const myEdit=(id)=>{
        navigate("/editdata");
    }

    const Recdel=(id)=>{
        let url=`http://localhost:3000/student/${id}`;
        axios.delete(url).then((res)=>{
            toast.error("Record Deleted")
            loaddata()
        })
    }
    useEffect(()=>{
        loaddata()
    },[])


    const ans=std.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
                <td>
                    <a href="#" onClick={()=>{myEdit(key.id)}}>
                        <img src={edtimg} alt="" width="60" height="40"/>
                    </a>
                </td>

                <td><a href="#" onClick={()=>{Recdel(key.id)}}>
                        <img src={delimg} alt="" width="30" height="30"/>
                    </a>
                </td>
            </tr>
            
            </>
        )
    })
    return(
        <>
        <div>
        <h1 align="center">Update Section</h1>
         <div>
                             <Table striped bordered hover>
                                      <thead>
                                        <tr>
                                          <th>Name</th>
                                          <th>Email</th>
                                          <th>City</th>
                                          <th>Fees</th>
                                          <th>Update</th>
                                          <th>Delete</th>
                                        </tr>
                                      </thead>
                                      {ans}
                              </Table>
         </div>
         <ToastContainer />
        </div>
        </>
    )
}
export default Update