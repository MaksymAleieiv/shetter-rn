import { StyleSheet, Dimensions } from "react-native"
const windowWidth = Dimensions.get('window').width;
export const CreatePostStyles = StyleSheet.create({
    postContainer: {
        flexDirection: 'row',
        padding: 16,
        paddingBottom: 0,
    },
    avatarContainer: {
        width: 56,
        height: 56,
        borderRadius: 28,
        borderColor: '#242426',
        borderWidth: 2,
        marginRight: 8,
        backgroundColor: 'transparent'
    },
    avatar: {
        width: 52,
        height: 52,
        borderRadius: 26,
    },
    textInput : {
        width: windowWidth - 88,
        height: 30,
        borderColor: '#242426',
        marginTop: 13,
        borderBottomWidth: 2,
        paddingLeft: 3,
        fontFamily: 'SourceSansPro'
    }
})