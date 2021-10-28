import React from 'react'
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { useActions } from './src/hooks_and_functions/useActions';

import AppStack from './src/navigators/AppStack';
import AuthorizationStack from './src/navigators/AuthorizationStack';

const AppInner = () => {
    const { getMe } = useActions()
    React.useEffect(() => {
        getMe()
    }, [])
    let screen;
    const {refresh} = useSelector(state => state.user)
    if(refresh) screen = AppStack()
    else screen = AuthorizationStack()
    return (
        <NavigationContainer>
            {screen}
        </NavigationContainer>
    )
}



export default AppInner
