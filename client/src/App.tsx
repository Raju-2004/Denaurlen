import { useState } from "react";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import Authentication from "./components/pages/Authentication";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { Provider } from "react-redux";
import appStore from "./components/store/AppStore";
import CategoryPage from "./components/pages/CategoryPage";
import Dashboard from "./components/pages/Dashboard";


function App() {
  const [isModalOpen, setIsModalOpen] = useState<"forgot" | "new" | "otp" | "success" | "coin" | null>(null);

  const openModal = (modalType: "forgot" | "new" | "otp" | "success" | "coin") => {
    setIsModalOpen(modalType);
  };
  const closeModal = () => {
    setIsModalOpen(null);
  };
  return (  
    <Provider store={appStore}>
      <div className="">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
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
                  openCoinModal = {()=> openModal('coin')}
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
          <Route path="/categories" element={<CategoryPage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </div>
    
    </Provider>
  );
}

export default App;
