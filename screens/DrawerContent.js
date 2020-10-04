import React,{useState} from 'react'
import {View,StyleSheet} from 'react-native';
  import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
  import { DrawerItem,DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../component/context';

const DrawerContent = (props) => {

    const {signOut} = React.useContext(AuthContext)

    const [darktheme, setDarktheme] = useState(false)
    const toggleTheme = () => {
        setDarktheme(!darktheme)
    }

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
               
                  <View style={styles.userInfoSection}>
                     <Drawer.Section>
                        <View style={{flexDirection:"row",marginTop:15}}>
                            <Avatar.Image
                            source={{
                                uri:"https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                            }}
                            />
                            <View style={{marginLeft: 15,flexDirection:"column"}}>
                                <Title style={styles.title}>Spandan Joshi</Title>
                                <Caption style={styles.caption}>@spandan</Caption>
                            </View>
                        </View>

                    
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph,styles.caption]}>Followers</Paragraph>
                                <Caption style={styles.caption}>80</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph,styles.caption]}>Following</Paragraph>
                                <Caption style={styles.caption}>100</Caption>
                            </View>
                        </View>
                     </Drawer.Section> 
                    </View>
                
                <Drawer.Section style={styles.drawerSection}>
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
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="account-outline" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Profile"
                    onPress={() => {props.navigation.navigate("Profile")}}
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="bookmark-outline" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Bookmark"
                    onPress={() => {props.navigation.navigate("About")}}
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="cellphone-settings" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Setting"
                    onPress={() => {props.navigation.navigate("Explore")}}
                />
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="account-check-outline" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Support"
                    onPress={() => {console.log("presss")}}
                />
                </Drawer.Section>

                <Drawer.Section title="Preference">
                    <TouchableRipple onPress={()=>{toggleTheme()}}>
                        <View style={styles.preference}>
                            <Text>Dark theme</Text>
                            <View pointerEvents="none">
                               <Switch value={darktheme}/>
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>

            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

export default DrawerContent
