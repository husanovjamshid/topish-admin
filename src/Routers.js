import {  Route, Routes } from "react-router-dom";
import Admin from "./admin/Admin";
import { useAuthContext } from "./hooks/useAuthContext";

import Createcategory from "./admin/adminComponents/category/Createcategory";
import Dashboard from "./admin/adminComponents/Dashboard";
import Createproduct from "./admin/adminComponents/product/Createproduct";
import Editcategory from "./admin/adminComponents/category/Editcategory";
import Editproduct from "./admin/adminComponents/product/Editproduct";
import Authentication from "./provider/auth.provider";
import { Public } from "./pages/public/Public";
import SignIn from "./pages/auth/Login";

function Routers() {
  const { user } = useAuthContext();
  return (
    <div className="">
      {/* <Routes>

        <Route path="/login" element={<SignIn />} />
        <Route element={<Authentication />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="" element={<Dashboard />} />
            <Route path="users" element={<Createcategory />} />

            <Route path="createcategory/:id" element={<Editcategory />} />
            <Route path="createproduct" element={<Createproduct />} />
            <Route path="createproduct/:id" element={<Editproduct />} />
          </Route>
        </Route>

        <Route path="/" element={<MainPage />} />
      </Routes> */}

      <Routes>
        <Route path="/*" element={<Public />} />
        <Route path="/login" element={<SignIn />} />

        <Route element={<Authentication />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="" element={<Dashboard />} />
            <Route path="users" element={<Createcategory />} />

            <Route path="createcategory/:id" element={<Editcategory />} />
            <Route path="createproduct" element={<Createproduct />} />
            <Route path="createproduct/:id" element={<Editproduct />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default Routers;
