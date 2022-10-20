import "./List.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import AllTourPackages from "../../components/AllTables/AllTourPackages";

const TourPacakageList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <AllTourPackages />
      </div>
    </div>
  );
};

export default TourPacakageList;
