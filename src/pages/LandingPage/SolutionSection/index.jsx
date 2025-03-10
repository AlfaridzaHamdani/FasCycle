import styles from "./styles.module.scss";

const index = () => {
  return (
    <section className={styles.solutionSection}>
      <div className={styles.text}>
        <h1>
          Our <br />
          Solution
        </h1>
        <p>
          Give your clothes a second life! Resell your preloved outfits or swap
          them with others to reduce textile waste and promote sustainable
          fashion.
        </p>
      </div>
      <div className={styles.img}>
        <img src="/asset-3.png" alt="image" />
      </div>
    </section>
  );
};

export default index;
