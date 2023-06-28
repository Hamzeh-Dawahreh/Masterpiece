import React, { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import ConsentDialog from "../Components/Dialogs/Consent-Dialog";
import axios from "axios";
import "../Assets/Styles/profile.css";

export default function UserProfile() {
  const [userData, setUserData] = useState();
  const [company, setCompany] = useState([]);
  const [status, setStatus] = useState(false);
  const [value, setValue] = useState();
  const [service, setService] = useState();
  const [companyId, setCompanyId] = useState();
  const [rating, setRating] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3500/users/getuser`,
          config
        );
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const getRequest = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3500/books/getResponse",
          config
        );
        setCompany(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRequest();
  }, [status, rating]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        "http://localhost:3500/books/userRating",
        {
          rating: value,
          service_id: service,
          company_id: companyId,
        },
        config
      );
      console.log("Data sent successfully");
      setRating(!rating);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="profile-container">
        <div className="user-image">
          <img src="./src/Assets/Images/profile.png" />
        </div>
        <div className="profile-info-container">
          <div className="profile-info">
            <div className="user-titles">
              <span>Full Name</span>
              <span>Category/Industry</span>
              <span>Username</span>
              <span>Email Address</span>
              <span>Subscription</span>
            </div>
            <div className="user-info">
              <span>Hamzeh Dawahreh</span>
              <span>Technology</span>
              <span>Hamzeh_Da</span>
              <span>hmzhdawahreh@gmaill.com</span>
              <span>Jan- June 2023</span>
            </div>
            <div className="info-line">
              <p>YOUR INFORMATION</p>
            </div>
            <div className="edit-image">
              <img src="./src/Assets/Images/Edit.png" />
            </div>
          </div>
        </div>
        <hr />
        <div className="clients">
          {" "}
          <h3 className="text-2xl text-center">REQUESTED SERVICES</h3>
          <div className="current-clients">
            <br />
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Industry</th>
                  <th>Company Approval</th>
                  <th>User Approval</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Response</th>
                </tr>
              </thead>
              <tbody>
                {company.bookings?.map((data, index) => {
                  return (
                    <tr className="text-gray-500" key={index}>
                      <td>{data.company_id.companyname}</td>
                      <td>{data.company_id.email}</td>
                      <td>{data.company_id.industry}</td>
                      <td>
                        {data.companyConsent === undefined
                          ? "Pending"
                          : data.companyConsent === true
                          ? "Approved"
                          : "Rejected"}
                      </td>
                      <td>
                        {data.userConsent === undefined
                          ? "---"
                          : data.userConsent === true
                          ? "Approved"
                          : "Rejected"}
                      </td>
                      <td className="text-green-500">
                        {data.price || "---"} JOD
                      </td>
                      <td>
                        {data.userConsent !== undefined &&
                        data.rating == undefined ? (
                          <form
                            onSubmit={handleSubmit}
                            className=" flex flex-col justify-center items-center"
                          >
                            <Rating
                              name="simple-controlled"
                              value={value}
                              onChange={(event, newValue) => {
                                setValue(newValue);
                              }}
                            />
                            <input type="submit" value="submit" />
                          </form>
                        ) : (
                          <Rating
                            name="read-only"
                            value={data.rating}
                            readOnly
                          />
                        )}
                      </td>
                      <td>
                        <ConsentDialog
                          companyRes={data.companyRes}
                          id={data._id}
                          companyname={data.company_id.companyname}
                          company_id={data.company_id._id}
                          service_id={data.service_id}
                          userConsent={data.userConsent}
                          companyConsent={data.companyConsent}
                          setStatus={setStatus}
                          setService={setService}
                          setCompanyId={setCompanyId}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <br />
          <br />
          <br />
          <hr />
        </div>
      </div>
    </>
  );
}
