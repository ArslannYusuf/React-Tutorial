import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from './redux/userSlice';
import { store } from './redux/store';

const UserList = () => {

    const dispatch = useDispatch();

    const {users} = useSelector((store)=> store.user);
    console.log(users)

    useEffect(()=>{
        dispatch(getAllUsers())
    },[])

  return (
    <div>
      {
            users && users.map((user)=> 
            <div key={user.id}>{user.name}</div>)
            
      }
    </div>
  )
}

export default UserList
