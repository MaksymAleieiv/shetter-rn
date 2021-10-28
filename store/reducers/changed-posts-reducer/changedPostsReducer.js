import { changedPostsActionTypes } from'./changedPostsActionTypes'
const initialState = {
    posts: [],
    comments: []
}

export const changedPostsReducer = (state = initialState, action) => {
    switch(action.type){
        case changedPostsActionTypes.ADD_POST : return {...state,
            posts : [...new Set([...state.posts, action.payload])],
            comments : state.comments
        }
        case changedPostsActionTypes.ADD_COMMENT : return {...state,
            posts : state.posts,
            comments : [...new Set([...state.comments, action.payload])]
        }
        case changedPostsActionTypes.CLEAR_ALL : return {...state,
            posts : [],
            comments : []
        }
        default : return {...state, state}
    }
}