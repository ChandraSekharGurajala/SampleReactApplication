import React from 'react';
import './home.css';

//import { Link } from 'react-router-dom';
 const Home=()=>{
    return (
<div>
<div class="topnav">
  <a  href="/">Home</a>

  
  <a href="/about">About</a>
  <a href="/data">Data</a>

  <a href="/dataitem">DataItem</a>

  <a href="/register">Register</a>
  
  <a href="/registerget">RegisterGet</a>
  </div>
<table className="form">
 
    <h1>REGISTRATION FORM!</h1>
  <tr>
    <label>
  First Name :</label>
    <td>
     <input type="text" placeholder="First Name.."></input>
    </td>
  </tr>
  <tr>
    <label>
  Last Name :</label>
    <td>
     <input type="text" placeholder="Last Name.."></input>
    </td>
  </tr>
  <tr>
    <label>
  Age :</label>
    <td>
     <input type="number" placeholder="Age.."></input>
    </td>
  </tr>
  <tr>
    <label>
      Gender : 
    </label>
    <td>
<input type="radio" name="gender" value="Male"/>Male
<input type="radio" name="gender" value="Male"/>Female
<input type="radio" name="gender" value="Male"/>Others
    </td>
  </tr>
  <tr>
    <label>
  Mobile Number : </label>
    <td>
     <input type="number" placeholder="Mobile Number.."></input>
    </td>
  </tr>
  <tr>
   <label>
  Email Id :</label>
    <td>
     <input type="email" placeholder="Email Id.."></input>
    </td>
  </tr>
  <tr>
    <label>Password : </label>
    <td>
      <input type="password" placeholder="Password" ></input>
    </td>
  </tr>
  <tr>
    <td>
      <input className="button"  type="button" value="submit"></input>
    </td>
  </tr>


</table>
</div>

    );
}
export default Home;