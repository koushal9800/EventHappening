import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface types {
  title: string;
  isSelected: boolean;
}

const EventType = ({title, isSelected}: types) => {
  return (
    <View
      style={[
        styles.container,
        {borderColor: isSelected ? '#7E2CCF' : '#EEE6F9'},
      ]}>
      <Text
        style={[styles.eventText, {color: isSelected ? '#7E2CCF' : '#3C3C3C'}]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 12,
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
  },
  eventText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
});

export default EventType;
