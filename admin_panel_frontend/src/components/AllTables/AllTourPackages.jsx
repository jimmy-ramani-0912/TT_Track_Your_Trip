import * as React from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./AllTables.scss";

const AllTourPackages = () => {
  const [getTourPackageDetails, setTourPackageDetails] = useState([]);

  useEffect(() => {
    getTourPackage();
  }, []);

  const getTourPackage = () => {
    axios
      .get("/api/tourpackages")
      .then((response) => response.data)
      .then((data) => {
        setTourPackageDetails(data.data.GetAllTourPackage);
      });
  };

  const handleView = (_id) => {
    window.localStorage.setItem("tourSpecificId", _id);
  };

  return window.localStorage.getItem("token") ? (
    <div className="tourpackage">
      {getTourPackageDetails.map((details) => (
        <div className="card">
          <img
            src="https://codingyaar.com/wp-content/uploads/bootstrap-4-card-image-left-demo-image.jpg"
            className="card-img-top"
          />
          <div className="card-body" style={{paddingLeft:"50px"}}>
            <h5 className="card-title">{details.tourname}</h5>
            <p className="card-text">{details.summary}</p>
            <h6>Duration : {details.duration}</h6>
            <h6>MaxGroupSize : {details.maxGroupSize}</h6>
            <h6>Difficulty : {details.difficulty}</h6>

            <h6>RatingsAverage : {details.ratingsAverage} out of 10</h6>
            <div className="dates">
              <h6>Start Dates : </h6>
              {details.startDates.map((startDate) => (
                <p className="spdates">{startDate.startDate}</p>
              ))}
            </div>
            <div className="rowdatas">
              <div className="product-card-price">
                <span>
                  <del>{details.price} ₹</del>
                </span>
                <span className="curr-price">{details.priceDiscount} ₹</span>
              </div>
              <Link
                to={"/tourpackages/" + details._id}
                onClick={() => handleView(details._id)}
                style={{ textDecoration: "none" }}
                className="btn DetailsButton"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default AllTourPackages;
