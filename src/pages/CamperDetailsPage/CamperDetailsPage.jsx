import { useParams } from "react-router-dom";
import styles from "./CamperDetailsPage.module.css";

export default function CamperDetailsPage() {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      <h1>Camper Details</h1>
      <p>Details for camper ID: {id}</p>
      {/* TODO: Fetch and display camper details, gallery, reviews, and booking form */}
    </div>
  );
}
