import React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import PrivateRoute from "./PrivateRoute";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Signup from "./Pages/Signup";
import Signup2 from "./Pages/Signup-2";
import Join from "./Pages/Join";
import JoinByID from "./Pages/JoinByID";
import Create from "./Pages/Create";
import Login from "./Pages/Login";
import Contestants from "./Pages/Contestants";
import Progress from "./Pages/Progress";
import Sidebar from "./components/Sidebar";
import { AuthContextProvider } from "./context/AuthContext";
import ForgotPassword from "./Pages/ForgotPassword";

function App() {
  const client = new QueryClient();
  return (
    <div className="flex bg-lightblack p-10 overflow-hidden">
      <Sidebar />
      <div className="flex-row w-screen h-screen ">
        <AuthContextProvider>
          <QueryClientProvider client={client}>
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="signup-2" element={<Signup2 />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="join" element={<Join />} />
              <Route path="join/:id" element={<JoinByID />} />
              <Route path="create" element={<Create />} />
              <Route element={<PrivateRoute />}>
                <Route exact path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="contestants" element={<Contestants />} />
                <Route path="progress" element={<Progress />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Routes>
          </QueryClientProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
