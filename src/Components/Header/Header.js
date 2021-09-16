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

            {isLoggedIn ? (
                <>
                    <NavLink
                        to="/contacts"
                        className={s.navLink}
                        activeClassName={s.activeLink}
                    >
                        Contacts
                    </NavLink>
                    <UserMenu />
                </>
            ) : (
                <div className={s.authLinkThumb}>
                    <NavLink
                        exact
                        to="/register"
                        className={s.authLink}
                        activeClassName={s.activeLink}
                    >
                        Register
                    </NavLink>
                    <NavLink
                        exact
                        to="/login"
                        className={s.authLink}
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
