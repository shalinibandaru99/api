
import React, { useState , useEffect } from 'react';
import './Users.css';

interface list {
  first_name: string;
  last_name?:string;
  avatar:string;
  email:string;
  
}


const Users = () => {
  const [user, setUser] = useState<list[]>([]);
  const getUserList= async ()=>{
  const result = await fetch ("https://reqres.in/api/users");
  const {data} = await result.json();
  setUser(data);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  useEffect(()=>{
    getUserList()
  },[]);


  return (
    <div>
      <h1> Hello ReqRes users!!!!!</h1>
  {user.map((list) => (
      
        <p >
          <b>{list.first_name}</b>
           <br></br>
          {list.email}
          <div>
          <img src={list.avatar} alt="" />
            </div>
           
        </p>
      ))}

    </div>
  );
}

export default Users;
