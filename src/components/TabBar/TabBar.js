import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { TabBarStyles } from './TabBarStyles'
const buttons = [
    {
        name: 'Home',
        icon: require('../../../assets/TabBarIcons/Home.png')
    },
    {
        name: 'Subscriptions',
        icon: require('../../../assets/TabBarIcons/Subscriptions.png')
    },
    {
        name: 'Search',
        icon: require('../../../assets/TabBarIcons/Search.png')
    },
    {
        name: 'Hot',
        icon: require('../../../assets/TabBarIcons/Hot.png')
    },
]

const TabBar = ({navigation}) => {
    let { index, routes } = navigation.getState();
    return (
        <View style={TabBarStyles.tabBar}>
            {buttons.map(btn => (
                <TouchableOpacity
                    style={TabBarStyles.tabBar__button}
                    onPress={() => navigation.navigate(btn.name)}
                    key={btn.name}
                >
                    <Image
                        style={[
                            TabBarStyles.tabbar__button__image,
                            btn.name === 'Home' && {height: 20},
                            routes[index] === btn.name && [
                                {width: 32, height: 30},
                                btn.name === 'Home' && {height: 26}]
                            ]}
                        source={btn.icon}
                    />
                </TouchableOpacity>
            ))}
        </View>
    )
}


export default TabBar
