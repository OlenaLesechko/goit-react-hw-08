import { useSelector } from 'react-redux';
import Navigation  from '../Navigation/Navigation';
import css from './AppBar.module.css';
import UserMenu  from '../UserMenu/UserMenu';
import  AuthNav  from '../AuthNav/AuthNav';
import { useAuth } from '../hooks/useAuth';

export default function AppBar() {
    const { isLoggedIn } = useAuth();

    return (
        <header className={css.header}>
            <Navigation />
                <div>
                    {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </div>
        </header>
    );
}



