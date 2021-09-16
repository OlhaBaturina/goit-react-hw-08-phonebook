import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import authSelectors from '../redux/auth/auth-selectors';

export default function PublicRoute({
    children,
    restricted = false,
    ...routeProps
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRestricted = isLoggedIn && restricted;
    return (
        <Route {...routeProps}>
            {shouldRestricted ? <Redirect to="/contacts" /> : children}
        </Route>
    );
}
