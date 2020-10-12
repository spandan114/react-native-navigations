import React from 'react'
import {Image, TouchableOpacity, View} from 'react-native'
import {Avatar} from 'react-native-paper'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './Home'
import Aboutscreen from './AbourScreen'
import ProfileScreen from './Profile'
import ExploreScreen from './Explore'
import EditpofileScreen from "./EditpofileScreen";
import CardList from "./CardList";
import CardItemDetails from "./CardItemDetails";

const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeStackScreen = ({navigation}) => {
 return(
  
    <HomeStack.Navigator screenOptions={{

      headerStyle:{
        backgroundColor:"#fff",
        shadowColor:"#fff",//android only
        elevation: 0,       
      },
      headerTintColor:"#333",
      headerTitleStyle:{
        fontWeight:"bold"
      }
    }} >
      <HomeStack.Screen name="Home" options={{
        title:'Home',
        headerLeft: () => (
          <View style={{marginLeft:10}}>
             <Icon.Button name="ios-menu" size={25}
                backgroundColor="#fff"
                color="#333" 
                onPress={()=>navigation.openDrawer()}
              />
          </View>
        ),
        headerRight: () => (
          <View style={{flexDirection:"row",marginRight:10}}>
            <Icon.Button name="ios-search" 
              size={25}
              backgroundColor="#fff"
              color="#333" 
              onPress={()=> {}}
            />
            <TouchableOpacity 
            style={{paddingHorizontal:10,marginTop:5}} 
            onPress={()=>{navigation.navigate('Profile')}}
            >
              <Avatar.Image 
                source={{
                  uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
                }}
                size={30}
              />
            </TouchableOpacity>
         </View>
        )
        }} component={HomeScreen} />

      <HomeStack.Screen name="CardListScreen"
       options={({route})=> ({
         title: route.params.title,
         headerBackTitleVisible: false
       })} 
       component={CardList} />

       <HomeStack.Screen 
        name="CardItemDetails"
        component={CardItemDetails}
        options={({route}) => ({
          // title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#ffffff'
        })}
      />
    </HomeStack.Navigator>
  )}


const AboutStackScreen = ({navigation}) => (
    <AboutStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:"#1f65ff"
      },
      headerTintColor:"#fff",
      headerTitleStyle:{
        fontWeight:"bold"
      }
    }} >
      <AboutStack.Screen name="About" options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
          backgroundColor="#1f65ff" onPress={()=>navigation.openDrawer()}></Icon.Button>
        )}}
        component={Aboutscreen} />
    </AboutStack.Navigator>
  )

const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:"#fff",
        // shadowColor:"#fff", // IOSs
        // elevation:0 // Android
      },
      headerTintColor:"#000",
      headerTitleStyle:{
        fontWeight:"bold"
      }
    }} >
      <ProfileStack.Screen name="profile" options={{
        title:'',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
          backgroundColor="#fff"
          color="#000"
          onPress={()=>navigation.openDrawer()}></Icon.Button>
        ),
        headerRight: () => (
          <FontAwesome.Button name="user-plus" size={22}
          backgroundColor="#fff"
          color="#000"
          onPress={()=>navigation.navigate("EditProfile")}></FontAwesome.Button>
        )
        }} component={ProfileScreen} />

        <ProfileStack.Screen name="EditProfile"
        options={{
          title:"Edit Profile"
        }}
        component={EditpofileScreen}
        />

    </ProfileStack.Navigator>
  )


const MainTabScreen = () => {
    return (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#fff"
          style={{ backgroundColor: 'tomato' }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor: '#009387',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="About"
            component={AboutStackScreen}
            options={{
              tabBarLabel: 'About',
              tabBarColor: '#1f65ff',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-notifications" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarColor: '#694fad',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-person" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
              tabBarLabel: 'Explore',
              tabBarColor: '#d82060',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-aperture" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      );
}
export default MainTabScreen


