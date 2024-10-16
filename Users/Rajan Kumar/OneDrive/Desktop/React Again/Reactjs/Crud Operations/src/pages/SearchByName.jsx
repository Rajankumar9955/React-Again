import axios from "axios";
import { useState } from "react";

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
const SearchByName=()=>{
    const [ename,setEname]=useState("")
    const [mydata,setMydata]=useState([]);
    const handleChange=(e)=>{
        let empname=e.target.value;
        setEname(empname);
        let api=`http://localhost:3000/student`;
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }
        const ans=mydata.map((key)=>{
            let str=key.name;
            let mystatus=str.includes(ename);
            console.log(mystatus)
            if(mystatus)
                {
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
            }
        })
 return(
    <>
    <div style={{width:"100%"}}>
        <h1 style={{width:"600px",marginLeft:"32.5%"}}>Search By Employee Name</h1>
        <div style={{width:"600px",margin:"auto"}}>
        <FloatingLabel
        controlId="floatingInput" label="Employee Name" className="mb-3">
        <Form.Control type="text" placeholder="Employee Name" value={ename} onChange={handleChange} />
      </FloatingLabel>
      </div>
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
export default SearchByName;