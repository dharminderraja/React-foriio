import profileReducer from 'reducers/profileReducer';

const FETCH_PROFILE = "FETCH_PROFILE";

it('handles action of type FETCH_PROFILE', () => {
    const action = {
        type: FETCH_PROFILE,
        payload: {user: "NewUser"}
    };

    const newState = profileReducer(null, action);
    expect(newState).toEqual({user: "NewUser"});
});

it('handles action of unknown type', () => {
    const newState = profileReducer(null, { type: 'RANDOM'});
    expect(newState).toEqual(null);
});