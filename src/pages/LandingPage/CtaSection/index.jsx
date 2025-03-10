import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const index = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h1>Join the Fashion Revolution!</h1>
        <p>
          Reduce waste, refresh your style! Swap, sell, and embrace sustainable
          fashion for a greener future
        </p>
        <Link to={"/home"}>Join Us</Link>
      </div>
    </section>
  );
};

export default index;
