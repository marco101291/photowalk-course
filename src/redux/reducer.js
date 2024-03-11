import _posts from '../data/posts';
import { combineReducers } from 'redux';

const comments = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            if (!state[action.postId]) {
                //If there's an empty array of comments, add the new comment related to that postId
                return { ...state, [action.postId]: [action.comment] }
            } else {
                //If array of comments is not empty, return the state plus the array with comments related to that postId and with the new comment included.
                return { ...state, [action.postId]: [...state[action.postId], action.comment] }
            }
        case 'LOAD_COMMENTS': return action.comments
        default: return state;
    }

}


const posts = (state = _posts, action) => {


    switch (action.type) {
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        case 'ADD_POST': return [...state, action.post];
        case 'LOAD_POSTS': return action.posts;
        default: return state
        // .sort(function (x, y) {
        //     return y.id - x.id
        // });
    }



}


const rootReducer = combineReducers({ posts, comments });

export default rootReducer;