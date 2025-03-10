import Footer from "../../components/Footer";
import styles from "./styles/AddAddress.module.scss";
import Sidebar from "./components/Sidebar";
import InputField from "./components/InputField";

const AddAddress = () => {
  return (
    <>
      <div className={styles.addAddress}>
        <Sidebar status={"address"} />

        <div className={styles.right}>
          <h1>Add Address</h1>

          <div className={styles.contactPerson}>
            <h2>Contact Person</h2>
            <InputField label="Name" type="text" />
            <InputField label="Phone Number" type="number" />
            <InputField label="Email" type="email" />
          </div>
          <div className={styles.addressDetails}>
            <h2>Address Details</h2>
            <InputField label="Address" type="text" />
            <InputField label="Province " type="text" />
            <InputField label="City" type="text" />
            <InputField label="District" type="text" />
            <InputField label="Postal Code" type="text" />
          </div>

          <button>Add New Address</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AddAddress;
