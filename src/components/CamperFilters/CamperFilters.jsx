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
import FilterButton from "../FilterButton/FilterButton";

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

  const handleSearchClick = () => {
    dispatch(setPage(1));
    dispatch(fetchCampers());
  };
  return (
    <div className={styles.container}>
      <h1 className="visuallyHidden">Campers catalog</h1>
      <p className={styles.locationTitle}>Location</p>

      <div className={styles.inputWrapper}>
        <svg width="20" height="20" className={styles.inputIcon}>
          <use href="/icons.svg#location" />
        </svg>
        <input
          type="text"
          value={location}
          placeholder="City"
          onChange={handleLocationChange}
          className={styles.input}
        />
      </div>

      <h2 className={styles.filtersTitle}>Filters</h2>
      <h3 className={styles.filtersGroupTitle}>Vehicle equipment</h3>
      <div className={styles.filtersButtonContainer}>
        <FilterButton
          icon="wind"
          label="AC"
          isActive={hasAC}
          onClick={handleACClick}
        />
        <FilterButton
          icon="transmission"
          label="Automatic"
          isActive={transmission}
          onClick={handleTransmissionClick}
        />
        <FilterButton
          icon="kitchen"
          label="Kitchen"
          isActive={hasKitchen}
          onClick={handleKitchenClick}
        />
        <FilterButton
          icon="monitor"
          label="TV"
          isActive={hasTV}
          onClick={handleTVClick}
        />
        <FilterButton
          icon="shower"
          label="Bathroom"
          isActive={hasBathroom}
          onClick={handleBathroomClick}
        />
      </div>

      <h3 className={styles.filtersGroupTitle}>Vehicle type</h3>
      <div className={styles.filtersButtonContainer}>
        <FilterButton
          icon="van"
          label="Van"
          isActive={vehicleType === "panelTruck"}
          onClick={() => handleVehicleTypeClick("panelTruck")}
        />
        <FilterButton
          icon="fullyIntegrated"
          label="Integrated"
          isActive={vehicleType === "fullyIntegrated"}
          onClick={() => handleVehicleTypeClick("fullyIntegrated")}
        />
        <FilterButton
          icon="alcove"
          label="Alcove"
          isActive={vehicleType === "alcove"}
          onClick={() => handleVehicleTypeClick("alcove")}
        />
      </div>

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
