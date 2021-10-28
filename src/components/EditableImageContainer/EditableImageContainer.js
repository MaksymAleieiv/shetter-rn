import React from 'react'
import { View, ScrollView, Image, TouchableOpacity } from 'react-native'
import { EditableImageContainerStyles } from './EditableImageContainerStyles'

const EditableImageContainer = ({images, navigation, setImages, setDeletedImages, contentError}) => {
    const deleteImage = (index) => {
        if(!images[index].uri){
            setDeletedImages(p => [...p, images[index].id])
        }
        let imagesTemp = [...images];
        imagesTemp.splice(index, 1)
        setImages(imagesTemp)
    }
    const AddImageButton = () => {
        return (
            <TouchableOpacity
                    style={[EditableImageContainerStyles.addImage, contentError && {borderColor: 'red'}]}
                    onPress={() => {
                        navigation.push('SelectImages', {setImages : (c) => setImages(c), maxSelection : 6 - images.length})
                    }}
                >
                    <Image
                        style={EditableImageContainerStyles.addImageIcon}
                        source={require('../../../assets/changePhoto.png')}
                    />
                </TouchableOpacity>
        )
    }
    return (
        <ScrollView horizontal={true} style={EditableImageContainerStyles.container} showsHorizontalScrollIndicator={false}>
            {images.length < 6 ? 
                <AddImageButton/>
            : undefined
            }
            {images.map((image, index) => (
                <View key={'image_in_post_edit_' + (image.id * Math.random() || index)} style={[EditableImageContainerStyles.imageContainer, contentError && {borderColor: 'red'}]}>
                    <Image 
                        style={[(index === 0 && images.length === 6) ? {marginLeft: 16} : {}, EditableImageContainerStyles.image]}
                        source={image.uri ? {uri: image.uri} : {uri: image.image}}
                    />
                    <TouchableOpacity
                        style={EditableImageContainerStyles.deleteImageButtonWrapper}
                        onPress={() => {deleteImage(index)}}
                        >
                        <Image
                            style={EditableImageContainerStyles.deleteImageButton}
                            source={require('../../../assets/Close.png')}
                        />
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    )
}


export default EditableImageContainer
