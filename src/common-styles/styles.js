import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
    button: {
        right: 0,
        backgroundColor: '#7D7499',
        width: 80,
        borderRadius: 4,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deleteButton: {
        backgroundColor: 'rgba(233, 55, 55, 0.05)',
        borderRadius: 4,
        borderColor: 'rgba(233, 55, 55, 0.05)',
        borderWidth: 1
    },
    deleteButtonText: {
        color: 'rgba(233, 55, 55, 1)'

    },
    buttonText: {
        fontWeight: '600',
        color: 'rgba(250, 249, 255, 1)',
        fontSize: 16
    }
})