import styles from '../SearchInput/SearchInput.module.css';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

export default function SearchInput({ ...rest }) {
    return (
        <div className={styles.wrapper}>
            <SearchRoundedIcon color="inherit" />
            <input className={styles.input} {...rest} />
        </div>
    )
}
