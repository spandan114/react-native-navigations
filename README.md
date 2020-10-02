# react-native-navigations
## Install dependency before starting react-native project
+ react-navigation
+ stack-navigator
+ drawer-navigator
+ tab-navigator
+ react-native-vector-icon
+ react-native-paper

## stack navigator
```
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// on press navigate to other screen

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
```
## drawer-navigator
```
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
```
### open & close drawer
```
navigation.openDrawer();
navigation.closeDrawer();
navigation.toggleDrawer();
```
## tab-navigator
```
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```
## Customize Drawer-navigator
```
import DrawerContent from './screens/DrawerContent';

const App = () => {
  return (
    <NavigationContainer>
       <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> }>
        <Drawer.Screen name="Home" component={MainTabScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// DrawerContent.js

 import { DrawerItem,DrawerContentScrollView } from '@react-navigation/drawer';
 
 const DrawerContent = (props) => {
 return (
 <DrawerContentScrollView {...props}>
 <Drawer.Section >
          <DrawerItem 
               icon={({color, size}) => (
                   <Icon 
                    name="home-outline" 
                    color={color}
                    size={size}
                    />
                 )}
               label="Home"
               onPress={() => {props.navigation.navigate("Home")}}
            />
</Drawer.Section>
</DrawerContentScrollView>
)}
```
