import React from 'react'
import { View } from 'react-native'
import { ProfileSkeletonStyles } from './ProfileSkeletonStyles'

const ProfileSkeleton = () => {
    return (
        <View style={ProfileSkeletonStyles.Profile__container}>
            <View style={ProfileSkeletonStyles.Profile__background}>
                <View style={ProfileSkeletonStyles.Profile__background__avatarContainer}/>
            </View>
            <View style={ProfileSkeletonStyles.Profile__Info}>
                <View style={ProfileSkeletonStyles.Profile__Info__Buttons}>
                    <View style={ProfileSkeletonStyles.Profile__Info__Button}/>
                    <View style={ProfileSkeletonStyles.Profile__Info__Button}/>
                    <View style={ProfileSkeletonStyles.Profile__Info__Button}/>
                </View>
                <View style={ProfileSkeletonStyles.Profile__Info__AuthorBlock}/>
                <View style={ProfileSkeletonStyles.Profile__Info__FollowedBlock}>
                    <View style={[ProfileSkeletonStyles.Profile__Info__Button, {width: 80}]}/>
                    <View style={[ProfileSkeletonStyles.Profile__Info__Button, {marginLeft: 10, width: 80}]}/>
                </View>
            </View>
        </View>
    )
}

export default ProfileSkeleton
