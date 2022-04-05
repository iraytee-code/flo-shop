import * as type from "../types/userType";

const initialState = {
    isAuthenticated: false,
    user:{}
}

const userReducer = (state=initialState, action)=>{
    const{type, payload} = action;
    switch(type){
        case type.GET_USER:
        return{
            ...state,
        }
    default:
        return state;
    }
}

export default userReducer