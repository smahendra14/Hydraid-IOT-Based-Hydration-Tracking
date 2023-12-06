import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const YesNoButtonGroup = () => {
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
          styles.yesButton,
          selectedOption === true && styles.selectedButton,
        ]}
        onPress={() => handleSelect(true)}
      >
        <Text style={styles.text}>Y</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.noButton,
          selectedOption === false && styles.selectedButton,
        ]}
        onPress={() => handleSelect(false)}
      >
        <Text>N</Text>
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
  },
  yesButton: {
    backgroundColor: "#87D7EC",
    borderRadius: 45,
    paddingHorizontal: 15,
    paddingVertical: 7,
    marginHorizontal: 5,
  },
  noButton: {
    backgroundColor: "#87D7EC",
    borderRadius: 45,
    paddingHorizontal: 14,
    paddingVertical: 7,
    marginHorizontal: 5,
  },
  selectedButton: {
    backgroundColor: "#0083CC",
  },
});

export default YesNoButtonGroup;