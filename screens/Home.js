import React, { useState } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Dimensions
  } from 'react-native';

  import Swiper from 'react-native-swiper'

  import Ionicons from 'react-native-vector-icons/Ionicons';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import Fontisto from 'react-native-vector-icons/Fontisto';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import StarRating from '../component/StarRating';
  import * as Animatable from 'react-native-animatable';

const HomeScreen = ({navigation}) => {

    return (
      
      <ScrollView style={styles.container}>


   <Animatable.View 
   animation="slideInDown"
   style={[styles.Searchcontainer]}>
   <TextInput
      placeholder='Search'
      style={styles.formField}
      placeholderTextColor={'#888888'}
    />
  </Animatable.View>



      {/* Slider start */}
      <View style={styles.sliderContainer}>
        <Swiper horizontal={false} autoplay height={200} activeDotColor="#ff6347" dotColor="#fff">
 
            <View style={styles.slide}>
                <Image 
                  source={{uri:"https://raw.githubusercontent.com/itzpradip/Food-Finder-React-Native-App/master/assets/banners/food-banner1.jpg"}}
                  resizeMode="cover"
                  style={styles.sliderImage}
                  />
              </View>

            <View style={styles.slide}>
                <Image 
                  source={{uri:"https://raw.githubusercontent.com/itzpradip/Food-Finder-React-Native-App/master/assets/banners/food-banner2.jpg"}}
                  resizeMode="cover"
                  style={styles.sliderImage}
                  />
            </View>

            <View style={styles.slide}>
              <Image 
                source={{uri:"https://raw.githubusercontent.com/itzpradip/Food-Finder-React-Native-App/master/assets/banners/food-banner3.jpg"}}
                resizeMode="cover"
                style={styles.sliderImage}
                />
            </View>
         
        </Swiper>
        </View>
      {/* Slider start */}

     {/* wrapper2 */}
      <View style={styles.categoryContainer}>

      <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate('CardListScreen', {title: 'Restaurant'}) }>
          <View style={styles.categoryIcon}>
            <Ionicons name="ios-restaurant" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Restaurant</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => {} }>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons
              name="food-fork-drink"  
              size={35}
              color="#FF6347"
            />
          </View>
          <Text style={styles.categoryBtnTxt}>Fastfood Center</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons name="food" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Snacks Corner</Text>
        </TouchableOpacity>

      </View>
      {/* wrapper1 */}
      <View style={[styles.categoryContainer, {marginTop: 10}]}>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <Fontisto name="hotel" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Hotels</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <Ionicons name="md-restaurant" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Dineouts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <MaterialIcons name="expand-more" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Show More</Text>
        </TouchableOpacity>

      </View>

      {/* cards */}

      <View style={styles.cardsWrapper}>
      <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Recently Viewed
        </Text>

        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={{
                uri:'https://raw.githubusercontent.com/itzpradip/Food-Finder-React-Native-App/master/assets/banners/food-banner1.jpg'
              }}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Place</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={{
                uri:'https://raw.githubusercontent.com/itzpradip/Food-Finder-React-Native-App/master/assets/banners/food-banner1.jpg'
              }}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Place</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text>
          </View>
        </View>
        
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={{
                uri:'https://raw.githubusercontent.com/itzpradip/Food-Finder-React-Native-App/master/assets/banners/food-banner1.jpg'
              }}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Place</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text>
          </View>
        </View>


      </View>

      </ScrollView>
      
    );
  };

  export default HomeScreen;

  const deviceWidth = Dimensions.get('window').width;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    Searchcontainer: {
      // position: 'absolute',
      // top: 50,
      width: deviceWidth - 40,
      left: 20,
      // zIndex: 99,
      // backgroundColor: 'white'
    },
    formField: {
      borderWidth: 1,
      padding: 12,
      paddingLeft: 20,
      paddingRight: 20,
      borderRadius: 20,
      borderColor: '#888888',
      fontSize: 18,
      height: 50
    },
    sliderContainer: {
      height: 200,
      width: '90%',
      marginTop: 10,
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 8,
    },
  
    wrapper: {},
  
    slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent',
      borderRadius: 8,
    },
    sliderImage: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
    },
    categoryContainer: {
      flexDirection: 'row',
      width: '90%',
      alignSelf: 'center',
      marginTop: 25,
      marginBottom: 10,
    },
    categoryBtn: {
      flex: 1,
      width: '30%',
      marginHorizontal: 0,
      alignSelf: 'center',
    },
    categoryIcon: {
      borderWidth: 0,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: 70,
      height: 70,
      backgroundColor: '#fdeae7' /* '#FF6347' */,
      borderRadius: 50,
    },
    categoryBtnTxt: {
      alignSelf: 'center',
      marginTop: 5,
      color: '#de4f35',
    },
    cardsWrapper: {
      marginTop: 20,
      width: '90%',
      alignSelf: 'center',
    },
    card: {
      height: 100,
      marginVertical: 10,
      flexDirection: 'row',
      shadowColor: '#999',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    cardImgWrapper: {
      flex: 1,
    },
    cardImg: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
    },
    cardInfo: {
      flex: 2,
      padding: 10,
      borderColor: '#ccc',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
      backgroundColor: '#fff',
    },
    cardTitle: {
      fontWeight: 'bold',
    },
    cardDetails: {
      fontSize: 12,
      color: '#444',
    },
  });