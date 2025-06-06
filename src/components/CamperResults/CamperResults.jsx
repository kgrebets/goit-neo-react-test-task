import styles from "./CamperResults.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectError,
  selectHasMorePages,
  selectLoading,
  selectPage,
  setPage,
} from "../../redux/campersSlice";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campersOps";
import CamperCard from "../../components/CamperCard/CamperCard";
import clsx from "clsx";

export default function CamperResults() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const page = useSelector(selectPage);
  const filteredCampers = useSelector(selectCampers);
  const hasMorePages = useSelector(selectHasMorePages);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(setPage(page + 1));
    dispatch(fetchCampers());
  };

  // if (loading) return <p>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (filteredCampers === null) return null;
  if (filteredCampers.length === 0) return <p>No campers found.</p>;

  return (
    <div>
      {loading && <p>Loading...</p>}
      {filteredCampers.map((c) => (
        <CamperCard key={c.id} camper={c} />
      ))}

      {hasMorePages && (
        <button
          type="button"
          className={clsx("button", "secondary", styles.loadMoreBtn)}
          onClick={handleLoadMore}
        >
          Load more
        </button>
      )}
    </div>
  );
}
