import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import Footer from "../../components/Footer";

const index = () => {
  const param = useParams();

  return (
    <>
      <div className={styles.category}>
        <h1 className={styles.title}>{param.type.toUpperCase()}</h1>
        <div className={styles.body}>
          <div className={styles.newArrival}>
            <div className={styles.newArrivalText}>
              <h2>New Arrival</h2>
              <button>Shop Now</button>
            </div>
            <div className={styles.newArrivalItems}>
              <Card title="Kemeja hijau" price="200.000 " img="/item-9.jpeg" />
              <Card title="Kemeja hijau" price="200.000 " img="/item-12.jpeg" />
              <Card title="Kemeja hijau" price="200.000 " img="/item-14.jpeg" />
              <Card title="Kemeja hijau" price="200.000 " img="/item-7.jpeg" />
              <Card title="Kemeja hijau" price="200.000 " img="/item-3.jpeg" />
              <Card title="Kemeja hijau" price="200.000 " img="/item-4.jpeg" />
            </div>
          </div>

          <div className={styles.sale}>
            <div className={styles.newArrivalText}>
              <h2>Sale</h2>
              <button>Sell All</button>
            </div>
            <div className={styles.newArrivalItems}>
              <Card title="Kemeja hijau" price="200.000 " img="/item-2.jpeg" />
              <Card title="Kemeja hijau" price="200.000 " img="/item-19.jpeg" />
              <Card title="Kemeja hijau" price="200.000 " img="/item-9.jpeg" />
              <Card title="Kemeja hijau" price="200.000 " img="/item-5.jpeg" />
              <Card title="Kemeja hijau" price="200.000 " img="/item-15.jpeg" />
              <Card title="Kemeja hijau" price="200.000 " img="/item-12.jpeg" />
            </div>
          </div>

          <div className={styles.textSection}>
            <h1>Affordable Prices</h1>
            <h1>Unique Finds with Character</h1>
            <h1>Quality and Comfort</h1>
            <h1>Sustainable Fashion Choice</h1>
            <h1>Curated Selection</h1>
          </div>

          <div className={styles.ctaSection}>
            <div className={styles.left}></div>
            <div className={styles.right}>
              <h1>
                Turn your unworn clothes into cash and make room for new styles
              </h1>
              <p>
                join our community today and let your fashion find a new home
              </p>
              <button>Sell Now</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

const Card = ({ title, price, img }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>IDR {price}</p>
    </div>
  );
};

export default index;
