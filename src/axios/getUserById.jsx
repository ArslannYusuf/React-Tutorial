import axios from "axios";
import React, { useEffect } from "react";

const BASE_URL = "http://localhost:3005";

const GetUserById = () => {
  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);

    console.log("userByIdResponse", response.data);
  };

  useEffect(() => {
    getUserById(2);
  }, []);

  return <div></div>;
};

export default GetUserById;
