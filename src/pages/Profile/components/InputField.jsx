import styles from "../styles/InputField.module.scss";

const InputField = ({ label, type, placeholder }) => {
  return (
    <div className={styles.inputField}>
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} placeholder={placeholder} />
    </div>
  );
};

export default InputField;
