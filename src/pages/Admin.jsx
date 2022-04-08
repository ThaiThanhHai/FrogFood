import React from "react";
import Home from "../admin/Home/Home";
import Login from "../admin/Login/Login";
import List from "../admin/List/List";
import Single from "../admin/Single/Single";
import New from "../admin/New/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";

const Admin = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Admin;
