import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    Text
  } from 'react-native';

const Aboutscreen = ({navigation}) => {
    return (
      <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
        <Button 
        title="Home"
        onPress={()=> navigation.navigate("Home")}
        />
        <Button 
        title="go to About screen again..."
        onPress={()=> navigation.push("About")}
        />
        <Button 
        title="Go back"
        onPress={()=> navigation.goBack()}
        />
        <Button 
        title="go to the home screen.."
        onPress={()=> navigation.popToTop()}
        />
      </View>
      </>
    );
  };

  export default Aboutscreen;