import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import { useActions } from '../../hooks/useActions'
import mainInstance from '../../api/mainInstance'
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
   
    const validateEmail = () => {
        let reg = /\S+@\S+\.\S+/;
        if (reg.test(email) === false) setEmailErrorText('Incorrect email')
    }

    const validatePassword = (text) => {
        if (text.length < 8) setPasswordErrorText('Password is too short')
    }

    const usernameRef = React.useRef()
    const passwordRef = React.useRef()
    const confirmPasswordRef = React.useRef()

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
            <ScrollView style={{flex: 1}}>
                <View style={RegLogStyles.container}>

                    <Text style={RegLogStyles.title}>Sign Up to Shetter</Text>

                    <Text style={[RegLogStyles.label, emailError ? RegLogStyles.labelError : {}]}>Your email</Text>
                    <TextInput
                        maxLength={31}
                        style={[RegLogStyles.input, emailError ? RegLogStyles.inputError : {}]}
                        onChangeText={text => {setEmail(text); setGeneralErrorText(''); setEmailErrorText('')}}
                        value={email}
                        onEndEditing={validateEmail}
                        onSubmitEditing={() => usernameRef.current.focus()}
                    />
                    <Text style={RegLogStyles.errorText}>{emailError}</Text>

                    <Text style={[RegLogStyles.label, usernameError ? RegLogStyles.labelError : {}]}>Username</Text>
                    <TextInput
                        ref={usernameRef}
                        maxLength={15}
                        style={[RegLogStyles.input, usernameError ? RegLogStyles.inputError : {}]}
                        onChangeText={text => {setUsername(text); setGeneralErrorText(''); setUsernameErrorText('')}}
                        value={username}
                        onSubmitEditing={() => passwordRef.current.focus()}
                    />
                    <Text style={RegLogStyles.errorText}>{usernameError}</Text>
                                      
                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                        <View style={RegLogStyles.fieldContainerShort}>
                            <Text style={[RegLogStyles.label, passwordError ? RegLogStyles.labelError : {}]}>Password</Text>
                            <TextInput
                                ref={passwordRef}
                                maxLength={15}
                                style={[RegLogStyles.input, passwordError ? RegLogStyles.inputError : {}]}
                                onChangeText={text => {setPassword(text); setGeneralErrorText(''); setPasswordErrorText('')}}
                                value={password}
                                onEndEditing={validatePassword}
                                onSubmitEditing={() => confirmPasswordRef.current.focus()}
                            />
                            <Text style={RegLogStyles.errorText}>{passwordError}</Text>
                        </View>

                        <View style={RegLogStyles.fieldContainerShort}>
                            <Text style={[RegLogStyles.label, confirmPasswordError ? RegLogStyles.labelError : {}]}>Confirm password</Text>
                            <TextInput
                                ref={confirmPasswordRef}
                                maxLength={15}
                                style={[RegLogStyles.input, confirmPasswordError ? RegLogStyles.inputError : {}]}
                                onChangeText={text => {setConfirmPassword(text); setGeneralErrorText(''); setConfirmPasswordErrorText('')}}
                                value={confirmPassword}
                                onEndEditing={validatePassword}
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

                <View style={[RegLogStyles.registerTextView, RegLogStyles.loginTextView]}>
                    <Text style={{fontSize: 18}}>Already have have an account ? </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={[RegLogStyles.registerText, RegLogStyles.loginText]}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default RegistrationScreen


/**
 * 

                <Image
                    style={RegLogStyles.gavno}
                    source={require('../../../assets/Gavno.png')}
                />
 */