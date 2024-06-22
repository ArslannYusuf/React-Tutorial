import axios from 'axios'
import React, { useEffect } from 'react'


const BASE_URL = "http://localhost:3005";

const AsyncProblem = () => {

  const getuserById = async (userId)=>{
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response.data.postId;
  }

  const getPostById = async (postId)=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + postId);
    return response.data;
  }

  const getPost = async () =>{
    // getuserById cagirirken await ile bekletmezsem donen promise "pending" konumuunda bekler
      const postId = await getuserById(1);
      
      const postData = await getPostById(postId);

      console.log(postData);
  }


  useEffect(()=>{
    getPost()
  },[]);

  return (
    <div>
      
    </div>
  )
}

export default AsyncProblem
