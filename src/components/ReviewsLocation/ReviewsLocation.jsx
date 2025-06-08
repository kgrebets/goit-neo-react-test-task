import styles from "./ReviewsLocation.module.css";
import StarIcon from "../StarIcon/StarIcon";

export default function ReviewsLocation({ camper }) {
  const reviewText =
    camper.reviews.length +
    " Review" +
    (camper.reviews.length === 1 ? "" : "s");

  return (
    <div className={styles.reviewsLocation}>
      <div className={styles.reviews}>
        <StarIcon active={true} />
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
