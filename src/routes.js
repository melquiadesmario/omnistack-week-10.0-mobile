import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from './pages/Main'
import Profile from './pages/Profile'

const Stack = createStackNavigator()

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Main'>
                <Stack.Screen
                    name='Main'
                    options={{
                        title: 'DevRadar',
                        headerStyle: { backgroundColor: '#7D40E7'},
                        headerTintColor: '#FFF'
                    }}
                    component={ Main }
                />
                <Stack.Screen
                    name='Profile'
                    options={{ title: 'Github Profile' }}
                    component={ Profile }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
