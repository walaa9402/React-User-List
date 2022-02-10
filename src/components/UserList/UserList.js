import classes from "./UserList.module.css";
import Card from "../UI/Card/Card";

const UserList = (props) => {
  return (
    <Card>
      <p className={classes.title}>User List</p>
      {props.userList.length === 0 && <span>no users to show.</span>}
      {props.userList.map((user, index) => {
        return (
          <div
            style={
              props.userList.length > index + 1
                ? { borderBottom: "1px solid black" }
                : {}
            }
            key={"user" + index}
          >
            <p>
              <span className={classes.bold}>Name:</span> {user.name}
            </p>
            <p>
              <span className={classes.bold}>Age:</span> {user.age} (Years old)
            </p>
          </div>
        );
      })}
    </Card>
  );
};

export default UserList;
