import clsx from "clsx";
import styles from "./FilterButton.module.css";

export default function FilterButton({ icon, label, isActive, onClick }) {
  return (
    <button
      type="button"
      className={clsx(styles.filterButton, isActive && styles.active)}
      onClick={onClick}
    >
      <svg width="32" height="32" className={styles.icon}>
        <use href={`/icons.svg#${icon}`} />
      </svg>
      <span className={styles.label}>{label}</span>
    </button>
  );
}
