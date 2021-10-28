import { StyleSheet } from "react-native";
import {  Dimensions  } from 'react-native'
const windowWidth = Dimensions.get('window').width;

export const imageContainerStyles = StyleSheet.create({
    imageContainer: {
        flexDirection: 'row',
        position: 'relative',
        paddingBottom: 9,
    },
    container: {
        width: windowWidth - 110,
        height: 176
    }
})

export const styles = {
    1 : {
        main: {
            width: windowWidth - 110,
            height: 176,
        },
        individual : [
            {
                borderRadius: 8
            }
        ]
    },
    2 : {
        main: {
            width: Math.floor((windowWidth - 110)/2),
            height: 176,
        },
        individual : [
            {
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
            },
            {
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
            }
        ]
    },
    3 : {
        main: {
            width: Math.floor((windowWidth - 110)/2),
            height: 176,
        },
        individual : [
            {
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
            },
            {
                height: Math.floor(176/2),
                borderTopRightRadius: 8,

            },
            {
                height: Math.floor(176/2),
                borderBottomRightRadius: 8,
                position: 'absolute',
                bottom: 0,
                right: 0
            }
        ]
    },
    4 : {
        main: {
            width: Math.floor((windowWidth - 110)/2),
            height: Math.floor(176/2),
            position: 'absolute',
        },
        individual : [
            {
                borderTopLeftRadius: 8,
                top: 0,
                left: 0
            },
            {
                borderTopRightRadius: 8,
                top: 0,
                right: 0
            },
            {
                borderBottomLeftRadius: 8,
                bottom: 0,
                left: 0
            },
            {
                borderBottomRightRadius: 8,
                bottom: 0,
                right: 0
            }
        ]
    },
    5 : {
        main: {
            width: Math.floor((windowWidth - 110)/2),
            height: Math.floor(176/2),
            position: 'absolute',
        },
        individual : [
            {
                borderTopLeftRadius: 8,
                top: 0,
                left: 0
            },
            {
                borderTopRightRadius: 8,
                top: 0,
                right: 0
            },
            {
                borderBottomLeftRadius: 8,
                bottom: 0,
                left: 0
            },
            {
                width: Math.floor((windowWidth - 110)/4),
                bottom: 0,
                left: Math.floor((windowWidth - 110)/2),
            },
            {
                borderBottomRightRadius: 8,
                width: Math.round((windowWidth - 110)/4),
                bottom: 0,
                right: 0
            }
        ]
    },
    6 : {
        main: {
            width: Math.floor((windowWidth - 110)/2),
            height: Math.floor(176/2),
            position: 'absolute',
        },
        individual : [
            {
                borderTopLeftRadius: 8,
                top: 0,
                left: 0
            },
            {
                borderTopRightRadius: 8,
                top: 0,
                right: 0
            },
            {
                borderBottomLeftRadius: 8,
                width: Math.floor((windowWidth - 110)/4),
                bottom: 0,
                left: 0
            },
            {
                width: Math.round((windowWidth - 110)/4),
                bottom: 0,
                left: Math.floor((windowWidth - 110)/4)

            },
            {
                width: Math.floor((windowWidth - 110)/4),
                bottom: 0,
                left: Math.floor((windowWidth - 110)/2),
            },
            {
                borderBottomRightRadius: 8,
                width: Math.round((windowWidth - 110)/4),
                bottom: 0,
                right: 0
            }
        ]
    }
}