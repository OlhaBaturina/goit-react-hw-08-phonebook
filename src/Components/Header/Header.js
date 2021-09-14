import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';

const Header = () => (
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
        <UserMenu />
        {/* <NavLink
            exact
            to="/logout"
            className={s.navLink}
            activeClassName={s.activeLink}
        >
            LogOut
        </NavLink> */}
    </nav>
);

export default Header;
