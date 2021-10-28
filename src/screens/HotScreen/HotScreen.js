import React from 'react'
import Feed from '../../components/Feed/Feed'

const HotScreen = ({route, navigation}) => {
    return (
        <Feed navigation={navigation} route={route} feed={'Hot'}/>
    )
}
export default HotScreen