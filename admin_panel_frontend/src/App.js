import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import SpecificUserDetail from "./pages/SpecificUserDetail/SpecificUserDetail";
import AddingUser from "./pages/Adings_Users_Packages/AddingUser";
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
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<SpecificUserDetail />} />
            </Route>
            <Route
              path="new"
              // element={<New inputs={userInputs} title="Add New User" />}
              element={<AddingUser title="Add New User" />}
            />
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<SpecificUserDetail />} />
              <Route
                path="new"
                element={<AddingUser inputs={productInputs} title="Add New Product" />}
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
