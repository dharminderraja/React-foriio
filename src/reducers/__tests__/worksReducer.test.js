import worksReducer from 'reducers/worksReducer';

const FETCH_USERWORKS = "FETCH_USERWORKS";

it('handles action of type FETCH_USERWORKS', () => {
    const action = {
        type: FETCH_USERWORKS,
        payload: ['New work']
    };

    const newState = worksReducer([], action);
    expect(newState).toEqual(['New work']);
});

it('handles action of unknown type', () => {
    const newState = worksReducer([], { type: 'RANDOM'});
    expect(newState).toEqual([]);
});