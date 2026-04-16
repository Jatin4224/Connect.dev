import validator from "validator";

const validateSignupData = (req) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    throw new Error("All fields are required");
  }

  if (firstName.length < 2 || lastName.length < 2) {
    throw new Error("Name must be at least 2 characters long");
  }

  if (!validator.isEmail(email)) {
    throw new Error("Invalid email format");
  }

  const isStrong = validator.isStrongPassword(password, {
    minLength: 6,
  });

  if (!isStrong) {
    throw new Error(
      "Password must contain at least 6 characters, including uppercase, lowercase, and a number",
    );
  }

  return true;
};

export default validateSignupData;
