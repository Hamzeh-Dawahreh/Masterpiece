import React from "react";
import { useState, useEffect, useContext } from "react";
import validationUser from "../Components/RegisterValidation/validationUser";
import validationCompany from "../Components/RegisterValidation/validationCompany";
import "../Assets/Styles/register.css";
import axios from "axios";
import { AuthContext } from "../App";

import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const [role, setRole] = useState("user");
  const [formValues, setFormValues] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [Econflict, setEConclict] = useState("");
  const [Uconflict, setUConclict] = useState("");
  const navigate = useNavigate();
  function handleToggle() {
    const newrole = role === "user" ? "company" : "user";
    setRole(newrole);
    setFormErrors("");
    setFormValues("");
  }
  function handleChange(e) {
    const { name, value, type } = e.target;
    const newValue = type === "checkbox" ? role : value;
    setFormValues({ ...formValues, [name]: newValue, role });
  }
  const handleClick = async (e) => {
    e.preventDefault();
    if (role === "user") {
      setFormErrors(validationUser(formValues));
    } else {
      setFormErrors(validationCompany(formValues));
    }
    setIsSubmit(true);
  };
  function handleToggle() {
    const newRole = role === "user" ? "company" : "user";
    setRole(newRole);
  }

  useEffect(() => {
    setFormValues({});
    setFormErrors({});
  }, [role]);

  useEffect(() => {
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      sendDataToServer();
    }
  }, [formErrors, isSubmit]);
  const sendDataToServer = async () => {
    try {
      let registrationUrl = "";
      if (role === "user") {
        registrationUrl = "http://localhost:3500/register/newuser";
      } else {
        registrationUrl = "http://localhost:3500/register/newcompany";
      }

      const response = await axios.post(registrationUrl, formValues);
      console.log("Data sent successfully");

      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(!isLoggedIn);

      navigate("/");
    } catch (error) {
      setEConclict(error.response.data.Emessage);
      setUConclict(error.response.data.Umessage);
      // Handle the error or display an error message to the user
    }
  };
  return (
    <>
      <br />
      <br />
      <div className="register-body">
        <div className="login-container">
          {/* <div className="left-side">
            <img src="./src/Assets/Images/signup-cover.png" />

            <div className="square">
              <h3>Join us and let's succeed together !</h3>
            </div>
          </div> */}
          <div className="left-side">
            <img src="./src/Assets/Images/login-cover.png" />

            <div className="circle"></div>
          </div>
          <div className="userInfo-register">
            <label className="switch">
              <input
                type="checkbox"
                className="hide-checkbox"
                name="role"
                onChange={handleChange}
                onClick={handleToggle}
                required
              />
              <span className="slider"></span>
            </label>
            {role === "user" ? (
              <>
                <div className="first-last">
                  <label htmlFor="FIRST NAME" className="signup-label text-xs ">
                    FIRST NAME
                    <input
                      type="text"
                      placeholder="Hamzeh"
                      className="signup-input first-input"
                      name="firstname"
                      onChange={handleChange}
                      required
                      // style={wrongStyle}
                    />
                    {formErrors && (
                      <>
                        <p className="invalid">{formErrors.firstname}</p>
                      </>
                    )}
                  </label>
                  <label htmlFor="LAST NAME" className="signup-label text-xs">
                    LAST NAME
                    <input
                      type="text"
                      placeholder="Dawahreh"
                      className="signup-input first-input "
                      name="lastname"
                      onChange={handleChange}
                      required
                    />
                    {formErrors && (
                      <p className="invalid">{formErrors.lastname}</p>
                    )}
                  </label>
                </div>
                <label htmlFor="USERNAME" className="signup-label text-xs">
                  USERNAME
                  <input
                    type="text"
                    placeholder="Hamzeh_Da"
                    className="signup-input"
                    name="username"
                    onChange={handleChange}
                    required
                  />
                  {formErrors && (
                    <p className="invalid invalid-1">{formErrors.username}</p>
                  )}{" "}
                  {Uconflict && (
                    <p className="invalid invalid-1">{Uconflict}</p>
                  )}
                </label>
                <label htmlFor="EMAIL ADDRESS" className="signup-label text-xs">
                  EMAIL ADDRESS
                  <input
                    type="text"
                    placeholder="hmzhdawahreh@gmail.com"
                    className="signup-input"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                  {formErrors && (
                    <p className="invalid invalid-1">{formErrors.email}</p>
                  )}{" "}
                  {Econflict && (
                    <p className="invalid invalid-1">{Econflict}</p>
                  )}
                </label>
                <label htmlFor="PASSWORD" className="signup-label text-xs">
                  PASSWORD
                  <input
                    type="password"
                    placeholder="*******"
                    className="signup-input"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                  {formErrors && (
                    <p className="invalid invalid-1">{formErrors.password}</p>
                  )}
                </label>
                <label htmlFor="PASSWORD" className="signup-label text-xs">
                  CONFIRM PASSWORD
                  <input
                    type="password"
                    placeholder="*******"
                    className="signup-input"
                    name="confirmPassword"
                    onChange={handleChange}
                    required
                  />
                  {formErrors && (
                    <p className="invalid invalid-1">
                      {formErrors.confirmPassword}
                    </p>
                  )}
                </label>

                <button className="login-button" onClick={handleClick}>
                  Sign up
                </button>
              </>
            ) : (
              <>
                <label htmlFor="FIRST NAME" className="signup-label ">
                  COMPANY NAME{" "}
                  <input
                    type="text"
                    placeholder="Example co."
                    name="companyname"
                    className="signup-input "
                    onChange={handleChange}
                    required
                  />
                  {formErrors && (
                    <>
                      <p className="invalid">{formErrors.companyname}</p>
                    </>
                  )}
                </label>
                <label htmlFor="INDUSTRY" className="signup-label">
                  Industry/Category{" "}
                  <select
                    className="signup-input"
                    name="industry"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="Real Estates">Real Estates</option>
                    <option value="Technology">Technology</option>
                    <option value="Manufacturing">Manufacturing</option>
                  </select>
                  {formErrors && (
                    <>
                      <p className="invalid">{formErrors.industry}</p>
                    </>
                  )}
                </label>

                <label htmlFor="EMAIL ADDRESS" className="signup-label">
                  EMAIL ADDRESS
                  <input
                    type="text"
                    placeholder="Example-co.@gmail.com"
                    className="signup-input"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                  {formErrors && (
                    <p className="invalid invalid-1">{formErrors.email}</p>
                  )}{" "}
                  {Econflict && (
                    <p className="invalid invalid-1">{Econflict}</p>
                  )}
                </label>
                <label htmlFor="PASSWORD" className="signup-label">
                  PASSWORD
                  <input
                    type="password"
                    placeholder="*******"
                    className="signup-input"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                  {formErrors && (
                    <>
                      <p className="invalid  invalid-1">
                        {formErrors.password}
                      </p>
                    </>
                  )}
                </label>
                <label htmlFor="PASSWORD" className="signup-label text-xs">
                  CONFIRM PASSWORD
                  <input
                    type="password"
                    placeholder="*******"
                    className="signup-input"
                    name="confirmPassword"
                    onChange={handleChange}
                    required
                  />
                  {formErrors && (
                    <p className="invalid invalid-1">
                      {formErrors.confirmPassword}
                    </p>
                  )}
                </label>
                {/* <div className="login-with">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-envelope-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </div> */}

                <button className="login-button" onClick={handleClick}>
                  Sign up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
