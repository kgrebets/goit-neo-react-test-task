import { Link } from "react-router-dom";
import styles from "./CamperCard.module.css";

import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite, isFavorite } from "../../redux/favoritesSlice";

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
          <p className={styles.price}>€{price.toLocaleString("en-US")}.00</p>
        </div>

        <div className={styles.location}>{location}</div>

        <p className={styles.description}>{description}</p>

        <div className={styles.features}>
          <span className={styles.feature}>{transmission}</span>
          <span className={styles.feature}>{engine}</span>
          {kitchen && <span className={styles.feature}>Kitchen</span>}
          {AC && <span className={styles.feature}>AC</span>}
        </div>

        <Link
          to={`/catalog/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.showMore}
        >
          Show more
        </Link>
      </div>
      <button className={styles.favoriteBtn} onClick={handleToggleFavorite}>
        {favorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
}
