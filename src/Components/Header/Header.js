import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

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
            to="/authorization"
            className={s.navLink}
            activeClassName={s.activeLink}
        >
            LogIn/LogOut
        </NavLink>
    </nav>
);

export default Header;
