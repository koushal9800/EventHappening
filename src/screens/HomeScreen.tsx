import React, { useState } from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {BottomTabNavigationProps} from '../navigation/Navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EventType from '../components/EventType';


type eventProps = {
    id:number;
    title:string
}

const eventTypeData :eventProps[] = [
    {
        id:1,
        title:'Entertainment'
    },
    {
        id:2,
        title:'Academic'
    },
    {
        id:3,
        title:'Volunteering'
    },

]

const HomeScreen = ({navigation}: BottomTabNavigationProps<'Home'>) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flex: 3,
          backgroundColor: '#F9F5FD',
          borderBottomLeftRadius: 20,
          borderBottomEndRadius: 20,
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/HappeningLogo.png')}
          resizeMode="contain"
          style={{width: 120, height: 60, alignSelf: 'center'}}
        />
        <View
          style={{
            marginTop: 12,
            marginHorizontal: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="location" color={'#5F6368'} size={20} />
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 16,
                  color: '#7E2CCF',
                  lineHeight: 18,
                }}>
                Kolkata
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 8,
                marginRight: 4,
                marginLeft: 20,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: 'gray',
                }}>
                J1 14 EP, GP Block, Sector V
              </Text>
              <Ionicons
                name="chevron-down-outline"
                color={'#5F6368'}
                size={20}
              />
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#fff',
              width: 40,
              height: 40,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Ionicons name="notifications-sharp" color={'#5F6368'} size={20} />
          </View>
        </View>
      </View>
      <View style={{flex: 9, backgroundColor: 'transparent'}}>

{/* Event Type */}
        <View style={{ flexDirection:'row', justifyContent:'space-around' }} >
            {eventTypeData.map((item,index)=>{
                return(
                    <TouchableOpacity key={item.title} onPress={() => setSelectedIndex(index)}>

                    
                    <EventType 
        isSelected={selectedIndex === index}
        title={item.title} />
        </TouchableOpacity>
                )
            })}
        </View>
        
        
      </View>
    </View>
  );
};

export default HomeScreen;
