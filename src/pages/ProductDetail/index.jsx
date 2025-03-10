import styles from "./styles.module.scss";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className={styles.productDetail}>
        <div className={styles.hero}>
          <div className={styles.image}>
            <img src="/item-18.jpeg" alt="" />
            <div className={styles.love}>
              <img src="/heart-icon.svg" alt="" />
            </div>
          </div>

          <div className={styles.productInfo}>
            <h1>Oversized Long Sleeve Sweater</h1>
            <span>IDR 299.000</span>

            <p>
              Looking for the perfect oversized sweater? This preloved beige
              sweater is a must-have for your fall/winter wardrobe. It's a size
              small, but has a relaxed, oversized fit that's super comfortable.{" "}
              <Link>Read full description</Link>
            </p>

            <div className={styles.spec}>
              <ul>
                <li>Brand</li>
                <li>Condition</li>
                <li>Material</li>
                <li>Color</li>
                <li>Size</li>
              </ul>

              <ul>
                <li>Uniqlo</li>
                <li>Good</li>
                <li>Cotton</li>
                <li>Beige</li>
                <li>S</li>
              </ul>
            </div>

            <div className={styles.action}>
              <button>Buy now</button>
              <button>
                <img src="/cart-icon.svg" alt="" />
              </button>
              <Link to="/trade">
                <img src="/trade-icon.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.description}>
          <p>
            Looking for the perfect oversized sweater? This preloved beige
            sweater is a must-have for your fall/winter wardrobe. It's a size
            small, but has a relaxed, oversized fit that's super comfortable.
            Made from a soft knit (feels like a cotton blend), it's perfect for
            layering or wearing on its own. There's no brand tag. It's in
            excellent preloved condition with no noticeable flaws. I'm selling
            it because I have too many sweaters!
          </p>
        </div>

        <div className={styles.sellerInfo}>
          <div className={styles.left}>
            <img src="/item-1.jpeg" alt="" />
            <h1>TOKOKU</h1>
            <span>@toko.ku</span>

            <span>
              <img src="/location-icon.svg" alt="" />
              Lebanon, US
            </span>
            <span>
              <img src="/medal-icon.svg" alt="" />
              Verified
            </span>
          </div>
          <div className={styles.right}>
            <div className={styles.top}>
              <h2>Reviews</h2>
            </div>

            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>

        <div className={styles.newCollections}>
          <h1>New Collections</h1>
          <div className={styles.container}>
            <ProductCard product={"/item-5.jpeg"} />
            <ProductCard product={"/item-16.jpeg"} />
            <ProductCard product={"/item-9.jpeg"} />
            <ProductCard product={"/item-3.jpeg"} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

const ReviewCard = () => {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.profile}>
        <img src="/item-1.jpeg" alt="" />
      </div>

      <div className={styles.reviewContent}>
        <div className={styles.nameAndTime}>
          <h2>John Doe</h2>
          <span>4 hours ago</span>
        </div>
        <div className={styles.rating}>
          <img src="/star-icon.svg" alt="" />
          <img src="/star-icon.svg" alt="" />
          <img src="/star-icon.svg" alt="" />
          <img src="/star-icon.svg" alt="" />
          <img src="/star-icon.svg" alt="" />
        </div>

        <p>
          I love this sweater! It's so cozy and warm. I wear it all the time.
        </p>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <img src={product} alt="" />

      <div>
        <h1>Product</h1>
        <span>IDR 299.000</span>
      </div>
    </div>
  );
};

export default index;
