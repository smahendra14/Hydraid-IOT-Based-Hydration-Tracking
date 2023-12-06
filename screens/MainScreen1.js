import React, {useEffect, useState} from 'react';
import {Image, View, Text, StyleSheet, ImageBackground, Easing, Animated, TextInput, SafeAreaView, TouchableOpacity, Button} from 'react-native'
import ProgressTracker from '../components/ProgressTracker';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const MainScreen1 = (props) => {

    const bounceValue = new Animated.Value(0);

    useEffect(() => {
      // Create a bouncing animation
      Animated.loop(
        Animated.sequence([
          Animated.timing(bounceValue, { toValue: 10, duration: 2000, easing: Easing.linear, useNativeDriver: false }),
          Animated.timing(bounceValue, { toValue: 0, duration: 2000, easing: Easing.linear, useNativeDriver: false }),
        ]),
      ).start();
    }, [bounceValue]);

    const [hoursRemaining, setHoursRemaining] = useState(null);

    useEffect(() => {
        const calculateHoursRemaining = () => {
        const now = new Date();
        const endOfDay = new Date(now);
        endOfDay.setHours(23, 59, 59, 999); // Set to the last millisecond of the current day

        const millisecondsRemaining = endOfDay - now;
        const hoursRemaining = millisecondsRemaining / (1000 * 60 * 60); // Convert milliseconds to hours

        setHoursRemaining(Math.floor(hoursRemaining)); // Round to two decimal places
        };

        calculateHoursRemaining();
    }, []);

    // calculating water intake goal
    let goal = Math.round(((props.weight * 0.5) + ((props.exerciseAmount/30) * 12 )) * 29.5735) ;

    // change goal when it becomes a new day
    const date = new Date();
    if (date.getHours() === 0) {
        goalRemaining = goal;
    }

    // let sensorDataNumber = props.sensorData;
    // const calibrationNumber = parseInt(props.calibrationConstant, 10); // weight when full
    // let amountDrank = Math.trunc((calibrationNumber - sensorDataNumber));
    let goalLeft = Math.trunc(goal - parseFloat(props.totalAmountDrank));
    let displayNumber = (Math.min(goalLeft, goal)/1000.00).toFixed(2);
    let totalPercentDrank = 1 - (Math.min(goal, goalLeft) / goal);
    const weatherAdjustment = 12;

    return (
        <SafeAreaView style={styles.entire}>
            <ImageBackground
                source={require('../assets/icons/map.png')} 
                style={styles.backgroundImage}
            >
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <Image source={require('../assets/icons/notifbell.png')} />
                </TouchableOpacity>
                <Text style={styles.headerText}>HYDRAID</Text>
                <TouchableOpacity
                    onPress={() => props.setPage('Demographics')}
                >
                    <Image source={require('../assets/icons/PFP.png')}/>
                </TouchableOpacity>
            </View>
            <Animated.View style={[styles.mainContainer, { transform: [{ translateY: bounceValue }] }]}>

                    <View style={[styles.waterIntakeCard, styles.card]}>
                        <View style={styles.cardHeaderContainer}>
                            <Text style={styles.cardHeaderText}>Water Intake</Text>
                        </View>
                        <View style={styles.waterIntakeBodyContainer}>
                            <View style={styles.waterIntakeDisplayContainer}>
                                <AnimatedCircularProgress
                                    size={150}
                                    width={15}
                                    fill={totalPercentDrank * 100}
                                    rotation={270}
                                    tintColor="#0083CC"
                                    backgroundColor="#b6c0cc"
                                >
                                    {
                                      (fill) => (
                                        <Text style={styles.progressText}>
                                          {displayNumber} liters remaining
                                        </Text>
                                      )
                                    }

                                </AnimatedCircularProgress>

                            </View>
                            <View style={styles.waterIntakeIcons}>
                                <View style={styles.waterIntakeIconRow}>
                                    <Image source={require('../assets/icons/target.png')}/>
                                    <Text style={styles.iconLabel}>Base Goal:     {goal} mL.</Text>
                                </View>
                                <View style={styles.waterIntakeIconRow}>
                                    <Image source={require('../assets/icons/timer.png')}/>
                                    <Text style={styles.iconLabel}>Time Left:             {hoursRemaining} hrs.</Text>
                                </View>
                                <View style={styles.waterIntakeIconRow}>
                                    <Image source={require('../assets/icons/sun.png')}/>
                                    <Text style={styles.iconLabel}>Weather Adjustment:    {weatherAdjustment}%</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.progressCard, styles.card]}>
                        <View style={styles.cardHeaderContainer}>
                            <Text style={styles.cardHeaderText}>Progress Tracker</Text>
                        </View>
                        <View style={styles.cardBodyContainer}>
                            <ProgressTracker> </ProgressTracker>
                            <View style={styles.progressTrackerIcons}>
                                <Image source={require('../assets/icons/fire.png')}/>
                                <TouchableOpacity
                                    onPress={() => props.setPage('Calendar')}
                                >
                                    <Image source={require('../assets/icons/calendar.png')}/>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                    <View style={[styles.historyCard, styles.card]}>
                        <View style={styles.cardHeaderContainer}>
                            <Text style={styles.cardHeaderText}>Patterns</Text>
                        </View>
                        <View style={styles.cardBodyContainer}>
                            

                        </View>
                    </View>
            </Animated.View>
            </ImageBackground>
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    entire: {
        flex: 1,
    },
    progressText: {
        color: 'black',
        textAlign: "center",
        fontFamily: "Poppins-SemiBold",

    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', 
    },
    headerText: {
        textAlign: "center",
        fontSize: 30,
        fontFamily: "Lexend-ExtraBold",
        color: "#0083CC",
        marginHorizontal: 40,
    },
    headerContainer: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#D3E6F4",
        alignItems: "center",
    },
    mainContainer: {
        alignItems: "center",
        flex: 5,
        marginVertical: 30,
    },
    cardHeaderContainer: {
        flex: 1,
        marginTop: 15,
        marginLeft: 10,
    },
    cardHeaderText: {
        fontSize: 20,
        color: "#000000",
        fontFamily: "Poppins-SemiBold",
    },
    cardBodyContainer: {
        flex: 3,
    },
    card: {
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
    },
    waterIntakeCard: {
        backgroundColor: "#87D7EC",
        flex: 5,
        width: "80%",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "003366",
    },
    waterIntakeDisplayContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 5,
    },
    waterIntakeIcons: {
        flex: 3,
    },
    waterIntakeBodyContainer: {
        flex: 5,
        flexDirection: "row",
        justifyContent: "center",
    },
    circleBorder: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 8,
        borderColor: 'black',
        alignItems: "center",
        justifyContent: "center",
    },
    circleText: {
        textAlign: "center",
        color: "black",
        fontFamily: "Poppins-SemiBold",
    },
    waterIntakeIconRow: {
        flexDirection: "row",
        marginVertical: 10,
    },
    iconLabel: {
        marginHorizontal: 10,
        fontSize: 11,
        color: "white",
        fontFamily: "Poppins-Regular",
    },
    progressCard: {
        marginTop: 20,
        backgroundColor: "#E1FAFF",
        flex: 3,
        width: "80%",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "003366",
    },
    progressTrackerIcons: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    historyCard: {
        flex: 3,
        backgroundColor: "#E1FAFF",
        marginTop: 20,
        width: "80%",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "003366",
    }
});

export default MainScreen1;