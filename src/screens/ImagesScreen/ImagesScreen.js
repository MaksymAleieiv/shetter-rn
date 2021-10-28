import React from 'react'
import { View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const ImagesScreen = ({route}) => {
    const routeImages = route.params.images
    const startingIndex = route.params.index
    let images = [];
    routeImages.forEach((image) => {
        images.push({url : image.image})
    })
    return (
        <View style={{flex: 1}}>
            <ImageViewer imageUrls={images} index={startingIndex} backgroundColor={'white'}/>
        </View>
    )
}


export default ImagesScreen
