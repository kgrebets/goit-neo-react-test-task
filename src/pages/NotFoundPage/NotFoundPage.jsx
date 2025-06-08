import clsx from "clsx";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={clsx("container", styles.header)}>
      <h1>Ooooops 404</h1>
      <p>Sorry, page not found.</p>
    </div>
  );
}
