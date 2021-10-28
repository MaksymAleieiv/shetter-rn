import React from 'react'
import Feed from '../../components/Feed/Feed'

const SubscriptionsScreen = ({route, navigation}) => {
    return (
        <Feed navigation={navigation} route={route} feed={'Subscriptions'}/>
    )
}

export default SubscriptionsScreen
