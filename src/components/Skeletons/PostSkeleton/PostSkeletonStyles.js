import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;

export const PostSkeletonStyles = StyleSheet.create({
    postContainer: {
        flexDirection: 'row',
        padding: 16,
        paddingBottom: 0,
        borderBottomColor: '#ede9f9',
        borderBottomWidth: 1,
        backgroundColor: '#fff'
    },
    skeleton: {
        height: 16,
        borderRadius: 15,
        backgroundColor: 'lightgrey'
    },
    image: {
        width: windowWidth - 110,
        height: 146,
        borderRadius: 15,
        backgroundColor: 'lightgrey',
        marginBottom: 6
    },
    buttons: {
        width: 26,
        height: 16,
        borderRadius: 15,
        backgroundColor: 'lightgrey',
        marginRight: 16,
        marginBottom: 8
    }
})