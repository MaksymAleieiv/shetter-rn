import React from 'react'
import Feed from '../../components/Feed/Feed'

const BookmarksScreen = ({navigation, route}) => {
    return (
        <Feed navigation={navigation} route={route} feed={'Bookmarks__users-liked-posts'}/>
    )
}

export default BookmarksScreen
