import React, { useState } from "react";
import AddUsers from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  // Managing a List Of Users via State
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (eName, eAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: eName, age: eAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <React.Fragment>
      <AddUsers onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
};

export default App;
