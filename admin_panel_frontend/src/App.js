import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import UserList from "./pages/list/UserList";
import SpecificUserDetail from "./pages/SpecificItemDetails/SpecificUserDetail";
import AddingUser from "./pages/AdingsItems/AddingUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Transaction from "./pages/Transactions/Transaction";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {/* Home Component */}
            <Route index element={<Home />} />
            {/* Login Component */}
            <Route path="login" element={<Login />} />

            {/* Users Related Component */}
            <Route path="users">
              {/* Main Indec Componen */}
              <Route index element={<UserList />} />
              {/* SpecificUserDetail Component */}
              <Route path=":userId" element={<SpecificUserDetail />} />
            </Route>
            {/* Adding New User */}
            <Route
              path="newuser"
              // element={<New inputs={userInputs} title="Add New User" />}
              element={<AddingUser title="Add New User" />}
            />

             {/* TourPackages Related Component */}
             <Route path="tourpackages">
              {/* Main Index Component */}
              <Route index element={<UserList />} />
              {/* SpecificTourPackagesDetail Component */}
              <Route path=":tourpackagesId" element={<SpecificUserDetail />} />
            </Route>
            {/* Adding New TourPackage */}
            <Route
              path="newtourpackages"
              element={<AddingUser title="Add New TourPackages" />}
            />

            <Route path="products">
              <Route index element={<UserList />} />
              <Route path=":productId" element={<SpecificUserDetail />} />
              <Route
                path="new"
                element={
                  <AddingUser inputs={productInputs} title="Add New Product" />
                }
              />
            </Route>
            <Route path="transactions" element={<Transaction />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
