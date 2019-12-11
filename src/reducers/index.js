import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import profileReducer from './profileReducer';
import worksReducer from './worksReducer';
import workReducer from './workReducer';
import historyReducer from './historyReducer';

export default combineReducers({
    users: usersReducer,
    profile: profileReducer,
    works: worksReducer,
    work: workReducer,
    history: historyReducer
});