import "./widget.scss";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Widget = ({ type }) => {
  const [getusertotal, setusertotal] = useState([]);
  const [gettourstotal, settourstotal] = useState([]);

  useEffect(() => {
    getUsers();
    getTourPackage();
  }, []);

  const getUsers = () => {
    axios
      .get("/api/users")
      .then((response) => response.data)
      .then((data) => {
        setusertotal(data.data.Users);
      });
  };

  const getTourPackage = () => {
    axios
      .get("/api/tourpackages")
      .then((response) => response.data)
      .then((data) => {
        settourstotal(data.data.GetAllTourPackage);
      });
  };

  let data;
  switch (type) {
    case "users":
      data = {
        title: "USERS",
        total: getusertotal.length,
        isMoney: false,
        link: (
          <Link to="/users" style={{ textDecoration: "none" }}>
            <span className="link">View All Users</span>
          </Link>
        ),
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "tourpackage":
      data = {
        title: "TOUR PACKAGES",
        total: gettourstotal.length,
        isMoney: false,
        link: (
          <Link to="/tourpackages" style={{ textDecoration: "none" }}>
            <span className="link">View All Tour Packages</span>
          </Link>
        ),
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "bookedtourpackage":
      data = {
        title: "BOOKED PACKAGES",
        isMoney: true,
        link: "View all Booked Packages",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.total}
          {/* {data.isMoney && "$"} {amount} */}
        </span>
        <span className="link">{data.link}</span>
      </div>
      {/* <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div> */}
    </div>
  );
};

export default Widget;
