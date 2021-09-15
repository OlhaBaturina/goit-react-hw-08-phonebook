import s from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);

    return (
        <div>
            <p>user@mail.com</p>

            <button
                className={s.button}
                type="button"
                onClick={() => {
                    // dispatch(
                    //     deleteContact(contact.id),
                    // );
                }}
            >
                LogOut
            </button>
        </div>
    );
};

export default UserMenu;
