import axios from "axios";
import { useState } from "react"

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';

const Insert=()=>{
    const [input, setInput]=useState({});
    
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
       setInput(values=>({...values, [name]:value}));
       console.log(input)
    }

    const handleSubmit=()=>{
        let api="http://localhost:3000/student";
        axios.post(api,input).then((res)=>{
            console.log(res)
            toast.success("Data saved!!")
        })
    }

    return(
        <>
        <div style={{width:"100%"}}>
          <h2 style={{marginLeft:"38%",marginTop:"15px"}}>Insert the Employees Record</h2>
        <div align="center" style={{width:"500px",marginLeft:"35%",marginTop:"3%"}}>
            {/* Enter Your Name: <input type="text" name="name" onChange={handleInput} /><br />
            Enter Your Email: <input type="text" name="Email" onChange={handleInput} /><br />
            Enter Your City: <input type="text" name="city" onChange={handleInput} /><br />
            Enter Your Fees: <input type="text" name="fees" onChange={handleInput} /><br />
            <button onClick={handleSubmit}>Submit!!!</button> */}

<FloatingLabel
        controlId="floatingInput" label="Name" className="mb-3">
        <Form.Control type="text" placeholder="Name" name="name" onChange={handleInput} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
        <Form.Control type="text" placeholder="Email" name="Email" onChange={handleInput} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="City" className="mb-3">
        <Form.Control type="text" placeholder="City" name="city" onChange={handleInput} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Fees" className="mb-3">
        <Form.Control type="text" placeholder="Fees" name="fees" onChange={handleInput} />
      </FloatingLabel>
      {/* <button variant="success" onClick={handleSubmit}>Submit!!!</button> */}
      <Button variant="success"  onClick={handleSubmit} >Success</Button>
      <ToastContainer />
        </div>
        </div>
        </>
    )
}
export default Insert