import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Home'
import Aboutscreen from './AbourScreen'
import ProfileScreen from './Profile'
import ExploreScreen from './Explore'

const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:"#009387"
      },
      headerTintColor:"#fff",
      headerTitleStyle:{
        fontWeight:"bold"
      }
    }} >
      <HomeStack.Screen name="Home" options={{
        title:'Overview',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
          backgroundColor="#009387" onPress={()=>navigation.openDrawer()}></Icon.Button>
        )
        }} component={HomeScreen} />
    </HomeStack.Navigator>
  )


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
            component={ProfileScreen}
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


