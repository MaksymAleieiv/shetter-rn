import { StyleSheet } from "react-native"
export const PostStyles = StyleSheet.create({
    postContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 16,
        paddingBottom: 0,
        borderBottomColor: '#ede9f9',
        borderBottomWidth: 1,
        backgroundColor: '#fff'
    },
    avatarContainer: {
        marginRight: 8,
        backgroundColor: 'transparent',
        width: 56,
        height: 56,
        borderRadius: 28
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28
    },
    contentContainer: {
        flexDirection:'row',
        marginBottom: 4
    },
    content: {
        flex: 1,
        flexWrap: 'wrap',
        color: '#242426',
        fontSize: 15,
        fontFamily: 'SourceSansPro'
    }
})