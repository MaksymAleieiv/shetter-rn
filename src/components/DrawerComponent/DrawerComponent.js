import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useActions } from '../../hooks_and_functions/useActions'
import { connect } from 'react-redux'
import mainInstance from '../../hooks_and_functions/mainInstance'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DrawerSidebarStyles } from './DrawerSidebarStyles'
import DrawerSidebar__Profile from './DrawerSidebar__Profile'

const sidebarItems = [
    {
        name: 'Profile',
        icon: require('../../../assets/Profile.png')
    },
    {
        name: 'Bookmarks',
        icon: require('../../../assets/Bookmark.png')
    },
    {
        name: 'Settings',
        icon: require('../../../assets/Settings.png')
    },
    {
        name: 'LogOut',
        icon: require('../../../assets/LogOut.png')
    },
]

const DrawerComponent = ({navigation, myUsername}) => {
    const [myData, setMyData] = React.useState({})
    React.useEffect(() => {
        if(myUsername.length > 0)
            mainInstance.get('/auth/users/' + myUsername)
            .then(res => setMyData(res.data))
            .catch(e => {})
    }, [myUsername])
    const { clearUserInfo } = useActions()
    if(!myData) return (<></>)
    return (
        <SafeAreaView>
            <DrawerSidebar__Profile myData={myData}/>
            <View style={{width: '100%'}}>
                {sidebarItems.map((item) => (
                    <TouchableOpacity
                        key={'drawer_' + item.name}
                        style={DrawerSidebarStyles.sidebar__item}
                        onPress={() => {
                            item.name !== 'LogOut' ? navigation.push(item.name, {username : myUsername}) : clearUserInfo()
                        }}
                    >
                        <Image
                            style={DrawerSidebarStyles.sidebar__item__icon}
                            source={item.icon}
                        />
                        <Text style={[DrawerSidebarStyles.sidebar__item__name, item.name === 'LogOut' && {color: '#E12222'}]}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    )
}

function mapStateToProps(state) {
    return {
        myUsername: state.user.userInfo.username
    }
}

export default connect(mapStateToProps)(DrawerComponent)
