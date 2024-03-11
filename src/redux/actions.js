import { db } from '../database/config';
import { ref, set, get, child, remove, push, update } from 'firebase/database'


export const startAddingPost = (post) => {
    return async (dispatch) => {

        return await set(ref(db, `posts/${post.id}`), post)
            .then(() => {
                dispatch(addPost(post));
            }).catch((error) => {
                console.log(error);
            })
    }
}

export const startLoadingPosts = () => {
    return async (dispatch) => {

        const dbRef = ref(db)
        return await get(child(dbRef, 'posts'))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    let posts = [];
                    snapshot.forEach((childSnapshot) => {
                        posts.push(childSnapshot.val())
                    })
                    dispatch(loadPosts(posts));
                } else {
                    console.log('No data available')
                }
            })
    }
}

// export function startRemovingPost(index, id) {
//     return (dispatch) => {
//         return database.ref(`posts/${id}`).remove().then(() => {
//             dispatch(removePost(index))
//         }).catch((error) => {
//             console.log(error)
//         })
//     }
// }
export const startRemovingPost = (index, id) => {
    const updates = {
        [`posts/${id}`]: null,
        [`comments/${id}`]: null
    }

    return async (dispatch) => {
        // return await remove(ref(db, `posts/${id}`))
        //     .then(() => {
        //         dispatch(removePost(index));
        //     }).catch((error) => {
        //         console.log(error);
        //     })
        return await update(ref(db), updates)
            .then(() => {
                dispatch(removePost(index));
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export const startAddingComment = (comment, postId) => {

    return async (dispatch) => {

        return await push(ref(db, 'comments/' + postId), comment)
            .then(() => {
                dispatch(addComment(comment, postId));
            }).catch((error) => {
                console.log(error);
            })
    }
}

export const startLoadingComments = () => {
    return async (dispatch) => {
        // return db.ref('comments').once( 'value').then((snapshot)=>{
        //     let comments= {};
        //     snapshot.forEach((childSnapshot)=>{
        //         comments[childSnapshot.key] = Object.values(childSnapshot.val());
        //     })
        //     dispatch(loadComments(comments))
        // })
        const dbRef = ref(db)
        return await get(child(dbRef, 'comments'))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    let comments = {};
                    snapshot.forEach((childSnapshot) => {
                        comments[childSnapshot.key] = Object.values(childSnapshot.val());
                    })
                    dispatch(loadComments(comments));
                } else {
                    console.log('No data available')
                }
            })
    }
}

export const removePost = (index) => {
    return {
        type: 'REMOVE_POST',
        index
    }
}

export const addPost = (post) => {
    return {
        type: 'ADD_POST',
        post
    }
}

export const addComment = (comment, postId) => {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

export const loadPosts = (posts) => {
    return {
        type: 'LOAD_POSTS',
        posts
    }
}

export const loadComments = (comments) => {
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}
//adding post