
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
      async getUser()
      {
              let usersData=await axios.get('https://localhost:44304/api/Values/api/values')
                        .then(res=>{
                          return res.data;
                        })
                        .catch(err=>{
                          console.log(err);
                        })
        this.setState({users:usersData})
      }

  // deleteProduct=(username)=> 
  //  {
  //    debugger;
  //   console.log(username)
  //   const { Employees } = this.state;

  //   const apiUrl = 'https://localhost:44304/api/Values/api/values';
  //   const formData = new FormData();
  //   formData.append('username', username);

  //   const options = {
  //     method: 'POST',
  //     body: formData
  //   }

  //   fetch(apiUrl, options)
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
        
  //         this.setState({
  //           response: result,
            
  //         Employees: Employees.filter(employee => employee.Id !== Id)
  //         });
  //       },
      
  //     )
  // }

   removeData(username){
    axios.delete(`https://localhost:44304/api/Values/api/values/${username}`).then(res => {
        //const del = employees.filter(employee => id !== employee.id)
        //setEmployees(del)

    })
}
updateData(username){
  debugger;
      axios.get(`https://localhost:44304/api/Values/api/values/${username}`).then(res => {
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
                               <td><button onClick={()=>this.updateData(user.username)}>Update</button>
               <button onClick={()=>this.removeData(user.username)}>Delete</button></td>
                            </tr>
                        ))}
               </tbody>

               </table>
      </div>
    );
  }
}