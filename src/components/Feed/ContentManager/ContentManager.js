import React from 'react'
import PostSkeleton from '../../Skeletons/PostSkeleton/PostSkeleton'
import { TouchableOpacity } from 'react-native'
import Post from '../../Post/Post'

const ContentManager = ({post, route, navigation, myUsername}) => {
    if(post.skeleton)
        return (<PostSkeleton hasImage={post.hasImage}/>)
    else
        return (
        <TouchableOpacity
            onPress={() => {
                navigation.push('Post', 
                {
                    postId : post.id,
                    isPost: post.parent === undefined,
                    parentId: route.params?.parentId || post.id
                })
            }}>
            <Post post={post} routeUsername={route.params?.username} navigation={navigation}
            authorInfo={post.user} isMyPost={post.user.username === myUsername}/>
        </TouchableOpacity>)
}
export default ContentManager
