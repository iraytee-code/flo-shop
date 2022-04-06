import * as actionType from "../types/userType";

const initialState = {
    isAuthenticated: false,
    user:{}
}

const userReducer = (state=initialState, action)=>{
    const{type} = action;
    switch(type){
        case actionType.GET_USER:
        return{
            ...state,
        }
    default:
        return state;
    }
}

export default userReducer