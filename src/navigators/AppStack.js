import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen'
import PostScreen from '../screens/PostScreen/PostScreen';
import CreatePostScreen from '../screens/CreatePostScreen/CreatePostScreen';
import SelectImagesScreen from '../screens/SelectImagesScreen/SelectImagesScreen';
import BookmarksScreen from '../screens/BookmarksScreen/BookmarksScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import ImagesScreen from '../screens/ImagesScreen/ImagesScreen';

import ProfileScreenHeader from '../components/Headers/ProfileScreenHeader/ProfileScreenHeader'

import DrawerSidebar from './DrawerSidebar';

const Stack = createNativeStackNavigator();

export default function AppStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Main' component={DrawerSidebar} options={{ headerShown: false }}/>
        <Stack.Screen name='Bookmarks' component={BookmarksScreen}/>
        <Stack.Screen name='Settings' component={SettingsScreen}
            options={({route}) => ({ headerRight : route.params.headerRight })}
        />
        <Stack.Screen name='Profile' component={ProfileScreen}
            options={({navigation, route}) => ({ headerRight : () => <ProfileScreenHeader navigation={navigation} route={route}/> }),
            {headerStyle: {backgroundColor: 'white'}}}
        />
        <Stack.Screen name='Post' component={PostScreen} />
        <Stack.Screen name='ImagesScreen' component={ImagesScreen}/>
        <Stack.Screen name='CreatePost' component={CreatePostScreen}
            options={({route}) => ({ headerRight : route.params?.headerRight, headerTitle : '' })}
        />
        <Stack.Screen name='SelectImages' component={SelectImagesScreen} 
            options={({route}) => ({ headerRight : route.params?.headerRight, headerTitle : '' })}
        />
      </Stack.Navigator>
    );
}