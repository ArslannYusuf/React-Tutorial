import axios from "axios";
import React, { useEffect } from "react";

const BASE_URL = "http://localhost:3005";

const DeleteUser = () => {
  const deleteUserById = async (userId) => {
    const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`);

    console.log("deletedResponse", deletedResponse.data);
  };

  useEffect(() => {
    deleteUserById("3b32"); // id
  }, []);

  return <div></div>;
};

export default DeleteUser;
