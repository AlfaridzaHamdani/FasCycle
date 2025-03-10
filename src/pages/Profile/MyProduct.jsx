import Footer from "../../components/Footer";
import styles from "./styles/MyProduct.module.scss";
import Sidebar from "./components/Sidebar";
import MyProductCard from "./components/MyProductCard";
import { Link } from "react-router-dom";

const MyProduct = () => {
  return (
    <>
      <div className={styles.myProduct}>
        <Sidebar status={"products"} />

        <div className={styles.right}>
          <div className={styles.title}>
            <h1>My Product</h1>
            <Link to={"/sell"}>Add Product</Link>
          </div>

          <div className={styles.statusOrder}>
            <h2>Status</h2>
            <ul>
              <li>All</li>
              <li>Ready</li>
              <li>Sold</li>
              <li>Archive</li>
            </ul>
          </div>

          <div className={styles.orderContainer}>
            <MyProductCard
              code="ORDER0001"
              date="12-12-2021"
              status="Sold"
              item={1}
              name={"Adidas Yeezy Boost 350 V2"}
              color="Blue"
              size="42"
              price="50.000"
            />
            <MyProductCard
              code="ORDER0001"
              date="12-12-2021"
              status="Ready"
              item={12}
              name={"Adidas Yeezy Boost 350 V2"}
              color="Black"
              size="42"
              price="199.000"
              request={3}
            />
            <MyProductCard
              code="ORDER0001"
              date="12-12-2021"
              status="Archive"
              item={17}
              name={"Adidas Yeezy Boost 350 V2"}
              color="Green"
              size="XS"
              price="399.000"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyProduct;
