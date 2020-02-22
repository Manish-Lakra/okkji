import React from 'react';
import { SafeAreaView, View } from 'react-native'
import { colors } from '../../res/colors'

export default SafeAreaCompoment = props => {
    return (
        <>
            <SafeAreaView style={{ backgroundColor: props.color }}>
            </SafeAreaView>
            <View style={{ flex: 1 }}  {...props} />
            <SafeAreaView style={{ backgroundColor: colors.white }}>
            </SafeAreaView>
        </>
    );
}