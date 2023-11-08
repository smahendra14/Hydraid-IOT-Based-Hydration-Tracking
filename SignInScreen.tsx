import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'


const SignInScreen = (props) => {

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text> Sign In Screen Page </Text>
            </View>
            <View style={{flex: 1}}>
                <TouchableOpacity
                    onPress={() => props.setPage('HomePage')}
                >
                    <Text> return home </Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
            </View>

        </SafeAreaView>
    )


}

const styles = StyleSheet.create({
    title: {
    },


})

export default SignInScreen;