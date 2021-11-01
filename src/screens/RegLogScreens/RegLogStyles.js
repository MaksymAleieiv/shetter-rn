import { StyleSheet } from "react-native";
export const RegLogStyles = StyleSheet.create({
    container: {
        margin: 24,
        marginTop: '15%'
    },
    fieldContainerShort: {
        width: '45%'
    },
    label: {
        color: 'rgba(36, 36, 38, .75)',
        fontWeight: '600',
        marginBottom: 8
    },
    labelError: {
        color: '#E12222'
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#7D7499',
        borderRadius: 4,
        color: '#242426',
        fontWeight: '600',
        padding: 7,
        height: 40,
        shadowColor: 'rgba(125, 116, 153, 0.25)',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 12,
    },
    inputShort: {
        width: '45%'
    },
    inputFocused: {
        shadowColor: 'rgba(125, 116, 153, 0.25)',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 12,
    },
    inputError: {
        borderWidth: 1,
        borderColor: '#E12222',
    },
    errorText: {
        color: '#E12222',
        marginTop: 6,
        marginBottom: 12
    },
    button: {
        backgroundColor: '#7D7499',
        width: '50%',
        borderRadius: 4,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: '600',
        color: 'rgba(250, 249, 255, 1)',
        fontSize: 16
    },
    gavno: {
        height: '55%',
        width: '100%',
        position: 'relative',
        bottom: 70,
        right: 0,
        left: 0,
        zIndex: -1
    },
    title: {
        fontWeight: '700',
        color: '#242426',
        fontSize: 20,
        lineHeight: 30,
        marginBottom: 20
    },
    loginTextView: {
        bottom: 0,
    },
    registerTextView: {
        width: '100%',
        position: 'relative',
        bottom: 170,
        right: 0,
        left: 0,
        zIndex: 5,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    registerText: {
        color: '#7f61e1',
        backgroundColor: '#faf9ff',
        fontWeight: '600',
        marginLeft: 4,
        fontSize: 18
    },
    loginText: {
        backgroundColor: 'transparent'
    }
})