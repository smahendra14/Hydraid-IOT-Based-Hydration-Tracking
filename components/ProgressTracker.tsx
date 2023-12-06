import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressTracker = () => {
  return (
    <View style={styles.container}>
        <View style={styles.day}>
            <Text style={styles.dayText}>S</Text>
        </View>
        <View style={styles.day}>
            <Text style={styles.dayText}>M</Text>
        </View>
        <View style={styles.day}>
            <Text style={styles.dayText}>T</Text>
        </View>
        <View style={styles.day}>
            <Text style={styles.dayText}>W</Text>
        </View>
        <View style={styles.day}>
            <Text style={styles.dayText}>T</Text>
        </View>
        <View style={styles.day}>
            <Text style={styles.dayText}>F</Text>
        </View>
        <View style={styles.day}>
            <Text style={styles.dayText}>S</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
    },
    day: {
        borderWidth: 4,
        borderColor: "black",
        borderRadius: 500,
        width: 32,
        height: 32,
        marginHorizontal: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    dayText: {
        color: "black",
        fontFamily: "Poppins-SemiBold",
        textAlign: "center",
    }
});

export default ProgressTracker;