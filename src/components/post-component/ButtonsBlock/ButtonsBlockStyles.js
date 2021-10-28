import { StyleSheet } from "react-native";
export const ButtonsBlockStyles = StyleSheet.create({
    block: {
        flexDirection: 'row'
    },
    button: {
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 8,
        marginRight: 24
    },
    buttonImage: {
        width: 18,
        height: 16,
        marginTop: 3
    },
    buttonText: {
        color: '#242426',
        opacity: 0.65,
        marginLeft: 8,
        fontSize: 16
    }
})