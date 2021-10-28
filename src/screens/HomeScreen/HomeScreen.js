import React from 'react'
import Feed from '../../components/Feed/Feed'

const HomeScreen = ({route, navigation}) => {
    return (
        <Feed navigation={navigation} route={route} feed={'Main'}/>
    )
}
export default HomeScreen