import React from 'react'
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native'

const ForgotPassword = (props) => {
    return(
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <Text> Forgot Password Page </Text>
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

export default ForgotPassword;
