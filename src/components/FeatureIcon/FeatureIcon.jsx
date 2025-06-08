import styles from "./FeatureIcon.module.css";

const FeatureIcon = ({ icon, title }) => (
  <div className={styles.feature}>
    <svg width="20" height="20">
      <use href={`/icons.svg#${icon}`} />
    </svg>
    <span>{title}</span>
  </div>
);

export default FeatureIcon;
