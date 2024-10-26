import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Your Info</Link>
          </li>
          <li>
            <Link to="/steptwo">Select Plan</Link>
          </li>
          <li>
            <Link to="/stepthree">Add-Ons</Link>
          </li>
          <li>
            <Link to="/stepfour">Summary</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
