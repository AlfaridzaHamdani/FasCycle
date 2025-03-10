import Footer from "../../components/Footer";
import styles from "./styles/Address.module.scss";
import Sidebar from "./components/Sidebar";

const Address = () => {
  return (
    <>
      <div className={styles.address}>
        <Sidebar status={"address"} />

        <div className={styles.right}>
          <div className={styles.top}>
            <h1>Shipping Addresses</h1>

            <div>
              <img src="/add-icon.svg" alt="" />
              <span>Add Address</span>
            </div>
          </div>

          <div className={styles.addresses}>
            <AddressCard
              address="Yohana Meilyawati | +62 8812049207 Jl Jendral Sudirman No.392, Bandung Andir, Kota Bandung, Jawa Barat, 40182"
              selected={true}
            />
            <AddressCard
              address="Yohana Meilyawati | +62 8812049207 Jl Jendral Sudirman No.392, Bandung Andir, Kota Bandung, Jawa Barat, 40182"
              selected={false}
            />

            <button>Save Changes</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

const AddressCard = ({ address, selected }) => {
  return (
    <>
      {selected ? (
        <div className={styles.addressCardActive}>
          <div>
            <span>Selected</span>
            <p>{address}</p>
          </div>
        </div>
      ) : (
        <div className={styles.addressCard}>
          <p>{address}</p>
        </div>
      )}
    </>
  );
};

export default Address;
