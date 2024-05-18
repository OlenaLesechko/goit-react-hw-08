import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav() {
    return (
        <div>
        <NavLink to="/register" className={css.link} >
            Register
        </NavLink>
        <NavLink to="/login" className={css.link}>
            Log In
        </NavLink>
        </div>
    );
}
