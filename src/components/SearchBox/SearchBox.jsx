import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';
import { useId } from 'react';

export default function SearchBar() {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);
    const nameId = useId();

    return (
        <div className={css.div}>
            <p>Find contacts by name</p>
            <label htmlFor={nameId}></label>
            <input
                type="text"
                value={filter}
                onChange={e => dispatch(changeFilter(e.target.value))}
            />
        </div>
    );
}
