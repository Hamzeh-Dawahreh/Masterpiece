import { Rating } from "@mui/material";
import Dialog from "../Components/Dialogs/Book-Dialog";
import "../Assets/Styles/solution.css";
export default function Manufacturing() {
  return (
    <>
      <br />
      <br />
      <div className="solution-container">
        <br />
        <br />
        <br />
        <div className="hero-solution">
          <div className="intro">
            <h6>For Manufacturing</h6>
            <br />

            <h4>
              {" "}
              Feasibility studies for manufacturing projects involve analyzing
              the feasibility of producing a new product or expanding production
              capacity. This includes assessing factors such as production
              costs, market demand, supply chain logistics, and potential
              profitability.
            </h4>
            <br />
            <button className="book-now first animate__animated animate__pulse animate__infinite">
              <a href="#booking"> Book now</a>
            </button>
          </div>
          <img src="./src/Assets/Images/bg3.png" width="693" height="414" />
        </div>
        <br />
        <br />
        <div className="our-companies">
          <h1 id="booking" className="text-3xl	">
            Our Companies
          </h1>
          <br />
          <div className="line-2"></div>

          <div className="company-card">
            <img src="./src/Assets/Images/LEK.png" />
            <div className="info">
              <p>
                L.E.K. Consulting is a global strategy consulting firm based in
                London and Boston. Founded in 1983 by three partners from Bain &
                Company, L.E.K. focuses on corporate strategy, marketing and
                sales, mergers and acquisitions, and operations.
                <br />
                “Our mission is to realize the potential of our
                clients,professionals and partners by building the real estate
                solutions of the future. From instilling confidence in today’s
                decisions to re-imagining tomorrow’s spaces, we thrive in
                complex and ever-changing environments.”
              </p>
              <h6>*L.E.K. has made 4 feasibility study on the website.* </h6>
              <div className="company-rating">
                <Rating name="read-only" value="3" readOnly />
                <Dialog />
              </div>
            </div>
          </div>
          <div className="company-card">
            <img src="./src/Assets/Images/Navigant.png" />
            <div className="info">
              <p>
                Navigant Consulting, Inc. was an American management consultancy
                firm. It had offices in Asia, Europe and North America; the head
                office was in Chicago, Illinois. The stock was a component of
                the S&P 600 index. <br />
                “Our mission is to realize the potential of our
                clients,professionals and partners by building the real estate
                solutions of the future. From instilling confidence in today’s
                decisions to re-imagining tomorrow’s spaces, we thrive in
                complex and ever-changing environments.”
              </p>
              <h6>*Navigant has made 23 feasibility study on the website.* </h6>
              <div className="company-rating">
                <Rating name="read-only" value="3" readOnly />
                <Dialog />
              </div>
            </div>
          </div>
          <div className="company-card">
            <img src="./src/Assets/Images/LEK.png" />
            <div className="info">
              <p>
                Deloitte Touche Tohmatsu Limited, commonly referred to as
                Deloitte, is an international professional services network
                headquartered in London England. <br />
                “Our mission is to realize the potential of our
                clients,professionals and partners by building the real estate
                solutions of the future. From instilling confidence in today’s
                decisions to re-imagining tomorrow’s spaces, we thrive in
                complex and ever-changing environments.”
              </p>
              <h6>*L.E.K. has made 4 feasibility study on the website.* </h6>
              <div className="company-rating">
                <Rating name="read-only" value="3" readOnly />
                <Dialog />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
