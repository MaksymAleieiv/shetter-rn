import { StyleSheet } from "react-native";
export const ProfileStyles = StyleSheet.create({
    Profile__container: {
        minHeight: 250,
        width: '100%'
    },
    Profile__background: {
        height: 100,
        width: '100%',
        zIndex: 12,
        position: 'absolute',
        backgroundColor: '#a79194'
    },
    Profile__background__avatarContainer: {
        width: 128,
        height: 128,
        borderRadius: 64,
        borderWidth: 4,
        borderColor: 'white',
        marginTop: 36,
        marginLeft: 16,
    },
    Profile__background__avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    Profile__Info: {
        marginTop: 100,
        minHeight: 150,
        width: '100%',
        backgroundColor: 'white',
        position: 'relative'
    },
    Profile__Info__Buttons: {
        width: 180,
        height: 30,
        position: 'absolute',
        top: 16,
        right: 16
    },
    Profile__Info__Button: {
        width: 60,
        height: '100%',
        borderRadius: 4
    },
    Profile__Info__ButtonFollowed: {
        justifyContent: 'center',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'rgba(82, 72, 114, 0.05)',
        backgroundColor: '#FAF9FF'
    },
    Profile__Info__ButtonFollowedText: {
        color: '#7D7499',
        fontSize: 14,
        fontWeight: '600'
    },
    Profile__Info__ButtonNotFollowed: {
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#7D7499'
    },
    Profile__Info__ButtonNotFollowedText: {
        color: '#FAF9FF',
        fontSize: 14,
        fontWeight: '600'
    },
    Profile__Info__AuthorBlock: {
        marginTop: 76,
        marginLeft: 16,
    },
    Profile__Info__FollowedBlock: {
        flexDirection: 'row',
        marginLeft: 16,
        marginTop: 16
    },
    cf: {
        fontWeight: '400',
        opacity: .75
    },
    ml16: {
        marginLeft: 16
    },
    bold: {
        fontWeight: '600'
    },
    Profile__Info__name: {
        fontWeight: '700',
        color: '#242426',
        fontSize: 20
    },
    Profile__Info__tag: {
        fontWeight: '400',
        color: '#242426',
        fontSize: 14,
        opacity: .5,
        marginTop: 6,
        marginLeft: 6
    }
})