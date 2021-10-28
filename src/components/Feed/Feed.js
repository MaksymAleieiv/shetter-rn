import React from 'react'
import { FlatList, Text, View, InteractionManager } from 'react-native'
import mainInstance from '../../hooks_and_functions/mainInstance';
import { useFocusEffect } from '@react-navigation/core';
import { connect } from 'react-redux';
import urlManager from './Functions/urlManager';
import updatePosts from './Functions/updatePosts';
import ContentManager from './ContentManager/ContentManager';

const jumpLength = 80;
const skeletons = Array(jumpLength).fill({skeleton: true}).map((item, index) => ({...item, index, hasImage: Math.random()}))

const Feed = ({route, navigation, feed, postId, parentId, changedPostIds, changedCommentIds, myUserInfo}) => {
    const [startPos, setStartPos] = React.useState(0)
    const [loading, setLoading] = React.useState(false)
    const [hasMore, setHasMore] = React.useState(true)
    const [posts, setPosts] = React.useState([])
    console.log('Feed Rerendered, ', feed, {
        startPos, loading, hasMore, postsLength: posts.length
    })
    React.useEffect(() => {
            let url = urlManager(feed, route, jumpLength, parentId, postId, startPos)
            console.log('startPos changed in', feed, startPos)

            if(hasMore && !loading){
                setLoading(true)
                setPosts(p => [...p, ...skeletons])
                mainInstance.get(url).then(res => {
                    if(res.data.length < jumpLength) setHasMore(false);
                        let c = [...posts, ...skeletons]
                        c.splice(c.length - skeletons.length, skeletons.length)
                    setPosts(c.concat(res.data))
                    setLoading(false)
                })
            }
    }, [startPos])

    useFocusEffect(
        React.useCallback(() => {
            const task = InteractionManager.runAfterInteractions(() => {
                updatePosts(changedPostIds, changedCommentIds, posts, feed, setPosts)
            });
            return () => task.cancel();
        }, [changedPostIds, changedCommentIds])
    )

    const renderItem = ({ item }) => (
        <ContentManager post={item} route={route} navigation={navigation} myUserInfo={myUserInfo} />
    );

    return (
        <View style={{flex: 1}}>
            <FlatList
                ref={route.params?.MainFeedRef || route.params?.SubscriptionsFeedRef || undefined}
                style={{flex: 1}}
                data={posts}
                extraData={myUserInfo}
                renderItem={renderItem}
                onEndReached={() => {if(hasMore && !loading) {setStartPos(p => p + jumpLength); console.log('onEndTriggered')}}}
                keyExtractor={post => post.skeleton ? 'skelton_' + post.index : 'post_' + post.id}
                ListEmptyComponent={<Text>Nothing is here</Text>}
            />
        </View>
    )
}

function mapStateToProps(state){
    return {
        changedPostIds : state.changedPosts.posts,
        changedCommentIds : state.changedPosts.comments,
        myUserInfo : state.user.userInfo
    }
}

export default connect(mapStateToProps)(Feed)
