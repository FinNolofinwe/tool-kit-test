import { FC, ChangeEvent } from 'react';
import styles from './SearchBar.module.scss';

interface ISearchBarProps {
  value: string;
  setValue: (value: string) => void;
}

const SearchBar: FC<ISearchBarProps> = ({ value, setValue }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.search__wrapper}>
      <input
        type="search"
        value={value}
        onChange={handleChange}
        className={styles.inp}
        placeholder="Type a repo name"
      />
    </div>
  );
};

export default SearchBar;