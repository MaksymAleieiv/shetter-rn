import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;

export const HeaderSkeletonStyles = StyleSheet.create({
    header__itemSkeleton: {
        marginTop: 7,
        maxWidth: (windowWidth / 3) - 40,
        borderRadius: 15,
        height: 22,
        backgroundColor: 'lightgray',
        margin: 'auto',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header__containerSkeleton: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white'
    }
})