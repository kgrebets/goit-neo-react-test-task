import styles from "./CamperDetailsPage.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperDetails } from "../../redux/campersOps";
import {
  selectCamper,
  selectCamperLoading,
  selectCamperError,
  resetCamperDetails,
} from "../../redux/camperDetailsSlice";
import CamperFeature from "../../components/CamperFeature/CamperFeature";
import BookingForm from "../../components/BookingForm/BookingForm";
import CamperReviews from "../../components/CamperReviews/CamperReviews";

export default function CamperDetailsPage() {
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);
  const loading = useSelector(selectCamperLoading);
  const error = useSelector(selectCamperError);

  const { id } = useParams();

  const [tab, setTab] = useState("features");

  useEffect(() => {
    dispatch(fetchCamperDetails(id));
    return () => dispatch(resetCamperDetails());
  }, [id, dispatch]);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!camper) return <div className={styles.notfound}>Not found</div>;

  const isFeatureTab = tab === "features";
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.name}>{camper.name}</h2>
      <div className={styles.meta}>
        <span className={styles.rating}>
          <span className={styles.star}>⭐</span>
          {camper.rating}
          <span className={styles.reviewLink}>
            ({camper.reviews?.length} Reviews)
          </span>
        </span>
        <span className={styles.location}>📍{camper.location}</span>
      </div>
      <div className={styles.price}>
        €{Number(camper.price).toLocaleString("en-US")}.00
      </div>
      <div className={styles.gallery}>
        {camper.gallery?.map((img, idx) => (
          <img
            className={styles.galleryImg}
            key={idx}
            src={img.thumb}
            alt={`${camper.name} ${idx + 1}`}
          />
        ))}
      </div>
      <div className={styles.description}>{camper.description}</div>
      <hr />

      <div className={styles.tabs}>
        <button
          className={isFeatureTab ? styles.activeTab : ""}
          onClick={() => setTab("features")}
        >
          Features
        </button>
        <button
          className={isFeatureTab ? styles.activeTab : ""}
          onClick={() => setTab("reviews")}
        >
          Reviews
        </button>
      </div>
      <div className={styles.bottomContainer}>
        {isFeatureTab && <CamperFeature camper={camper} />}
        {!isFeatureTab && <CamperReviews camper={camper} />}
        <BookingForm camper={camper} />
      </div>
    </div>
  );
}
