import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

// Adding a User List component
const UsersList = (props) => {
  return (
    <>
      <Card classCSS={classes.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default UsersList;
