import classes from "./User.module.css";
import { Component } from "react";

class User extends Component {
  componentWillUnmount() {
    console.log("User will Unmount");
  }
  //리액트에 필요한 특정 함수임
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{this.props.name}</li>;
// };

export default User;
