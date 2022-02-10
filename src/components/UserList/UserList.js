import { useState } from "react";

import "./UserList.css";
import Card from "../UI/Card/Card";

const UserList = (props) => {
  const [userList, setUserList] = useState([{ name: "Walaa Alaa", age: 26 }]);

  return (
    <Card>
      <p className="title">User List</p>
      {userList.map((user, index) => {
        return (
          <div
            style={
              userList.length > index + 1
                ? { borderBottom: "1px solid black" }
                : {}
            }
            key={"user" + index}
          >
            <p>
              <span className="bold">Name:</span> {user.name}
            </p>
            <p>
              <span className="bold">Age:</span> {user.age} (Years old)
            </p>
          </div>
        );
      })}
    </Card>
  );
};

export default UserList;
