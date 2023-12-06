import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ThreeButtonGroup = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.option, selectedOption === 'option1' && styles.selectedOption]}
        onPress={() => handleOptionPress('option1')}
      >
        <Text>Option 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, selectedOption === 'option2' && styles.selectedOption]}
        onPress={() => handleOptionPress('option2')}
      >
        <Text>Option 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, selectedOption === 'option3' && styles.selectedOption]}
        onPress={() => handleOptionPress('option3')}
      >
        <Text>Option 3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  option: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: 'lightblue',
  },
});

export default ThreeButtonGroup;
