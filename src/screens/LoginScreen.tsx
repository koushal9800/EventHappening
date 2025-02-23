import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Login = () => {
  const [text, setText] = React.useState('');
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#fff', '#7E2CCF']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.logoConainer}>
          <Image
            source={require('../assets/HappeningLogo.png')}
            style={{width: 180, height: 85}}
          />
          <Text
            style={styles.titleText}>
            Login now to find whats happening around you
          </Text>
        </View>
        <View style={{flex: 8, alignItems: 'center'}}>
          <View
            style={styles.loginBoxContainer}>
            <Text
              style={styles.loginText}>
              LOGIN
            </Text>

            <View
              style={styles.inputBox}>
              <TextInput
                placeholder="Email address or mobile number"
                style={styles.inputStyle}
              />
              <TextInput
                placeholder="Click on Send OTP"
                style={[styles.inputStyle,{marginTop:24}]}
              />

              <TouchableOpacity
                style={styles.loginButton}>
                <Text
                  style={styles.loginButtonText}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>

            
              <TouchableOpacity style={styles.otpContainer} >
                <Text
                  style={styles.otpText}>
                  Send OTP
                </Text>
              </TouchableOpacity>
            

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={styles.subText}>
                or
              </Text>
              <Text
                style={styles.subText}>
                Sign in with other accounts
              </Text>
            </View>

            <View
              style={styles.socialLoginContainer}>
              <Image
                source={require('../assets/instagram.png')}
                style={{width: 40, height: 40}}
              />
              <Image
                source={require('../assets/facebook.png')}
                style={{width: 40, height: 40, marginLeft: 12}}
              />
              <Image
                source={require('../assets/twitter.png')}
                style={{width: 40, height: 40, marginLeft: 12}}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles= StyleSheet.create({
logoConainer:{flex: 4, justifyContent: 'center', alignItems: 'center'},
titleText:{
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 36,
  },
  loginBoxContainer:{
    width: '90%',
    height: '90%',
    backgroundColor: '#fff',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 15,
  },
  loginText:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 12,
    textDecorationLine: 'underline',
  },
  inputBox:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  inputStyle:{
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    padding: 12,
    borderWidth: 1,
    width: '90%',
    borderRadius: 20,
    backgroundColor: '#FBFBFB',
    borderColor: '#D9D9D9',
    color: '#A3A3A3',
  },
  loginButton:{
    backgroundColor: '#7E2CCF',
    width: '90%',
    marginTop: 24,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  loginButtonText:{
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
  },
  otpContainer:{
    marginTop: 12,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 24,
  },
  otpText:{
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#7E2CCF',
  },
  subText:{
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginTop: 24,
    color: '#A3A3A3',
  },
  socialLoginContainer:{
    marginTop: 24,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  }

})

export default Login;
