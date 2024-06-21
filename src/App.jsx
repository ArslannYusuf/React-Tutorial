import { useEffect } from 'react'
import './App.css'
import axios from 'axios'


const BASE_URL = 'http://localhost:3005';

function App() {


    const getAllUsers = async () =>{
    const response =  await axios.get(BASE_URL + "/users");

    console.log(response.data[0]);
    }



    const getUserById = async(userId)=>{
      const response = await axios.get(`${BASE_URL}/users/${userId}`);
  
      console.log(response.data);
    }


    const createUser = async(newUser)=>{
      const response =  await axios.post(`${BASE_URL}/users`,newUser)

      console.log("response",response.data);
    }


    const updateUser = async(userId,updatedUser)=>{
      const response =  await axios.put(`${BASE_URL}/users/${userId}`,updatedUser)

      console.log("response",response.data);
    }


    useEffect(()=>{
     // getAllUsers();
     // getUserById(1);

     /* const newUser = {
       "username":"ali",
       "password":"789"
     }
     createUser(newUser); */



   /*   updateUser(8891,{
       "username":"veli",
       "password":"yyy" 
     }); */

     
     
    },[])

  return (
   <div>

   </div>
  )
}

export default App