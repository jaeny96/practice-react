// import useInput from "../hooks/use-input";
import useInput2 from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasErr: firstNameInputHasErr,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput2(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasErr: lastNameInputHasErr,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput2(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasErr: emailInputHasErr,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput2(isNotEmpty && isEmail);
  // = useInput2((value) => value.trim() !== "" && value.includes("@"));

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!firstNameIsValid) {
      return;
    }

    console.log(enteredLastName, " ", enteredFirstName, " ", enteredEmail);

    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const inputClasses = (invalid) => {
    return invalid ? "form-control invalid" : "form-control";
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={inputClasses(firstNameInputHasErr)}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameInputHasErr && (
            <p className="error-text">First Name must not be empty.</p>
          )}
        </div>
        <div className={inputClasses(lastNameInputHasErr)}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputHasErr && (
            <p className="error-text">Last Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={inputClasses(emailInputHasErr)}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasErr && (
          <p className="error-text">Please Enter a valid Email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
