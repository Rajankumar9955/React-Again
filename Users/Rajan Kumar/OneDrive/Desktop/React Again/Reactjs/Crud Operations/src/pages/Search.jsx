import axios from "axios";
import { useState } from "react"

import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
const Search=()=>{
    const [std,setStd]=useState("")
    const[mydata,setMydata]=useState([]);
    
    const handleSearch=(e)=>{
       let api=`http://localhost:3000/student/?name=${std}`;
       axios.get(api).then((res)=>{
        setMydata(res.data);
        console.log(res.data);
       })
    }
    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
            
            </>
        )
    })
    return(
        <>
        <div>
            <h1 align="center">Search the Employee Records</h1>
            <div style={{width:"400px", marginLeft:"35%",marginTop:"15px"}}>
             <FloatingLabel
                           controlId="floatingInput" label="Employee Name" className="mb-3">
                           <Form.Control type="text" placeholder="Employee Name" value={std} onChange={(e)=>{setStd(e.target.value)}} />
             </FloatingLabel>
             </div>
             <Button variant="success" onClick={handleSearch} style={{ marginLeft:"46%"}}>Search!!!</Button>
             <hr size="4" color="black" />
             <Table striped bordered hover>
                                      <thead>
                                        <tr>
                                          <th>Name</th>
                                          <th>Email</th>
                                          <th>City</th>
                                          <th>Fees</th>
                                        </tr>
                                      </thead>
                                      {ans}
             </Table>
        </div>
        </>
    )
}
export default Search