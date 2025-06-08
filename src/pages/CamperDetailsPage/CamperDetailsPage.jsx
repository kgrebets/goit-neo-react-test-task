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
import ReviewsLocation from "../../components/ReviewsLocation/ReviewsLocation";
import clsx from "clsx";
import Loader from "../../components/Loader/Loader";

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

  if (loading) return <Loader />;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!camper) return <div className={styles.notfound}>Not found</div>;

  const isFeatureTab = tab === "features";
  return (
    <div className="container">
      <h2 className={styles.name}>{camper.name}</h2>

      <ReviewsLocation camper={camper} />

      <p className={styles.price}>
        &euro;
        {camper.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </p>

      <div className={styles.gallery}>
        {camper.gallery?.map((img, idx) => (
          <img
            className={styles.galleryImg}
            key={idx}
            src={img.thumb}
            alt={`${camper.name} image ${idx + 1}`}
          />
        ))}
      </div>
      <div className={styles.description}>{camper.description}</div>

      <div className={styles.tabsWrapper}>
        <div className={styles.tabs}>
          <button
            className={clsx(styles.tab, isFeatureTab ? styles.active : "")}
            onClick={() => setTab("features")}
          >
            Features
          </button>
          <button
            className={clsx(styles.tab, !isFeatureTab ? styles.active : "")}
            onClick={() => setTab("reviews")}
          >
            Reviews
          </button>
        </div>
      </div>

      <div className={styles.bottomContainer}>
        <div className={styles.leftPanel}>
          {isFeatureTab && <CamperFeature camper={camper} />}
          {!isFeatureTab && <CamperReviews camper={camper} />}
        </div>
        <div className={styles.rightPanel}>
          <BookingForm camper={camper} />
        </div>
      </div>
    </div>
  );
}
