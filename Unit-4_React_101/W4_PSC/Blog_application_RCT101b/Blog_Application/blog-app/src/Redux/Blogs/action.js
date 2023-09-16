import * as types from './actionTypes';
import Axios from 'axios';
const FETCH_BLOG_POST_REQUEST=(payload)=>{
    return{
        type:types.FETCH_BLOG_POST_REQUEST,
        payload
    }
}

const FETCH_BLOG_POST_SUCCESS=(payload)=>{
    return{
        type:types.FETCH_BLOG_POST_REQUEST,
        payload
    }
}
const FETCH_BLOG_POST_FAILURE=(payload)=>{
    return{
        type:types.FETCH_BLOG_POST_REQUEST,
        payload
    }
}

const fetchBlogPost =(payload)=> (dispatch)=>{
    dispatch(fetchBlogPostRequest());
    Axios.get('/blogs')
    .then(r => dispatch(fetchBlogPostSuccess(r.data)))
    .catch(e=>dispatch(fetchBlogPostfailure(e.data)));
};

export {fetchBlogPost};