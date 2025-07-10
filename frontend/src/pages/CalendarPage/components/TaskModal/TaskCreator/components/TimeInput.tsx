import styles from "../TaskCreator.module.css";
import { useRef } from "react";
import { formatMinute } from "./timeFormat";
type Props = {
  hour: string;
  minute: string;
  meridiem: string;
  setHour: (val: string) => void;
  setMinute: (val: string) => void;
  setMeridiem: (val: string) => void;
};

export default function TimeInput({
  hour,
  minute,
  meridiem,
  setHour,
  setMinute,
  setMeridiem,
}: Props) {
  const minuteInputRef = useRef<HTMLInputElement>(null);
  const hourInputRef = useRef<HTMLInputElement>(null);
  const allowedKeys = ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete"];
  const digit = /^[0-9]$/;
  return (
    <div className={styles.timeDiv}>
      <input
        ref={hourInputRef}
        className={styles.hourInput}
        inputMode="numeric"
        value={hour}
        onChange={(e) => {
          const val = e.target.value.replace(/\D/g, "").slice(0, 2);
          setHour(val);

          if (val.length === 2 || (val.length === 1 && parseInt(val) >= 2)) {
            minuteInputRef.current?.focus();
          }
        }}
        onKeyDown={(e) => {
          const isDigit = digit.test(e.key);
          const current = e.currentTarget.value;
          const cursorLocation = e.currentTarget.selectionStart;

          if (!isDigit && !allowedKeys.includes(e.key)) {
            e.preventDefault();
            return;
          }

          if (e.key === "ArrowRight" && cursorLocation === current.length) {
            minuteInputRef.current?.focus();
            requestAnimationFrame(() => {
              minuteInputRef.current?.setSelectionRange(0, 0);
            });
          }

          if (current === "1" && parseInt(e.key) > 2) {
            e.preventDefault();
            minuteInputRef.current?.focus();
            minuteInputRef.current!.value = e.key;
          }
        }}
      />
      <div className={styles.colonDiv}>:</div>
      <input
        ref={minuteInputRef}
        className={styles.minuteInput}
        inputMode="numeric"
        value={minute}
        onChange={(e) => {
          const val = e.target.value.replace(/\D/g, "").slice(0, 2);
          setMinute(val);
        }}
        onBlur={() => setMinute(formatMinute(minute))}
        onKeyDown={(e) => {
          const isDigit = digit.test(e.key);
          const current = e.currentTarget.value;
          const cursorLocation = e.currentTarget.selectionStart;

          if (!isDigit && !allowedKeys.includes(e.key)) {
            e.preventDefault();
            return;
          }

          if (e.key === "ArrowLeft" && cursorLocation === 0) {
            hourInputRef.current?.focus();
            requestAnimationFrame(() => {
              hourInputRef.current?.setSelectionRange(
                hourInputRef.current?.value.length,
                hourInputRef.current?.value.length,
              );
            });
            return;
          }
          if (e.key === "Backspace" && current.length === 0) {
            hourInputRef.current?.focus();
            return;
          }

          const next = (current + e.key).slice(0, 2);
          const num = parseInt(next, 10);
          if (num > 59) {
            e.preventDefault();
          }
        }}
      />
      <select
        className={styles.meridiem}
        value={meridiem}
        onChange={(e) => setMeridiem(e.target.value)}
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  );
}
