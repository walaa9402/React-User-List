import Card from "../UI/Card/Card";
import "./AddUser.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    const user = {
      name: event.target[0].value,
      age: event.target[1].value,
    };
    console.log(user);
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div className="form-group">
          <label>Age (years)</label>
          <input type="number" name="age" />
        </div>
        <div className="form-group__action">
          <button type="submit">Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
