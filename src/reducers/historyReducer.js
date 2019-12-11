export default (state = {users: [], works:[]}, action) => {
    switch (action.type) {
        case 'ADD_USER':
            let haveuser = null;
            haveuser = state.users.filter((user) => user.id === action.payload.id);
            if (haveuser.length > 0){
                return state;
            }
            return {users: [...state.users, action.payload], works:state.works};
            
        case 'ADD_WORK':
            let havework = null;
            havework = state.works.filter((work) => work.id === action.payload.id);
            if (havework.length > 0){
                return state;
            } 
            return { users:state.users , works:[...state.works, action.payload] };
        
        default:
            return state;
    }
}