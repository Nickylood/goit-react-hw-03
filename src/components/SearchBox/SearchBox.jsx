import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  const field = useId();

  return (
    <div>
      <label className={css.label} htmlFor={field}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        name="name"
        id={field}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
