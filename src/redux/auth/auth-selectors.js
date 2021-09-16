const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsLoadingUser = state => state.auth.IsLoadingUser;

const authSelectors = {
    getIsLoggedIn,
    getUsername,
    getIsLoadingUser,
};

export default authSelectors;
