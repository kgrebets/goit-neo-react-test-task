import styles from "./CampersPage.module.css";

import CamperFilters from "../../components/CamperFilters/CamperFilters";
import CamperResults from "../../components/CamperResults/CamperResults";

export default function CampersPage() {
  console.log("render");

  return (
    <div className={styles.container}>
      <CamperFilters />
      <CamperResults />
    </div>
  );
}
