import React, { useState } from "react";

import styles from "./UserForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import NoticeModal from "../UI/NoticeModal";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const userInputChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageInputChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age(non-empty values)",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    props.addUser({ username: username, age: age });
    setUsername("");
    setAge("");
  };

  return (
    <div>
      {error && (
        <NoticeModal
          title={error.title}
          message={error.message}
          onClose={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            onChange={userInputChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input type="text" value={age} onChange={ageInputChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
