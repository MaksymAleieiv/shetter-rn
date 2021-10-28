import { StyleSheet } from "react-native";

export const EditableImageContainerStyles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        minWidth: '100%',
        height: 178,
        marginTop: 4
    },
    deleteImageButton : {
        width: 30,
        height: 30,
        zIndex: 5
    },
    deleteImageButtonWrapper : {
        width: 30,
        height: 30,
        position: 'absolute',
        top: 8,
        right: 8
    },
    imageContainer : {
        height: 178,
        width: 104,
        position: 'relative',
        marginRight: 6,
        borderRadius: 4,
        borderColor: '#242426',
        borderWidth: 2,
    },
    image : {
        height: 174,
        width: 100,
        borderRadius: 2,
    },
    addImageIcon : {
        width: 56,
        height: 56,
        marginLeft: 22,
        marginTop: 60,
    },
    addImage : {
        width: 104,
        height: 178,
        marginRight: 6,
        marginLeft: 16,
        borderColor: '#242426',
        borderWidth: 2,
        borderRadius: 4,
    },
    
})