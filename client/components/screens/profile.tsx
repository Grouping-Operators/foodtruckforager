import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Title } from 'react-native';
import { normalize } from 'react-native-elements';

export default function Profile({ navigation }) {
  const [profile, setProfile] = useState(true);
  const [getUser, setGetUser] = useState([]);
  const onPress = () => {
    setProfile(!profile);
  };

  const pressHandler = () => {
    navigation.navigate('Profile');
  };

  const styles = StyleSheet.create({
    title: {
      fontSize: 32,
      fontWeight: 'bold',
    },
  });

  if (profile) {
    return (
      <View>
        <Text style={styles.title}> Profile Page </Text>
        <Text>Name: Your Name Here</Text>
        <Text>Image: Image will go here</Text>
        <Button title='Edit Profile' onPress={onPress} />
      </View>
    );
  } else {
    return (
      <View>
        <Text style={styles.title}> Edit Your Profile </Text>

        <Button title='Discard Changes' onPress={onPress} />
      </View>
    );
  }
}
