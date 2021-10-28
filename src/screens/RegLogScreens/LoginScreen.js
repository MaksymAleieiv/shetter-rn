import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { useActions } from '../../../src/hooks_and_functions/useActions'
import mainInstance from '../../hooks_and_functions/mainInstance'
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
    return (
        <>
            <View style={RegLogStyles.container}>

                <Text style={RegLogStyles.title}>Log In to Shetter</Text>

                <>
                    <Text style={[RegLogStyles.label, emailError ? RegLogStyles.labelError : {}]}>Your email</Text>
                    <TextInput
                        maxLength={31}
                        style={[RegLogStyles.input, emailError ? RegLogStyles.inputError : {}]}
                        onChangeText={text => {setEmail(text); setGeneralErrorText(''); setEmailErrorText('')}}
                        value={email}
                        onSubmitEditing={login}
                    />
                    <Text style={RegLogStyles.errorText}>{emailError}</Text>
                </>

                <>
                    <Text style={[RegLogStyles.label, passwordError ? RegLogStyles.labelError : {}]}>Your password</Text>
                    <TextInput
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
        </>
    )
}

export default LoginScreen
