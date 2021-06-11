import UserState from "../states/UserState";

const UserReducer = (state = UserState, action ) => {
    switch(action.type) {
        case 'change_login_state':
            return Object.assign({}, state, {isLoggedIn: !state.isLoggedIn});
        case 'set_jwt':
            return Object.assign({}, state, {jwt: 'Bearer ' + action.jwt});
        default:
            return state;
    }
   
}

export default UserReducer;