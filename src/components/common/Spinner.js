import React from 'react';
import { View, ActivityIndicator, StyleSheet} from 'react-native';

const Spinner = ({size}) => {
    const {SpinnerStyle} = styles;

    return(
        <View style={SpinnerStyle}>
            <ActivityIndicator size={size || 'large'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    SpinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export {Spinner};