import { useState } from "react";
import styles from "../styles/Sidebar.module.scss";
import { Link } from "react-router-dom";

const Sidebar = ({ status }) => {
  const [active, setActive] = useState(status);

  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.profilePict}>
          <img src="/item-5.jpeg" alt="" />
          <div>
            <img src="/edit-icon.svg" alt="" />
          </div>
        </div>

        <ul>
          {active === "general" && (
            <li className={styles.active}>
              <Link to={"/profile"}>
                <img src="/profile-icon-white.svg" alt="" />
                General
              </Link>
            </li>
          )}

          {active !== "general" && (
            <li onClick={() => setActive("general")}>
              <Link to={"/profile"}>
                <img src="/profile-icon.svg" alt="" />
                General
              </Link>
            </li>
          )}

          {active === "address" && (
            <li className={styles.active}>
              <Link to={"/profile/address"}>
                <img src="/location-icon-white.svg" alt="" />
                Address
              </Link>
            </li>
          )}

          {active !== "address" && (
            <li onClick={() => setActive("address")}>
              <Link to={"/profile/address"}>
                <img src="/location-icon.svg" alt="" />
                Address
              </Link>
            </li>
          )}

          {active === "orders" && (
            <li className={styles.active}>
              <Link to={"/profile/myorder"}>
                <img src="/bag-icon-white.svg" alt="" />
                My Order
              </Link>
            </li>
          )}

          {active !== "orders" && (
            <li onClick={() => setActive("orders")}>
              <Link to={"/profile/myorder"}>
                <img src="/bag-icon.svg" alt="" />
                My Order
              </Link>
            </li>
          )}

          {active === "products" && (
            <li className={styles.active}>
              <Link to={"/profile/products"}>
                <img src="/bookmark-icon-white.svg" alt="" />
                My Product
              </Link>
            </li>
          )}

          {active !== "products" && (
            <li onClick={() => setActive("products")}>
              <Link to={"/profile/products"}>
                <img src="/bookmark-icon.svg" alt="" />
                My Product
              </Link>
            </li>
          )}

          <li>
            <Link>
              <img src="/logout-icon.svg" alt="" />
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
