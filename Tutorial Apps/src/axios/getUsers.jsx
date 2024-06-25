import axios from "axios";
import React, { useEffect } from "react";

const BASE_URL = "http://localhost:3005";

const GetAllUsers = () => {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");

    console.log("usersResponse", response.data[0]);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return <div></div>;
};

export default GetAllUsers;
