import styles from "./styles.module.scss";

const index = () => {
  return (
    <div className={styles.dataSection}>
      <img src="/asset-2.png" alt="textile" />
      <div className={styles.text}>
        <h1>92 million</h1>
        <p>
          tons of textile waste per year, most of which ends up in landfills.
        </p>
      </div>
    </div>
  );
};

export default index;
