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
import { setPage } from "../../redux/campersSlice";

export default function CamperFilters() {
  const dispatch = useDispatch();

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
      Location:
      <input
        type="text"
        value={location}
        placeholder="Enter location"
        onChange={handleLocationChange}
      />
      <hr />
      <hr />
      <h2>Vehicle equipment</h2>
      <p>
        AC: {labelAC}
        <button type="button" onClick={handleACClick}>
          AC
        </button>
      </p>
      <p>
        Transmission: {transmission}
        <button type="button" onClick={handleTransmissionClick}>
          AC
        </button>
      </p>
      <p>
        Kitchen: {labelK}
        <button type="button" onClick={handleKitchenClick}>
          Kitchen
        </button>
      </p>
      <p>
        TV: {labelTV}
        <button type="button" onClick={handleTVClick}>
          TV
        </button>
      </p>
      <p>
        Bathroom: {labelBathroom}
        <button type="button" onClick={handleBathroomClick}>
          Bathroom
        </button>
      </p>
      <hr />
      <hr />
      <h2>Vehicle type</h2>
      TYPE: {vehicleType}
      <button
        type="button"
        onClick={() => handleVehicleTypeClick("panelTruck")}
      >
        Van
      </button>
      <button
        type="button"
        onClick={() => handleVehicleTypeClick("fullyIntegrated")}
      >
        Integrated
      </button>
      <button type="button" onClick={() => handleVehicleTypeClick("alcove")}>
        Alcove
      </button>
      <hr />
      <hr />
      <button type="button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
}
