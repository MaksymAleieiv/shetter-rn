import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import mainInstance from '../../../hooks_and_functions/mainInstance'
import { useActions } from '../../../hooks_and_functions/useActions'
import { ButtonsBlockStyles } from './ButtonsBlockStyles'

const ButtonsBlock = ({id, isPost, commentsCount, totalLikes, isLiked_, IsBookmarked, isMyPost, navigation, postId}) => {
    const { addPostId, addCommentId } = useActions()
    const [isLiked, setIsLiked] = React.useState(isLiked_)
    const [likesCount, setLikesCount] = React.useState(totalLikes)
    const [isBookmarked, setIsBookmarked] = React.useState(IsBookmarked)

    React.useEffect(() => {
        setIsLiked(isLiked_);
        setLikesCount(totalLikes);
        setIsBookmarked(IsBookmarked)
    }, [isLiked_, totalLikes, IsBookmarked])

    const likeThis = () => {
        setIsLiked(p => !p)
        if(isLiked) setLikesCount(p => p-1)
        else setLikesCount(p => p+1)
        let url;
        if(isPost){
            addPostId(id)
            url = 'api/v1/posts/'
        }
        else{
            addCommentId(id)
            url = 'api/v1/comments/'
        }
        mainInstance.post(url + id + '/like/')
        .catch(err => console.log(err))
    }

    const bookmarkThis = () => {
        setIsBookmarked(p => !p)
        let url;
        if(isPost){
            addPostId(id)
            url = 'api/v1/posts/'
        }
        else{
            addCommentId(id)
            url = 'api/v1/comments/'
        }
        mainInstance.post(url + id + '/bookmark/')
        .catch(err => console.log(err))
    }

    return (
        <View style={ButtonsBlockStyles.block}>
            <View style={ButtonsBlockStyles.button}>
                <Image 
                    style={ButtonsBlockStyles.buttonImage}
                    source={require('../../../../assets/Comment.png')}
                />
                <Text style={ButtonsBlockStyles.buttonText}>{commentsCount.toString()}</Text>
            </View>
            
            <TouchableOpacity
                onPress={likeThis}>
                <View style={ButtonsBlockStyles.button}>
                    <Image 
                        style={[ButtonsBlockStyles.buttonImage, {marginTop: 4}]}
                        source={!isLiked ? require('../../../../assets/Like.png') : require('../../../../assets/LikeActive.png')}
                    />
                    <Text style={ButtonsBlockStyles.buttonText}>{likesCount.toString()}</Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={bookmarkThis}>
                <View style={ButtonsBlockStyles.button}>
                    <Image 
                        style={[ButtonsBlockStyles.buttonImage, {marginTop: 4}]}
                        source={!isBookmarked ? require('../../../../assets/Bookmark.png') : require('../../../../assets/BookmarkActive.png')}
                    />
                </View>
            </TouchableOpacity>

            {isMyPost ? 
                <TouchableOpacity
                    onPress={() => {
                        isPost ? addPostId(id) : addCommentId(id)
                        navigation.navigate('CreatePost', {id, isPost})
                    }}
                >
                    <View style={ButtonsBlockStyles.button}>
                        <Image 
                            style={[ButtonsBlockStyles.buttonImage, {marginTop: 4}]}
                            source={require('../../../../assets/Edit.png')}
                        />
                    </View>
                </TouchableOpacity>
            : undefined}
        </View>
    )
}

export default ButtonsBlock