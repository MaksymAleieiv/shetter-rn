import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import { useActions } from '../../hooks/useActions'
import mainInstance from '../../api/mainInstance'
import { RegLogStyles } from './RegLogStyles'

const LoginScreen = ({navigation}) => {
    const { changeUserAuthAccess, changeUserAuthRefresh, getMe } = useActions()

    const [email, setEmail] = React.useState('pisodinah@gmail.com')
    const [password, setPassword] = React.useState('testPassword')

    const [emailError, setEmailErrorText] = React.useState('')
    const [passwordError, setPasswordErrorText] = React.useState('')
    const [generalError, setGeneralErrorText] = React.useState('')

    const login = () => {
        mainInstance.post('/token/login/', {
            password,email
        },{
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        })
        .then(res => {
            console.log(res)
            changeUserAuthAccess(res.data.access)
            changeUserAuthRefresh(res.data.refresh)
            getMe()
        })
        .catch(response => {
            const res = JSON.parse(response.request.response)
            if(res.detail) {
                setEmailErrorText('Error')
                setPasswordErrorText('Error')
                setGeneralErrorText('Wrong Email or Password')
            }
        })
    }

    const validateEmail = () => {
        let reg = /\S+@\S+\.\S+/;
        if (reg.test(email) === false) setEmailErrorText('Incorrect email')
    }

    const passwordRef = React.useRef()

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{flex: 1}}
        >
            <View style={{flex: 1}}>
                <View style={RegLogStyles.container}>

                    <Text style={RegLogStyles.title}>Log In to Shetter</Text>

                    <>
                        <Text style={[RegLogStyles.label, emailError ? RegLogStyles.labelError : {}]}>Your email</Text>
                        <TextInput
                            maxLength={31}
                            style={[RegLogStyles.input, emailError ? RegLogStyles.inputError : {}]}
                            onChangeText={text => {setGeneralErrorText(''); setEmailErrorText(''); setEmail(text)}}
                            value={email}
                            onEndEditing={validateEmail}
                            onSubmitEditing={() => passwordRef.current.focus()}
                        />
                        <Text style={RegLogStyles.errorText}>{emailError}</Text>
                    </>

                    <>
                        <Text style={[RegLogStyles.label, passwordError ? RegLogStyles.labelError : {}]}>Your password</Text>
                        <TextInput
                            secureTextEntry={true}
                            ref={passwordRef}
                            maxLength={15}
                            style={[RegLogStyles.input, passwordError ? RegLogStyles.inputError : {}]}
                            onChangeText={text => {setPassword(text); setGeneralErrorText(''); setPasswordErrorText('')}}
                            value={password}
                            onSubmitEditing={login}
                        />
                        <Text style={RegLogStyles.errorText}>{passwordError}</Text>
                    </>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity 
                            style={RegLogStyles.button}
                            onPress={login}
                        >
                            <Text style={RegLogStyles.buttonText}>Log In</Text>
                        </TouchableOpacity>
                        <Text style={{color: '#E12222', maxWidth: '33%'}}>{generalError}</Text>
                    </View>

                </View>
                <Image
                    style={RegLogStyles.gavno}
                    source={require('../../../assets/Gavno.png')}
                />
                <View style={RegLogStyles.registerTextView}>
                    <Text style={{fontSize: 18}}>Don't have an account ? </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Registration')}
                    >
                        <Text style={RegLogStyles.registerText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen
