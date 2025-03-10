import { Link } from "react-router-dom";
import styles from "../styles/MyProductCard.module.scss";

const MyProductCard = ({
  code,
  date,
  status,
  name,
  color,
  size,
  price,
  total,
  item,
  request,
}) => {
  return (
    <div className={styles.MyProductCard}>
      <div className={styles.top}>
        <div className="wrapper">
          <span>{code}</span> | <span>{date}</span> | <span>{status}</span>
        </div>
        <div className="wrapper">
          {request > 0 && <span>{request} Trade Request</span>}
        </div>
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

      <div className={styles.action}>
        <Link to={"/myproduct/detail"}>View Detail</Link>
      </div>
    </div>
  );
};

export default MyProductCard;
