// import React,{Component} from 'react';
// import axios from 'axios';


// export default class Registerget extends Component {
//     constructor(){
//         super();
//         this.getUser=this.getUser.bind(this);
//         this.state={
//           users:[]
//         }
//       }
//       componentDidMount(){
//           debugger
//         this.getUser();
//       }
//       async getUser(){
//           debugger
//         let usersData=await axios.get('https://localhost:44304/api/Values/api/values')
//                         .then(res=>{
//                           return res.data;
//                         })
//                         .catch(err=>{
//                           console.log(err);
//                         })
//         this.setState({
//           users:usersData
//         },()=>{console.log(this.state)})
//       }
  
//   render(){
//     const {users}=this.state;
//     return (
       
//         <div className="Registerget">
//              <table>
//                  <tr>
//                      <td>id</td>
//                      <td>username</td>
//                      <td>email</td>
//                      <td>phonenumber</td>
//                      <td>password</td>
//                     </tr>

//                 <tr>
                  
//                 </tr>


           
         
//                </table>
//         {users && users.map(user=>{

//           return(

            

//             <div className="container">

//        <table id="table" align="center" width="90%">
        
//         <thead>
//           <tr align="center" style="background-color: rgb(29, 161, 223); height: 50px;">
//             <th>Id :</th>
//             <th>UserName :</th>
//             <th>Email :</th>
//             <th>Phone Number :</th>
//             <th>Password</th>
//             <th>Retype Password</th>
           
          
//           </tr>
//         </thead>
      
//       <tbody>
//         <tr>
         
//         <td ><h4>{user.id}</h4> </td>
//         <td > {user.username}</td>
//           <td >{user.email}</td>
//             <td >{user.phonenumber}</td>
//             <td >{user.password}</td>
             
             
//               <td >{user.retypepassword}</td> 
            
      
//       </tr>
//       </tbody>
      
       
//       </table>
// <table>

//     <tr>
       
//         <td>
//         <h3> Id:</h3>  
        
//         </td>
    
//         <td>
//         <h3> UserName:</h3> 
//         </td>
//         <td>
//         <h3> Email:</h3> 
//         </td>
//         <td>
//         <h3> PhoneNumber:</h3> 
//         </td>
//         <td>
//         <h3> Password:</h3> 
//         </td>
//         <td>
//         <h3> Retypepassword:</h3> 
//         </td>
//     </tr>
//     <tr>
//     <td>
//         <h4 ><b>{user.id}</b></h4>
//         </td> 
//         <td>
//         <h4 ><b>{user.username}</b></h4>
//         </td>
//         <td>
//         <h4 ><b>{user.email}</b></h4>
//         </td>
//         <td>
//         <h4 ><b>{user.phonenumber}</b></h4>
//         </td>
//         <td>
//         <h4 ><b>{user.password}</b></h4>
//         </td>
//         <td>
//         <h4 ><b>{user.retypepassword}</b></h4>
//         </td>
//     </tr> 
//      <tr>
//         <td>
//         <h3> Id:</h3> 
//         </td>
//         <td>
//         <h4 ><b>{user.id}</b></h4>
//         </td>
//         <td>
//         <h3> UserName:</h3> 
//         </td>
//         <td>
//         <h4 ><b>{user.username}</b></h4>
//         </td>
//         <td>
//         <h3> Email:</h3> 
//         </td>
//         <td>
//         <h4 ><b>{user.email}</b></h4>
//         </td>
//         <td>
//         <h3> PhoneNumber:</h3> 
//         </td>
//         <td>
//         <h4 ><b>{user.phonenumber}</b></h4>
//         </td>
//         <td>
//         <h3> Password:</h3> 
//         </td>
//         <td>
//         <h4 ><b>{user.password}</b></h4>
//         </td>
//         <td>
//         <h3> Retypepassword:</h3> 
//         </td>
//         <td>
//         <h4 ><b>{user.retypepassword}</b></h4>
//         </td>
//     </tr> 
// </table>


//               <div className="content">
//               <div>
//                   <h3> Id:</h3>      
//               </div>
//               <div className="container" >
//                 <h4 ><b>{user.id}</b></h4>
              
//               </div>
//               </div>
//               <div className="content">
//               <div>
//                   <h3> Username:</h3>      
//               </div>
//               <div className="container" >
//                 <h4 ><b>{user.username}</b></h4>
              
//               </div>
//               </div>
//               <div className="content">
//               <div>
//                   <h3> Email:</h3>      
//               </div>
//               <div className="container" >
//                 <h4 ><b>{user.email}</b></h4>
              
//               </div>
//               </div>
             
//               <div className="content">
//               <div>
//                   <h3> PhoneNumber:</h3>      
//               </div>
//               <div className="container" >
//                 <h4 ><b>{user.phonenumber}</b></h4>
              
//               </div>
//               </div>
//               <div className="content">
//               <div>
//                   <h3> Password:</h3>      
//               </div>
//               <div className="container" >
//                 <h4 ><b>{user.password}</b></h4>
              
//               </div>
//               </div>
            
//               <div className="content">
//               <div>
//                   <h3> Retypepassword:</h3>      
//               </div>
//               <div className="container" >
//                 <h4 ><b>{user.retypepassword}</b></h4>
              
//               </div>
//               </div> 
            
             
//             </div>
//           )
//         })}
        
//       </div>
//     );
//   }
// }


import React,{Component} from 'react';
import axios from 'axios';
import './registerget.css';


export default class Registerget extends Component {
    constructor(){
        super();
        this.getUser=this.getUser.bind(this);
        this.state={
          users:[]
        }
      }
      componentDidMount(){
         
        this.getUser();
      }
      async getUser(){
       
        let usersData=await axios.get('https://localhost:44304/api/Values/api/values')
                        .then(res=>{
                          return res.data;
                        })
                        .catch(err=>{
                          console.log(err);
                        })
        this.setState({
          users:usersData
        },()=>{console.log(this.state)})
      }
  deleteProduct=(username)=> 
   {
     debugger;
    console.log(username)
    const { Employees } = this.state;

    const apiUrl = 'https://localhost:44304/api/Values/api/values';
    const formData = new FormData();
    //formData.append('Id', Id);

    const options = {
      method: 'POST',
      body: formData
    }

    fetch(apiUrl, options)
      .then(res => res.json())
      .then(
        (result) => {
          debugger
          this.setState({
            response: result,
            
          // Employees: Employees.filter(employee => employee.Id !== Id)
          });
        },
      
      )
  }

   removeData(id){
debugger
    axios.delete(`${URL}/${id}`).then(res => {
      //  const del = employees.filter(employee => id !== employee.id)
        //setEmployees(del)
    })
}








  render(){
    const {users}=this.state;
    return (
       
        <div className="content">
             <table className="table">
               <thead> 
                  <tr>
                    <td>id</td>
                    <td>username</td>
                    <td>email</td>
                    <td>phonenumber</td>
                    <td>password</td>
                    <td>Update/Delete</td>
                    </tr>

               </thead>
               <tbody>

                        {users.map((user,index)=>(
                            <tr>
                               
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phonenumber}</td>
                                <td>{user.password}</td>
                               <td><button >Update</button>
               <button onClick={this.deleteProduct(user.username)}>Delete</button></td>
                            </tr>
                        ))}


               </tbody>


           
         
               </table>
     
        
      </div>
    );
  }
}