import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabs from './MainTabs';
import DrawerSidebarComponent from '../components/DrawerComponent/DrawerSidebarComponent';

const Drawer = createDrawerNavigator();

export default function DrawerSidebar() {
    return(
        <Drawer.Navigator drawerContent={(props) => <DrawerSidebarComponent {...props} />}>
            <Drawer.Screen name='AppStack' component={MainTabs} options={{headerShown : false}}/>
        </Drawer.Navigator>
    )
}