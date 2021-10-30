import { StyleSheet } from "react-native";

export const DrawerSidebarStyles = StyleSheet.create({
    profilePhoto: {
        width: 56,
        height: 56,
        borderRadius: 28,
        marginLeft: 16
    },
    profileContainer: {
        borderColor: '#242426',
        borderBottomWidth: 1,
        paddingTop: 16,
        paddingBottom: 16
    },
    sidebar__item: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        borderColor: '#242426',
        borderBottomWidth: 1,
        paddingLeft: 16,
        flexDirection: 'row'
    },
    sidebar__item__name: {
        color: '#242426',
        fontSize: 16,
        marginLeft: 4,
        opacity: .85,
        fontFamily: 'SourceSansPro'
    },
    sidebar__item__icon: {
        width: 18,
        height: 18
    }
})