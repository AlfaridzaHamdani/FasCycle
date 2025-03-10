import styles from "../styles/OrderCard.module.scss";

const OrderCard = ({
  code,
  date,
  status,
  name,
  color,
  size,
  price,
  total,
  item,
}) => {
  return (
    <>
      <div className={styles.orderCard}>
        <div className={styles.top}>
          <span>{code}</span> | <span>{date}</span> | <span>{status}</span>
        </div>
        <div className={styles.item}>
          <img src={`/item-${item}.jpeg`} alt="" />
          <div>
            <h1>{name}</h1>
            <h3>
              Color: <span>{color}</span>
            </h3>

            <h3>
              Size: <span>{size}</span>
            </h3>

            <span className={styles.price}>IDR {price}</span>
          </div>
        </div>

        <hr />

        <div className={styles.subtotal}>
          <h3>
            Total: <span>{price}</span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default OrderCard;
