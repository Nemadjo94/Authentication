import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = (props) => {
    return(
        <TouchableOpacity 
          onPress={props.onPress}
          style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        width: '100%',
        height: 50,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        alignItems: 'center'
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aaf',
        fontSize: 16,
        fontWeight: '600',
        paddingVertical: 10,
    }
});

export { Button };