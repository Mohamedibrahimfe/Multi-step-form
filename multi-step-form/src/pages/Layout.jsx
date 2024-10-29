import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
const Layout = () => {
  const [active, setActive] = useState(1);
  const [formData, setFormData] = useState({
    step1: {},
    step2: {},
    step3: {},
    step4: {},
  });

  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <NavLink onClick={() => setActive(1)} to="/">
              <h4>1 </h4>
              <span>Step 1</span>Your Info
            </NavLink>
          </li>

          <li>
            <NavLink onClick={() => setActive(2)} to="/steptwo">
              <h4>2 </h4>
              <span>Step 2</span>Select Plan
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setActive(3)} to="/stepthree">
              <h4>3 </h4>
              <span>Step 3</span>Add-Ons
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setActive(4)} to="/stepfour">
              <h4>4 </h4>
              <span>Step 4</span>Summary
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
      <button>Next Step</button>
    </div>
  );
};

export default Layout;
