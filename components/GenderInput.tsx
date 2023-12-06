import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const GenderInput = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');

  const genders = ['Male', 'Female', 'Other'];

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setDropdownVisible(!isDropdownVisible)}
        style={styles.touchableOpacity}
      >
        <Text>{selectedGender || 'Select Gender'}</Text>
      </TouchableOpacity>



      {isDropdownVisible && (
        <FlatList
          data={genders}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => handleGenderSelect(item)}
            >
              <Text style={styles.dropdownText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  touchableOpacity: {
    width: 235,
    height: 50,
    borderRadius: 45,
    backgroundColor: "#87D7EC",
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: "center",
  },
  dropdownItem: {
    width: 200,
    height: 50,
    backgroundColor: "#87D7EC",
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 2,
    justifyContent: 'center',
  },
  dropdownText: {
    fontSize: 16,
    color: 'white',
    textAlign: "center",
  },
});

export default GenderInput;
