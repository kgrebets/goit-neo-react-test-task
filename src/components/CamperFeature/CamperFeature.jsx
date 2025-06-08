import FeatureIcon from "../FeatureIcon/FeatureIcon";
import styles from "./CamperFeature.module.css";

export default function CamperFeature({ camper }) {
  const getFormName = (form) => {
    switch (form) {
      case "panelTruck":
        return "Panel truck";
      case "fullyIntegrated":
        return "Fully integrated";
      case "alcove":
        return "Alcove";
      default:
        return "Unknown";
    }
  };

  const addSpaceToText = (text) => {
    const withSpace = text.replace(/([0-9])([a-zA-Z])/g, "$1 $2");
    return withSpace;
  };

  return (
    <div className={styles.featureBlock}>
      <div className={styles.featuresWrapper}>
        <FeatureIcon icon="transmission" title={camper.transmission} />
        <FeatureIcon icon="engine" title={camper.engine} />
        {camper.kitchen && <FeatureIcon icon="kitchen" title="Kitchen" />}
        {camper.AC && <FeatureIcon icon="wind" title="AC" />}
        {camper.bathroom && <FeatureIcon icon="shower" title="Bathroom" />}
        {camper.TV && <FeatureIcon icon="monitor" title="TV" />}
        {camper.radio && <FeatureIcon icon="radio" title="Radio" />}
        {camper.refrigerator && (
          <FeatureIcon icon="fridge" title="Refrigerator" />
        )}
        {camper.microwave && <FeatureIcon icon="microwave" title="microwave" />}
        {camper.gas && <FeatureIcon icon="gas-stove" title="gas" />}
        {camper.water && <FeatureIcon icon="water" title="water" />}
      </div>
      <h3 className={styles.header}>Vehicle details</h3>
      <table className={styles.vehicleTable}>
        <tbody>
          <tr>
            <td>Form</td>
            <td>{getFormName(camper.form)}</td>
          </tr>
          <tr>
            <td>Length</td>
            <td>{addSpaceToText(camper.length)}</td>
          </tr>
          <tr>
            <td>Width</td>
            <td>{addSpaceToText(camper.width)}</td>
          </tr>
          <tr>
            <td>Height</td>
            <td>{addSpaceToText(camper.height)}</td>
          </tr>
          <tr>
            <td>Tank</td>
            <td>{addSpaceToText(camper.tank)}</td>
          </tr>
          <tr>
            <td>Consumption</td>
            <td>{camper.consumption}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
