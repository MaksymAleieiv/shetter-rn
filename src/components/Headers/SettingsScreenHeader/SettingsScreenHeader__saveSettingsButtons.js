import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
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

function mapStateToProps(state) {
    return {
        onChangeSettings : state.helper.onChangeSettings,
    }
}

export default connect(mapStateToProps)(SettingsScreenHeader__saveSettingsButtons)
