import Footer from "../../components/Footer";
import styles from "./styles/PersonalInformation.module.scss";
import Sidebar from "./components/Sidebar";
import InputField from "./components/InputField";

const PersonalInformation = () => {
  return (
    <>
      <div className={styles.profile}>
        <Sidebar status={"general"} />

        <div className={styles.right}>
          <h1>General</h1>

          <div className={styles.gender}>
            <div>
              <label htmlFor="gender">Male</label>
              <input type="radio" name="gender" id="gender" />
            </div>

            <div>
              <label htmlFor="gender">Female</label>
              <input type="radio" name="gender" id="gender" />
            </div>
          </div>

          <div className={styles.input}>
            <InputField label="Full Name" type="text" placeholder="" />
            <InputField label="Email" type="email" placeholder="" />
            <InputField label="Phone Number" type="number" placeholder="" />
            <InputField label="Date Of Birth" type="date" placeholder="" />

            <button>Save Changes</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PersonalInformation;
