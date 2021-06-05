import React from 'react'
import { Alert, Image, ImageBackground, StatusBar, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { Icon, ListItem } from 'react-native-elements'
import { CSColor, CStyles } from '../assets'
import { hp, wp } from '../utils/responsive'
import {FloatButton, PlaceHolder} from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { clearContact, getContact, removeContact } from '../redux/actions'
import { FORM_CONTACT, LIST_CONTACTS } from '../navigation/_const'

function DetailContact(props) {
    const dispatch = useDispatch()
    const {contact, isLoading, isFailed, isSuccess, message} = useSelector(state => state.contacts)

    const confirm = () =>
        Alert.alert(
            `Remove ${contact?.firstName}`,
            `Are you sure to remove ${contact?.firstName} ${contact?.lastName} from the contact.`,
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                        console.log('mantap')
                        dispatch(removeContact("b3abd640-c92b-11e8-b02f-cbfa15db428b"))
                    }
                }
            ]
        );


    React.useEffect(() => {
        dispatch(getContact(props.route.params?.id))
        return(() => {
            dispatch(clearContact())
        })
    },[message])

    React.useEffect(() => {
        if (isSuccess && message !=null){
            props.navigation.navigate(LIST_CONTACTS)
        }
        if(isFailed && message != null){
            ToastAndroid.show(message, ToastAndroid.SHORT)
        }
    },[isFailed])
    
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
                <ImageBackground source={{uri:contact?.photo}} style={styles.image} blurRadius={10} />
            </View>
            <View style={styles.body}>
                <View style={{marginBottom:hp(5)}}>
                    {isLoading?
                        <PlaceHolder type="profile"/>
                        :
                        <Image source={{uri:contact?.photo}} style={styles.profile} />
                      
                    }
                    <Text style={styles.fullName}>{contact?.firstName} {contact?.lastName}</Text>
                    <View style={{flexDirection:'row', justifyContent:'center'}}>
                        <TouchableOpacity 
                            disabled={isLoading} 
                            style={styles.btnOpsi}
                            onPress={() => props.navigation.navigate(FORM_CONTACT, {type:'Edit', item:contact})}
                        >
                            <Icon
                                name='edit-3'
                                type='feather'
                                style={{marginRight:10}}
                            />
                            <Text>Edit Contact</Text>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={isLoading} onPress={confirm}>
                            <Icon
                                raised
                                name='trash'
                                type='feather'
                                color={CSColor.lightGray}
                                reverseColor={CSColor.black}
                                containerStyle={{elevation:0}}
                                reverse
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {isLoading?
                    <PlaceHolder type="contact"/>:
                    <>
                    <ListItem >
                        <ListItem.Content>
                            <ListItem.Subtitle>First Name</ListItem.Subtitle>
                            <ListItem.Title>{contact?.firstName}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem >
                        <ListItem.Content>
                            <ListItem.Subtitle>Last Name</ListItem.Subtitle>
                            <ListItem.Title>{contact?.lastName}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem >
                        <ListItem.Content>
                            <ListItem.Subtitle>Age</ListItem.Subtitle>
                            <ListItem.Title>{contact?.age}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                    </>
                }
            </View>
        </View>
    )
}

export {DetailContact}

const styles = StyleSheet.create({
    header:{
        flex:3,
    },
    profile:{
        width:wp(30), 
        height:wp(30), 
        alignSelf:'center', 
        marginTop:'-15%', 
        borderRadius:20,
        backgroundColor:CSColor.lightGray
    },
    btnOpsi:{
        backgroundColor:CSColor.lightGray, flexDirection:'row', alignItems:'center', padding:10, alignSelf:'center', borderRadius:50
    },
    fullName:{
        fontSize:CStyles.fontSize.medium, 
        alignSelf:'center', 
        paddingVertical:hp(2)
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
