import React from 'react'
import { Text, View } from 'react-native'
import { Header } from 'react-native-elements'
import { CSColor } from '../assets'

function FormContact(props) {
    return (
        <View>
            <Header
                backgroundColor={CSColor.white}
                leftComponent={{ 
                    icon: 'close', 
                    color: CSColor.black, 
                    onPress:()=> props.navigation.goBack()
                }}
                centerComponent={{ text: 'Add New Contact', style: { color: CSColor.black } }}
                rightComponent={{ icon: 'check', color: CSColor.black }}
            />
        </View>
    )
}

export {FormContact}
