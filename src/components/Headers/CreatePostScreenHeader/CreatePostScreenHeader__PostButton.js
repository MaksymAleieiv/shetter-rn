import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import { commonStyles } from '../../../hooks_and_functions/styles'

const CreatePostScreenHeader__PostButton = ({onPost}) => {
    return (
        <TouchableOpacity
            style={commonStyles.button}
            onPress={onPost}
        >
            <Text style={commonStyles.buttonText}>Finish</Text>
        </TouchableOpacity>
    )
}

function mapStateToProps(state) {
    return {
        onPost : state.helper.onPost,
    }
}

export default connect(mapStateToProps)(CreatePostScreenHeader__PostButton)
