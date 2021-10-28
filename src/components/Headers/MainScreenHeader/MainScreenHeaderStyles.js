import { StyleSheet } from "react-native";

export const MainScreenHeaderStyles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profilePictureContainer: {
        margin: 8,
        marginLeft: 0,
        width: 44,
        height: 44,
        borderRadius: 22,
        borderWidth: 2,
        borderColor: '#242426'
    },
    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    createPost: {
        width: 32,
        height: 32
    },
    logo: {
        width: 32,
        height: 32,
    },
    createPostContainer: {

    }
})