import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GoalsTwoButtonGroup = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    // If the selected option is already the current one, unselect it
    const newSelectedOption = selectedOption === option ? null : option;
    setSelectedOption(newSelectedOption);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          selectedOption === true && styles.selectedButton,
          selectedOption === false && styles.deselectedButton,
        ]}
        onPress={() => handleSelect(true)}
      >
        <Text style={[
              styles.text,
              selectedOption === false && styles.text,
              selectedOption === true && styles.selectedText,]}>
              Less than recommended
        </Text>

      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedOption === false && styles.selectedButton,
          selectedOption === true && styles.deselectedButton,
        ]}
        onPress={() => handleSelect(false)}
      >
        <Text style={[
              styles.text,
              selectedOption === true && styles.text,
              selectedOption === false && styles.selectedText,]}
              >
            More than recommended
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  text: {
    fontFamily:"Poppins-Regular",
    fontSize: 14,
    textAlign: "center",
  },
  button: {
    flex: 1,
    backgroundColor: "#87D7EC",
    borderRadius: 45,
    paddingHorizontal: 15,
    paddingVertical: 7,
    marginHorizontal: 5,
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "center",
  },
  subText: {
    fontSize: 10,
  },
  deselectedButton: {
//     backgroundColor: "grey",
  },
  selectedText: {
    color: "white",
  },
  selectedButton: {
    backgroundColor: "#0083CC",
    color: "white",
  },
});

export default GoalsTwoButtonGroup;