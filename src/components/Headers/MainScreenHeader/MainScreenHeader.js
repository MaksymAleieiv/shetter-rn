import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { MainScreenHeaderStyles } from './MainScreenHeaderStyles'

const MainScreenHeader = ({profilePhoto, navigation, MainFeedRef, SubscriptionsFeedRef}) => {
    return (
        <View style={MainScreenHeaderStyles.header}>
            <TouchableOpacity style={MainScreenHeaderStyles.profilePictureContainer} onPress={() => navigation.openDrawer()}> 
                <Image
                    style={MainScreenHeaderStyles.profilePicture}
                    source={{uri : profilePhoto}}
                    defaultSource={require('../../../../assets/defaultAvatar.jpg')}
                />
            </TouchableOpacity>
            <View style={MainScreenHeaderStyles.logoContainer}>
                <TouchableOpacity
                    onPress={() => {
                        if(MainFeedRef) MainFeedRef.current.scrollToOffset({offset: 0})
                        if(SubscriptionsFeedRef) SubscriptionsFeedRef.current.scrollToOffset({offset: 0})
                    }}
                >
                    <Image
                        style={MainScreenHeaderStyles.logo}
                        source={require('../../../../assets/Logo.png')}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{width: 32, height: 32}} onPress={() => navigation.navigate('CreatePost')}>
                <Image
                    style={MainScreenHeaderStyles.createPost}
                    source={require('../../../../assets/Edit.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

function mapStateToProps(state) {
    return {
        profilePhoto : state.user.userInfo.profile_photo
    }
}

export default connect(mapStateToProps)(MainScreenHeader)
