import React, { useState, useRef } from "react";

import styles from "./UserForm.module.css";
// import Wrapper from "../Helpers/Wrapper";
import Card from "../UI/Card";
import Button from "../UI/Button";
import NoticeModal from "../UI/NoticeModal";

const UserForm = (props) => {
  const usernameRef = useRef();
  const ageRef = useRef();

  // const [username, setUsername] = useState("");
  // const [age, setAge] = useState("");
  const [error, setError] = useState();

  // const userInputChangeHandler = (e) => {
  //   setUsername(e.target.value);
  // };

  // const ageInputChangeHandler = (e) => {
  //   setAge(e.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = usernameRef.current.value;
    const enteredAge = ageRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age(non-empty values)",
      });
      return;
    }
    if (+enteredAge.value < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    props.addUser({ username: enteredName, age: enteredAge });
    usernameRef.current.value = "";
    ageRef.current.value = "";
    // setUsername("");
    // setAge("");
  };

  return (
    // <Wrapper>
    <>
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
            // value={username}
            // onChange={userInputChangeHandler}
            ref={usernameRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="text"
            // value={age}
            // onChange={ageInputChangeHandler}
            ref={ageRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
    /* </Wrapper> */
  );
};

export default UserForm;
