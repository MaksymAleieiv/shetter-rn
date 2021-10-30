import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreenHeader from '../components/Headers/MainScreenHeader/MainScreenHeader';
import TabBar from '../components/TabBar/TabBar';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SubscriptionsScreen from '../screens/SubscriptionsScreen/SubscriptionsScreen';
import HotScreen from '../screens/HotScreen/HotScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';

import { useActions } from '../hooks/useActions';

const Tab = createBottomTabNavigator();

export default function MainTabs() {

    const {} = useActions()

    const MainFeedRef = React.useRef()
    const SubscriptionsFeedRef = React.useRef()

    React.useEffect(() => {

    }, [])
    return(
        <Tab.Navigator tabBar={props => <TabBar {...props}/>}>
            <Tab.Screen name='Home' component={HomeScreen} initialParams={{MainFeedRef}} options={({route, navigation}) => ({ headerTitle : () => <MainScreenHeader navigation={navigation} MainFeedRef={MainFeedRef}/>})}/>
            <Tab.Screen name='Subscriptions' component={SubscriptionsScreen} initialParams={{SubscriptionsFeedRef}} options={({route, navigation}) => ({ headerTitle : () => <MainScreenHeader navigation={navigation} SubscriptionsFeedRef={SubscriptionsFeedRef}/> })}/>
            <Tab.Screen name='Search' component={SearchScreen} options={({navigation}) => ({ headerTitle : () => <MainScreenHeader navigation={navigation}/> })}/>
            <Tab.Screen name='Hot' component={HotScreen} options={({navigation}) => ({ headerTitle : () => <MainScreenHeader navigation={navigation}/> })}/>
        </Tab.Navigator>
    )
}

