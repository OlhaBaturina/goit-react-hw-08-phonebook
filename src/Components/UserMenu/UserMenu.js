import s from './UserMenu.module.css';

const UserMenu = () => {
    // const contacts = useSelector(({ contacts, filter }) => {
    //     const visibleContacts = contacts.filter(contact =>
    //         contact.name.toLowerCase().includes(filter.toLowerCase()),
    //     );
    //     return visibleContacts;
    // });

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchData());
    //   }, [dispatch]);

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
