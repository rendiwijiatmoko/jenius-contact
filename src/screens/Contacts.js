import React from 'react'
import { FlatList, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import { Avatar, Icon, ListItem } from 'react-native-elements'
import { CSColor, CStyles } from '../assets'
import { fp, hp, wp } from '../utils/responsive'
import {DETAIL_CONTACT, FORM_CONTACT} from '../navigation/_const'
import {FloatButton} from '../components'

const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://i.pravatar.cc/400?img=64',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://i.pravatar.cc/400?img=64',
      subtitle: 'Vice Chairman'
    },
  ]

function Contacts(props) {
    const renderItem = ({ item }) => (
        <ListItem onPress={() => props.navigation.navigate(DETAIL_CONTACT)}>
          <Avatar size="medium" avatarStyle={{borderRadius:10}} source={{uri: item.avatar_url}} />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
    )
    return (
        <View style={styles.container}>
          <StatusBar backgroundColor={CSColor.white} barStyle="dark-content" />
            <View style={{paddingVertical:hp(5)}}>
                <Text style={{alignSelf:'center', fontSize:CStyles.fontSize.large}}>Contacts</Text>
                <TextInput 
                    style={{backgroundColor:CSColor.lightGray, marginHorizontal:wp(5), marginTop:wp(5), paddingHorizontal:wp(5)}}
                    placeholder="Search name here"
                />
            </View>
            <Text style={{fontSize:CStyles.fontSize.medium, marginHorizontal:wp(5)}}>My Contacts(21)</Text>
            <FlatList
                keyExtractor= {(item, index) => index.toString()}
                data={list}
                renderItem={renderItem}
            />
            <FloatButton onPress={() => props.navigation.navigate(FORM_CONTACT)}>
              <Icon
                name='user-plus'
                type='feather'
              />
            </FloatButton>
        </View>
    )
}

export {Contacts}

const styles = StyleSheet.create({
  container:{
    backgroundColor:CSColor.white,
    flex:1
  }
})