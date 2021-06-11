const UserState = {
    isLoggedIn: false,
    backUrl: 'http://localhost',
    jwt: typeof document.cookie != 'undefined' ? document.cookie.token : ''
};

export default UserState;