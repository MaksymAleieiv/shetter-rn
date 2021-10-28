import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ProfileStyles } from './ProfileStyles'
import { AuthorBlockStyles } from '../post-component/AuthorBlock/AuthorBlockStyles'
import ProfileSkeleton from '../Skeletons/ProfileSkeleton/ProfileSkeleton'
import getName from '../../hooks_and_functions/getName'
import mainInstance from '../../hooks_and_functions/mainInstance'

const Profile = ({userData}) => {
    const [isSubscribed, setSubscribed] = React.useState(userData.is_subscribed)
    const Subscribe = () => {
        setSubscribed(p => !p)
        mainInstance.post('api/v1/subscribe/' + userData.username)
        .catch(err => console.log(err))
    }
    if(userData.skeleton)
        return (<ProfileSkeleton/>)
    return (
        <>
            <View style={ProfileStyles.Profile__background}>
                <View style={ProfileStyles.Profile__background__avatarContainer}>
                    <Image
                        style={ProfileStyles.Profile__background__avatar}
                        source={{uri: userData.profile_photo}}
                        defaultSource={require('../../../assets/defaultAvatar.jpg')}
                        fadeDuration={0}
                    />
                </View>
            </View>
            <View style={ProfileStyles.Profile__Info}>
                <View style={ProfileStyles.Profile__Info__Buttons}>
                    <TouchableOpacity onPress={Subscribe} style={[ProfileStyles.Profile__Info__Button, isSubscribed ? ProfileStyles.Profile__Info__ButtonFollowed : ProfileStyles.Profile__Info__ButtonNotFollowed]}>
                        <Text style={isSubscribed ? ProfileStyles.Profile__Info__ButtonFollowedText : ProfileStyles.Profile__Info__ButtonNotFollowedText}>{isSubscribed ? 'Unfollow' : 'Follow'}</Text> 
                    </TouchableOpacity>
                </View>
                <View style={ProfileStyles.Profile__Info__AuthorBlock}>
                    <View style={AuthorBlockStyles.authorBlock}>
                        <Text style={ProfileStyles.Profile__Info__name}>
                            {getName(userData.username, userData.first_name, userData.last_name)}
                        </Text>
                        <Text style={ProfileStyles.Profile__Info__tag}>
                            @{userData.username}
                        </Text>
                    </View>
                </View>
                <View style={ProfileStyles.Profile__Info__FollowedBlock}>
                    <Text style={ProfileStyles.bold}>{userData.following_count}</Text>
                    <Text style={ProfileStyles.cf}> Following</Text>
                    <Text style={[ProfileStyles.bold, ProfileStyles.ml16]}>{userData.followers_count}</Text>
                    <Text style={ProfileStyles.cf}> Followers</Text>
                </View>
                <View style={{marginBottom: 8, marginLeft: 16, marginTop: 8}}>
                    <Text style={{color: '#242426', lineHeight: 20, fontSize: 15}}>{userData.bio}</Text>
                </View>
            </View>
        </>
    )
}

export default Profile
