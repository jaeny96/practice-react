import { Fragment, useState } from "react";
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
    <Fragment className="App">
      <UserForm addUser={addUserHandler} />
      <UserLists userList={userList} />
    </Fragment>
  );
}

export default App;
