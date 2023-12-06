import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ActivityButtonGroup = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = (option) => {
        if (option === 'option1') {
            props.setExerciseAmount(90);
            console.log(props.exerciseAmount);
        } else if (option === 'option2') {
            props.setExerciseAmount(240);
            console.log(props.exerciseAmount);
        } else {
            props.setExerciseAmount(360);
            console.log(props.exerciseAmount);
        }
        setSelectedOption(option === selectedOption ? null : option);

    };



  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          selectedOption === 'option1' && styles.selectedButton
        ]}
        onPress={() => handleOptionPress('option1')}
      >
        <Text style={[
              styles.text,
              selectedOption === 'option1' && styles.selectedText]}>
              Low
        </Text>
        <Text style={[
              styles.subText,
              selectedOption === 'option1' && styles.selectedText,]}>
        (1-2 hrs)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedOption === 'option2' && styles.selectedButton
        ]}
        onPress={() => handleOptionPress('option2')}
      >
        <Text style={[
              styles.text,
              selectedOption === 'option2' && styles.selectedText,]}
              >
            Moderate
        </Text>
        <Text style={[
              styles.subText,
              selectedOption === 'option2' && styles.selectedText]}>
            (3-5 hrs.)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedOption === 'option3' && styles.selectedButton
        ]}
        onPress={() => handleOptionPress('option3')}
      >
        <Text style={[
            styles.text,
            selectedOption === 'option3' && styles.selectedText,
        ]}>High</Text>
        <Text
            style={[
            styles.subText,
            selectedOption === 'option3' && styles.selectedText,]}
        >
            (5+ hrs.)
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

export default ActivityButtonGroup;