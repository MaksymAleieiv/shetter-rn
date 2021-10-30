import React from 'react'
import { View, Text } from 'react-native'
import { AuthorBlockStyles } from './AuthorBlockStyles'
import getName from '../../../utils/getName'

const AuthorBlock = ({ firstName, lastName, username, routeUsername, datePosted, navigation }) => {
    const getTime = (datePosted) => {
        const timeSince = (date) => {
            const seconds = Math.floor((new Date() - date) / 1000);   
            let interval = seconds / 31536000;     
            if (interval > 1) return Math.floor(interval) + 'y';
            interval = seconds / 2592000;
            if (interval > 1) return Math.floor(interval) + 'm';
            interval = seconds / 86400;
            if (interval > 1) return Math.floor(interval) + 'd';
            interval = seconds / 3600;
            if (interval > 1) return Math.floor(interval) + 'h';
            interval = seconds / 60;
            if (interval > 1) return Math.floor(interval) + 'm';
            return ' just now';
          }
        const date = timeSince(new Date(new Date(datePosted)))
        return date
    }
    return (
        <View style={AuthorBlockStyles.authorBlock}>
            <Text
                style={AuthorBlockStyles.username}
                onPress={() => routeUsername !== username ?
                    navigation.push('Profile', {username})
                    : undefined}
            >{getName(username, firstName, lastName)}</Text>
            <Text style={AuthorBlockStyles.tag}>
                @{username} · {getTime(datePosted)}
            </Text>
        </View>
    )
}

export default AuthorBlock