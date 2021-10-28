import { changedPostsActionTypes } from'./changedPostsActionTypes'
export const changedPostsActionCreators = {
    addPostId : (payload) => ({type: changedPostsActionTypes.ADD_POST, payload}),
    addCommentId : (payload) => ({type: changedPostsActionTypes.ADD_COMMENT, payload}),
    clearChanged : () => ({type: changedPostsActionTypes.CLEAR_ALL}),
}