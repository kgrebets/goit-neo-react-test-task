import { Link } from "react-router-dom";
import styles from "./CamperCard.module.css";

import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite, isFavorite } from "../../redux/favoritesSlice";
import clsx from "clsx";

export default function CamperCard({ camper }) {
  const {
    id,
    name,
    price,
    location,
    gallery,
    description,
    transmission,
    engine,
    kitchen,
    AC,
    rating,
  } = camper;

  const dispatch = useDispatch();
  const favorite = useSelector(isFavorite(id));

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  const reviewText =
    camper.reviews.length.toString() +
    " Review" +
    (camper.reviews.length == 1 ? "" : "s");
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

        <div className={styles.reviewsLocation}>
          <div className={styles.reviews}>
            <svg
              width="16"
              height="16"
              className={clsx(styles.starIcon, styles.active)}
            >
              <use href="/icons.svg#star" />
            </svg>
            {rating}({reviewText})
          </div>
          <div className={styles.location}>
            <svg width="16" height="16">
              <use href="/icons.svg#location" />
            </svg>
            {location}
          </div>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.features}>
          <div className={styles.feature}>
            
             <svg
              width="20"
              height="20"
            >
              <use href="/icons.svg#transmission" />
            </svg>

            <span>{transmission}</span>
          </div>
          <div className={styles.feature}>
            <img alt="tran" />
            <span>{engine}</span>
          </div>
          {kitchen && (
            <div className={styles.feature}>
              <img alt="tran" />
              <span>Kitchen</span>
            </div>
          )}
          {AC && (
            <div className={styles.feature}>
              <img alt="tran" />
              <span>AC</span>
            </div>
          )}
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
