import React from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { commonStyles } from '../../../hooks_and_functions/styles';
const windowWidth = Dimensions.get('window').width;

const SelectedImagesScreenHeader = ({ selectedImagesCount, onSuccess, maxSelection}) => {
    return (
        <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row', height: 44, maxWidth: windowWidth / 2 - 8, alignItems: 'center', position: 'relative'}}>
            <Text style={{position: 'absolute', left: 0}}>{selectedImagesCount}/{maxSelection}</Text>
            <View style={{position: 'absolute', right: 0}}>
                <TouchableOpacity
                    style={commonStyles.button}
                    onPress={onSuccess}
                >
                    <Text style={commonStyles.buttonText}>Finish</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SelectedImagesScreenHeader
