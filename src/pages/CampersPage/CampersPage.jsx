import { useDispatch, useSelector } from "react-redux";
import styles from "./CampersPage.module.css";
import {
  selectError,
  selectFilteredCampers,
  selectLoading,
} from "../../redux/campersSlice";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campersOps";
import CamperCard from "../../components/CamperCard/CamperCard";

export default function CampersPage() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const filteredCampers = useSelector(selectFilteredCampers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  console.log("render");

  if (loading) return <p>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (filteredCampers === null) return null;
  if (filteredCampers.length === 0) return <p>No campers found.</p>;

  return (
    <div className={styles.container}>
      <h1>Campers Catalog</h1>
      <p>Use filters and find your perfect camper!</p>
      {filteredCampers.map((c) => (
        <CamperCard key={c.id} camper={c} />
      ))}
    </div>
  );
}
