import styles from "./CamperFeature.module.css";

export default function CamperFeature({ camper }) {
  return (
    <div className={styles.featureBlock}>
      <h3>Features</h3>
      <ul>
        {Object.entries(camper).map(([key, value]) =>
          typeof value === "boolean" && value ? <li key={key}>{key}</li> : null
        )}
      </ul>
    </div>
  );
}
