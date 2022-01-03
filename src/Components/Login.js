import Button from "@restart/ui/esm/Button";
import React from "react";
import { ButtonGroup, Form } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import './login.css';



const Login=()=>{

    const history= useHistory();
   return(

    <div className="content">
        .
        {/* <h1> Login Form</h1>
        <Form className="form">
            <div className="labelinput">
               
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <div >
    <Form.Label>Email address</Form.Label>
    </div>
    <div>
    <Form.Control type="email" placeholder="Enter email" />
    </div>
  
  </Form.Group>
</div>
<div  className="labelinput">
  <Form.Group className="mb-3" controlId="formBasicPassword">
      <div>
    <Form.Label>Password</Form.Label>
    </div>
    <div>
    <Form.Control type="password" placeholder="Password" />
    </div>
  </Form.Group>

  </div>
  <div>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </div>

</Form> */}

    <table class="formtable">
        <h1>LogIn Form</h1>
     
        <tr>
  <td>UserName:</td>
  <td>
      <input type="text" placeholder="User Name"></input>
  </td>
        </tr>
        <tr>
  <td>Password:</td>
  <td>
      <input type="password" placeholder="Password"></input>
  </td>
        </tr>
        <tr>
            <td class="submit">
                
                <input type="button" onClick={()=>{history.push("/home");}} value="submit"></input>
            </td>
        </tr>
   
    </table>
  </div>
   )
}
export default Login;