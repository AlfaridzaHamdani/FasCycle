import { useState } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const index = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <RegularNavbar />
      <HamburgerNavbar
        isChecked={isChecked}
        onCheckboxChange={handleCheckboxChange}
      />
      <PhoneNavbar
        isChecked={isChecked}
        onCheckboxChange={handleCheckboxChange}
      />
    </>
  );
};

const RegularNavbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.brandName}>
        <h1>
          <Link to={"/"}>FasCycle</Link>
        </h1>
      </div>
      <div className={styles.navLinks}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="What are you looking for?" />
          <img src="/search-icon.svg" alt="searchButton" />
        </div>
        <div className="navigation">
          <ul>
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/category/men"}>Men</Link>
            </li>
            <li>
              <Link to={"/category/woman"}>Woman</Link>
            </li>
            <li>
              <Link to={"/category/unisex"}>Unisex</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.auth}>
        {/* <div className="signup">Sign Up</div>
        <div className="login">Login</div> */}
        <Link to={"/profile"}>
          <img src="/profile-icon-white.svg" alt="" />
        </Link>
      </div>
    </div>
  );
};

const HamburgerNavbar = ({ isChecked, onCheckboxChange }) => {
  return (
    <div className={styles.hamburgerNavbar}>
      <div className={styles.wrapper}>
        <div className={styles.humbergerIcon}>
          <label htmlFor="hamburgerCheck">
            <input
              type="checkbox"
              id="hamburgerCheck"
              name="hamburgerCheck"
              checked={isChecked}
              onChange={onCheckboxChange}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className={styles.brandName}>
          <h1>
            <Link to={"/"}>FasCycle</Link>
          </h1>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.searchBar}>
          <div className="container">
            <input type="text" placeholder="What are you looking for?" />
            <img src="/search-icon.svg" alt="searchButton" />
          </div>
        </div>

        <div className={styles.auth}>
          {/* <div className="signup">Sign Up</div>
          <div className="login">Login</div> */}
          <Link to={"/profile"}>
            <img src="/profile-icon-white.svg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const PhoneNavbar = ({ isChecked, onCheckboxChange }) => {
  return (
    <div className={styles.phoneNavbar}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.humbergerIcon}>
            <label htmlFor="phoneCheck">
              <input
                type="checkbox"
                id="phoneCheck"
                name="phoneCheck"
                checked={isChecked}
                onChange={onCheckboxChange}
              />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className={styles.brandName}>
            <h1>
              <Link to={"/"}>FasCycle</Link>
            </h1>
          </div>
        </div>

        <div className={styles.auth}>
          {/* <div className="signup">Sign Up</div>
          <div className="login">Login</div> */}
          <Link to={"/profile"}>
            <img src="/profile-icon-white.svg" alt="" />
          </Link>
        </div>
      </div>

      <div className={styles.searchBar}>
        <div className="container">
          <input type="text" placeholder="What are you looking for?" />
          <img src="/search-icon.svg" alt="searchButton" />
        </div>
      </div>
    </div>
  );
};

export default index;
