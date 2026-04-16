import { validateprofileEdit } from "../config/validate.js";

export const profile = async (req, res) => {
  try {
    const user = req.user;

    res.send(user);
  } catch (err) {
    res.status(400).send("profile error : " + err.message);
  }
};

export const profileEdit = async (req, res) => {
  try {
    validateprofileEdit(req);

    const loggedInUser = req.user;

    Object.assign(loggedInUser, req.body);

    await loggedInUser.save();
    res.send(loggedInUser);
  } catch (error) {
    res.status(400).send("profile error : " + error.message);
  }
};
