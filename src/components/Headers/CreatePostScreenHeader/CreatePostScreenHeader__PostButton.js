import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { commonStyles } from '../../../common-styles/styles'

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

export default CreatePostScreenHeader__PostButton
