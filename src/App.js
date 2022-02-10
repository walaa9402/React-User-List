import "./App.css";

import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <div>
      <div className="container">
        <AddUser />
      </div>
      <div className="container">
        <UserList />
      </div>
    </div>
  );
}

export default App;
