import db from "../config/db.js";

// Fetch all users
const getUsersQuery = async () => {
  const users = await db("SELECT * FROM anygo2_2025.user");
  return users;
};

export { getUsersQuery };
