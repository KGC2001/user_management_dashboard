export const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users.");
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  export const addUser = async (newUser) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) {
        throw new Error("Failed to add user.");
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  
  export const deleteUser = async (userId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        { method: "DELETE" }
      );
      if (!response.ok) {
        throw new Error("Failed to delete user.");
      }
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  