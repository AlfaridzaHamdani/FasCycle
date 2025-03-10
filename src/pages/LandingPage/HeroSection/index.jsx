import styles from "./styles.module.scss";

const index = () => {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.container}>
          <h1>Timeless wardrobe and responsible fashion</h1>
          <img src="/asset-1.png" alt="cloth" />
        </div>
      </div>
    </>
  );
};

export default index;
