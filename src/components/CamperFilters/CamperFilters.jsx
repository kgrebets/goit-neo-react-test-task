import styles from "./CamperFilters.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setLocation,
  selectACFilter,
  selectBathroomFilter,
  selectKitchenFilter,
  selectTransmissionFilter,
  selectTVFilter,
  selectVehicleTypeFilter,
  setAC,
  setBathroom,
  setKitchen,
  setTransmission,
  setTV,
  setVehicleType,
  selectLocationFilter,
} from "../../redux/filtersSlice";
import { fetchCampers } from "../../redux/campersOps";
import { selectLoading, setPage } from "../../redux/campersSlice";
import clsx from "clsx";

export default function CamperFilters() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);

  const location = useSelector(selectLocationFilter) || "";
  const hasAC = useSelector(selectACFilter);
  const transmission = useSelector(selectTransmissionFilter);
  const hasKitchen = useSelector(selectKitchenFilter);
  const hasTV = useSelector(selectTVFilter);
  const hasBathroom = useSelector(selectBathroomFilter);
  const vehicleType = useSelector(selectVehicleTypeFilter);

  const handleLocationChange = (e) => {
    dispatch(setLocation(e.target.value));
  };
  const handleACClick = () => dispatch(setAC());
  const handleTransmissionClick = () => dispatch(setTransmission());
  const handleKitchenClick = () => dispatch(setKitchen());
  const handleTVClick = () => dispatch(setTV());
  const handleBathroomClick = () => dispatch(setBathroom());
  const handleVehicleTypeClick = (t) => dispatch(setVehicleType(t));

  const labelAC = hasAC === true ? "Yes" : hasAC === null ? "Not set" : "ERR";
  const labelK =
    hasKitchen === true ? "Yes" : hasKitchen === null ? "Not set" : "ERR";
  const labelTV = hasTV === true ? "Yes" : hasTV === null ? "Not set" : "ERR";
  const labelBathroom =
    hasBathroom === true ? "Yes" : hasBathroom === null ? "Not set" : "ERR";

  const handleSearchClick = () => {
    dispatch(setPage(1));
    dispatch(fetchCampers());
  };
  return (
    <div className={styles.container}>
      <h1 className="visuallyHidden">Campers catalog</h1>
      <p className={styles.locationTitle}>Location</p>
      <input
        type="text"
        value={location}
        placeholder="Enter location"
        onChange={handleLocationChange}
      />
      <h2 className={styles.filtersTitle}>Filters</h2>
      <h3 className={styles.filtersGroupTitle}>Vehicle equipment</h3>
      <div className={styles.filtersButtonContainer}>
        <button
          type="button"
          className={clsx(styles.filterButton, hasAC && styles.active)}
          onClick={handleACClick}
        >
          AC
        </button>
        <button
          type="button"
          className={clsx(styles.filterButton, transmission && styles.active)}
          onClick={handleTransmissionClick}
        >
          <span>Automatic</span>
        </button>
        <button
          type="button"
          className={clsx(styles.filterButton, hasKitchen && styles.active)}
          onClick={handleKitchenClick}
        >
          Kitchen
        </button>
        <button
          type="button"
          className={clsx(styles.filterButton, hasTV && styles.active)}
          onClick={handleTVClick}
        >
          TV
        </button>
        <button
          type="button"
          className={clsx(styles.filterButton, hasBathroom && styles.active)}
          onClick={handleBathroomClick}
        >
          Bathroom
        </button>
      </div>
      {/* <p>AC: {labelAC}</p>
      <p>Transmission: {transmission}</p>
      <p>Kitchen: {labelK}</p>
      <p>TV: {labelTV}</p>
      <p>Bathroom: {labelBathroom}</p> */}
      <h3 className={styles.filtersGroupTitle}>Vehicle type</h3>
      <div className={styles.filtersButtonContainer}>
        <button
          type="button"
          className={clsx(
            styles.filterButton,
            vehicleType === "panelTruck" && styles.active
          )}
          onClick={() => handleVehicleTypeClick("panelTruck")}
        >
          Van
        </button>
        <button
          type="button"
          className={clsx(
            styles.filterButton,
            vehicleType === "fullyIntegrated" && styles.active
          )}
          onClick={() => handleVehicleTypeClick("fullyIntegrated")}
        >
          Integrated
        </button>
        <button
          type="button"
          className={clsx(
            styles.filterButton,
            vehicleType === "alcove" && styles.active
          )}
          onClick={() => handleVehicleTypeClick("alcove")}
        >
          Alcove
        </button>
      </div>
      {/* TYPE: {vehicleType} */}
      <button
        type="button"
        className={clsx("button", styles.searchBtn)}
        onClick={handleSearchClick}
        disabled={loading}
      >
        Search
      </button>
    </div>
  );
}
