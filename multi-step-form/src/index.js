import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import NoPage from "./pages/NoPage";
import Thank from "./pages/Thank";
import { useState } from "react";
import "./index.css";
import "./styles/StepOne.css";
import "./styles/StepTwo.css";
import "./styles/StepThree.css";
import "./styles/StepFour.css";
import "./styles/Thank.css";

export default function App() {
  const [formData, setFormData] = useState({
    addOns: [],
    total: 0,
  });

  const [active, setActive] = useState(1);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              active={active}
              setActive={setActive}
              formData={formData}
              setFormData={setFormData}
            ></Layout>
          }
        >
          <Route
            index
            element={<StepOne setFormData={setFormData} formData={formData} />}
          />
          <Route
            path="/steptwo"
            element={<StepTwo setFormData={setFormData} formData={formData} />}
          />

          <Route
            path="/stepthree"
            element={
              <StepThree setFormData={setFormData} formData={formData} />
            }
          />
          <Route
            path="/stepfour"
            element={<StepFour setFormData={setFormData} formData={formData} />}
          />
          <Route path="/thank" element={<Thank />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// {
// <!-- Step 1 start -->

// Personal info
// Please provide your name, email address, and phone number.

// Name
// e.g. Stephen King

// Email Address
// e.g. stephenking@lorem.com

// Phone Number
// e.g. +1 234 567 890

// Next Step

// <!-- Step 1 end -->

// <!-- Step 2 start -->

// Select your plan
// You have the option of monthly or yearly billing.

// Arcade
// $9/mo

// Advanced
// $12/mo

// Pro
// $15/mo

// Monthly
// Yearly

// Go Back
// Next Step

// <!-- Step 2 end -->

// <!-- Step 3 start -->

// Pick add-ons
// Add-ons help enhance your gaming experience.

// Online service
// Access to multiplayer games
// +$1/mo

// Larger storage
// Extra 1TB of cloud save
// +$2/mo

// Customizable Profile
// Custom theme on your profile
// +$2/mo

// Go Back
// Next Step

// <!-- Step 3 end -->

// <!-- Step 4 start -->

// Finishing up
// Double-check everything looks OK before confirming.

// <!-- Dynamically add subscription and add-on selections here -->

// Total (per month/year)

// Go Back
// Confirm

// <!-- Step 4 end -->

// <!-- Step 5 start -->

// Thank you!

// Thanks for confirming your subscription! We hope you have fun
// using our platform. If you ever need support, please feel free
// to email us at support@loremgaming.com.

// <!-- Step 5 end -->

// }
