import { userActionCreators } from './reducers/user-reducer/userActionCreators';
import { changedPostsActionCreators } from './reducers/changed-posts-reducer/changedPostsActionCreators'

export const AllActionCreators = {
    ...userActionCreators,
    ...changedPostsActionCreators
}