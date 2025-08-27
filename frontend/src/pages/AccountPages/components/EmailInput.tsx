import styles from "../accountPages.module.css";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function EmailInput({ value, onChange }: Props) {
  return (
    <>
      <input
        type="email"
        required
        autoComplete="email"
        placeholder="Email"
        className={styles.email}
        value={value}
        onChange={(e) => {
          const newVal = e.target.value;
          onChange(newVal);
        }}
      />
    </>
  );
}
