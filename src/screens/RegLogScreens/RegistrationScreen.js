import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { useActions } from '../../../src/hooks_and_functions/useActions'
import mainInstance from '../../hooks_and_functions/mainInstance'
import { RegLogStyles } from './RegLogStyles'

const RegistrationScreen = ({navigation}) => {
    const { changeUserAuthAccess, changeUserAuthRefresh, getMe } = useActions()

    const [email, setEmail] = React.useState('')
    const [username, setUsername] = React.useState('')

    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')

    const [emailError, setEmailErrorText] = React.useState('')
    const [usernameError, setUsernameErrorText] = React.useState('')
    const [passwordError, setPasswordErrorText] = React.useState('')
    const [confirmPasswordError, setConfirmPasswordErrorText] = React.useState('')
    const [generalError, setGeneralErrorText] = React.useState('')

    const register = () => {
        if(password === confirmPassword)
            mainInstance.post('/token/login/', {
                password, username, email
            },{
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            })
            .then(res => {
                mainInstance.post('/token/login/', {
                    password, email
                },{
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json'
                }).then(res =>{
                    changeUserAuthAccess(res.data.access)
                    changeUserAuthRefresh(res.data.refresh)
                    getMe()
                })
            })
            .catch(response => {
                const res = JSON.parse(response.request.response)
                if(res.detail) {
                    setEmailErrorText('Error')
                    setUsernameErrorText('Error')
                    setPasswordErrorText('Error')
                    setGeneralErrorText('Something went wrong')
                }
                res.email ? setEmailErrorText(res.email) : undefined;
                res.password ? setPasswordErrorText(res.password) : undefined;
            })
        else {
            setPasswordErrorText('Do not match')
            setConfirmPasswordErrorText('Do not match')
        }
    }
    return (
        <>
            <View style={RegLogStyles.container}>

                <Text style={RegLogStyles.title}>Sign Up to Shetter</Text>

                <>
                    <Text style={[RegLogStyles.label, emailError ? RegLogStyles.labelError : {}]}>Your email</Text>
                    <TextInput
                        maxLength={31}
                        style={[RegLogStyles.input, emailError ? RegLogStyles.inputError : {}]}
                        onChangeText={text => {setEmail(text); setGeneralErrorText(''); setEmailErrorText('')}}
                        value={email}
                        onSubmitEditing={register}
                    />
                    <Text style={RegLogStyles.errorText}>{emailError}</Text>
                </>

                <>
                    <Text style={[RegLogStyles.label, usernameError ? RegLogStyles.labelError : {}]}>Username</Text>
                    <TextInput
                        maxLength={15}
                        style={[RegLogStyles.input, usernameError ? RegLogStyles.inputError : {}]}
                        onChangeText={text => {setUsername(text); setGeneralErrorText(''); setUsernameErrorText('')}}
                        value={username}
                        onSubmitEditing={register}
                    />
                    <Text style={RegLogStyles.errorText}>{usernameError}</Text>
                </>
                
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                    <View style={RegLogStyles.fieldContainerShort}>
                        <Text style={[RegLogStyles.label, passwordError ? RegLogStyles.labelError : {}]}>Password</Text>
                        <TextInput
                            maxLength={15}
                            style={[RegLogStyles.input, passwordError ? RegLogStyles.inputError : {}]}
                            onChangeText={text => {setPassword(text); setGeneralErrorText(''); setPasswordErrorText('')}}
                            value={password}
                            onSubmitEditing={register}
                        />
                        <Text style={RegLogStyles.errorText}>{passwordError}</Text>
                    </View>

                    <View style={RegLogStyles.fieldContainerShort}>
                        <Text style={[RegLogStyles.label, confirmPasswordError ? RegLogStyles.labelError : {}]}>Confirm password</Text>
                        <TextInput
                            maxLength={15}
                            style={[RegLogStyles.input, confirmPasswordError ? RegLogStyles.inputError : {}]}
                            onChangeText={text => {setConfirmPassword(text); setGeneralErrorText(''); setConfirmPasswordErrorText('')}}
                            value={confirmPassword}
                            onSubmitEditing={register}
                        />
                        <Text style={RegLogStyles.errorText}>{confirmPasswordError}</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity 
                        style={RegLogStyles.button}
                        onPress={register}
                    >
                        <Text style={RegLogStyles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                    <Text style={{color: '#E12222', maxWidth: '33%'}}>{generalError}</Text>
                </View>

            </View>
            <Image
                style={RegLogStyles.gavno}
                source={require('../../../assets/Gavno.png')}
            />
            <View style={[RegLogStyles.registerTextView, RegLogStyles.loginTextView]}>
                <Text style={{fontSize: 18}}>Already have have an account ? </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={RegLogStyles.registerText}>Log In</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default RegistrationScreen
