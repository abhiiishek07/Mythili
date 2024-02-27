import React from "react";

const Header = () => {
  return (
    <div className="navbar  shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">real-estate</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 uppercase">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About us</a>
          </li>
          <li>
            <details>
              <summary>Properties</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Commercial</a>
                </li>
                <li>
                  <a>Residental</a>
                </li>
                <li>
                  <a>Sco</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Resources</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Blogs</a>
                </li>
                <li>
                  <a>Location</a>
                </li>
                <li>
                  <a>Social Connect</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>contact us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
