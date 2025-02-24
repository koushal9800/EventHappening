import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { AppProps } from '../navigation/Navigation';


const OnboardingScreen = ({navigation}:AppProps<'Onboarding'>) => {
    // const navigation = useNavigation()
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.headerText}>
          Concept Design of an event discovery app
        </Text>
      </View>
      <View style={{flex: 4, marginHorizontal: 16}}>
        <Text style={styles.noteText}>Note:</Text>
        <View style={styles.subNoteContainer}>
          <View style={styles.radioButton} />
          <Text style={styles.subNoteText}>
            All elements on prototype are not clickable
          </Text>
        </View>
        <View style={styles.subNoteContainer}>
          <View style={styles.radioButton} />
          <Text style={styles.subNoteText}>
            Click anywhere on screen to see hints on clickable elements - it
            will be highlighted in blue.
          </Text>
        </View>
      </View>
      <View style={{flex: 4, alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Go To Prototype</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    width: '50%',
    textAlign: 'center',
  },
  noteText: {fontSize: 18, fontFamily: 'Poppins-Medium'},
  subNoteContainer: {flexDirection: 'row', justifyContent: 'center'},
  radioButton: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#000',
    marginTop: 10,
    marginHorizontal: 12,
    marginLeft: 36,
  },
  subNoteText: {fontSize: 18, fontFamily: 'Poppins-Medium'},
  buttonContainer: {
    borderRadius: 20,
    backgroundColor: '#7E2CCF',
    width: 158,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    padding:4
  },
  buttonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#fff',
    lineHeight:22
  },
});

export default OnboardingScreen;
