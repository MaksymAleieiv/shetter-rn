import React from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { commonStyles } from '../../../hooks_and_functions/styles';
const windowWidth = Dimensions.get('window').width;

const SelectedImagesScreenHeader = ({route, selected, onSuccess}) => {
    return (
        <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row', height: 44, maxWidth: windowWidth / 2 - 8, alignItems: 'center', position: 'relative'}}>
            <Text style={{position: 'absolute', left: 0}}>{selected}/{route.params?.maxSelection || 6}</Text>
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

function mapStateToProps(state) {
    return {
        selected : state.helper.selectedImagesCount,
        onSuccess : state.helper.onSuccess,
    }
}

export default connect(mapStateToProps)(SelectedImagesScreenHeader)
