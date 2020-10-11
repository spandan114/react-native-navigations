import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView
  } from 'react-native';

  import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
  } from 'react-native-paper';
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
  import Feather from 'react-native-vector-icons/Feather';
  import Share from "react-native-share";

const ProfileScreen = () => {


  const sharewithfriends = () => {

    const options = {
      message:"Download our app",
      //link
      url:'https://awesome.contents.com/'
      //image,pdf or other files
      //url: "file://<file_path>" support only base 64type
    }

    Share.open(options)
    .then((res) => { console.log(res) })
    .catch((err) => { err && console.log(err); });
  }


    return (
      <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection:"row", marginTop:15 }}>
            <Avatar.Image 
              source={{
                uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
              }}
              size={80}
            />
              <View style={{marginLeft:20,marginTop:15,marginBottom:5}}>
                <Title style={styles.title}>spandan joshi</Title>
                <Caption style={styles.caption}>spandan joshi</Caption>
              </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <Icon name="map-marker-radius" color="#777777" size={20}/>
              <Text style={{color:"#777777", marginLeft: 20}}>Kolkata, India</Text>
            </View>
            <View style={styles.row}>
              <Icon name="phone" color="#777777" size={20}/>
              <Text style={{color:"#777777", marginLeft: 20}}>+91-900000009</Text>
            </View>
            <View style={styles.row}>
              <Icon name="email" color="#777777" size={20}/>
              <Text style={{color:"#777777", marginLeft: 20}}>john_doe@email.com</Text>
            </View>
        </View>

        <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>₹140.50</Title>
            <Caption>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>12</Title>
            <Caption>Orders</Caption>
          </View>
        </View>

        <View style={styles.menuWrapper}>
        
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="heart-outline" color="#FF6347" size={25}/>
                <Text style={styles.menuItemText}>Your Favorites</Text>
              </View>
            </TouchableRipple>
             <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="credit-card" color="#FF6347" size={25}/>
                <Text style={styles.menuItemText}>Payment</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {sharewithfriends()}}>
              <View style={styles.menuItem}>
                <Icon name="share-outline" color="#FF6347" size={25}/>
                <Text style={styles.menuItemText}>Tell Your Friends</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="account-check-outline" color="#FF6347" size={25}/>
                <Text style={styles.menuItemText}>Support</Text>
              </View>
            </TouchableRipple>
           <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Feather name="settings" color="#FF6347" size={25}/>
                <Text style={styles.menuItemText}>Settings</Text>
              </View>
            </TouchableRipple>
        </View>

      </SafeAreaView>
      </ScrollView>
    );
  };

  export default ProfileScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
  });