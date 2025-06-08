import styles from "./StarIcon.module.css";
import clsx from "clsx";

export default function StarIcon({ active }) {
  return (
    <svg
      width="16"
      height="16"
      className={clsx(styles.starIcon, active ? styles.active : "")}
    >
      <use href="/icons.svg#star" />
    </svg>
  );
}
