import React, { useState } from "react";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import Authentication from "./components/pages/Authentication";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { Provider } from "react-redux";
import appStore from "./components/utils/AppStore";
function App() {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<"forgot" | "new" | "otp" | "success" | null>(null);

  const openModal = (modalType: "forgot" | "new" | "otp" | "success") => {
    setIsModalOpen(modalType);
  };
  const closeModal = () => {
    setIsModalOpen(null);
  };
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <Provider store={appStore}>
      <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/auth"
            element={
              <Authentication
                openModal={openModal}
                closeModal={closeModal}
                isModalOpen={isModalOpen}
              />
            }
          >
            <Route
              path="signup"
              element={
                <Signup
                  openOtpModal = {()=> openModal('otp')}
                />
              }
            ></Route>
            <Route
              path="signin"
              element={
                <Signin
                  openForgotModal={() => openModal("forgot")}
                />
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
