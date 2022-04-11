import { useState } from "react";
import "./App.css";
import UserForm from "./Components/User/UserForm";
import UserLists from "./Components/User/UserLists";

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (user) => {
    console.log(user);
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: user.username, age: user.age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <UserForm addUser={addUserHandler} />
      <UserLists userList={userList} />
    </div>
  );
}

export default App;
