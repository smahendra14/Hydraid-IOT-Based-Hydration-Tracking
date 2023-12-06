import React, { useState , useEffect } from 'react';
import {ScrollView, View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity} from 'react-native'
import ActivityButtonGroup from '../components/ActivityButtonGroup';
import WeekActivityButtonGroup from '../components/WeekActivityButtonGroup';
import WideYNButton from '../components/WideYNButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Demographics = (props) => {

    // stores amount of exercise in minutes based off what button the user selects for their activity level 
    const [exerciseAmount, setExerciseAmount] = useState(0);

    setValuesAsync = async (gender, weight, location) => {
        try {
            await AsyncStorage.setItem('@gender', props.gender.toString())
            await AsyncStorage.setItem('@weight', props.weight.toString())
            await AsyncStorage.setItem('@location', props.location.toString())
        } catch(e) {
            // save error
        }
    }

    async function storeDataAndNext() {
        await setValuesAsync(props.gender, props.weight, props.location)
        props.setPage('OptionalDemographics')
    }

    return(
        <ScrollView style={styles.entire}>
            <View style={styles.headingContainer}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => props.setPage('HomePage')}
                >
                    <Text style={styles.backText}> &lt; Back </Text>
                </TouchableOpacity>
                <Text style={styles.title}>HYDRAID</Text>
            </View>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Update your required profile: </Text>
            </View>
            <View style={styles.divider}>
            </View>
            <View style={styles.personalDetails}>
                <View style={styles.personalDetailsHeader}>
                    <Text style={styles.sectionHeaderText}>Personal Details </Text>
                </View>
                <View style={styles.personalDetailRow}>
                    <View style={styles.inputLabelContainer}>
                        <Text style={styles.inputLabel}>Gender</Text>
                    </View>
                    <TextInput
                        placeholder="Input Gender*"
                        placeholderTextColor="#767676"
                        style={styles.wideInput}
                        onChangeText={(text) => props.setGender(text)}
                        value={props.gender}
                    >
                    </TextInput>
                </View>
                <View style={styles.personalDetailRow}>
                    <View style={styles.inputLabelContainer}>
                        <Text style={styles.inputLabel}>Weight</Text>
                    </View>
                    <TextInput
                        placeholder="Input Weight*"
                        placeholderTextColor="#767676"
                        keyboardType="numeric"
                        style={styles.wideInput}
                        onChangeText={(text) => props.setWeight(text ? parseInt(text) : 0)}
                        value={props.weight.toString()}>
                    </TextInput>
                </View>

                <View style={styles.personalDetailRow}>
                    <View style={styles.inputLabelContainer}>
                        <Text style={styles.inputLabel}>Location </Text>
                    </View>
                    <TextInput
                        placeholder="Input Location*"
                        placeholderTextColor="#767676"
                        style={styles.wideInput}
                        onChangeText={(text) => props.setLocation(text)}
                        value={props.location}
                    >
                    </TextInput>
                </View>
            </View>
            <View style={styles.divider}>
            </View>
            <View style={styles.activityLevel}>
                <View style={styles.activityLevelHeader}>
                    <Text style={styles.sectionHeaderText}>Activity Level</Text>
                </View>
                <Text style={styles.questionText}>How much physical activity do you get per day? </Text>
                <ActivityButtonGroup exerciseAmount={props.exerciseAmount} setExerciseAmount={props.setExerciseAmount}> </ActivityButtonGroup>
                <Text style={styles.questionText}>How many days are you active in a week?</Text>
                <WeekActivityButtonGroup> </WeekActivityButtonGroup>
                <Text style={styles.questionText}>Are you an athlete, work outside, or in the sun a lot?</Text>
                <WideYNButton> </WideYNButton>
            </View>
            <View style={styles.divider}>
            </View>
            <View style={styles.nextContainer}>
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => storeDataAndNext()}>
                    <Text style={styles.nextButtonText}> Next &gt; </Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    entire: {
        flex: 1,
        backgroundColor: "#D3E6F4",
    },
    headingContainer: {
        flexDirection: "row",
        marginTop: 20,
        marginVertical: 10,
    },
    backButton: {
        width: "30%",
    },
    backText: {
        color: "black",
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
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
    subtitle: {
        textAlign: "center",
        fontSize: 20,
        color: "#3D7692",
        fontFamily: "Poppins-Regular",
    },
    personalDetailsHeader: {
    },
    sectionHeaderText: {
        fontSize: 16,
        color: "#0083CC",
        marginLeft: 10,
        fontFamily: "Poppins-SemiBold",
    },

    personalDetailRow: {
        flexDirection: "row",
    },
    inputLabel: {
        color: "#3D7692",
        marginLeft: 20,
        fontFamily: "Poppins-Regular",
    },
    inputLabelContainer: {
        width: "35%",
        justifyContent: "center",
    },
    genderPicker: {
    },
    wideInput: {
        backgroundColor: "#87D7EC",
        width: "60%",
        textAlign: "center",
        borderRadius: 45,
        marginVertical: 10,
    },
    rightHalfInput: {
        backgroundColor: "#87D7EC",
        width: "28%",
        textAlign: "center",
        borderRadius: 45,
        marginVertical: 10,
        marginLeft: 5,
    },
    leftHalfInput: {
        backgroundColor: "#87D7EC",
        width: "28%",
        textAlign: "center",
        borderRadius: 45,
        marginVertical: 10,
        marginRight: 5,
    },
    questionText: {
        marginLeft: 20,
        fontSize: 13,
        color: "#3D7692",
        fontFamily: "Poppins-Regular",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },
    oneThirdButton: {
        marginHorizontal: 10,
        backgroundColor: "#87D7EC",
        borderRadius: 45,
        width: "29%",
    },
    buttonText: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: "center",
        fontSize: 9,
        textAlign: "center",
        color: "#767676",
        opacity: 0.6,
        fontFamily: "Poppins-Regular",
    },
    placeholderText: {
        fontSize: 11,
        color: "#767676",
        // opacity: 0.6,
    },
    leftButton: {
        backgroundColor: "#87D7EC",
        borderRadius: 45,
        width: "28%",
        marginRight: 10,
    },
    rightButton: {
        backgroundColor: "#87D7EC",
        borderRadius: 45,
        width: "28%",
        marginLeft: 10,
    },
    nextContainer: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    nextButton: {
        backgroundColor: "#0083CC",
        marginRight: 10,
        borderRadius: 45,
        width: "24%",
        paddingVertical: 10,
        justifyContent: "center",
        fontFamily: "Poppins-Regular",
        marginBottom: 10,
    },
    nextButtonText: {
        textAlign: "center",
        color: "#FFFFFF",
    },
    divider: {
        height: 2,
        backgroundColor: "black",
        marginHorizontal: 10,
        borderRadius: 45,
        marginVertical: 8,
    }

})

export default Demographics;