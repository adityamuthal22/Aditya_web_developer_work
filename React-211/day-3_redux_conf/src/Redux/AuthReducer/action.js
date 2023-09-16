import * as types from './action.Types'

const loginRequest=()=>{
    return{
        type:types.USER_LOGIN_REQUEST,
    };
}

const loginSuccess=(payload)=>{
    return{
        type:types.USER_LOGIN_SUCCESS,
        payload,
    };
}

const loginFailure=()=>{
    return{
        type:types.USER_LOGIN_FAILURE,
    };
}

export {loginFailure,loginRequest,loginSuccess}