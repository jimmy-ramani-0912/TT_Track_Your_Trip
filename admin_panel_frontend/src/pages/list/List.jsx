import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import AllUsers from "../../components/AllUsersTable/AllUsers";
import Login from "../login/Login";

const List = () => {
 
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <AllUsers />
      </div>
    </div>
  );
};

export default List;  
