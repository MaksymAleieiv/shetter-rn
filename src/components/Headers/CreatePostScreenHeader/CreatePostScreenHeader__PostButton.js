import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { commonStyles } from '../../../common-styles/styles'

const CreatePostScreenHeader__PostButton = ({onPost, onDelete, isBeingEdited}) => {
    return (
        <View style={{flexDirection: 'row'}}>
            {isBeingEdited ? 
                <TouchableOpacity
                    style={[commonStyles.button, commonStyles.deleteButton]}
                    onPress={onDelete}
                >
                    <Text style={[commonStyles.buttonText, commonStyles.deleteButtonText]}>Delete</Text>
                </TouchableOpacity>
            : undefined}

            <TouchableOpacity
                style={[commonStyles.button, {marginLeft: 16}]}
                onPress={onPost}
            >
                <Text style={commonStyles.buttonText}>Finish</Text>
            </TouchableOpacity>

        </View>
    )
}

export default CreatePostScreenHeader__PostButton
