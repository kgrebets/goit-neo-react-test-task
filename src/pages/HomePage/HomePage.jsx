import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Campers of your dreams</h1>
            <h2 className={styles.subtitle}>
              You can find everything you want in our catalog
            </h2>
            <Link to="/catalog" className="button">
              View Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
