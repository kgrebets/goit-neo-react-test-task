import styles from "./CampersPage.module.css";

import CamperFilters from "../../components/CamperFilters/CamperFilters";
import CamperResults from "../../components/CamperResults/CamperResults";

export default function CampersPage() {
  return (
    <div className="container">
      <div className={styles.campersPageContainer}>
        <CamperFilters />
        <CamperResults />
      </div>
    </div>
  );
}
