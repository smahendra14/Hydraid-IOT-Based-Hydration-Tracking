import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const HomePage = (props) => {
    return (
        <SafeAreaView style={styles.entire}>
            <View style={styles.top}>
            </View>
            <View style={styles.container}>
                <Text style={styles.sloganText}>don't wait till it's too late...</Text>
                <Text style={styles.title}> HYDRAID </Text>
                <TouchableOpacity style={styles.signInButton}
                    onPress={() => props.setPage('Demographics')}>
                    <Text style={styles.signInText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.createAccountButton}
                    onPress={() => props.setPage('Login')}>
                    <Text style={styles.createAccountText}>Create Account</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.setPage('Bluetooth')}
                    style={styles.signInButton}
                >
                    <Text style={styles.signInText}>Connect Your Device</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerBottom}>
            </View>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    entire: {
        flex: 1,
        backgroundColor: "#D3E6F4",
    },
    top: {
        flex: 2,
    },
    title: {
        fontFamily: "Lexend-ExtraBold",
        fontSize: 48,
        color: "#0083CC",
        height: 80,
        textAlign: "center",

    },
    sloganText: {
        textAlign: "center",
    },
    container: {
        flex: 3,
        justifyContent: "center",
    },
    signInButton: {
        flex: 1,
        backgroundColor: "#D9D9D9",
        borderRadius: 45,
        margin: 20,
        justifyContent: "center",
    },
    createAccountButton: {
        flex: 1,
        backgroundColor: "#000AFF59",
        borderRadius: 45,
        marginHorizontal: 20,
        justifyContent: "center",
    },
    signInText: {
        fontFamily: "Inter",
        fontSize: 20,
        fontWeight: "800",
        color: "#000AFF59",
        textAlign: "center",
        height: 50,
        marginTop: 25,
    },
    createAccountText: {
        fontFamily: "Inter",
        fontSize: 20,
        fontWeight: "800",
        color: "#ddd",
        textAlign: "center",
        height: 50,
        marginTop: 25,
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