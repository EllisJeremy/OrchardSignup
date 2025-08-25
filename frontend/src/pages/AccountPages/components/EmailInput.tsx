import styles from "../accountPages.module.css";
import { getBorderColorSimple } from "../../../functions/formFunctions";

interface Props {
  value: string;
  onChange: (val: string) => void;
  onValidChange?: (valid: boolean) => void;
  firstEdit: boolean;
  setFirstEdit: (val: boolean) => void;
  emailValid: boolean;
  className?: string;
}

export function EmailInput({
  value,
  onChange,
  onValidChange = () => {},
  firstEdit,
  setFirstEdit,
  emailValid,
  className = "",
}: Props) {
  return (
    <>
      <input
        type="email"
        required
        autoComplete="email"
        placeholder="Email"
        className={`${styles.email} ${className}`}
        value={value}
        onChange={(e) => {
          const newVal = e.target.value;
          onChange(newVal);
          if (!firstEdit) {
            onValidChange(e.target.validity.valid);
          }
        }}
        onBlur={(e) => {
          setFirstEdit(false);
          onValidChange(e.target.validity.valid);
        }}
        style={{ borderColor: getBorderColorSimple(firstEdit, emailValid) }}
      />
      {emailValid === true ? (
        <div className={styles.spacerDiv} />
      ) : (
        <p className={styles.error}>Please enter a valid email address.</p>
      )}
    </>
  );
}
