import React from 'react'
import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon, ListItem } from 'react-native-elements'
import { CSColor, CStyles } from '../assets'
import { hp, wp } from '../utils/responsive'
import {FloatButton} from '../components'

const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'First Name'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Last Name'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Age'
      },
  ]

function DetailContact(props) {
    const renderItem = ({ item }) => (
        <ListItem >
          <ListItem.Content>
            <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            <ListItem.Title>{item.name}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
    )
    return (
        <View style={{height:'100%'}}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={styles.header}>
            
            <FloatButton style={styles.back} onPress={() => props.navigation.goBack()}>
                <Icon
                    name='chevron-left'
                    type='feather'
                />
            </FloatButton>
                <ImageBackground source={{uri:'https://i.pravatar.cc/400?img=64'}} style={styles.image} blurRadius={10} />
            </View>
            <View style={styles.body}>
                <View style={{marginBottom:hp(5)}}>
                    <Image source={{uri:'https://i.pravatar.cc/400?img=64'}} style={{width:wp(30), height:wp(30), alignSelf:'center', marginTop:'-15%', borderRadius:20}} />
                    <Text style={{fontSize:CStyles.fontSize.medium, textAlign:'center', paddingVertical:hp(2)}}>Rendi Wijiatmoko</Text>
                    <TouchableOpacity style={{backgroundColor:CSColor.lightGray, flexDirection:'row', alignItems:'center', padding:10, alignSelf:'center', borderRadius:50}}>
                        <Icon
                            name='edit-3'
                            type='feather'
                            style={{marginRight:10}}
                        />
                        <Text>Edit Contact</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    keyExtractor= {(item, index) => index.toString()}
                    data={list}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}

export {DetailContact}

const styles = StyleSheet.create({
    header:{
        flex:3,
    },
    back:{
        width:hp(5.2),
        height:hp(5.2),
        top:hp(5), 
        bottom:0, 
        right:0, 
        left:hp(2.5), 
        backgroundColor:'white',
        zIndex:9
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        marginBottom:-50,
    },
    body:{
        flex:7,
        backgroundColor:'white', 
        height:'100%',
        borderTopLeftRadius:40,
        borderTopRightRadius:40
    }
})
