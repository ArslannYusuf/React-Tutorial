import axios from "axios";
import React, { useEffect } from "react";

const BASE_URL = "http://localhost:3005";

const UpdateUser = () => {
  const updateUser = async (userId, updatedUser) => {
    const updatedResponse = await axios.put(
      `${BASE_URL}/users/${userId}`,
      updatedUser
    );

    console.log("updatedResponse", updatedResponse.data);
  };

  useEffect(() => {
    updateUser("d120", {
      username: "veli",
      password: "yyy",
    });
  }, []);

  return <div></div>;
};

export default UpdateUser;
