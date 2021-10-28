import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { commonStyles } from '../../../hooks_and_functions/styles'

const SettingsScreenHeader__saveSettingsButtons = ({onChangeSettings}) => {
    return (
        <TouchableOpacity
            style={commonStyles.button}
            onPress={onChangeSettings}
        >
            <Text style={commonStyles.buttonText}>Save</Text>
        </TouchableOpacity>
    )
}

export default SettingsScreenHeader__saveSettingsButtons
