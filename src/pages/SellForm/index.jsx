import styles from "./styles.module.scss";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const InputFields = ({ label, width }) => {
  return (
    <div className={styles.inputFields} style={{ width: width }}>
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} style={{ width: width }} />
    </div>
  );
};
const index = ({ title }) => {
  return (
    <>
      <div className={styles.sellForm}>
        {!title && <h1>PRELOVED CONSIGNMENT FORM </h1>}
        <h1>{title}</h1>
        <h2>Tell Us About Your Items!</h2>

        <h3>About the item</h3>
        <InputFields label="Product Name*" width="100%" />

        <div className={styles.container}>
          <InputFields label="Categories*" />
          <InputFields label="Brand*" />
        </div>

        <div className={styles.container}>
          <InputFields label="Color*" />
          <InputFields label="Size*" />
        </div>

        <InputFields label="Price*" width="100%" />

        <div className={styles.condition}>
          <label htmlFor="condition">Condition*</label>
          <div className={styles.option}>
            <div>
              <span>Brand New</span>
            </div>
            <div>
              <span>Like New</span>
            </div>
            <div>
              <span>Lightly Used</span>
            </div>
            <div>
              <span>Well Used</span>
            </div>
            <div>
              <span>Heavily Used</span>
            </div>
          </div>
        </div>

        <div className={styles.description}>
          <label htmlFor="description">Description*</label>
          <textarea id="description" />
        </div>

        <div className={styles.uploadImage}>
          <span>Upload Your Product</span>
          <p>Select your own product photos to show us.</p>

          <label htmlFor="uploadImage">
            <b>Upload your image here</b>
            <p>Upload in .JPG .PNG .JPEG format</p>

            <button>Select files</button>
            <input type="file" id="uploadImage" accept=".jpg,.jpeg,.png" />
          </label>
        </div>

        <div className={styles.termAndCondition}>
          <div className={styles.container}>
            <h3>Terms & Condition</h3>
            <hr />

            <div className={styles.content}>
              <h4>Items must be in wearable condition:</h4>
              <ul>
                <li>
                  No significant damage such as permanent stains, tears, or
                  broken seams.
                </li>
                <li>
                  If there are signs of wear, they must be detailed in the
                  description.
                </li>
                <li>
                  Items from well-known brands are preferred, but non-branded
                  items can be sold if they have unique or vintage value.
                </li>
                <li>Clothing must be clean and hygienic before being sold.</li>
              </ul>

              <h4>Types of Items Not Accepted : </h4>
              <ul>
                <li>Basic clothing items such as underwear.</li>
                <li>
                  Used swimwear or second-hand sportswear like leggings that
                  have been worn.
                </li>
              </ul>

              <h4>Selling Criteria :</h4>
              <ul>
                <li>
                  Preloved items must come with a complete and honest
                  description regarding their condition, including any defects
                  or shortcomings.
                </li>
                <li>
                  Photos of the items must be original without excessive
                  manipulation to ensure transparency to buyers.
                </li>
                <li>
                  Items for sale should follow current fashion trends or have a
                  certain aesthetic value such as vintage style.
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.agree}>
            <input type="checkbox" name="agree" id="agree" />
            <label htmlFor="agree">I agree to the terms and conditions</label>
          </div>
        </div>

        <Link to={"/profile/products"} className={styles.submitButton}>
          Submit
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default index;
