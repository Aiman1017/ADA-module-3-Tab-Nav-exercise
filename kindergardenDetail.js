import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function KindergardenDetail() {
  return (
    <View style={styles.container}>
      <Text>This is kindergarden detail page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});