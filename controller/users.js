// @desc get all users

import { getUsersQuery } from "../models/userModel.js";

// @api /api/users
const getUsers = async (req, res, next) => {
  const data = await getUsersQuery();
  res.json({
    message: data,
  });
};

export { getUsers };
