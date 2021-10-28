import React from 'react'
import { View, Dimensions } from 'react-native'
import { PostSkeletonStyles } from './PostSkeletonStyles';
const windowWidth = Dimensions.get('window').width;

const PostSkeleton = ({hasImage}) => {
    const imageOrText = () => {
        if(hasImage > 0.7)
            return (
                <View style={PostSkeletonStyles.image}/>
            )
        if(hasImage > 0.5 && hasImage < 0.7) 
            return (
                <View style={[PostSkeletonStyles.skeleton, {width: 60, marginBottom: 6}]}/>
            )
        else return (
            <>
                <View style={[PostSkeletonStyles.skeleton, {width: 60, marginBottom: 6}]}/>
                <View style={[PostSkeletonStyles.skeleton, {width: 160, marginBottom: 6}]}/>
            </>
        )
    }
    return (
        <View style={PostSkeletonStyles.postContainer}>
            <View style={{width: 40, height: 40, borderRadius: 20, backgroundColor: 'lightgray', marginRight: 8}}/>
            <View style={{width: windowWidth - 110}}>
                <View style={[PostSkeletonStyles.skeleton, {width: 70, marginBottom: 10}]}/>
                <View style={[PostSkeletonStyles.skeleton, {width: 150, marginBottom: 10}]}/>
                {imageOrText()}
                <View style={{flexDirection: 'row'}}>
                    <View style={PostSkeletonStyles.buttons}/>
                    <View style={PostSkeletonStyles.buttons}/>
                    <View style={PostSkeletonStyles.buttons}/>
                </View>
            </View>
        </View>
    )
}

export default PostSkeleton
