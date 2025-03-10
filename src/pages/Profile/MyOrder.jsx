import Footer from "../../components/Footer";
import Sidebar from "./components/Sidebar";
import styles from "./styles/MyOrder.module.scss";
import OrderCard from "./components/OrderCard";

const MyOrder = () => {
  return (
    <>
      <div className={styles.myOrder}>
        <Sidebar status={"orders"} />

        <div className={styles.right}>
          <h1>My Order</h1>
          <div className={styles.statusOrder}>
            <h2>Status</h2>
            <ul>
              <li>All</li>
              <li>Waiting Payment</li>
              <li>On Process</li>
              <li>Delivered</li>
              <li>Completed</li>
            </ul>
          </div>

          <div className={styles.orderContainer}>
            <OrderCard
              code="ORDER0001"
              date="12-12-2021"
              status="Done"
              item={1}
              name={"Adidas Yeezy Boost 350 V2"}
              color="Blue"
              size="42"
              price="299.000"
            />
            <OrderCard
              code="ORDER0001"
              date="12-12-2021"
              status="Waiting Payment"
              item={12}
              name={"Adidas Yeezy Boost 350 V2"}
              color="Black"
              size="42"
              price="199.000"
            />
            <OrderCard
              code="ORDER0001"
              date="12-12-2021"
              status="Waiting Payment"
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

export default MyOrder;
