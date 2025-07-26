
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Привет</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NewScreen;