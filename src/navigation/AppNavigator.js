import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { MainStack } from './MainStack'

const Stack = createStackNavigator()
function AppNavigator() {
    return (
        <>
          <NavigationContainer >
                <Stack.Navigator
                    headerMode="none"
                >
                    <Stack.Screen name="main" component={MainStack} />
                </Stack.Navigator>
            </NavigationContainer>  
        </>
    )
}

export default AppNavigator
