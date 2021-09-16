import s from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';
import defaultAvatar from './panda.png';

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    const avatar = defaultAvatar;

    return (
        <div className={s.thumb}>
            <div className={s.imgThumb}>
                <img className={s.avatar} src={avatar} alt="" width={50} />
            </div>

            <p className={s.text}>Hello, {name}</p>

            <button
                className={s.button}
                type="button"
                onClick={() => dispatch(logout())}
            >
                LogOut
            </button>
        </div>
    );
};

export default UserMenu;
