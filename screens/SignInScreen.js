import React,{useState} from 'react'
import { 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput,
  Platform,
  StyleSheet
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from '@react-navigation/native';
import { AuthContext } from '../component/context';
import Users from '../model/user';

const SignInScreen = ({navigation}) => {

  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
});

const {signIn} = React.useContext(AuthContext)


const loginHandler = (userName, password) => {
  const foundUser = Users.filter( item => {
    return userName == item.username && password == item.password;
} )
  signIn(foundUser)
}

  const { colors } = useTheme();

  const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
}

const textInputChange = (val) => {
  if( val.trim().length >= 4 ) {
      setData({
          ...data,
          username: val,
          check_textInputChange: true,
          isValidUser: true
      });
  } else {
      setData({
          ...data,
          username: val,
          check_textInputChange: false,
          isValidUser: false
      });
  }
}

const handlePasswordChange = (val) => {
  if( val.trim().length >= 8 ) {
      setData({
          ...data,
          password: val,
          isValidPassword: true
      });
  } else {
      setData({
          ...data,
          password: val,
          isValidPassword: false
      });
  }
}

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Welcome</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>

     {/* name */}
        <Text style={[styles.text_footer, {
                color: colors.text
            }]}>Username</Text>
       <View style={styles.action}>
          <FontAwesome 
            name="user-o"
            color={colors.text}
            size={20}
          />
        <TextInput 
            placeholder="Your Username"
            placeholderTextColor="#666666"
            style={[styles.textInput, {
                color: colors.text
            }]}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            
        />
       {data.check_textInputChange ? 
            <Animatable.View
              animation="bounceIn"
            >
              <Feather 
                  name="check-circle"
                  color="green"
                  size={20}
              />
           </Animatable.View>
      : null}
      </View>

     {/* password */}
        <Text style={[styles.text_footer, {
             color: colors.text,
             marginTop: 35
         }]}>Password</Text>
         <View style={styles.action}>
             <Feather 
                 name="lock"
                color={colors.text}
                 size={20}
            />
             <TextInput 
                 placeholder="Your Password"
                 placeholderTextColor="#666666"
                 secureTextEntry={data.secureTextEntry ? true : false}
                 style={[styles.textInput, {
                     color: colors.text
                 }]}
                 autoCapitalize="none"
                 onChangeText={(val) => handlePasswordChange(val)}
             />

               <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
         </View>

            <TouchableOpacity>
                <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity>

            <View style={styles.button}>

            <TouchableOpacity
                    style={styles.signIn}
                    onPress={()=> {loginHandler( data.username, data.password )}}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign In</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign Up</Text>
                </TouchableOpacity>

            </View>

         </Animatable.View>
       </View>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: Platform.OS === 'ios' ? 3 : 5,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  },
  textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 20
  },
  color_textPrivate: {
      color: 'grey'
  }
});