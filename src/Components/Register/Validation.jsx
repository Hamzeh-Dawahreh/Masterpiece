export default function Validation(data) {
  const errors = {};
  const nameRegex = /^[A-Za-z]+(?:[A-Za-z]+)*$/;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;

  if (!data.FirstName) {
    errors.FirstName = "First Name is required";
  } else if (!nameRegex.test(data.FirstName)) {
    errors.FirstName =
      "First Name shouldn't start with a number, and shouldn't contain special characters or spaces. ";
  }
  if (!data.LastName) {
    errors.LastName = "Last Name is required";
  } else if (!nameRegex.test(data.LastName)) {
    errors.LastName =
      "Last Name shouldn't start with a number, and shouldn't contain special characters or spaces. ";
  }
  if (!data.Username) {
    errors.Username = "Username is required";
  } else if (!nameRegex.test(data.Username)) {
    errors.Username =
      "Username shouldn't start with a number, and shouldn't contain special characters or spaces. ";
  }
  if (!data.CompanyName) {
    errors.CompanyName = "CompanyName is required";
  } else if (!nameRegex.test(data.CompanyName)) {
    errors.CompanyName =
      "CompanyName shouldn't start with a number, and shouldn't contain special characters or spaces. ";
  }
  if (!data.password) {
    errors.password = "Password Field is required";
    console.log("Password is required");
  } else if (!passwordRegex.test(data.password)) {
    errors.password =
      "Password Field must  contain more than 8 characters, with at least 1 number, uppercase, and special characters ";
  }

  if (!data.email) {
    errors.email = " email Field is required";
  } else if (!emailRegex.test(data.email)) {
    errors.email = " email Field must contains the required format ";
  }
  if (!data.Industry) {
    errors.Industry = " Industry Field is required";
  }
  return errors;
}