import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calendar = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDays, setSelectedDays] = useState([]);

  const renderCalendar = () => {
    // Get the first day of the month
    const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    // Get the last day of the month
    const lastDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
    // Calculate the number of days in the month
    const daysInMonth = lastDayOfMonth.getDate();

    // Create an array of day numbers for the month
    const monthDays = Array.from({ length: daysInMonth }, (_, index) => index + 1);

    // Create an array to store the calendar rows
    let calendarRows = [];
    let currentWeek = [];

    // Add empty cells for the days before the first day of the month
    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
      currentWeek.push(null);
    }

    // Populate the calendar with day numbers
    for (let day of monthDays) {
      currentWeek.push(day);

      // Start a new row if we reach the end of the week
      if (currentWeek.length === 7) {
        calendarRows.push(currentWeek);
        currentWeek = [];
      }
    }

    // Add empty cells for the days after the last day of the month
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }

    calendarRows.push(currentWeek);

    return calendarRows.map((week, rowIndex) => (
      <View key={rowIndex} style={styles.weekContainer}>
        {week.map((day, dayIndex) => (
          <TouchableOpacity
            key={dayIndex}
            style={[
              styles.dayContainer,
              {
                backgroundColor: selectedDays.includes(day) ? '#10b51e' : day ? '#ffffff' : 'transparent',
              },
            ]}
            onPress={() => handleDayPress(day)}
          >
            {day && <Text style={styles.dayText}>{day}</Text>}
          </TouchableOpacity>
        ))}
      </View>
    ));
  };

  const handleDayPress = (day) => {
    if (day) {
      // Toggle the selected state of the day
      const updatedSelectedDays = selectedDays.includes(day)
        ? selectedDays.filter((selectedDay) => selectedDay !== day)
        : [...selectedDays, day];

      setSelectedDays(updatedSelectedDays);

      // Handle additional actions if needed
      console.log(`Day ${day} pressed`);
    }
  };

  const navigateToPreviousMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
    setSelectedDays([]); // Reset selected days when navigating to a new month
  };

  const navigateToNextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
    setSelectedDays([]); // Reset selected days when navigating to a new month
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToPreviousMonth}>
          <Text style={styles.text}>Previous</Text>
        </TouchableOpacity>
        <Text style={styles.monthText}>{`${selectedDate.toLocaleString('default', {
          month: 'long',
        })} ${selectedDate.getFullYear()}`}</Text>
        <TouchableOpacity onPress={navigateToNextMonth}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
      {renderCalendar()}
      <TouchableOpacity
        onPress={() => props.setPage('MainScreen1')}
        style={styles.homeButton}
      >
        <Text style={styles.text}> Return to main page </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  dayContainer: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dayText: {
    fontSize: 16,
  },
  monthText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    color: "black",
  },
  text: {
    fontFamily: "Poppins-SemiBold",
    color: "black",
  },
  homeButton: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    backgroundColor: "#E1FAFF",
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "black",
  },
});

export default Calendar;
