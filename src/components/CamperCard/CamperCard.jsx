import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./CamperCard.module.css";

import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite, isFavorite } from "../../redux/favoritesSlice";
import FeatureIcon from "../FeatureIcon/FeatureIcon";
import ReviewsLocation from "../ReviewsLocation/ReviewsLocation";

export default function CamperCard({ camper }) {
  const {
    id,
    name,
    price,
    gallery,
    description,
    transmission,
    engine,
    kitchen,
    AC,
  } = camper;

  const dispatch = useDispatch();
  const favorite = useSelector(isFavorite(id));

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div className={styles.card}>
      <img src={gallery[0].thumb} alt={name} className={styles.image} />

      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.price}>
            &euro;{price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </p>
        </div>

        <ReviewsLocation camper={camper} />

        <p className={styles.description}>{description}</p>

        <div className={styles.features}>
          <FeatureIcon icon="transmission" title={transmission} />
          <FeatureIcon icon="engine" title={engine} />
          {kitchen && <FeatureIcon icon="kitchen" title="Kitchen" />}
          {AC && <FeatureIcon icon="wind" title="AC" />}
        </div>

        <div className={styles.showMoreWrapper}>
          <Link
            to={`/catalog/${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx("button", styles.showMoreButton)}
          >
            Show more
          </Link>
        </div>
      </div>
      <button className={styles.favoriteBtn} onClick={handleToggleFavorite}>
        <svg
          width="24"
          height="24"
          className={clsx(styles.favoriteIcon, favorite ? styles.active : "")}
        >
          <use href="/icons.svg#heart" />
        </svg>
      </button>
    </div>
  );
}
