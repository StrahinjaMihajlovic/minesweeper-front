import { createStore } from 'redux';
import UserReducer from './redux/reducers/UserReducer';


// A redux store for an app
const AppConfig = createStore(UserReducer);


export default AppConfig