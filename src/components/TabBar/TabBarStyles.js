import { StyleSheet } from "react-native";
export const TabBarStyles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopColor: 'rgba(125, 116, 153, 0.25)',
        borderTopWidth: 1,
    },
    tabBar__button: {
        width: '25%',
        height: 50,
        justifyContent: 'center'
    },
    tabbar__button__image: {
        width: 24,
        height: 24,
        marginLeft: '35%'
    }
})