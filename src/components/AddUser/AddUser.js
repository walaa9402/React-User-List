import Card from "../UI/Card/Card";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import classes from "./AddUser.module.css";
import { useState } from "react";

const AddUser = (props) => {
  const [user, setUser] = useState({});
  const addUserHandler = (event) => {
    event.preventDefault();
    user.name = event.target[0].value;
    user.age = event.target[1].value;
    if (user.name && user.age > 0) {
      setUser(user);
      props.onSubmitUser(user);
    }
    setUser({});
  };

  return (
    <div>
      <ErrorModal title="An error occured!" message="Something went wrong!" />
      <Card>
        <form onSubmit={addUserHandler}>
          <div className={classes["form-group"]}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} />
          </div>
          <div className={classes["form-group"]}>
            <label>Age (years)</label>
            <input type="number" name="age" value={user.age} />
          </div>
          <div className={classes["form-group__action"]}>
            <button type="submit">Add User</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
