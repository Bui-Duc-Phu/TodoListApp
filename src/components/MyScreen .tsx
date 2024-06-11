import React from 'react';
import { Platform, StyleSheet, TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const MyScreen = () => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollViewContent}
      extraScrollHeight={Platform.OS === 'android' ? 20 : 10} // Adjust this value if needed
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter text"
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  inputContainer: {
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
});

export default MyScreen;
