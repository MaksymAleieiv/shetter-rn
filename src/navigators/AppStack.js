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
import SelectedImagesScreenHeader from '../components/Headers/SelectedImagesScreenHeader/SelectedImagesScreenHeader';
import CreatePostScreenHeader__PostButton from '../components/Headers/CreatePostScreenHeader/CreatePostScreenHeader__PostButton';
import SettingsScreenHeader__saveSettingsButtons from '../components/Headers/SettingsScreenHeader/SettingsScreenHeader__saveSettingsButtons';

import DrawerSidebar from './DrawerSidebar';

const Stack = createNativeStackNavigator();

export default function AppStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Main' component={DrawerSidebar} options={{ headerShown: false }}/>
        <Stack.Screen name='Bookmarks' component={BookmarksScreen}/>
        <Stack.Screen name='Settings' component={SettingsScreen}
            options={{ headerRight : () => <SettingsScreenHeader__saveSettingsButtons/>}}/>
        <Stack.Screen name='Profile' component={ProfileScreen}
            options={({navigation, route}) => ({ headerRight : () => <ProfileScreenHeader navigation={navigation} route={route}/> }),
            {headerStyle: {backgroundColor: 'white'}}}
        />
        <Stack.Screen name='Post' component={PostScreen} />
        <Stack.Screen name='ImagesScreen' component={ImagesScreen}/>
        <Stack.Screen name='CreatePost' component={CreatePostScreen}
            options={{ headerRight : () => <CreatePostScreenHeader__PostButton/>, headerTitle: ''}}
        />
        <Stack.Screen name='SelectImages' component={SelectImagesScreen} 
            options={({route}) => ({ headerRight : () => <SelectedImagesScreenHeader route={route}/>, headerTitle : '' })}
        />
      </Stack.Navigator>
    );
}