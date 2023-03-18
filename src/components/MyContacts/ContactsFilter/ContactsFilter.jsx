import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';
import { getFilter } from 'redux/filter/selectors';
import styles from './contacts-filter.module.css';

const ContactsFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input type="text" name="filter" value={filter} onChange={handleFilter} />
    </div>
  );
};

export default ContactsFilter;
