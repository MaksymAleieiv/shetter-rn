import { StyleSheet } from "react-native";

export const ProfileSkeletonStyles = StyleSheet.create({
    skeleton: {
        height: 16,
        borderRadius: 15,
        backgroundColor: 'lightgrey'
    },
    Profile__container: {
        minHeight: 250,
        width: '100%',
        backgroundColor: '#fff'
    },
    Profile__background: {
        width: '100%',
        height: 100,
        backgroundColor: 'lightgrey',
        zIndex: 12,
        position: 'absolute'
    },
    Profile__background__avatarContainer: {
        width: 128,
        height: 128,
        borderRadius: 64,
        borderWidth: 4,
        borderColor: 'white',
        marginTop: 36,
        marginLeft: 16,
        backgroundColor: 'lightgrey',
    },
    Profile__Info: {
        marginTop: 100,
        width: '100%',
        height: 150,
        backgroundColor: '#fff'
    },
    Profile__Info__Buttons: {
        width: 150,
        height: 30,
        position: 'absolute',
        top: 16,
        right: 16,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    Profile__Info__Button: {
        width: 40,
        height: 22,
        borderRadius: 15,
        backgroundColor: 'lightgrey'
    },
    Profile__Info__AuthorBlock : {
        marginTop: 76,
        marginLeft: 16,
        width: 120,
        height: 28,
        borderRadius: 15,
        backgroundColor: 'lightgrey'
    },
    Profile__Info__FollowedBlock: {
        flexDirection: 'row',
        marginLeft: 16,
        marginTop: 16
    }
})