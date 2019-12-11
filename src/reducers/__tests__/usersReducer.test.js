import usersReducer from 'reducers/usersReducer';

const FETCH_USERS = "FETCH_USERS";

it('handles action of type FETCH_USERS', () => {
    const action = {
        type: FETCH_USERS,
        payload: ['New user']
    };

    const newState = usersReducer([], action);
    expect(newState).toEqual(['New user']);
});

it('handles action of unknown type', () => {
    const newState = usersReducer([], { type: 'RANDOM'});
    expect(newState).toEqual([]);
});