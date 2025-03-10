import styles from "./styles/MyProductDetail.module.scss";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const InputImageFull = () => {
  return (
    <label className={styles.InputImageFull}>
      <img src="/img-icon.svg" alt="" />
      <input type="file" />
      <span>
        Drop your images here, or select <span>click to browse</span>
      </span>
    </label>
  );
};

const InputImageHalf = () => {
  return (
    <>
      <div className={styles.InputImageHalf}>
        <label className={styles.inputan}>
          <img src="/img-icon.svg" alt="" />
          <input type="file" />
          <span>
            Drop your images here, or select <span>click to browse</span>
          </span>
        </label>
        <label className={styles.inputan}>
          <img src="/img-icon.svg" alt="image-icon" />
          <input type="file" />
          <span>
            Drop your images here, or select <span>click to browse</span>
          </span>
        </label>
      </div>
    </>
  );
};

const ReqCard = ({ img, name, product, price }) => {
  return (
    <div className={styles.reqCard}>
      <img src={`/item-${img}.jpeg`} alt="user" />
      <h1>{name}</h1>

      <span>Offering : {product}</span>
      <span>Price : IDR {price}</span>
      <Link to="/product-detail">View Product</Link>

      <div className={styles.action}>
        <button>Accept</button>
        <button>Decline</button>
      </div>
    </div>
  );
};

const MyProductDetail = () => {
  return (
    <>
      <div className={styles.myProductDetail}>
        <h1>Edit Product</h1>

        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.productName}>
              <label htmlFor="">Product Name</label>
              <input type="text" placeholder="Product Name" />
            </div>

            <div className={styles.category}>
              <label htmlFor="">Category</label>
              <select name="" id="">
                <option value="tshirt">Tshirt</option>
                <option value="jeans">Jeans</option>
                <option value="jacket">Jacket</option>
                <option value="dress">Dress</option>
                <option value="shoes">Shoes</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>

            <div className={styles.brand}>
              <label htmlFor="">Brand</label>
              <input type="text" placeholder="Product Name" />
            </div>

            <div className={styles.description}>
              <label htmlFor="">Description</label>
              <textarea name="" id=""></textarea>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.productImages}>
              <h2>Product Images</h2>
              <div className={styles.container}>
                <div className={styles.image}>
                  <img src="/item-12.jpeg" alt="" />
                </div>
                <InputImageFull />
                <InputImageHalf />
              </div>
            </div>

            <div className={styles.size}>
              <label htmlFor="">Size</label>
              <input type="text" placeholder="Product Name" />
            </div>

            <div className={styles.price}>
              <label htmlFor="">Price</label>

              <div>
                <span>IDR</span>

                <input
                  type="number"
                  min="0"
                  oninput="validity.valid||(value='');"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.request}>
          <ReqCard img="1" name="John Doe" product="Tshirt" price="100.000" />
          <ReqCard img="1" name="John Doe" product="Tshirt" price="100.000" />
          <ReqCard img="1" name="John Doe" product="Tshirt" price="100.000" />
        </div>

        <Link to={"/profile/products"} className={styles.save}>
          Save Changes
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default MyProductDetail;
