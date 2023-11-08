import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const Demographics = (props) => {
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.headingContainer}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => props.setPage('HomePage')}
                >
                    <Text style={styles.backText}> &lt; Back </Text>
                </TouchableOpacity>
                <Text style={styles.title}> HYDRAID </Text>
            </View>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}> Update your general profile: </Text>
            </View>
            <View style={styles.divider}>
            </View>
            <View style={styles.personalDetails}>
                <View style={styles.personalDetailsHeader}>
                    <Text style={styles.sectionHeaderText}> Personal Details </Text>
                </View>
                <View style={styles.personalDetailRow}>
                    <View style={styles.inputLabelContainer}>
                        <Text style={styles.inputLabel}> Gender </Text>
                    </View>
                    <TextInput
                        placeholder="Input Gender*"
                        placeholderTextColor="#767676"
                        style={styles.wideInput}>
                    </TextInput>
                </View>
                <View style={styles.personalDetailRow}>
                    <View style={styles.inputLabelContainer}>
                        <Text style={styles.inputLabel}> Weight </Text>
                    </View>
                    <TextInput
                        placeholder="Input Weight*"
                        placeholderTextColor="#767676"
                        style={styles.wideInput}>
                    </TextInput>
                </View>
                <View style={styles.personalDetailRow}>
                    <View style={styles.inputLabelContainer}>
                        <Text style={styles.inputLabel}> Height </Text>
                    </View>
                    <TextInput
                        placeholder="Input ft.*"
                        placeholderTextColor="#767676"
                        style={styles.wideInput}>
                    </TextInput>
                    <TextInput>

                    </TextInput>
                </View>
                <View style={styles.personalDetailRow}>
                    <View style={styles.inputLabelContainer}>
                        <Text style={styles.inputLabel}> Age </Text>
                    </View>
                    <TextInput
                        placeholder="Input Age*"
                        placeholderTextColor="#767676"
                        style={styles.wideInput}>
                    </TextInput>
                </View>
                <View style={styles.personalDetailRow}>
                    <View style={styles.inputLabelContainer}>
                        <Text style={styles.inputLabel}> Location </Text>
                    </View>
                    <TextInput
                        placeholder="Input Location*"
                        placeholderTextColor="#767676"
                        style={styles.wideInput}>
                    </TextInput>
                </View>
            </View>
            <View style={styles.divider}>
            </View>
            <View style={styles.activityLevel}>
                <View style={styles.activityLevelHeader}>
                    <Text style={styles.sectionHeaderText}> Activity Level </Text>
                </View>
                <Text style={styles.questionText}>How much physical activity do you get per day? </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.oneThirdButton}>
                        <Text style={styles.buttonText}>Low (1-2 hrs.)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.oneThirdButton}>
                        <Text style={styles.buttonText}>Moderate (3-5 hrs.)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.oneThirdButton}>
                        <Text style={styles.buttonText}>High (5+ hrs.)</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.questionText}>How many days are you active in a week?</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.oneThirdButton}>
                        <Text style={styles.buttonText}>1-2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.oneThirdButton}>
                        <Text style={styles.buttonText}>3-5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.oneThirdButton}>
                        <Text style={styles.buttonText}>6-7</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.questionText}>Are you an athlete, work outside, or in the sun a lot?</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.leftButton}>
                        <Text style={styles.buttonText}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rightButton}>
                        <Text style={styles.buttonText}>No</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.divider}>
            </View>
            <View style={styles.nextContainer}>
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => props.setPage('OptionalDemographics')}>
                    <Text style={styles.nextButtonText}> Next &gt; </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headingContainer: {
        flexDirection: "row",
        marginTop: 20,
    },
    backButton: {
        width: "40%",
    },
    backText: {
        color: "black",
        fontSize: 16,
        paddingLeft: 20,
        paddingTop: 5,
    },
    title: {
        width: "60%",
        fontSize: 24,
        fontWeight: "bold",
    },
    subtitle: {
        textAlign: "center",
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
    },
    personalDetailsHeader: {
        marginBottom: 10,
    },
    sectionHeaderText: {
        fontSize: 16,
        color: "#0083CC",
        marginLeft: 5,
        fontWeight: "bold",
    },
    personalDetailRow: {
        flexDirection: "row",
    },
    inputLabel: {
        color: "black",
        marginLeft: 15,
        fontWeight: "bold",
    },
    inputLabelContainer: {
        width: "35%",
        justifyContent: "center",

    },
    wideInput: {
        backgroundColor: "#87D7EC",
        width: "60%",
        textAlign: "center",
        borderRadius: 45,
        marginVertical: 10,
    },
    questionText: {
        marginLeft: 15,
        fontSize: 13,
        color: "black",
        fontWeight: "bold",
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
        width: "28%",
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


