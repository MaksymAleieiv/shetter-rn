import React from 'react'
import { View, ScrollView, InteractionManager } from 'react-native'
import Post from '../../components/Post/Post'
import Feed from '../../components/Feed/Feed'
import mainInstance from '../../hooks_and_functions/mainInstance'
import AddComment from './AddComment/AddComment'
import PostSkeleton from '../../components/Skeletons/PostSkeleton/PostSkeleton'
import { connect } from 'react-redux'

const PostScreen = ({route, navigation, userInfo}) => {
    const postId = route.params.postId;
    const parentId = route.params.parentId;
    const isPost = route.params?.isPost
    const [post, setPost] = React.useState({})
    const [loading, setLoading] = React.useState(true)
    React.useEffect(() => {
        InteractionManager.runAfterInteractions(() => {
            let url = (isPost ? '/api/v1/posts/' : '/api/v1/comments/') + postId
            mainInstance.get(url).then((res) => {
                setPost(res.data);
                setLoading(false)
            })
        })
    }, [])
    return (
        <>
                <ScrollView>
                    {loading ? 
                        <PostSkeleton hasImage={Math.random()}/>
                        :
                        <Post post={post} route={route} navigation={navigation}
                        authorInfo={post.user.username === userInfo.username ? userInfo : post.user} isMyPost={post.user.username === userInfo.username}/>
                    }
                    <View style={{width: '98%', marginLeft: '2%', marginTop: '2%', marginBottom: 40, flex: 1}}>
                        <Feed navigation={navigation} route={route} feed={'Comments'}
                            postId={parentId === postId ? postId : parentId} parentId={parentId === postId ? 'null' : postId}
                        />
                    </View>
                </ScrollView>
                <AddComment postId={parentId === postId ? postId : parentId} parentId={parentId === postId ? '' : postId} isPost={isPost}/>
        </>
    )
}

function mapStateToProps(state){
    return {
        userInfo : state.user.userInfo
    }
}

export default connect(mapStateToProps)(PostScreen)