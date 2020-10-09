import React,{useEffect} from 'react';
import {
  View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './screens/MainTabScreen';
import DrawerContent from './screens/DrawerContent';

import RootStackScreen from './screens/RootstackScreen';
import { ActivityIndicator } from 'react-native-paper';
import { AuthContext } from './component/context';
import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();

const App = () => {

  // const [loading,setLoasing] = useState(true)
  // const [token,setToken] = useState(null)

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIVE_TOKEN':
        console.log(action)
        return {
          ...prevState,
          userToken:action.token,
          isLoading:false
        };
      case 'LOGIN':
        return {
          ...prevState,
          userToken:action.token,
          userName:action.id,
          isLoading:false
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userToken:null,
          userName:null,
          isLoading:false
        };
      case 'REGISTER':
        return {
          ...prevState,
          userToken:action.token,
          userName:action.id,
          isLoading:false
        };    
      default:
        break;
    }
  }

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);


  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    }
  }), []);
 

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if(loginState.isLoading){
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {
          loginState.userToken !== null ?
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> }>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          </Drawer.Navigator> 
         : 
          <RootStackScreen/>
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
