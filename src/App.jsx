import GetAllUsers from "./axios/getUsers";
import GetUserById from "./axios/getUserById";
import CreateUser from "./axios/createUser";
import UpdateUser from "./axios/updateUser";
import DeleteUser from "./axios/deleteUser";

function App() {
  return (
    <>
      <GetAllUsers />
      <GetUserById />
      <CreateUser />
      <UpdateUser />
      <DeleteUser />
    </>
  );
}

export default App;
