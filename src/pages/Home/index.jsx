import styles from "./styles.module.scss";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className={styles.herosection}>
        <h1>Turn Your Closet into Cash</h1>
        <p>
          Join Our Community of Fashion Enthusiasts and Make Room for New
          Styles!
        </p>
        <Link to={"/sell"}>Sell Now</Link>
      </div>

      <div className={styles.secondsection}>
        <div className={styles.left}>
          <h1>
            Showcase, Sell, & <span>Discover Unique Clothing </span>
            in Our Marketplace.
          </h1>
          <p>
            Join a Community of Fashion Lovers and Find Your Next Favorite
            Outfit!
          </p>
        </div>
        <div className={styles.right}>
          <img src="./item-1.jpeg" alt="cloth" />
          <img src="./item-2.jpeg" alt="cloth" />
          <img src="./item-3.jpeg" alt="cloth" />
          <img src="./item-4.jpeg" alt="cloth" />
        </div>
      </div>

      <div className={styles.thirdsection}>
        <div className={styles.top}>
          <h1>
            Curate <span>Your Style </span> with Our <span>Exclusive </span>
            Collection!
          </h1>
          <Link to={"/products"}>Shop Now</Link>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <p>Discover Unique Pieces That Reflect Your Personality!</p>
          </div>
          <div className={styles.right}>
            <div className={styles.card}>
              <img src="./item-4.jpeg" alt="" />
              <p>Men</p>
            </div>
            <div className={styles.card}>
              <img src="./item-5.jpeg" alt="" />
              <p>Woman</p>
            </div>
            <div className={styles.card}>
              <img src="./item-6.jpeg" alt="" />
              <p>Unisex</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.fourthsection}>
        <div className={styles.images}>
          <img src="./item-1.jpeg" alt="" />
          <img src="./item-1.jpeg" alt="" />
          <img src="./item-1.jpeg" alt="" />
          <img src="./item-1.jpeg" alt="" />
          <img src="./item-1.jpeg" alt="" />
          <img src="./item-1.jpeg" alt="" />
          <img src="./item-1.jpeg" alt="" />
          <img src="./item-1.jpeg" alt="" />
          <img src="./item-1.jpeg" alt="" />
        </div>
        <div className={styles.text}>
          <h1>Find Your Perfect Fit with Us!</h1>
          <p>Explore a Curated Selection of Fashion That Speaks to You!</p>
        </div>
        <div className={styles.images}>
          <img src="./item-1.jpeg" alt="" />
          <img src="./item-1.jpeg" alt="" />
          <img src="./item-1.jpeg" alt="" />
          <img src="./item-1.jpeg" alt="" />
          <img src="./item-1.jpeg" alt="" />
          <img src="./item-1.jpeg" alt="" />
          <img src="./item-1.jpeg" alt="" />
          <img src="./item-1.jpeg" alt="" />
          <img src="./item-1.jpeg" alt="" />
        </div>
      </div>

      <div className={styles.fifthsection}>
        <img src="./background-kain.jpg" alt="" />

        <div className={styles.text}>
          <h1>Explore Sustainable Style at FasCycle</h1>
          <p>Discover Fashion That Cares for You and the Planet!</p>
          <Link to={"/products"}>Shop Now</Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default index;
