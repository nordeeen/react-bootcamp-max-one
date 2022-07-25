import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUsers.module.css";

const AddUser = (props) => {
  // Working with ref (agar code lebih clean)

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // Managing the Error State
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    // console.log(`name: ${enteredName} || age: ${enteredUserAge}`);

    // logic validation input
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (no-empty values)",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age ( > 0)",
      });
      return;
    }

    // console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredName, enteredUserAge);

    // resetting logic clear input
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // trigger when click backdrop and click button ErrorModal
  const errorHandler = () => {
    setError(null);
  };

  // passing props classCSS dari Card.js
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card classCSS={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (year)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
