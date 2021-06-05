import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import * as t from './_const'
import * as s from '../screens'

const Stack = createStackNavigator()

const MainStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={t.LIST_CONTACTS} component={s.Contacts} />
        <Stack.Screen name={t.DETAIL_CONTACT} component={s.DetailContact} />
        <Stack.Screen 
            name={t.FORM_CONTACT} 
            component={s.FormContact} 
        />
    </Stack.Navigator>
)

export { MainStack }