import React, { useState } from 'react';
import {ScrollView, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import YesNoButtonGroup from '../components/YesNoButtonGroup';
import GoalsButtonGroup from '../components/GoalsButtonGroup';
import GoalsTwoButtonGroup from '../components/GoalsTwoButtonGroup';

const OptionalDemographics = (props) => {
    return (
        <ScrollView style={styles.entire}>
            <View style={styles.headingContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => props.setPage('Demographics')}>
                    <Text style={styles.backText}> &lt; Back </Text>
                </TouchableOpacity>
                <Text style={styles.title}>HYDRAID</Text>
            </View>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Update your optional profile:</Text>
            </View>
            <View style={styles.divider}>
            </View>
            <View style={styles.disclaimerContainer}>
                <Text style={styles.disclaimerText}>The information on this page is all optional,
                but please answer as many as possible to help us
                give you the best experience! </Text>
            </View>
            <View style={styles.divider}>
            </View>
            <View style={styles.medicalDetails}>
                <View style={styles.medicalDetailsHeader}>
                    <Text style={styles.sectionHeaderText}> Medical Details </Text>
                </View>
            </View>
            <View style={styles.medicalDetailsRow}>
                <View styles={styles.questionLabelContainer}>
                    <Text style={styles.questionLabel}>Do you have a medical issue requiring more water intake?</Text>
                </View>
                <View style={styles.YNButtonContainer}>
                    <YesNoButtonGroup/>
                </View>
            </View>
            <View style={styles.medicalDetailsRow}>
                <View styles={styles.questionLabelContainer}>
                    <Text style={styles.questionLabel}>Are you currently pregnant/breast feeding?</Text>
                </View>
                <View style={styles.YNButtonContainer}>
                    <YesNoButtonGroup/>
                </View>
            </View>
            <View style={styles.medicalDetailsRow}>
                <View styles={styles.questionLabelContainer}>
                    <Text style={styles.questionLabel}>Do you have any skin conditions or acne problem?</Text>
                </View>
                <View style={styles.YNButtonContainer}>
                    <YesNoButtonGroup/>
                </View>
            </View>
            <View style={styles.medicalDetailsRow}>
                <View styles={styles.questionLabelContainer}>
                    <Text style={styles.questionLabel}>Do you have any form of diabetes?</Text>
                </View>
                <View style={styles.YNButtonContainer}>
                    <YesNoButtonGroup/>
                </View>
            </View>
            <View style={styles.medicalDetailsRow}>
                <View styles={styles.questionLabelContainer}>
                    <Text style={styles.questionLabel}>Do you consume creatine? </Text>
                </View>
                <View style={styles.YNButtonContainer}>
                    <YesNoButtonGroup/>
                </View>
            </View>
            <View style={styles.divider}>
            </View>
            <View style={styles.goalsHeader}>
                <Text style={styles.sectionHeaderText}> Goals </Text>
            </View>
            <Text style={styles.questionText}>Do you feel like you currently reach your water goals?</Text>
                <GoalsButtonGroup> </GoalsButtonGroup>
            <Text style={styles.questionText}>What are your ideal water goals per day?</Text>
            <Text style={styles.subQuestionText}>(You can change this anytime.)</Text>
            <GoalsTwoButtonGroup> </GoalsTwoButtonGroup>
            <View style={styles.divider}>
            </View>
            <View style={styles.submitContainer}>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => props.setPage('MainScreen1')}>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    entire: {
        flex: 1,
        backgroundColor: "#D3E6F4",
    },
    headingContainer: {
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 10,
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
    subtitle: {
        textAlign: "center",
        fontSize: 20,
        color: "#3D7692",
        fontFamily: "Poppins-Regular",
    },
    divider: {
        height: 2,
        backgroundColor: "black",
        marginHorizontal: 10,
        borderRadius: 45,
        marginVertical: 8,
    },
    disclaimerContainer: {
    },
    disclaimerText: {
        fontSize: 16,
        color: "#3D7692",
        marginLeft: 15,
        fontFamily: "Poppins-Regular",
    },
    medicalDetailsHeader: {
        marginBottom: 5,
    },
    sectionHeaderText: {
        fontSize: 16,
        color: "#0083CC",
        marginLeft: 5,
        fontFamily: "Poppins-SemiBold",
    },
    YNButtonContainer: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 10,
    },
    YNButton: {
        backgroundColor: "#87D7EC",
        borderRadius: 45,
        paddingHorizontal: 5,
        marginHorizontal: 5,
    },
    selectedYNButton: {
        backgroundColor: "blue",
    },
    medicalDetailsRow: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    questionLabelContainer: {
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
    },
    questionLabel: {
        paddingTop: 15,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 20,
        fontSize: 13,
        width: 275,
        color: "#3D7692",
        fontFamily: "Poppins-Regular"
    },
    buttonText: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: "center",
        fontSize: 10,
        textAlign: "center",
        color: "#767676",
        opacity: 0.6,
    },
    goalsHeader: {
        marginBottom: 5,
    },
    questionText: {
        marginLeft: 15,
        fontSize: 13,
        color: "#3D7692",
        fontFamily: "Poppins-Regular"
    },
    subQuestionText: {
        fontSize: 12,
        marginLeft: 15,
        color: "#3D7692",
        fontFamily: "Poppins-Regular"
    },
    oneThirdButton: {
        marginHorizontal: 10,
        backgroundColor: "#87D7EC",
        borderRadius: 45,
        width: "28%",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },
    leftButton: {
        backgroundColor: "#87D7EC",
        borderRadius: 45,
        width: "40%",
        marginRight: 10,
    },
    rightButton: {
        backgroundColor: "#87D7EC",
        borderRadius: 45,
        width: "40%",
        marginLeft: 10,
    },
    submitContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    submitButton: {
        backgroundColor: "#0083CC",
        marginRight: 10,
        borderRadius: 45,
        width: "70%",
        paddingVertical: 10,
        justifyContent: "center",
        marginBottom: 10,
    },
    submitButtonText: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 20,
    },

})

export default OptionalDemographics;