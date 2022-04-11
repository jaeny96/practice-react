import React from "react";

import Card from "../UI/Card";
import styles from "./UserLists.module.css";

const UserLists = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.userList.map((el) => {
          return (
            <li key={el.id}>
              {el.name} ({el.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserLists;
