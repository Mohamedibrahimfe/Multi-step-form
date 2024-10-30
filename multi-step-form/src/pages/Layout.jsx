import { Outlet, NavLink, useNavigate } from "react-router-dom";

// import { useState, useEffect } from "react";
const Layout = (props) => {
  const navigate = useNavigate();
  const handleNext = () => {
    if (props.active === 1) {
      navigate("/steptwo");
    } else if (props.active === 2) {
      navigate("/stepthree");
    } else if (props.active === 3) {
      navigate("/stepfour");
    } else if (props.active === 4) {
      navigate("/thank");
    }
    props.setActive(props.active + 1);
  };
  const handlePrev = () => {
    if (props.active === 1) {
      navigate("/");
    } else if (props.active === 2) {
      navigate("/");
    } else if (props.active === 3) {
      navigate("/steptwo");
    } else if (props.active === 4) {
      navigate("/stepthree");
    } else if (props.active === 5) {
      navigate("/stepfour");
    }
    props.setActive(props.active - 1);
  };

  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <h4>1 </h4>
              <span>Step 1</span>Your Info
            </NavLink>
          </li>

          <li>
            <NavLink to="/steptwo">
              <h4>2 </h4>
              <span>Step 2</span>Select Plan
            </NavLink>
          </li>
          <li>
            <NavLink to="/stepthree">
              <h4>3 </h4>
              <span>Step 3</span>Add-Ons
            </NavLink>
          </li>
          <li>
            <NavLink to="/stepfour">
              <h4>4 </h4>
              <span>Step 4</span>Summary
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />

      <button
        className="next-btn"
        disabled={props.active === 5 ? true : false}
        onClick={handleNext}
      >
        Next Step
      </button>

      <button
        className="prev-btn"
        disabled={props.active === 1 ? true : false}
        onClick={handlePrev}
      >
        Go Back
      </button>
    </div>
  );
};

export default Layout;
