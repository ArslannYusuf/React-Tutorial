import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";
import UserList from "./UserList";
import { Routes, Route } from "react-router-dom";

function App() {
  const { value } = useSelector((store) => store.counter);
  console.log(value);

  const dispatch = useDispatch();

  return (
    <>
      {/* dispatch ile actioni tetikleyebiliriz */}
      <div>
        <div>{value}</div>
        <div>
          <button onClick={() => dispatch(increment())}>Arttır</button>{" "}
          <button onClick={() => dispatch(decrement())}>Azalt</button>
        </div>
      </div>

      <hr />
      {/* createAsyncThunk ile HTTP istegi gonderdim */}
      <div>
        <UserList />
      </div>
      <hr />
    </>
  );
}

export default App;
