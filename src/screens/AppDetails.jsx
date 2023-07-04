import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ContactUsScreen from './ContactUsScreen';

const AppDetails = () => {
  return (
    <View style={{ flex: 1 }}>
    <ContactUsScreen />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AppDetails;