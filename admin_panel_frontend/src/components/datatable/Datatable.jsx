import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Single from "../../pages/single/Single";

const Datatable = () => {
  // const [data, setData] = useState(userRows);
  const [getUserDetails, setUserDetails] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get("/api/users")
      .then((response) => response.data)
      .then((data) => {
        setUserDetails(data.data.Users);
        for (var i = 0; i < data.data.Users.length; i++) {
          console.log(data.data.Users);
        }
      });
  }

  const handleDelete = (_id) => {
    axios.delete("/api/users/" + _id).then((response) => {
      if (response.data !== null) {
        setUserDetails(getUserDetails.filter((item) => item._id !== _id));
        console.log(response.data.Users.username + "Record Delete Successful");
      }
    });
  };

  const handleView = (_id) => {
    axios
      .get("/api/users/" + _id)
      .then((response) => response.data)
      .then((data) => {
        if (data.status == 200) {
          console.log(data.data.GetSpecificUser);
          // <Single username={data.data.GetSpecificUser.username} email={data.data.GetSpecificUser.email} mobile={data.data.GetSpecificUser.mobileNo} />
        }
      })
      .catch((error) => {
        console.error(`Error:${error}`);
      });
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to="/users/userinfo"
              onClick={() => handleView(params.row._id)}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={getUserDetails}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[8]}
        checkboxSelection
        onClick={getUsers}
      />
    </div>
  );
};

export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 150,
    // renderCell: (params) => {
    //   return(
    //     <div>
    //      {for (let index = 0; index < params.length; index++) {

    //      }}
    //     </div>
    //   );
    // },
  },
  {
    field: "user",
    headerName: "User",
    width: 350,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 350,
  },
];

export default Datatable;
