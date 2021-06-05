import React from 'react'
import { Alert, Image, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import { Avatar, Header, Input } from 'react-native-elements'
import { CSColor, CStyles } from '../assets'
import { Formik } from 'formik'
import { hp, wp } from '../utils/responsive'
import { useDispatch, useSelector } from 'react-redux'
import { addContact, updateContact } from '../redux/actions'
import { DETAIL_CONTACT, LIST_CONTACTS } from '../navigation/_const'

function FormContact(props) {
    const type = props.route.params?.type
    const data = props.route.params?.item

    const dispatch = useDispatch()
    const {isSuccess, message} = useSelector(state => state.contacts)

    const confirm = () =>
        Alert.alert(
            `Can't Upload Image `,
            `currently there is no API to upload image, so string image will be hard code`,
            [
                {
                    text: "OK", onPress: () => {
                        
                    }
                }
            ]
        );
    React.useEffect(() => {
      if(type == 'Edit'){
          if(isSuccess && message != null) {
            props.navigation.navigate(DETAIL_CONTACT,{id:data?.id})
            ToastAndroid.show(message, ToastAndroid.SHORT)
        }
      } else {
        if(isSuccess && message != null) {
            props.navigation.goBack()
            ToastAndroid.show(message, ToastAndroid.SHORT)
        }
      }
    })

    return (
        <View style={{backgroundColor:CSColor.white, flex:1}}>
            <Formik
                initialValues={
                    type == 'Edit'?
                    {
                        firstName: data?.firstName,
                        lastName: data?.lastName,
                        age:data?.age,
                        photo:data?.photo
                    }:
                    {
                        firstName: "",
                        lastName: "",
                        age:null,
                        photo:'https://i.pravatar.cc/400?img=67'
                    }
                }
                onSubmit={values => type=="Edit"? 
                dispatch(updateContact({
                    id:data?.id,
                    body:values
                })):
                dispatch(addContact(values))
                }
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                  <>
                    <Header
                        backgroundColor={CSColor.white}
                        leftComponent={{ 
                            icon: 'close', 
                            color: CSColor.black, 
                            onPress:()=> props.navigation.goBack()
                        }}
                        centerComponent={{ text: `${type} Contact`, style: { color: CSColor.black } }}
                        rightComponent={{ 
                            icon: 'check', 
                            color: CSColor.black,
                            onPress:handleSubmit
                        }}
                    />
                    <View style={styles.form}>
                        <Avatar rounded size="xlarge" source={type=="Edit"?{uri:data?.photo}:null} icon={type=="Edit"?null:{name: 'user', type: 'font-awesome'}} style={styles.profile}>
                            <Avatar.Accessory
                                onPress={confirm}
                                size={hp(4)}
                                color={CSColor.lightGray}
                                style={{ backgroundColor: 'grey' }}
                            />
                        </Avatar>
                        <Input 
                            label="First Name"
                            placeholder="ex. Rendi"
                            labelStyle={styles.label}
                            onChangeText={handleChange('firstName')}
                            onBlur={handleBlur('firstName')}
                            value={values.firstName}
                        />
                        <Input 
                            label="Last Name"
                            placeholder="ex. Wijiatmoko"
                            labelStyle={styles.label}
                            onChangeText={handleChange('lastName')}
                            onBlur={handleBlur('lastName')}
                            value={values.lastName}
                        />
                        <Input 
                            label="Age"
                            placeholder="ex. 22"
                            labelStyle={styles.label}
                            onChangeText={handleChange('age')}
                            onBlur={handleBlur('age')}
                            value={type == "Edit"?values.age.toString():values.age}
                            keyboardType="numeric"
                        />
                    </View>
                </>
                )}
            </Formik>
        </View>
    )
}

export {FormContact}

const styles = StyleSheet.create({
    label:{
        color: CSColor.black,
        fontSize: CStyles.fontSize.small,
        fontWeight:'normal'
    },
    profile:{
        width:wp(30), 
        height:wp(30),
        borderRadius:50, 
        alignSelf:'center',
        backgroundColor:CSColor.lightGray
    },
})
