import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { CStyles as CS, colors } from '../../res'
import { hp } from '../utils/responsive';

const FloatButton = ({ onPress, style, children, disabled }) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            activeOpacity={0.8}
            style={[styles.button, style]}
            onPress={onPress}>
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: hp(7.2),
        width: hp(7.2),
        borderRadius: hp(8),
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: hp(2.5),
        right: hp(2.5),
        elevation: 3,
        shadowColor: '#777',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    }
})

export { FloatButton }