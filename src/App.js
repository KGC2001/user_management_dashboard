import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./index.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);

  const handleAddOrUpdateUser = (user) => {
    if (userToEdit) {
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === user.id ? user : u))
      );
      setUserToEdit(null);
    } else {
      const newUser = { ...user, id: Date.now() }; // Generate unique ID
      setUsers((prevUsers) => [...prevUsers, newUser]);
    }
  };

  const handleEdit = (user) => {
    setUserToEdit(user);
  };

  const handleDelete = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="app">
      <h1>User Management Dashboard</h1>
      <UserForm
        onSubmit={handleAddOrUpdateUser}
        userToEdit={userToEdit}
        onCancel={() => setUserToEdit(null)}
      />
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
