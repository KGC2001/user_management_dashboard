import React, { useState, useEffect } from "react";
import "../index.css";

const UserForm = ({ onSubmit, userToEdit, onCancel }) => {
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  useEffect(() => {
    if (userToEdit) {
      setFormData(userToEdit);
    } else {
      setFormData({ id: "", firstName: "", lastName: "", email: "", department: "" });
    }
  }, [userToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email && formData.department) {
      onSubmit(formData);
      setFormData({ id: "", firstName: "", lastName: "", email: "", department: "" });
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>{userToEdit ? "Edit User" : "Add User"}</h2>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter first name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter last name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="department">Department</label>
        <input
          type="text"
          id="department"
          name="department"
          placeholder="Enter department"
          value={formData.department}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-buttons">
        <button type="submit" className="submit-btn">
          {userToEdit ? "Update" : "Add"}
        </button>
        {userToEdit && (
          <button type="button" className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default UserForm;
