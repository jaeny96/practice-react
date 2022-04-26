import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const history = useHistory();
  const newPwdInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredNewPwd = newPwdInputRef.current.value;

    //API KEY는 일단 보안상 삭제
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=[API_KEY]",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPwd,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      //assumption : Always succeeds!
      history.replace("/");
    });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPwdInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
