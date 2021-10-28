import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabs from './MainTabs';
import DrawerComponent from '../components/DrawerComponent/DrawerComponent';

const Drawer = createDrawerNavigator();

export default function DrawerSidebar() {
    return(
        <Drawer.Navigator drawerContent={(props) => <DrawerComponent {...props} />}>
            <Drawer.Screen name='AppStack' component={MainTabs} options={{headerShown : false}}/>
        </Drawer.Navigator>
    )
}