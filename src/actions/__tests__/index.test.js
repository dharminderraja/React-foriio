import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {fetchUsers,fetchWorks, fetchWork, fetchUserProfile} from 'actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);



const FETCH_USERS = "FETCH_USERS";
const FETCH_USERWORKS = "FETCH_USERWORKS";
const FETCH_WORK = "FETCH_WORK";
const FETCH_PROFILE = "FETCH_PROFILE";
const ADD_USER = "ADD_USER";
const ADD_WORK = "ADD_WORK";

describe('fetchUsers', () => {
    it('creates FETCH_USERS after successfuly fetching users', () => {
        const store = mockStore({ users: [] })
        
        return store.dispatch(fetchUsers()).then(() => {
            expect(store.getActions()[0].type).toEqual(FETCH_USERS);
        });
    });
});

describe('FetchWorks', () => {
    it('creates FETCH_USERWORKS after successfuly fetching user works', () => {
        const store = mockStore({ users: [] })
        
        return store.dispatch(fetchWorks('hirohito')).then(() => {
            expect(store.getActions()[0].type).toEqual(FETCH_USERWORKS);
        });
    });
});

describe('FetchWork', () => {
    it('creates FETCH_WORK after successfuly fetching work and check for maintaining work history', () => {
        const store = mockStore({ users: [] })
        
        return store.dispatch(fetchWork('43')).then(() => {
            expect(store.getActions()[0].type).toEqual(FETCH_WORK);
            expect(store.getActions()[1].type).toEqual(ADD_WORK);
        });
    });
});

describe('FetchUserProfile', () => {
    it('creates FETCH_PROFILE after successfuly fetching profile and check for maintaining user history', () => {
        const store = mockStore({ users: [] })
        return store.dispatch(fetchUserProfile('hirohito')).then(() => {
            expect(store.getActions()[0].type).toEqual(FETCH_PROFILE);
            expect(store.getActions()[1].type).toEqual(ADD_USER);
        });
    });
});