import React from 'react'
import { FlatList, RefreshControl, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import { Avatar, Icon, ListItem } from 'react-native-elements'
import { CSColor, CStyles } from '../assets'
import { hp, wp } from '../utils/responsive'
import {DETAIL_CONTACT, FORM_CONTACT} from '../navigation/_const'
import {FloatButton, PlaceHolder} from '../components'
import { getListContacts } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import {useIsFocused} from '@react-navigation/native'

function Contacts(props) {
  const isVisible = useIsFocused()
  const dispatch = useDispatch()
  const {listContacts, isLoading, message} = useSelector(state => state.contacts)

  const fetchData = () => dispatch(getListContacts())
  
  React.useEffect(() => {
    if(isVisible){
      fetchData()
    }
  },[isVisible])

  const renderItem = ({ item }) => (
      <ListItem onPress={() => props.navigation.navigate(DETAIL_CONTACT, {id:item.id})}>
        <Avatar size="medium" avatarStyle={{borderRadius:10}} source={{uri: item.photo}} />
        <ListItem.Content>
          <ListItem.Title>{`${item.firstName} ${item.lastName}`}</ListItem.Title>
          <ListItem.Subtitle>{item.age}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
  )
  return (
      <View 
        style={styles.container}
      >
        <StatusBar backgroundColor={CSColor.white} barStyle="dark-content" />
          <View style={{paddingVertical:CStyles.margin.horizontal3}}>
              <Text style={{alignSelf:'center', fontSize:CStyles.fontSize.large}}>Contacts</Text>
              <TextInput 
                  style={{backgroundColor:CSColor.lightGray, margin:wp(5), paddingHorizontal:wp(5)}}
                  placeholder="Search name here"
              />
            <Text style={{fontSize:CStyles.fontSize.medium, marginHorizontal:wp(5)}}>My Contacts ({listContacts?.length})</Text>
          </View>
          {isLoading?
            <PlaceHolder type="contacts"/>
              :
            <FlatList
                keyExtractor= {(item, index) => index.toString()}
                data={listContacts}
                renderItem={renderItem}
                refreshing={isLoading}
                onRefresh={() => fetchData()}
            />
          }
    
          <FloatButton onPress={() => props.navigation.navigate(FORM_CONTACT, {type:"Add new"})}>
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