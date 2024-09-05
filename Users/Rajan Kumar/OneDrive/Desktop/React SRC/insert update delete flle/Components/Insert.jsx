import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
const Insert=()=>{
    const [input, setInput]= useState({}); 
    // input={rollno:120, name:raju, city:bhopal, fees:3455}
    const handleInput=(e)=>{
        let name= e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}))
        console.log(input)
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      let url="http://localhost:3000/student";
      axios.post(url, input).then((res)=>{
        alert("Data save!!!");
      })
    }
    return(
        <>
         <h1>Insert data</h1>
         <Form style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Rollno</Form.Label>
        <Form.Control type="text" name="rollno" value={input.rollno} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text"  name="name" value={input.name} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text"  name="city" value={input.city} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Fees</Form.Label>
        <Form.Control type="text"  name="fees" value={input.fees} onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}
export default Insert;