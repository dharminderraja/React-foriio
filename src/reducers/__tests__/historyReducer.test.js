import historyReducer from 'reducers/historyReducer';

const ADD_USER = "ADD_USER";
const ADD_WORK = "ADD_WORK";

it('handles action of type ADD_USER', () => {
    const action = {
        type: ADD_USER,
        payload: 'New user'
    };

    const newState = historyReducer({users: [], works: []}, action);
    expect(newState).toEqual({users: ['New user'], works: []});
});

it('handles action of type ADD_WORK', () => {
    const action = {
        type: ADD_WORK,
        payload: 'New work'
    };

    const newState = historyReducer({users: [], works: []}, action);
    expect(newState).toEqual({users: [], works: ['New work']});
});

it('handles action of unknown type', () => {
    const newState = historyReducer({users: [], works: []}, { type: 'RANDOM'});
    expect(newState).toEqual({users: [], works: []});
});