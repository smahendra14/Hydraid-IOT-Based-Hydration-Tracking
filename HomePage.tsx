import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const HomePage = (props) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}> drinkmore </Text>
                <View style={styles.inputView}>
                    <TextInput style={styles.username}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        autocorrect={false}
                        placeholder="username"
                        placeholderTextColor="#000AFF59"
                    />
                </View>
                <TouchableOpacity style={styles.button}
                    onPress={() => props.setPage('Demographics')}
                >
                    <Text style={styles.buttonText}> help me reach my hydration goals </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerBottom}>
            </View>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    title: {
        fontFamily: "Inter",
        fontWeight: "bold",
        fontSize: 32,
        color: "#0083CC",
        height: 80,
        textAlign: "center",

    },
    container: {
        flex: 1,
    },
    button: {
        flex: 1,
        backgroundColor: "#000AFF59",
        borderRadius: 45,
        marginHorizontal: 20,
        justifyContent: "center",
    },
    buttonText: {
        fontFamily: "Inter",
        fontSize: 15,
        fontWeight: "800",
        color: "#ddd",
        textAlign: "center",
        height: 50,
    },
    inputView: {
        flex: 1,
        backgroundColor: "#ddd",
        borderRadius: 45,
        justifyContent: "center",
        marginHorizontal: 20,
        marginVertical: 25,
    },
    username: {
        fontFamily: "Inter",
        fontSize: 15,
        fontWeight: "800",
        color: "#000AFF59",
        textAlign: "center",
        height: 50,
    },
    containerBottom: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 30,
    }
});

export default HomePage;