import { GoPersonFill } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ name, number, onDelete, id }) {
  return (
    <div className={css.div}>
      <ul className={css.list}>
        <li className={css.item}>
          <GoPersonFill />
          {name}
        </li>
        <li className={css.item}>
          <FaPhoneAlt />
          {number}
        </li>
      </ul>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
