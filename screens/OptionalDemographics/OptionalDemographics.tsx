import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity} from 'react-native'

const OptionalDemographics = (props) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.headingContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => props.setPage('Demographics')}>
                    <Text style={styles.backText}> &lt; Back </Text>
                </TouchableOpacity>
                <Text style={styles.title}> HYDRAID </Text>
            </View>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}> Update your accessibility profile: </Text>
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
                    <TouchableOpacity style={styles.YNButton}>
                        <Text style={styles.buttonText}>Y</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.YNButton}>
                        <Text style={styles.buttonText}>N</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.medicalDetailsRow}>
                <View styles={styles.questionLabelContainer}>
                    <Text style={styles.questionLabel}>Are you currently pregnant/breast feeding?</Text>
                </View>
                <View style={styles.YNButtonContainer}>
                    <TouchableOpacity style={styles.YNButton}>
                        <Text style={styles.buttonText}>Y</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.YNButton}>
                        <Text style={styles.buttonText}>N</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.medicalDetailsRow}>
                <View styles={styles.questionLabelContainer}>
                    <Text style={styles.questionLabel}>Do you have any skin conditions or acne problem?</Text>
                </View>
                <View style={styles.YNButtonContainer}>
                    <TouchableOpacity style={styles.YNButton}>
                        <Text style={styles.buttonText}>Y</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.YNButton}>
                        <Text style={styles.buttonText}>N</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.medicalDetailsRow}>
                <View styles={styles.questionLabelContainer}>
                    <Text style={styles.questionLabel}>Do you have any form of diabetes?</Text>
                </View>
                <View style={styles.YNButtonContainer}>
                    <TouchableOpacity style={styles.YNButton}>
                        <Text style={styles.buttonText}>Y</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.YNButton}>
                        <Text style={styles.buttonText}>N</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.medicalDetailsRow}>
                <View styles={styles.questionLabelContainer}>
                    <Text style={styles.questionLabel}>Do you consumer creatine? </Text>
                </View>
                <View style={styles.YNButtonContainer}>
                    <TouchableOpacity style={styles.YNButton}>
                        <Text style={styles.buttonText}>Y</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.YNButton}>
                        <Text style={styles.buttonText}>N</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

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
        color: "#000000",
        marginLeft: 15,
    },
    medicalDetailsHeader: {
        marginBottom: 10,
    },
    sectionHeaderText: {
        fontSize: 16,
        color: "#0083CC",
        marginLeft: 5,
        fontWeight: "bold",
    },
    YNButtonContainer: {
        width: "25%",
        flexDirection: "row",
        marginVertical: 10,
        borderColor: "blue",
        borderWidth: 10,
        flex: 1,
    },
    YNButton: {
    },
    medicalDetailsRow: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: "red",
    },
    questionLabelContainer: {
        flex: 1,
        borderWidth: 10,
        borderColor: "red",
        justifyContent: "center",
    },
    questionLabel: {
        borderWidth: 10,
        borderColor: "red",
        width: "60%",
    },
    buttonText: {
        //test comment
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: "center",
        fontSize: 10,
        textAlign: "center",
        color: "#767676",
        opacity: 0.6,
    },

})

export default OptionalDemographics;