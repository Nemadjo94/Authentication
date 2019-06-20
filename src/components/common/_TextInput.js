import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';

const _TextInput = ({ passwordEntry, label, placeholder, value, onChangeText}) => {
    const {ContainerStyle, LabelStyle, TextInputStyle} = styles;

    return(
        <View style={ContainerStyle}>
            <Text style={LabelStyle}>
                {label}
            </Text>
            <TextInput
                placeholder={placeholder}
                style={TextInputStyle}
                value={value}
                onChangeText={onChangeText}
                autoCorrect={false}
                secureTextEntry={passwordEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    TextInputStyle:{
        color: '#000',
        paddingHorizontal: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 0.75,
    },
    LabelStyle:{
        fontSize: 18,
        paddingLeft: 20,
        flex: 0.25
    },
    ContainerStyle:{
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export {_TextInput};