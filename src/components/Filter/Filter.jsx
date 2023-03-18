import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "redux/contacts/selectors";
import { setFilter } from "redux/contacts/filterSlice";

import styles from "./filter.module.css";

export const Filter = () => {
const dispatch = useDispatch();
const filter = useSelector(getFilter);

const handleChange = e => {
  dispatch(setFilter(e.target.value));
};
return (
  <div>
    <label className={styles.filterLabel}>Find contacts by Name </label>
    <input
        className={styles.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={handleChange}
    />
  </div>
)
}

