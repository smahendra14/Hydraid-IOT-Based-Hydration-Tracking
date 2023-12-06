import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';

const Login = (props) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <View style={styles.headingContainer}>
                  <TouchableOpacity
                      style={styles.backButton}
                      onPress={() => props.setPage('HomePage')}>
                      <Text style={styles.backText}> &lt; Back </Text>
                  </TouchableOpacity>
                  <Text style={styles.title}>HYDRAID</Text>
                </View>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Sign up with your email
                    or phone number</Text>
                </View>
                <View style={styles.infoContainer}>
                    <TextInput
                        placeholder="Username"
                        style={styles.inputContainer}
                    >
                    </TextInput>
                    <TextInput
                        placeholder="Password"
                        secureTextEntry
                        style={styles.inputContainer}>
                    </TextInput>
                    <TextInput
                        placeholder="Your mobile number"
                        style={styles.inputContainer}
                        keyboardType="numeric">
                    </TextInput>
                    <View style={styles.disclaimerContainer}>
                        <Image source={require('../assets/icons/checkmark.png')} />
                        <Text style={styles.plainDisclaimerText}>By signing up, you agree to the <Text style={[styles.plainDisclaimerText, styles.coloredDisclaimerText]}>Terms of Service </Text>
                             and <Text style={[styles.plainDisclaimerText, styles.coloredDisclaimerText]}>Privacy Policy </Text>
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={() => props.setPage('HomePage')}>
                        <Text style={styles.loginText}>Sign Up</Text>
                    </TouchableOpacity>
                    <View style={styles.dividerContainer}>
                      <View style={styles.line} />
                      <Text style={styles.orText}>or</Text>
                      <View style={styles.line} />
                    </View>
                </View>
                <View style={styles.socialButtonsContainer}>
                    <TouchableOpacity style={styles.socialButton}>
                        <View style={styles.socialButtonContainer}>
                            <Image source={require('../assets/icons/gmail.png')} />
                            <Text style={styles.socialText}>Sign up with Gmail</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <View style={styles.socialButtonContainer}>
                            <Image source={require('../assets/icons/facebook.png')} />
                            <Text style={styles.socialText}>Sign up with Facebook</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <View style={styles.socialButtonContainer}>
                            <Image source={require('../assets/icons/apple.png')} />
                            <Text style={styles.socialText}>Sign up with Apple</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerContainer}>
                    <Text style={styles.bottomText}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity
                        onPress={() => props.setPage('HomePage')}
                    >
                        <Text style={[styles.bottomText, styles.signInText]}> Sign In</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
};

export default Login;

const styles = StyleSheet.create({
    headingContainer: {
        flexDirection: "row",
        marginVertical: 20,
    },
    backButton: {
            width: "30%",
    },
    backText: {
        color: "black",
        fontSize: 16,
        paddingLeft: 20,
        paddingTop: 5,
        fontFamily: "Poppins-SemiBold",
    },
    title: {
        width: "60%",
        fontSize: 30,
        fontFamily: "Lexend-ExtraBold",
        color: "#0083CC"
    },
    inputContainer: {
        flex: 1,
        paddingLeft: 20,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#B8B8B8",
        marginVertical: 10,
        marginHorizontal: 20,
        fontFamily: "Poppins-Regular",
        justifyContent: "center",
        paddingTop: 15,
        paddingBottom: 10,
    },
    subtitleContainer: {
    },
    subtitle: {
        fontFamily: "Poppins-Regular",
        color: "black",
        fontSize: 24,
        textAlign: "center",
    },
    loginButton: {
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: "#0883CC",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
    },
    loginText: {
        fontFamily: "Poppins-SemiBold",
        color: "white",
        fontSize: 16,
    },
    infoContainer: {
        flex: 1,
        alignItems: "space-evenly",
    },
    plainDisclaimerText: {
        fontFamily: "Poppins-Regular",
        paddingLeft: 10,
        color: "#B8B8B8",
    },
    coloredDisclaimerText: {
        color: "#0083CC",
        fontFamily: "Poppins-SemiBold",
    },
    disclaimerContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
    },
    dividerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      marginHorizontal: 20,
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: '#B8B8B8',
    },
    orText: {
      marginHorizontal: 10,
      color: '#B8B8B8',
      fontWeight: 'bold',
      fontFamily: "Poppins-SemiBold",
    },
    socialButtonsContainer: {
        alignItems: "space-evenly",
    },
    socialButton: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#B8B8B8",
        marginHorizontal: 20,
        marginVertical: 10,
    },
    socialButtonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    socialText: {
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        color: '#5A5A5A',
        padding: 10,
    },
    footerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2,
    },
    bottomText: {
        fontFamily: "Poppins-SemiBold",
        color: '#5A5A5A',
    },
    signInText: {
        color: '#0083CC',
    },
})
