import React from 'react'
import { View, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native'
import mainInstance from '../../../api/mainInstance'
import { useActions } from '../../../hooks/useActions';
const windowWidth = Dimensions.get('window').width;

const AddComment = ({postId, parentId, isPost}) => {
    const { addPostId, addCommentId } = useActions()
    const [comment, setComment] = React.useState('')
    const createPost = () => {
        if(comment){
            const formData = new FormData();
            formData.append('content', comment);
            formData.append('post', postId)
            formData.append('parent', parentId)
            mainInstance.post('/api/v1/comments/', formData)
            .then(() => {
                setComment('')
                isPost ? addPostId(postId) : addCommentId(postId)
            })
            .catch(err => { console.log(err) })
        } 
    }
    return (
        <View style={{width: '100%', position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 100, backgroundColor: '#fff', borderTopWidth: 1, borderColor: '#242426'}}>
            <View style={{flexDirection: 'row', marginLeft: 8, marginRight: 8, marginTop: 8, marginBottom: 8, borderBottomWidth: 1, borderColor: '#242426', width: windowWidth - 16}}>
                <TextInput
                    style={{width: windowWidth - 40, height: 24, paddingLeft: 3}}
                    placeholder='Post your reply'
                    onChangeText={setComment}
                    value={comment}
                    maxLength={200}
                />
                <TouchableOpacity
                    style={{width: 40, height: 24, justifyContent: 'center'}}
                    onPress={createPost}
                >
                    <Image
                        style={{width: 20, height: 18}}
                        source={require('../../../../assets/addComment.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddComment
