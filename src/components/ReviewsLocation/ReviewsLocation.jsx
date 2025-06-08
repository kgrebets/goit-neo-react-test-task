import clsx from "clsx";
import styles from "./ReviewsLocation.module.css";

export default function ReviewsLocation({ camper }) {
  const reviewText =
    camper.reviews.length +
    " Review" +
    (camper.reviews.length === 1 ? "" : "s");

  return (
    <div className={styles.reviewsLocation}>
      <div className={styles.reviews}>
        <svg
          width="16"
          height="16"
          className={clsx(styles.starIcon, styles.active)}
        >
          <use href="/icons.svg#star" />
        </svg>
        {camper.rating}({reviewText})
      </div>
      <div className={styles.location}>
        <svg width="16" height="16">
          <use href="/icons.svg#location" />
        </svg>
        {camper.location}
      </div>
    </div>
  );
}
