import React from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import { connect } from 'react-redux'
import EditableImageContainer from '../../components/EditableImageContainer/EditableImageContainer'
import { CreatePostStyles } from './CreatePostScreenStyles'
import mainInstance from '../../hooks_and_functions/mainInstance'
import { useActions } from '../../hooks_and_functions/useActions'
import CreatePostScreenHeader__PostButton from '../../components/Headers/CreatePostScreenHeader/CreatePostScreenHeader__PostButton'

const CreatePostScreen = ({me, route, navigation}) => {
    const [content, setContent] = React.useState('')
    const [images, setImages] = React.useState([])
    const [deletedImages, setDeletedImages] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [contentError, setContentError] = React.useState('')
    const inputRef = React.useRef()
    const { addPostId, addCommentId } = useActions()
    React.useEffect(() => {
        if(route.params?.id){
            let url = route.params?.isPost ? '/api/v1/posts/' : '/api/v1/comments/'
            mainInstance.get(url + route.params?.id).then(res => {
                setContent(res.data.content);
                setImages(res.data.images)
            })
        }
        inputRef.current?.focus()
    }, [])
    
    React.useEffect(() => {
        navigation.setOptions({
            headerRight : () => (<CreatePostScreenHeader__PostButton onPost={route.params?.id ? editPost : createPost}/>)
        })
    }, [content, images])

    const createPost = () => {
        if(!loading)
            if(content !== ''){
                setLoading(true)
                const formData = new FormData();
                formData.append('content', content);
                images.forEach(image => {
                    let localUri = image.uri;
                    let filename = localUri.split('/').pop();
                    let match = /\.(\w+)$/.exec(filename);
                    let type = match ? `image/${match[1]}` : `image`;
                    formData.append('image', { uri: localUri, name: filename, type });
                })
                mainInstance.post('/api/v1/posts/', formData)
                .then(() => {
                    addPostId(0)
                    navigation.goBack()
                })
                .catch(err => { 
                    const res = JSON.parse(err.request.response);
                    console.log(res)
                    if(res.detail === 'Too big images uploaded. Maximum size is 2 MB'){
                        setContentError(res.detail)
                        return;
                    }
                })
            }else {
                setContentError('Posts must have content')
            }
    }

    const editPost = () => {
        if(!loading)
            if(content !== ''){
                setLoading(true)
                const formData = new FormData();
                formData.append('content', content);
                let url;
                if(route.params?.isPost) {
                    url = '/api/v1/posts/';
                    images.forEach(image => {
                        if(image.uri){
                            let localUri = image.uri;
                            let filename = localUri.split('/').pop();
                            let match = /\.(\w+)$/.exec(filename);
                            let type = match ? `image/${match[1]}` : `image`;
                            formData.append('image', { uri: localUri, name: filename, type });
                        }
                    })
                    deletedImages.forEach(deletedImageId => {
                        formData.append('deleted', deletedImageId);
                    })
                }
                else{
                    url = '/api/v1/comments/';
                }
                mainInstance.put(url + route.params?.id, formData)
                .then(() => {
                    if(route.params?.isPost) addPostId(route.params?.id);
                    else addCommentId(route.params?.id)
                    navigation.goBack()
                })
                .catch(err => { 
                    const res = JSON.parse(err.request.response);
                    console.log(res)
                    if(res.detail === 'Too big images uploaded. Maximum size is 2 MB'){
                        setContentError(res.detail)
                        return;
                    }else setContentError(res.detail)
                })
            }else {
                setContentError('Posts must have content')
            }
    }

    return (
        <>
            <View style={CreatePostStyles.postContainer}>
                <View style={CreatePostStyles.avatarContainer}>
                    <Image
                        style={CreatePostStyles.avatar}
                        source={{uri: me.profile_photo}}
                        defaultSource={require('../../../assets/defaultAvatar.jpg')}
                    />
                </View>
                <View>
                    <TextInput
                        ref={inputRef}
                        maxLength={400}
                        style={[CreatePostStyles.textInput, contentError && {borderColor: 'red'}]}
                        onChangeText={(text) => {setContentError(''); setContent(text)}}
                        defaultValue={content}
                        placeholder={'What\'s up'}
                        onSubmitEditing={route.params?.id ? () => editPost() : () => createPost()}
                    />
                    <Text style={{color: 'red'}}>
                        {contentError}
                    </Text>
                </View>
            </View>
            {(route.params?.isPost === undefined || route.params?.isPost) && <EditableImageContainer setDeletedImages={(c) => setDeletedImages(c)} contentError={contentError} images={images} setImages={(c) => setImages(c)} navigation={navigation}/>}
        </>
    )
}

function mapStateToProps(state) {
    return {
        me : state.user.userInfo
    }
}
export default connect(mapStateToProps)(CreatePostScreen)
