import { useState } from "react";
import classes from "./User.module.css";

import AddUser from "../AddUser/AddUser";
import UserList from "../UserList/UserList";

const User = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (user) => {
    setUserList((oldList) => {
      return [...oldList, user];
    });
  };

  return (
    <div>
      <div className={classes.container}>
        <AddUser onSubmitUser={addUserHandler} />
      </div>
      <div className={classes.container}>
        <UserList userList={userList} />
      </div>
    </div>
  );
};

export default User;
