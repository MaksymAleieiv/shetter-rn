import React from 'react'
import { View } from 'react-native'
import { HeaderSkeletonStyles } from './HeaderSkeletonStyles'

const HeaderSkeleton = () => {
    return (
        <View style={HeaderSkeletonStyles.header__containerSkeleton}>
            {Array(3).fill({}).map((_, index) => (
                <View style={HeaderSkeletonStyles.header__itemSkeleton} key={'header_skeleton_' + index}/>
            ))}
        </View>
    )
}

export default HeaderSkeleton
