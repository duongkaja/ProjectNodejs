import React from "react";
import { Container, Row } from "reactstrap";

// import useFetch from "../hooks/useFetch";
import "../styles/admin-nav.css";

import { NavLink } from "react-router-dom";

const admin__nav = [
  {
    display: "Dashboard",
    path: "/dashboard",
  },
  {
    display: "All-Tours",
    path: "/dashboard/all-tours",
  },
  {
    display: "Booking",
    path: "/dashboard/booking",
  },
  {
    display: "Users",
    path: "/dashboard/users",
  },
];
const AdminNav = () => {
  // const { currentUser } = useFetch();

  return (
    <>
      <header className="admin__header">
        <div className="admin__nav-top">
          <Container>
            <div className="admin__nav-wrapper-top">
              <div className="logo">
                <h2>Duong</h2>
              </div>
              <div className="search__box">
                <input type="text" placeholder="Search..." />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
              <div className="admin_nav-top-right">
                <span>
                  <i class="ri-notification-3-line"></i>
                </span>
                <span>
                  <i class="ri-settings-2-line"></i>
                </span>
                {/* <img src={currentUser.photoURL} alt="" /> */}
              </div>
            </div>
          </Container>
        </div>
      </header>

      <section className="admin__menu">
        <Container>
          <Row>
            <div className="admin__navigation">
              <ul className="admin__menu-list">
                {admin__nav.map((item, index) => (
                  <li className="admin__menu-item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? ".active__admin-menu" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminNav;
