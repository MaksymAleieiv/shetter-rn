import { userActionCreators } from './reducers/user-reducer/userActionCreators';
import { changedPostsActionCreators } from './reducers/changed-posts-reducer/changedPostsActionCreators'
import { createPostActionCreators } from './reducers/helper-reducer/helperActionCreators';

export const AllActionCreators = {
    ...userActionCreators,
    ...changedPostsActionCreators,
    ...createPostActionCreators
}