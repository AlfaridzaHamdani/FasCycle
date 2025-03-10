import styles from "./styles.module.scss";
import Footer from "../../components/Footer";

const index = () => {
  return (
    <>
      <div className={styles.cart}>
        <h1 className={styles.title}>My Cart</h1>

        <div className={styles.cartContent}>
          <div className={styles.products}>
            <div className={styles.selector}>
              <div>
                <input type="checkbox" id="checkAll" />
                <label htmlFor="checkAll">Select All</label>
              </div>
              <button>Delete</button>
            </div>

            <div className={styles.product}>
              <div className={styles.store}>
                <input type="checkbox" />
                <img src="/item-1.jpeg" alt="" />
                <h1>TokoKu</h1>
              </div>
              <div className={styles.items}>
                <div className={styles.container}>
                  <div className={styles.img}>
                    <input type="checkbox" />
                    <img src="/item-8.jpeg" alt="" />
                  </div>
                  <div className={styles.productInfo}>
                    <h1>Product A</h1>
                    <div>
                      <p>
                        Color: <span>Beige</span>
                      </p>
                      <p>
                        Size: <span>S</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.right}>
                  <span>IDR 500.000</span>
                  <span className={styles.price}>IDR 300.000</span>
                  <div className={styles.bottom}>
                    <img src="/trash-icon.svg" alt="" />
                    <div className={styles.quantity}>
                      <span>-</span>
                      <span>1</span>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.action}>
            <h1>Summary order</h1>
            <h3>
              <span>Subtotal:</span>
              <span>IDR 300.000</span>
            </h3>
            <button>Buy Now(1)</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default index;
