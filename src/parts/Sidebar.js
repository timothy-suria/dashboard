import React from "react";
import Aside from "elements/Aside";
import imgLogo from '../assets/images/icon/logo.png';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <Aside isDnone isDlgblock>
      <div className="logo">
        <Link to="#">
          <img src={imgLogo} alt="Logo" />
        </Link>
      </div>
      <div className="menu-sidebar__content js-scrollbar1">
        <nav className="navbar-sidebar">
          <ul className="list-unstyled navbar__list">
            <li className="active has-sub">
              <Link to="#" className="js-arrow" >
                <i className="fas fa-tachometer-alt"></i>Dashboard
              </Link>
              <ul className="list-unstyled navbar__sub-list js-sub-list">
                <li>
                  <Link to="index.html">Dashboard 1</Link>
                </li>
                <li>
                  <Link to="index2.html">Dashboard 2</Link>
                </li>
                <li>
                  <Link to="index3.html">Dashboard 3</Link>
                </li>
                <li>
                  <Link to="index4.html">Dashboard 4</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="chart.html">
                <i className="fas fa-chart-bar"></i>Charts
              </Link>
            </li>
            <li>
              <Link to="table.html">
                <i className="fas fa-table"></i>Tables
              </Link>
            </li>
            <li>
              <Link to="form.html">
                <i className="far fa-check-square"></i>Forms
              </Link>
            </li>
            <li>
              <Link to="calendar.html">
                <i className="fas fa-calendar-alt"></i>Calendar
              </Link>
            </li>
            <li>
              <Link to="map.html">
                <i className="fas fa-map-marker-alt"></i>Maps
              </Link>
            </li>
            <li className="has-sub">
              <Link to="#" className="js-arrow">
                <i className="fas fa-copy"></i>Pages</Link>
              <ul className="list-unstyled navbar__sub-list js-sub-list">
                <li>
                  <Link to="login.html">Login</Link>
                </li>
                <li>
                  <Link to="register.html">Register</Link>
                </li>
                <li>
                  <Link to="forget-pass.html">Forget Password</Link>
                </li>
              </ul>
            </li>
            <li className="has-sub">
              <Link to="#" className="js-arrow Link" >
                <i className="fas fa-desktop"></i>UI Elements
              </Link>
              <ul className="list-unstyled navbar__sub-list js-sub-list">
                <li>
                  <Link to="button.html">Button</Link>
                </li>
                <li>
                  <Link to="badge.html">Badges</Link>
                </li>
                <li>
                  <Link to="tab.html">Tabs</Link>
                </li>
                <li>
                  <Link to="card.html">Cards</Link>
                </li>
                <li>
                  <Link to="alert.html">Alerts</Link>
                </li>
                <li>
                  <Link to="progress-bar.html">Progress Bars</Link>                </li>
                <li>
                  <Link to="modal.html">Modals</Link>
                </li>
                <li>
                  <Link to="switch.html">Switchs</Link>
                </li>
                <li>
                  <Link to="grid.html">Grids</Link>
                </li>
                <li>
                  <Link to="fontawesome.html">Fontawesome Icon</Link>
                </li>
                <li>
                  <Link to="typo.html">Typography</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </Aside>
  );
}
