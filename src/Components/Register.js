import React from "react";
import { useState } from "react";
import axios from "axios";
// import './register.css';
// var myVar;

// $(document).ready(function(){
//     myVar = setInterval("Get()", 1000);
// });

const Get=(async()=>
{
  
 try {
    const requestUrl = 'https://localhost:44304/api/Values/api/Values';
    const response = await fetch(requestUrl);
     const requestJSON = await response.json();
   
   console.log({requestJSON});


 }
 catch (error) {
   console.log('Failed to fetch post list: ',error.message);
 }
})
const Register=()=>{
    const[Id,setId]=useState("");
    const[Username,setName]=useState("")
    const[Email,setEmail]=useState("")
    const[Phonenumber,setPhonenumber]=useState("")
    const[Password,setPassword]=useState("")
    const[Retypepassword,setRetypepassword]=useState("")
    
    const api="https://localhost:44304/api/Values/api/Values";
    const form={Id,Username,Email,Phonenumber,Password,Retypepassword};
 

    const submitHandler=()=>{
        
    debugger
    //    console.log(Id)
       console.log(form);
        axios.post(api,form).then(res=>{console.log(res)})
        
    }
    return(
        <div>
      
<h1>Register</h1>
            <form onSubmit={submitHandler}>
                <div className="forflex">
                    <div>
                    <label for="fname">Id :</label><br/>
                    </div>
                <div className="forinput">
                <input type="text" placeholder="Id"  value={Id} onChange={e=>setId(e.target.value)} ></input><br/><br/>
                </div>
               
                </div>
                <div className="forflex">
                <div>
                    <label for="Username">User Name :</label><br/>
                    </div>
                    <div className="forinput">
                    <input type="text" placeholder="Name" value={Username} onChange={e=>setName(e.target.value)}></input><br/><br/>
                    </div>
                </div>
                <div className="forflex">
                <div>
                    <label for="Username">Email :</label><br/>
                    </div>
                    <div className="forinput">
                    <input type="text" placeholder="Email" value={Email} onChange={e=>setEmail(e.target.value)}></input><br/><br/>
                    </div>
                </div>

                <div className="forflex">
                <div>
                    <label for="Phonenumber">PhoneNumber :</label><br/>
                    </div>
                    <div className="forinput">
                    <input type="text" placeholder="Phonenumber" value={Phonenumber} onChange={e=>setPhonenumber(e.target.value)}></input><br/><br/>
                    </div>
                </div>
                
                <div className="forflex">
                <div>
                    <label for="Password">Password :</label><br/>
                    </div>
                    <div className="forinput">
                   
                <input type="text" placeholder="Password" value={Password} onChange={e=>setPassword(e.target.value)}></input><br/><br/>
                    </div>
                </div>
                <div className="forflex">
                <div>
                    <label for="Retypepassword">Retypepassword :</label><br/>
                    </div>
                    <div className="forinput">
                   
                    <input type="text" placeholder="Retypepassword" value={Retypepassword} onChange={e=>setRetypepassword(e.target.value)}></input><br/><br/>
                    </div>
                </div>
               
               
              
             
              
                
                
                <button  type="submit">Submit</button>
              <button type="button" onClick={Get}>Get Details</button>
            </form>
          
            
        </div>
      
    );
}

export default Register;