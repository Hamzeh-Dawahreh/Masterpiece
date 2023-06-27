import { Fragment, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import axios from "axios";

export default function RequestDialog({ userReq, user_id, service_id }) {
  console.log(service_id);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState();
  const handleClick = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(
        "http://localhost:3500/books/companyRes",
        {
          ...message,
          user_id: user_id,
          service_id: service_id,
          userReq: userReq,
        },
        config
      );

      // Handle the response data
      console.log("Data sent successfully");
      // Perform any necessary actions with the response data
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.error(error);
      // Perform any necessary error handling
    }
  };
  console.log(message);
  const handleOpen = () => setOpen(!open);
  return (
    <Fragment>
      <Button onClick={handleOpen} variant="gradient" color="cyan">
        view request
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Hamzeh Dawahreh</DialogHeader>
        <DialogBody divider>
          {userReq} <br />
          <br />
          <label htmlFor="">Your Response:</label>
          <textarea
            placeholder="Write Your response to the Client"
            className="w-full text-start"
            name="companyRes"
            onChange={(e) => {
              setMessage({ ...message, [e.target.name]: e.target.value });
            }}
          />
          <label htmlFor="">Price:</label>
          <input
            type="number"
            name="price"
            placeholder="Enter the price in JOD"
            onChange={(e) => {
              setMessage({ ...message, [e.target.name]: e.target.value });
            }}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span className="text-rose-700">Reject</span>
          </Button>
          <Button
            variant="gradient"
            color="teal"
            onClick={() => {
              handleOpen();
              handleClick();
            }}
          >
            <span className="text-white	">Approve</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
