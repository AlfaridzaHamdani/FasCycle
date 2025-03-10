import styles from "./styles.module.scss";

const index = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.mainContent}>
          <div className={styles.left}>
            <h1>FasCycle</h1>
            <div className={styles.container}>
              <p>
                Get newsletter update for upcoming product and best offer for
                all item.
              </p>
              <div className={styles.inputEmail}>
                <input type="text" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <ul>
              <h2>Product</h2>
              <li>Tshirt</li>
              <li>Polo</li>
              <li>Shirt</li>
              <li>Shoes</li>
              <li>Jacket</li>
            </ul>

            <ul>
              <h2>Categories</h2>
              <li>Man</li>
              <li>Woman</li>
              <li>Unisex</li>
            </ul>

            <ul>
              <h2>Our Social Media</h2>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Youtube</li>
              <li>X</li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
          <span>@2025 FasCycle Production</span>
        </div>
      </div>
    </>
  );
};

export default index;
