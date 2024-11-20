import React from "react";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="user-list">
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.department}</td>
                <td>
                  <button className="edit-btn" onClick={() => onEdit(user)}>
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => onDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No users available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
