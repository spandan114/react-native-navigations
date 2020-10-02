import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    Text
  } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
      <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button 
        title="About"
        onPress={()=> navigation.navigate("About")}
        />
      </View>
      </>
    );
  };

  export default HomeScreen;