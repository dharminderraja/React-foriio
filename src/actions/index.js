import foriio from '../apis/foriio';

export const fetchUsers = () => {
    return async (dispatch) => {
        try {
            const response = await foriio.get('/promoted/users');
            dispatch({type: 'FETCH_USERS', payload: response.data.users});
        } catch(error) {
            dispatch({type: 'HANDLE_ERROR', payload: 'error'});
        }
    };
};

export const fetchUserProfile = (userName) => {
    return async (dispatch) => {
        try {
            const response = await foriio.get(`/users/${userName}/profile`);
            dispatch({type: 'FETCH_PROFILE', payload: response.data.profile});
            dispatch({type: 'ADD_USER', payload: response.data.profile});
        } catch(error) {
            dispatch({type: 'HANDLE_ERROR', payload: 'error'});
        }
    };
};

export const fetchWorks = (userName) => {
    return async (dispatch) => {
        try {
            const response = await foriio.get(`/users/${userName}/works`);
            dispatch({type: 'FETCH_USERWORKS', payload: response.data.works});
        } catch(error) {
            dispatch({type: 'HANDLE_ERROR', payload: 'error'});
        }
    };
};

export const fetchWork = (id) => {
    return async (dispatch) => {
        try {
            const response = await foriio.get(`/works/${id}`);
            dispatch({type: 'FETCH_WORK', payload: response.data.work});
            dispatch({type: 'ADD_WORK', payload: response.data.work});
        } catch(error) {
            dispatch({type: 'HANDLE_ERROR', payload: 'error'});
        }
    };
};