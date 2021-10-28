import React from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import mainInstance from '../../hooks_and_functions/mainInstance'
import { RegLogStyles } from '../RegLogScreens/RegLogStyles'
import { ProfileStyles } from '../../components/Profile/ProfileStyles'
import { useActions } from '../../hooks_and_functions/useActions'

const SettingsScreen = ({navigation, myData}) => {
    const { clearHelper, setChangeSettings, getMe } = useActions()
    const [firstName, setFirstName] = React.useState(myData.first_name)
    const [lastName, setLastName] = React.useState(myData.last_name)
    const [bio, setBio] = React.useState(myData.bio)
    const [profilePhoto, setProfilePhoto] = React.useState(myData.profile_photo)

    React.useEffect(() => {
        mainInstance.get('/auth/users/me')
        .then(res => {
            let me = res.data;
            setFirstName(me.first_name)
            setLastName(me.last_name)
            setBio(me.bio)
            setProfilePhoto(me.profile_photo)
        })
        .catch(err => console.log(err))
        return () => {
            clearHelper()
        }
    }, [])

    React.useEffect(() => {
        setChangeSettings( () => changeSettings() )
    }, [firstName, lastName, bio, profilePhoto])

    const changeSettings = () => {
        const changeText = async () => {
            mainInstance.put('/api/v1/user_data/', {
                'first_name': firstName,
                'last_name': lastName,
                'bio': bio
            })
            .then(() => {navigation.goBack()})
            .catch(response => {navigation.goBack()})
            .finally(() => getMe())
        }
        const changePicture = async () => {
            if(profilePhoto.uri){
                const formData = new FormData();
                let localUri = profilePhoto.uri;
                let filename = localUri.split('/').pop();
                let match = /\.(\w+)$/.exec(filename);
                let type = match ? `image/${match[1]}` : `image`;
                formData.append('image', { uri: localUri, name: filename, type });
                mainInstance.post('/api/v1/profile_photo/', formData, {headers :
                    {
                        'Content-Type' : 'multipart/form-data'
                    }})
                .then(() => {navigation.goBack()})
                .catch(response => {navigation.goBack()})
            }
        }
        changeText()
        changePicture()
    }

    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={64}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
            <ScrollView style={{flex: 1}}>

                <Text style={RegLogStyles.title}>Settings</Text>
                
                <View style={ProfileStyles.Profile__background}>
                    <TouchableOpacity
                        style={ProfileStyles.Profile__background__avatarContainer}
                        onPress={() => navigation.push('SelectImages', {setImages : (c) => setProfilePhoto(c), maxSelection : 1})}
                    >
                        <Image
                            style={ProfileStyles.Profile__background__avatar}
                            source={profilePhoto.uri ? {uri: profilePhoto.uri} : {uri : profilePhoto}}
                            defaultSource={require('../../../assets/defaultAvatar.jpg')}
                        />
                        <Image
                            style={{width: 56, height: 56, marginLeft: 32, marginTop: 32, position: 'absolute', zIndex: 5}}
                            source={require('../../../assets/changePhoto.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: 120, padding: 16}}>
                    <>
                        <Text style={RegLogStyles.label}>First name</Text>
                        <TextInput
                            maxLength={15}
                            style={RegLogStyles.input}
                            onChangeText={setFirstName}
                            value={firstName}
                            onSubmitEditing={changeSettings}
                        />
                    </>

                    <>
                        <Text style={RegLogStyles.label}>Last name</Text>
                        <TextInput
                            maxLength={15}
                            style={RegLogStyles.input}
                            onChangeText={setLastName}
                            value={lastName}
                            onSubmitEditing={changeSettings}
                        />
                    </>

                    <>
                        <Text style={RegLogStyles.label}>Bio</Text>
                        
                        <TextInput
                            multiline = {true}
                            numberOfLines = {4}
                            maxLength={200}
                            style={[RegLogStyles.input, {height: 60, textAlignVertical: 'top'}]}
                            onChangeText={setBio}
                            value={bio}
                            onSubmitEditing={changeSettings}
                        />
                    </>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}

function mapStateToProps(state) {
    return {
        myData : state.user.userInfo
    }
}

export default connect(mapStateToProps)(SettingsScreen)
