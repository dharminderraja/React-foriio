import workReducer from 'reducers/workReducer';

const FETCH_WORK = "FETCH_WORK";

it('handles action of type FETCH_WORK', () => {
    const action = {
        type: FETCH_WORK,
        payload: {work: "NewWork"}
    };

    const newState = workReducer(null, action);
    expect(newState).toEqual({work: "NewWork"});
});

it('handles action of unknown type', () => {
    const newState = workReducer(null, { type: 'RANDOM'});
    expect(newState).toEqual(null);
});