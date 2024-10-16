import axios from "axios";
import { Tab } from "bootstrap";
import { useEffect, useState } from "react";

import Table from 'react-bootstrap/Table';
const Display=()=>{
    const [sdata,setData]=useState([]);

    const loaddata=()=>{
        let url="http://localhost:3000/student";
        axios.get(url).then((res)=>{
            console.log(res)
            setData(res.data)
        })
    }
    useEffect(()=>{
        loaddata();
    },[])

    const ans=sdata.map((key)=>{
        return(
            <>
                  <tr>
                    <th>{key.name}</th>
                    <th>{key.email}</th>
                    <th>{key.city}</th>
                    <th>{key.fees}</th>
                  </tr>
              
            </>
        )
    })
    return(
        <><div style={{width:"95%",marginLeft:"3%"}}>
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
export default Display;