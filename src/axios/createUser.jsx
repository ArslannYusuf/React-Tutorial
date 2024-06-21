import axios from "axios";
import React, { useEffect } from "react";

const BASE_URL = "http://localhost:3005";

const CreateUser = () => {
  const createUser = async (newUser) => {
    const createResponse = await axios.post(`${BASE_URL}/users`, newUser);

    console.log("createResponse", createResponse.data);
  };

  useEffect(() => {
    const newUser = {
      username: "ali",
      password: "789",
    };
    createUser(newUser);
  }, []);

  return <div></div>;
};

export default CreateUser;
