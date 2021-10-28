import { StyleSheet } from "react-native";
export const ProfileScreenStyles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 36,
        borderBottomWidth: 1,
        borderColor: '#242426',
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    header__item: {
        width: '33%',
        height: '100%',
        backgroundColor: 'white',
        margin: 'auto',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cf: {
        fontWeight: '400',
        opacity: .75
    },
    ml16: {
        marginLeft: 16
    },
    ml6: {
        marginLeft: 6
    },
    bold: {
        fontWeight: '600'
    } 
})