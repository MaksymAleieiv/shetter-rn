import React from 'react'
import { View, Image, TouchableOpacity  } from 'react-native'
import { imageContainerStyles, styles } from './ImageContainerStyles'

const ImageContainer = ({images, navigation}) => {
    
    return (
        <View style={[imageContainerStyles.imageContainer, images.length > 0 ? imageContainerStyles.container : {}]}>
            {images.map((image, index) => (
                <TouchableOpacity
                    key={'image_in_post_' + image.id }
                    style={[styles[images.length].main, styles[images.length].individual[index]]}
                    onPress={() => {
                        navigation.push('ImagesScreen', {images, index})
                    }}
                >
                    <Image 
                        style={[styles[images.length].main, styles[images.length].individual[index]]}
                        source={{uri: image.image}}
                    />
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default ImageContainer
