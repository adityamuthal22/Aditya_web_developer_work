import * as types from './actionTypes';

const initialState ={
    blogs:[],
    loading:false,
    error:'',
}

const reducer =(state= initialState, action) => {
    const {type,payload} =action;
    switch(type){
        case types.FETCH_BLOG_POST_REQUEST:
        return{
            ...state,
            loading:true,
            error:''
        }
        case types.FETCH_BLOG_POST_SUCCESS:
            return{
                ...state,
                loading:false,
                blogs:payload,
                error:''
            }
            case types.FETCH_BLOG_POST_FAILURE:
                return{
                    ...state,
                    loading:false,
                    error:payload,
                }
        default:
            return state;
    }
}

export default reducer;