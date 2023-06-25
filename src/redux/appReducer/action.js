import axios from 'axios'
import * as types from './actionsType'
const getBlogPosts=()=>(dispatch)=>{
    dispatch({type:types.POST_REQUEST})
    return axios(`https://jsonplaceholder.typicode.com/posts`).then((res)=>{
        dispatch({type:types.POST_SUCCESS,payload:res.data})
    }).catch((e)=>{
        dispatch({type:types.POST_SUCCESS,payload:e})
    })
    
    
}

const getBlogPostsBySearch=(search)=>(dispatch)=>{
    dispatch({type:types.POST_REQUEST})
    return axios(`https://jsonplaceholder.typicode.com/posts?q=${search}`).then((res)=>{
        dispatch({type:types.POST_SUCCESS,payload:res.data})
    }).catch((e)=>{
        dispatch({type:types.POST_SUCCESS,payload:e})
    })
    
    
}

export {getBlogPosts,getBlogPostsBySearch}