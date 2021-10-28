import React from 'react'
import { View, Text, Image } from 'react-native'
import getName from '../../hooks_and_functions/getName'
import { AuthorBlockStyles } from '../post-component/AuthorBlock/AuthorBlockStyles'
import { ProfileStyles } from '../Profile/ProfileStyles'
import { DrawerSidebarStyles } from './DrawerSidebarStyles'

const DrawerSidebar__Profile = ({myData}) => {
    return (
        <View style={DrawerSidebarStyles.profileContainer}>
            <Image
                style={DrawerSidebarStyles.profilePhoto}
                source={{uri: myData.profile_photo}}
                defaultSource={require('../../../assets/defaultAvatar.jpg')}
            />
            <View style={{marginLeft: 16, marginTop: 16}}>
                <Text style={[AuthorBlockStyles.username, {fontSize: 18}]}>{getName(myData.username, myData.first_name, myData.last_name)}</Text>
                <Text style={[AuthorBlockStyles.tag, {fontSize: 14}]}>@{myData.username}</Text>
            </View>
            <View style={ProfileStyles.Profile__Info__FollowedBlock}>
                <Text style={[ProfileStyles.bold, {fontSize: 16}]}>{myData.following_count}</Text>
                <Text style={[ProfileStyles.cf, {fontSize: 16}]}> Following</Text>
                <Text style={[ProfileStyles.bold, ProfileStyles.ml16, {fontSize: 16}]}>{myData.followers_count}</Text>
                <Text style={[ProfileStyles.cf, {fontSize: 16}]}> Followers</Text>
            </View>
        </View>
    )
}

export default DrawerSidebar__Profile
