import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import AuthorBlock from '../post-component/AuthorBlock/AuthorBlock'
import { PostStyles } from './PostsStyles'
import ImageContainer from '../post-component/ImageContainer/ImageContainer'
import {  Dimensions  } from 'react-native'
import ButtonsBlock from '../post-component/ButtonsBlock/ButtonsBlock'
const windowWidth = Dimensions.get('window').width;

const Post = ({post, routeUsername, navigation, authorInfo, isMyPost}) => {
    return (
            <View style={PostStyles.postContainer}>
                <TouchableOpacity 
                    style={PostStyles.avatarContainer}
                    onPress={() => {
                        if(routeUsername !== authorInfo.username){
                            navigation.push('Profile', {username : authorInfo.username})
                        }
                    }}
                >
                    <Image
                        style={PostStyles.avatar}
                        source={{uri : authorInfo.profile_photo}}
                        defaultSource={require('../../../assets/defaultAvatar.jpg')}
                    />
                </TouchableOpacity >
                <View style={{width: windowWidth - 110}}>
                    <AuthorBlock firstName={authorInfo.first_name} lastName={authorInfo.last_name}
                        username={authorInfo.username} datePosted={post.pub_date}
                        navigation={navigation} routeUsername={routeUsername}
                    />
                    <View style={{flexDirection:'row', marginBottom: 4}}>
                        <Text style={{flex: 1, flexWrap: 'wrap', color: '#242426'}}>
                            {post.content}
                        </Text>
                    </View>
                    <ImageContainer images={post.images} navigation={navigation}/>
                    <ButtonsBlock id={post.id} isPost={post.parent === undefined}
                    commentsCount={post.comments_count} totalLikes={post.total_likes} isLiked_={post.is_fan}
                    IsBookmarked={post.is_booked} isMyPost={isMyPost}
                    navigation={navigation} postId={post.post}/>
                </View>
            </View>
    )
}

export default React.memo(Post)