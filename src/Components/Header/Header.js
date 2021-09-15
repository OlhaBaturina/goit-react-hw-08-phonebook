import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import UserMenu from '../UserMenu/UserMenu';

console.log(authSelectors);

const Header = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    console.log(isLoggedIn);
    return (
        <nav className={s.Header}>
            <NavLink
                exact
                to="/"
                className={s.navLink}
                activeClassName={s.activeLink}
            >
                Home Page
            </NavLink>
            <NavLink
                to="/contacts"
                className={s.navLink}
                activeClassName={s.activeLink}
            >
                Contacts
            </NavLink>
            {isLoggedIn ? (
                <UserMenu />
            ) : (
                <div>
                    <NavLink
                        exact
                        to="/register"
                        className={s.navLink}
                        activeClassName={s.activeLink}
                    >
                        Register
                    </NavLink>
                    <NavLink
                        exact
                        to="/login"
                        className={s.navLink}
                        activeClassName={s.activeLink}
                    >
                        LogIn
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Header;
